import { PartialMessage } from "@bufbuild/protobuf";
import { Application, ReaderContext, WriterContext } from "@reboot-dev/reboot";
import { FailedPrecondition, InvalidArgument } from "@reboot-dev/reboot-api/errors_pb.js";
import { Node, Schema } from "prosemirror-model";
import { Step } from "prosemirror-transform"
import {
  ApplyRequest,
  ApplyResponse,
  Doc,
  CreateRequest,
  CreateResponse,
  StepsRequest,
  StepsResponse
} from "../../api/docs/v1/docs_rbt.js";
import { SCHEMA, INITIAL_DOC, DOC_ID } from "../../constants.js";


export class DocServicer extends Doc.Interface {

  #docs: { [key: string]: [number, Node] };

  constructor() {
    super();
    this.#docs = {};
  }

  private doc(stateId: string, state: Doc.State) {
    // Hydrate the doc or return an already hydrated doc if there are
    // no outstanding steps in the latest `state` that need to be
    // hydrated.
    //
    // TODO: do something better than `INITIAL_DOC`?
    let [version, doc] = stateId in this.#docs
      ? this.#docs[stateId]
      : [0, INITIAL_DOC];

    if (version < state.steps.length) {
      const steps = state.steps.slice(version).map(
        ({ json }) => Step.fromJSON(SCHEMA, JSON.parse(json))
      );

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
    state: Doc.State,
    request: CreateRequest
  ): Promise<PartialMessage<CreateResponse>> {
    // TODO: get the hydrated doc and return it as JSON
    // so that we don't need to start from `INITIAL_DOC`
    // in the frontend?
    return {};
  }

  async apply(
    context: WriterContext,
    state: Doc.State,
    request: ApplyRequest
  ): Promise<PartialMessage<ApplyResponse>> {
    if (request.version != state.steps.length) {
      throw new Doc.ApplyAborted(new FailedPrecondition());
    }

    // Validate that we can apply these steps!
    //
    // TODO: emperical results show that if we could
    // not in fact apply the steps we'll raise an error
    // and thus not persist any updates to `state`,
    // however, it would be great to propagate an error
    // that captures that explicitly.
    let doc = this.doc(context.stateId, state);

    const steps = request.steps.map(
      ({ json }) => Step.fromJSON(SCHEMA, JSON.parse(json))
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

    state.steps = [...state.steps, ...request.steps];

    return {};
  }

  async steps(
    context: ReaderContext,
    state: Doc.State,
    { sinceVersion }: StepsRequest
  ): Promise<PartialMessage<StepsResponse>> {
    if (sinceVersion > state.steps.length) {
      throw new Doc.StepsAborted(new InvalidArgument());
    }
    
    return { version: sinceVersion, steps: state.steps.slice(sinceVersion) };
  }
}

const initialize = async (context) => {
  await Doc.construct({ id: DOC_ID }).idempotently().create(context);
};

new Application({ servicers: [DocServicer], initialize }).run();
