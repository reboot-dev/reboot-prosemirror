import { PartialMessage, Struct } from "@bufbuild/protobuf";
import {
  ApplyRequest,
  ApplyResponse,
  Authority,
  ChangesRequest,
  ChangesResponse,
  CreateRequest,
  CreateResponse,
} from "@monorepo/api/rbt/thirdparty/prosemirror/v1/authority_rbt";
import { DOC_ID, INITIAL_DOC, SCHEMA } from "@monorepo/common/constants";
import {
  Application,
  ReaderContext,
  WriterContext,
  allow,
} from "@reboot-dev/reboot";
import { errors_pb } from "@reboot-dev/reboot-api";
import { Node } from "prosemirror-model";
import { Step } from "prosemirror-transform";

export class AuthorityServicer extends Authority.Servicer {
  #docs: { [key: string]: [number, Node] };

  constructor() {
    super();
    this.#docs = {};
  }

  authorizer() {
    return allow();
  }

  private doc(stateId: string, state: Authority.State) {
    // Hydrate the doc or return an already hydrated doc if there are
    // no outstanding changes in the latest `state` that need to be
    // hydrated.
    //
    // TODO: do something better than `INITIAL_DOC`?
    let [version, doc] =
      stateId in this.#docs ? this.#docs[stateId] : [0, INITIAL_DOC];

    if (version < state.changes.length) {
      const steps = state.changes
        .slice(version)
        .map(({ step }) => Step.fromJSON(SCHEMA, step.toJson()));

      for (const step of steps) {
        doc = step.apply(doc).doc;
        version++;
      }

      this.#docs[stateId] = [version, doc];
    }

    return doc;
  }

  async create(
    context: WriterContext,
    state: Authority.State,
    request: CreateRequest
  ): Promise<PartialMessage<CreateResponse>> {
    return {
      doc: Struct.fromJson(this.doc(context.stateId, state).toJSON()),
      version: state.changes.length,
    };
  }

  async apply(
    context: WriterContext,
    state: Authority.State,
    request: ApplyRequest
  ): Promise<PartialMessage<ApplyResponse>> {
    if (request.version != state.changes.length) {
      throw new Authority.ApplyAborted(new errors_pb.FailedPrecondition());
    }

    // Validate that we can apply these changes!
    //
    // TODO: emperical results show that if we could
    // not in fact apply the changes we'll raise an error
    // and thus not persist any updates to `state`,
    // however, it would be great to propagate an error
    // that captures that explicitly.
    let doc = this.doc(context.stateId, state);

    const steps = request.changes.map(({ step }) =>
      Step.fromJSON(SCHEMA, step.toJson())
    );

    for (const step of steps) {
      // TODO: assuming that this will throw if the step can't be
      // applied due to the schema.
      doc = step.apply(doc).doc;
    }

    // NOTE: we don't save `doc` in `this.#docs` as that is a
    // side-effect; instead `this.doc(...)` will correctly
    // return a hydrated doc based on the latest `state` when
    // ever we need it.

    state.changes = [...state.changes, ...request.changes];

    return {};
  }

  async changes(
    context: ReaderContext,
    state: Authority.State,
    { sinceVersion }: ChangesRequest
  ): Promise<PartialMessage<ChangesResponse>> {
    if (sinceVersion > state.changes.length) {
      throw new Authority.ChangesAborted(new errors_pb.InvalidArgument());
    }

    return {
      version: sinceVersion,
      changes: state.changes.slice(sinceVersion),
    };
  }
}

const initialize = async (context) => {
  // Ensure the doc has been constructed implicitly.
  await Authority.ref(DOC_ID).idempotently().create(context);
};

new Application({ servicers: [AuthorityServicer], initialize }).run();
