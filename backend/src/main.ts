import { PartialMessage, Struct } from "@bufbuild/protobuf";
import {
  ApplyRequest,
  ApplyResponse,
  Authority,
  Change,
  ChangesRequest,
  ChangesResponse,
  CheckpointRequest,
  CheckpointResponse,
  CreateRequest,
  CreateResponse,
} from "@monorepo/api/rbt/thirdparty/prosemirror/v1/authority_rbt";
import {
  Checkpoint,
  LatestRequest,
  LatestResponse,
  UpdateRequest,
  UpdateResponse,
} from "@monorepo/api/rbt/thirdparty/prosemirror/v1/checkpoint_rbt";
import { DOC_ID, INITIAL_DOC, SCHEMA } from "@monorepo/common/constants";
import {
  Application,
  ReaderContext,
  WriterContext,
  TransactionContext,
  WorkflowContext,
  allow,
  until,
} from "@reboot-dev/reboot";
import { assert, errors_pb } from "@reboot-dev/reboot-api";
import sortedMap, { SortedMap } from "@reboot-dev/reboot-std/collections/v1/sorted_map";
import { Node } from "prosemirror-model";
import { Step } from "prosemirror-transform";
import { z } from "zod/v4";

export class CheckpointServicer extends Checkpoint.Servicer {
  authorizer() {
    return allow();
  }

  async latest(
    context: ReaderContext,
    request: LatestRequest
  ): Promise<PartialMessage<LatestResponse>> {
    return {
      doc: this.state.doc,
      version: this.state.version,
    };
  }

  async update(
    context: WriterContext,
    request: UpdateRequest
  ): Promise<PartialMessage<UpdateResponse>> {
    let doc = this.state.doc
      ? Node.fromJSON(SCHEMA, this.state.doc.toJson())
      : INITIAL_DOC;

    for (const { step } of request.changes) {
      doc = Step.fromJSON(SCHEMA, step.toJson()).apply(doc).doc;
    }

    this.state.doc = Struct.fromJson(doc.toJSON());
    this.state.version += request.changes.length;

    return {};
  }
}

export class AuthorityServicer extends Authority.Servicer {
  #cache?: { version: number; doc: Node };

  authorizer() {
    return allow();
  }

  private async cache(
    context: ReaderContext | WriterContext | TransactionContext
  ) {
    // If we don't have a cached doc or we recently took a checkpoint
    // and the doc is now out of date, fetch the latest.
    if (!this.#cache || this.#cache.version < this.state.version) {
      const { doc, version } = await this.#checkpoint.latest(context);
      this.#cache = { version, doc: Node.fromJSON(SCHEMA, doc.toJson()) };
    }

    // Hydrate the doc or return an already hydrated doc if there are
    // no outstanding changes in the latest `state` that need to be
    // hydrated.
    let { version, doc } = this.#cache;

    // Invariant is that `version` should never be less than
    // `this.state.version` because we should have always fetched the
    // latest above.
    assert(version >= this.state.version);

    if (version >= this.state.version) {
      // We need to apply (some) changes to the doc.
      const changes = this.state.changes.slice(version - this.state.version);

      for (const { step } of changes) {
        doc = Step.fromJSON(SCHEMA, step.toJson()).apply(doc).doc;
        version++;
      }

      this.#cache = { version, doc };
    }

    return this.#cache;
  }

  async create(
    context: TransactionContext,
    request: CreateRequest
  ): Promise<PartialMessage<CreateResponse>> {
    // Call `update()` without any changes to ensure the checkpoint
    // has been created so we can safely call `latest()`.
    await this.#checkpoint.update(context);

    const { version, doc } = await this.cache(context);

    return {
      doc: Struct.fromJson(doc.toJSON()),
      version,
    };
  }

  async apply(
    context: WriterContext,
    request: ApplyRequest
  ): Promise<PartialMessage<ApplyResponse>> {
    if (request.version != this.state.version + this.state.changes.length) {
      throw new Authority.ApplyAborted(new errors_pb.FailedPrecondition());
    }

    // Validate that we can apply these changes!
    let { version, doc } = await this.cache(context);

    // If this is the first change we're applying, also schedule
    // the `checkpoint` workflow.
    if (version == 0) {
      await this.ref().schedule().checkpoint(context);
    }

    for (const { step } of request.changes) {
      // If a step can not be `apply`ed it will throw.
      doc = Step.fromJSON(SCHEMA, step.toJson()).apply(doc).doc;
    }

    // NOTE: we don't save `doc` in `this.#cache` as that is a
    // side-effect; instead `this.cache()` will correctly
    // return a hydrated doc based on the latest `state` when
    // ever we need it.

    this.state.changes = [...this.state.changes, ...request.changes];

    return {};
  }

  async changes(
    context: ReaderContext,
    { sinceVersion }: ChangesRequest
  ): Promise<PartialMessage<ChangesResponse>> {
    // If the caller asks for a version less than what we have as part
    // of this state, go out to the `SortedMap` and get what they need.
    if (sinceVersion < this.state.version) {
      // TODO: support just sending the current doc if the number of
      // changes they need is greater than some value, e.g., 1000.
      const { entries } = await this.#changes.range(context, {
        startKey: sinceVersion.toString(),
        limit: this.state.version - sinceVersion,
      });

      const changes = entries.map(({ value }) => Change.fromBinary(value));

      return {
        version: sinceVersion,
        changes: [...changes, ...this.state.changes],
      };
    }

    if (sinceVersion > this.state.version + this.state.changes.length) {
      throw new Authority.ChangesAborted(new errors_pb.InvalidArgument());
    }

    return {
      version: sinceVersion,
      changes: this.state.changes.slice(sinceVersion - this.state.version),
    };
  }

  async checkpoint(
    context: WorkflowContext,
    request: CheckpointRequest
  ): Promise<PartialMessage<CheckpointResponse>> {
    // Schema for validating result of `until` below.
    const Changes = z.array(
      z.json().transform((change) => Change.fromJson(change))
    );

    // Control loop which checkpoints after accumulating 100 changes.
    for await (const iteration of context.loop("checkpoint")) {
      let { changes, version } = await until(
        `At least 100 changes accumulated`,
        context,
        async () => {
          const { changes, version } = await this.ref().read(context);
          return (
            changes.length >= 100 && {
              changes: changes.map((change) => change.toJson()),
              version,
            }
          );
        },
        { schema: z.object({ changes: Changes, version: z.number() }) }
      );

      // 1. Save the changes out to a `SortedMap` so that we can
      // still send just steps to clients that are behind.
      //
      // TODO: replace with `OrderedMap` which has better API.
      const entries = {};
      for (const change of changes) {
        entries[version.toString()] = change.toBinary();
        version += 1;
      }
      await this.#changes.insert(context, { entries });

      // 2. Apply the steps to the checkpoint. We need to do this
      // before 3. so that if we get rebooted before 3. we'll just fetch
      // the latest checkpoint and apply only the relevant changes (if
      // any) from `state.changes`. Alternatively we could update
      // `state` and update the checkpoint in a transaction.
      await this.#checkpoint.update(context, { changes });

      // 3. Truncate the changes and update the version.
      await this.ref().write(context, async (state) => {
        state.changes = state.changes.slice(changes.length);
        state.version += changes.length;
      });
    }

    return {};
  }

  get #checkpoint() {
    // Using relative naming here, `Checkpoint` instance has same name
    // as this instance of `Authority`.
    return Checkpoint.ref(this.ref().stateId);
  }

  get #changes() {
    // Using relative naming here, `SortedMap` instance has same name
    // as this instance of `Authority`.
    return SortedMap.ref(this.ref().stateId);
  }
}

const initialize = async (context) => {
  // Ensure the doc has been constructed implicitly.
  await Authority.ref(DOC_ID).create(context);
};

new Application({
  servicers: [AuthorityServicer, CheckpointServicer, ...sortedMap.servicers()],
  initialize,
}).run();
