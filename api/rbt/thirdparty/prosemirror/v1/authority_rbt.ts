/* eslint-disable */
// @ts-nocheck

import { reboot_native, createError } from "@reboot-dev/reboot";


import {
  Value, 
  Struct, 
  ListValue
} from "@bufbuild/protobuf";
import {
  Change,
  CreateRequest,
  CreateResponse,
  ApplyRequest,
  ApplyResponse,
  ChangesRequest,
  ChangesResponse,
} from "./authority_pb.js";

// Additionally re-export all messages_and_enums from the pb module.
export {
  Change,
  CreateRequest,
  CreateResponse,
  ApplyRequest,
  ApplyResponse,
  ChangesRequest,
  ChangesResponse,
};

import {
  Authority as AuthorityProto,
} from "./authority_pb.js";

import * as uuid from "uuid";

import * as reboot from "@reboot-dev/reboot";
import {
  Context,
  ExternalContext,
  WorkflowContext,
  ReaderContext,
  WriterContext,
  TransactionContext,
} from "@reboot-dev/reboot";
import * as protobuf_es from "@bufbuild/protobuf";
import * as reboot_api from "@reboot-dev/reboot-api";


// To support writers seeing partial updates of transactions,
// and transactions seeing updates from writers, we need to store
// a reference to the latest state in an ongoing transaction.
//
// Moreover, we need to update that _reference_ after each writer
// executes within a transaction. We do that in the generated
// code, see below.
const ongoingTransactionStates: { [id: string] : any; } = {};

const ERROR_TYPES = [
  // TODO(benh): don't copy these errors everywhere.
  //
  // gRPC errors.
  reboot_api.errors_pb.Cancelled,
  reboot_api.errors_pb.Unknown,
  reboot_api.errors_pb.InvalidArgument,
  reboot_api.errors_pb.DeadlineExceeded,
  reboot_api.errors_pb.NotFound,
  reboot_api.errors_pb.AlreadyExists,
  reboot_api.errors_pb.PermissionDenied,
  reboot_api.errors_pb.ResourceExhausted,
  reboot_api.errors_pb.FailedPrecondition,
  reboot_api.errors_pb.Aborted,
  reboot_api.errors_pb.OutOfRange,
  reboot_api.errors_pb.Unimplemented,
  reboot_api.errors_pb.Internal,
  reboot_api.errors_pb.Unavailable,
  reboot_api.errors_pb.DataLoss,
  reboot_api.errors_pb.Unauthenticated,
  // Reboot errors.
  //
  // NOTE: also add any new errors into `rbt/v1alpha1/index.ts`.
  reboot_api.errors_pb.StateAlreadyConstructed,
  reboot_api.errors_pb.StateNotConstructed,
  reboot_api.errors_pb.TransactionParticipantFailedToPrepare,
  reboot_api.errors_pb.TransactionParticipantFailedToCommit,
  reboot_api.errors_pb.UnknownService,
  reboot_api.errors_pb.UnknownTask,
] as const; // Need `as const` to ensure TypeScript infers this as a tuple!


type AuthorityRequestTypes =
        CreateRequest
        | ApplyRequest
        | ChangesRequest
;

const AUTHORITY_CREATE_ERROR_TYPES = [
  ...ERROR_TYPES,
  // Method errors.
] as const; // Need `as const` to ensure TypeScript infers this as a tuple!

type AuthorityCreateAbortedError =
  reboot_api.InstanceTypeForErrorTypes<
    typeof AUTHORITY_CREATE_ERROR_TYPES
  >[number];

const AUTHORITY_APPLY_ERROR_TYPES = [
  ...ERROR_TYPES,
  // Method errors.
] as const; // Need `as const` to ensure TypeScript infers this as a tuple!

type AuthorityApplyAbortedError =
  reboot_api.InstanceTypeForErrorTypes<
    typeof AUTHORITY_APPLY_ERROR_TYPES
  >[number];

const AUTHORITY_CHANGES_ERROR_TYPES = [
  ...ERROR_TYPES,
  // Method errors.
] as const; // Need `as const` to ensure TypeScript infers this as a tuple!

type AuthorityChangesAbortedError =
  reboot_api.InstanceTypeForErrorTypes<
    typeof AUTHORITY_CHANGES_ERROR_TYPES
  >[number];



export abstract class AuthorityServicer extends reboot.Servicer<Authority.State> {
  static __rbtModule__ = "rbt.thirdparty.prosemirror.v1.authority_rbt";
  static __servicerNodeAdaptor__ = "AuthorityServicerNodeAdaptor";

  // External reference to the native `Servicer`.
  #external?: any | undefined;

  protected lookup(
    options?: { bearerToken?: string }
  ) {
    const context = reboot.getContext();
    return new Authority.WeakReference(context.stateId, options?.bearerToken);
  }

  abstract create(
    context: WriterContext,
    state: Authority.State,
    request: CreateRequest,
  ): Promise<
  CreateResponse | protobuf_es.PartialMessage<CreateResponse>
  >;

  async _Create(
    context: WriterContext,
    jsonState: string,
    jsonRequest: string
  ): Promise<string> {
    try {
      let state = Authority.State.fromJsonString(
        jsonState
      );
      if (context.stateId in ongoingTransactionStates) {
        state = ongoingTransactionStates[context.stateId].clone();
      }
      const response = await reboot.runWithContext(context, () => {
        return this.create(
          context,
          state,
          CreateRequest.fromJsonString(jsonRequest)
        );
      });
      // TODO: it's premature to overwrite the state now given that the
      // writer might still "fail" and an error will get propagated back
      // to the ongoing transaction which will still see the effects of
      // this writer. What we should be doing instead is creating a
      // callback API that we invoke only after a writer completes
      // that lets us update the state _reference_ then.
      if (context.stateId in ongoingTransactionStates) {
        ongoingTransactionStates[context.stateId].copyFrom(state);
      }
      return JSON.stringify({
        effects: new Authority.CreateEffects({ state, response })
      });
    } catch (e) {
      if (e instanceof reboot_api.Aborted) {
        return JSON.stringify({
          status: e.toStatus()
        });
      }

      const error = createError(e);

      console.warn(
        `Unhandled (in 'rbt.thirdparty.prosemirror.v1.Authority.create') ${error.message}; propagating as 'Unknown'\n${error.stack}`
      );

      throw error;
    }
  }

  abstract apply(
    context: WriterContext,
    state: Authority.State,
    request: ApplyRequest,
  ): Promise<
  ApplyResponse | protobuf_es.PartialMessage<ApplyResponse>
  >;

  async _Apply(
    context: WriterContext,
    jsonState: string,
    jsonRequest: string
  ): Promise<string> {
    try {
      let state = Authority.State.fromJsonString(
        jsonState
      );
      if (context.stateId in ongoingTransactionStates) {
        state = ongoingTransactionStates[context.stateId].clone();
      }
      const response = await reboot.runWithContext(context, () => {
        return this.apply(
          context,
          state,
          ApplyRequest.fromJsonString(jsonRequest)
        );
      });
      // TODO: it's premature to overwrite the state now given that the
      // writer might still "fail" and an error will get propagated back
      // to the ongoing transaction which will still see the effects of
      // this writer. What we should be doing instead is creating a
      // callback API that we invoke only after a writer completes
      // that lets us update the state _reference_ then.
      if (context.stateId in ongoingTransactionStates) {
        ongoingTransactionStates[context.stateId].copyFrom(state);
      }
      return JSON.stringify({
        effects: new Authority.ApplyEffects({ state, response })
      });
    } catch (e) {
      if (e instanceof reboot_api.Aborted) {
        return JSON.stringify({
          status: e.toStatus()
        });
      }

      const error = createError(e);

      console.warn(
        `Unhandled (in 'rbt.thirdparty.prosemirror.v1.Authority.apply') ${error.message}; propagating as 'Unknown'\n${error.stack}`
      );

      throw error;
    }
  }

  abstract changes(
    context: ReaderContext,
    state: Authority.State,
    request: ChangesRequest,
  ): Promise<
  ChangesResponse | protobuf_es.PartialMessage<ChangesResponse>
  >;

  async _Changes(
    context: ReaderContext,
    jsonState: string,
    jsonRequest: string
  ): Promise<string> {
    try {
      let state = Authority.State.fromJsonString(
        jsonState
      );
      const response = await reboot.runWithContext(context, () => {
        return this.changes(
          context,
          state,
          ChangesRequest.fromJsonString(jsonRequest)
        );
      });
      return JSON.stringify({
        response
      });
    } catch (e) {
      if (e instanceof reboot_api.Aborted) {
        return JSON.stringify({
          status: e.toStatus()
        });
      }

      const error = createError(e);

      console.warn(
        `Unhandled (in 'rbt.thirdparty.prosemirror.v1.Authority.changes') ${error.message}; propagating as 'Unknown'\n${error.stack}`
      );

      throw error;
    }
  }


  __storeExternal(external: any) {
    this.#external = external;
  }

  get __external() {
    if (this.#external === undefined) {
      throw new Error(`Unexpected undefined external`);
    }
    return this.#external;
  }

  authorizer(): reboot.Authorizer<Authority, AuthorityRequestTypes> | null {
    return null;
  }

  _authorizer() {
    const authorizer = this.authorizer();
    if (authorizer !== null) {
      authorizer._authorize = async function(
        methodName: string,
        context: ReaderContext,
        bytesState?: Uint8Array,
        bytesRequest?: Uint8Array
      ): Promise<Uint8Array> {
        let state: Authority.State | undefined = undefined;
        if (bytesState !== undefined) {
          state = Authority.State.fromBinary(bytesState);
        }
        let request: AuthorityRequestTypes | undefined  = undefined;
        const anyRequest = protobuf_es.Any.fromBinary(bytesRequest);
        if (anyRequest.is(CreateRequest)) {
          request = new CreateRequest();
          anyRequest.unpackTo(request);
        } else if (anyRequest.is(ApplyRequest)) {
          request = new ApplyRequest();
          anyRequest.unpackTo(request);
        } else if (anyRequest.is(ChangesRequest)) {
          request = new ChangesRequest();
          anyRequest.unpackTo(request);
        } else {
          throw new Error(`Unexpected type for ${request}: ${anyRequest.typeUrl}.`);
        }
        return protobuf_es.Any.pack(
          await authorizer.authorize(methodName, context, state, request)
        ).toBinary();
      };
    }
    return authorizer;
  }

  static _State = class {

    #servicer: AuthorityServicer

    constructor(servicer: AuthorityServicer) {
      this.#servicer = servicer;
    }

    async read(
      context: reboot.WorkflowContext
    ): Promise<Authority.State> {
      return Authority.State.fromJsonString(
        await reboot_native.Servicer_read(
          this.#servicer.__external,
          context.__external
        )
      );
    }

    async write(
      idempotencyAlias: string,
      context: reboot.WorkflowContext,
      writer: (state: Authority.State) => Promise<void>,
      options?: { parse: undefined }
    ): Promise<void>;

    async write<T>(
      idempotencyAlias: string,
      context: reboot.WorkflowContext,
      writer: (state: Authority.State) => Promise<T>,
      options: { parse: (value: any) => T }
    ): Promise<T>;

    async write<T>(
      idempotencyAlias: string,
      context: reboot.WorkflowContext,
      writer: (state: Authority.State) => Promise<T>,
      options: { parse: undefined | ((value: any) => T) } = { parse: undefined }
    ): Promise<void | T> {
      return await this.idempotently(idempotencyAlias)
        .write(context, writer, options);
    }

    static _Idempotently = class {

      #external: any;
      #options: reboot_api.IdempotencyOptions;

      constructor(external: any, options: reboot_api.IdempotencyOptions) {
        this.#external = external;
        this.#options = options;
      }

      async write(
        context: reboot.WorkflowContext,
        writer: (state: Authority.State) => Promise<void>,
        options?: { parse: undefined },
        unidempotently?: boolean
      ): Promise<void>;

      async write<T>(
        context: reboot.WorkflowContext,
        writer: (state: Authority.State) => Promise<T>,
        options: { parse: (value: any) => T },
        unidempotently?: boolean
      ): Promise<T>;

      async write<T>(
        context: reboot.WorkflowContext,
        writer: (state: Authority.State) => Promise<T>,
        options: { parse: undefined | ((value: any) => T) } = { parse: undefined },
        unidempotently: boolean = false,
      ): Promise<void | T> {
        let t: T | undefined = undefined;

        const result = await reboot_native.Servicer_write(
          this.#external,
          context.__external,
          async (jsonState: string) => {
            const state = Authority.State.fromJsonString(
              jsonState
            );
            try {
              t = await writer(state);

              if (t !== undefined) {
                if (options.parse === undefined) {
                  throw new Error(
                    "Required 'parse' property in 'options' is undefined"
                  );
                }

                // NOTE: we've decided not to stringify and parse `t`
                // using `options.parse` now to avoid the extra
                // overhead, but it might catch some bugs _before_
                // anything gets persisted and users may prefer that
                // tradeoff.
                //
                // If we ever did decide to do this and
                // `unidempotently()` is still using this method then
                // we'd need to also update the `options.parse` passed
                // from there so that it doesn't raise an exception.
              }

              return JSON.stringify({
                // NOTE: using the empty string to represent a
                // `callable` returning void or explicitly `undefined`.
                result: (t !== undefined && JSON.stringify(t)) || "",
                state,
              });
            } catch (e) {
              throw createError(e);
            }
          },
          JSON.stringify({ idempotency: this.#options, unidempotently }),
        );

        if (t !== undefined) {
          return t;
        }

        // TODO: assert(result !== undefined);

        if (result !== "") {
          if (options.parse === undefined) {
            throw new Error("Required 'parse' property in 'options' is undefined");
          }
          return options.parse(JSON.parse(result));
        }

        // TODO: assert(result === "");

        // Let end user decide what they want to do with `undefined` if
        // they specify `options.parse`.
        if (options.parse !== undefined) {
          return options.parse(undefined);
        }

        // Otherwise `callable` must return void (undefined), fall through.
      }
    };

    public idempotently(aliasOrOptions: string | reboot_api.IdempotencyOptions) {
      const options = typeof aliasOrOptions === "string"
        ? { alias: aliasOrOptions }
        : aliasOrOptions;
      if (options.alias === undefined && options.key === undefined) {
        throw new Error(
          "Inline writers require either an idempotency alias or key"
        );
      }
      return new AuthorityServicer._State._Idempotently(
        this.#servicer.__external,
        options,
      );
    }

    static _Unidempotently = class {

      #external: any;

      constructor(external: any) {
        this.#external = external;
      }

      async write(
        context: reboot.WorkflowContext,
        writer: (state: Authority.State) => Promise<void>
      ): Promise<void>;

      async write<T>(
        context: reboot.WorkflowContext,
        writer: (state: Authority.State) => Promise<T>
      ): Promise<T>;

      async write<T>(
        context: reboot.WorkflowContext,
        writer: (state: Authority.State) => Promise<T>
      ): Promise<T> {
        return new AuthorityServicer._State._Idempotently(
          this.#external,
          { key: uuid.v4() }
        ).write<T>(
          context,
          writer,
          {
            parse: (): T => {
              throw new Error("Unexpected attempt to parse unidempotent result");
            }
          },
          true
        );
      }
    };

    public unidempotently() {
      return new AuthorityServicer._State._Unidempotently(
        this.#servicer.__external
      );
    }
  };

  get state() {
    return new AuthorityServicer._State(this);
  }
}

export class AuthorityAuthorizer extends reboot.Authorizer<Authority.State, AuthorityRequestTypes> {

  async authorize(
    methodName: string,
    context: ReaderContext,
    state?: Authority.State,
    request?: AuthorityRequestTypes
  ): Promise<reboot.AuthorizerDecision> {
    if (methodName == 'rbt.thirdparty.prosemirror.v1.AuthorityMethods.Create') {
      return await this.Create(
        context,
        state,
        request as CreateRequest,
      );
    } else if (methodName == 'rbt.thirdparty.prosemirror.v1.AuthorityMethods.Apply') {
      return await this.Apply(
        context,
        state,
        request as ApplyRequest,
      );
    } else if (methodName == 'rbt.thirdparty.prosemirror.v1.AuthorityMethods.Changes') {
      return await this.Changes(
        context,
        state,
        request as ChangesRequest,
      );
    } else {
      return new reboot_api.errors_pb.PermissionDenied();
    }
  }

  async Create(
    context: ReaderContext,
    state: Authority.State,
    request: CreateRequest,
  ): Promise<reboot.AuthorizerDecision> {
    return new reboot_api.errors_pb.PermissionDenied();
  }
  async Apply(
    context: ReaderContext,
    state: Authority.State,
    request: ApplyRequest,
  ): Promise<reboot.AuthorizerDecision> {
    return new reboot_api.errors_pb.PermissionDenied();
  }
  async Changes(
    context: ReaderContext,
    state: Authority.State,
    request: ChangesRequest,
  ): Promise<reboot.AuthorizerDecision> {
    return new reboot_api.errors_pb.PermissionDenied();
  }
}


export class AuthorityState extends AuthorityProto {

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<protobuf_es.BinaryReadOptions>
  ) {
    const state = new Authority.State();
    state.fromBinary(bytes, options);
    return state;
  }

  static fromJson(
    jsonValue: protobuf_es.JsonValue,
    options?: Partial<protobuf_es.JsonReadOptions>
  ) {
    const state = new Authority.State();
    state.fromJson(jsonValue, options);
    return state;
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<protobuf_es.JsonReadOptions>
  ) {
    const state = new Authority.State();
    state.fromJsonString(jsonString, options);
    return state;
  }

  public clone() {
    const state = new Authority.State();
    state.copyFrom(super.clone());
    return state;
  }

  public copyFrom(that: Authority.State | AuthorityProto) {
    // Unfortunately, protobuf-es does not have `CopyFrom` like Python
    // or C++ protobuf. Instead, protobuf-es has `fromJson` but it
    // performs a merge. Thus, we have to first clear all of the fields
    // in the message before calling `fromJson`.
    reboot.clearFields(this);
    this.fromJson(that.toJson());
  }
}




export class AuthorityCreateAborted extends reboot_api.Aborted {
  static fromStatus(status: reboot_api.Status) {
    let error = reboot_api.errorFromGoogleRpcStatusDetails(
      status,
      AUTHORITY_CREATE_ERROR_TYPES,
    );

    if (error !== undefined) {
      return new Authority.CreateAborted(
        error, { message: status.message }
      );
    }

    error = reboot_api.errorFromGoogleRpcStatusCode(status);

    // TODO(benh): also consider getting the type names from
    // `status.details` and including that in `message` to make
    // debugging easier.

    return new Authority.CreateAborted(
      error, { message: status.message }
    );
  }

  public toStatus(): reboot_api.Status {
    const isObject = (value: unknown): value is object => {
      return typeof value === 'object';
    };

    const isArray = (value: unknown): value is any[]  => {
      return Array.isArray(value);
    };

    const error = this.error.toJson();

    if (!isObject(error) || isArray(error)) {
      throw new Error("Expecting 'error' to be an object (and not an array)");
    }

    const detail = { ...error };
    detail["@type"] = `type.googleapis.com/${this.error.getType().typeName}`;

    return new reboot_api.Status({
      code: this.code,
      message: this.#message,
      details: [detail]
    });
  }

  constructor(
    error: AuthorityCreateAbortedError,
    { message }: { message?: string } = {}
  ) {
    super();

    // Set the name of this error for even more information!
    this.name = this.constructor.name;

    this.error = error;

    let code = reboot_api.grpcStatusCodeFromError(this.error);

    if (code === undefined) {
      // Must be one of the Reboot specific errors.
      code = reboot_api.StatusCode.ABORTED;
    }

    this.code = code;

    this.#message = message;
  }

  toString(): string {
    return `${this.name}: ${this.message}`;
  }

  get message(): string {
    return `${this.error.getType().typeName}${this.#message ? " with message " + this.#message : ""}`;
  }

  readonly error: AuthorityCreateAbortedError;
  readonly code: reboot_api.StatusCode;
  readonly #message?: string;
}


export class AuthorityApplyAborted extends reboot_api.Aborted {
  static fromStatus(status: reboot_api.Status) {
    let error = reboot_api.errorFromGoogleRpcStatusDetails(
      status,
      AUTHORITY_APPLY_ERROR_TYPES,
    );

    if (error !== undefined) {
      return new Authority.ApplyAborted(
        error, { message: status.message }
      );
    }

    error = reboot_api.errorFromGoogleRpcStatusCode(status);

    // TODO(benh): also consider getting the type names from
    // `status.details` and including that in `message` to make
    // debugging easier.

    return new Authority.ApplyAborted(
      error, { message: status.message }
    );
  }

  public toStatus(): reboot_api.Status {
    const isObject = (value: unknown): value is object => {
      return typeof value === 'object';
    };

    const isArray = (value: unknown): value is any[]  => {
      return Array.isArray(value);
    };

    const error = this.error.toJson();

    if (!isObject(error) || isArray(error)) {
      throw new Error("Expecting 'error' to be an object (and not an array)");
    }

    const detail = { ...error };
    detail["@type"] = `type.googleapis.com/${this.error.getType().typeName}`;

    return new reboot_api.Status({
      code: this.code,
      message: this.#message,
      details: [detail]
    });
  }

  constructor(
    error: AuthorityApplyAbortedError,
    { message }: { message?: string } = {}
  ) {
    super();

    // Set the name of this error for even more information!
    this.name = this.constructor.name;

    this.error = error;

    let code = reboot_api.grpcStatusCodeFromError(this.error);

    if (code === undefined) {
      // Must be one of the Reboot specific errors.
      code = reboot_api.StatusCode.ABORTED;
    }

    this.code = code;

    this.#message = message;
  }

  toString(): string {
    return `${this.name}: ${this.message}`;
  }

  get message(): string {
    return `${this.error.getType().typeName}${this.#message ? " with message " + this.#message : ""}`;
  }

  readonly error: AuthorityApplyAbortedError;
  readonly code: reboot_api.StatusCode;
  readonly #message?: string;
}


export class AuthorityChangesAborted extends reboot_api.Aborted {
  static fromStatus(status: reboot_api.Status) {
    let error = reboot_api.errorFromGoogleRpcStatusDetails(
      status,
      AUTHORITY_CHANGES_ERROR_TYPES,
    );

    if (error !== undefined) {
      return new Authority.ChangesAborted(
        error, { message: status.message }
      );
    }

    error = reboot_api.errorFromGoogleRpcStatusCode(status);

    // TODO(benh): also consider getting the type names from
    // `status.details` and including that in `message` to make
    // debugging easier.

    return new Authority.ChangesAborted(
      error, { message: status.message }
    );
  }

  public toStatus(): reboot_api.Status {
    const isObject = (value: unknown): value is object => {
      return typeof value === 'object';
    };

    const isArray = (value: unknown): value is any[]  => {
      return Array.isArray(value);
    };

    const error = this.error.toJson();

    if (!isObject(error) || isArray(error)) {
      throw new Error("Expecting 'error' to be an object (and not an array)");
    }

    const detail = { ...error };
    detail["@type"] = `type.googleapis.com/${this.error.getType().typeName}`;

    return new reboot_api.Status({
      code: this.code,
      message: this.#message,
      details: [detail]
    });
  }

  constructor(
    error: AuthorityChangesAbortedError,
    { message }: { message?: string } = {}
  ) {
    super();

    // Set the name of this error for even more information!
    this.name = this.constructor.name;

    this.error = error;

    let code = reboot_api.grpcStatusCodeFromError(this.error);

    if (code === undefined) {
      // Must be one of the Reboot specific errors.
      code = reboot_api.StatusCode.ABORTED;
    }

    this.code = code;

    this.#message = message;
  }

  toString(): string {
    return `${this.name}: ${this.message}`;
  }

  get message(): string {
    return `${this.error.getType().typeName}${this.#message ? " with message " + this.#message : ""}`;
  }

  readonly error: AuthorityChangesAbortedError;
  readonly code: reboot_api.StatusCode;
  readonly #message?: string;
}




export class AuthorityWeakReference {
  #external: any;
  #id: string;
  #options?: reboot_api.CallOptions;

  constructor(id: string, bearerToken?: string) {
    this.#id = id;
    this.#options = {
      bearerToken: bearerToken,
    };
    this.#external = reboot_native.Service_constructor({
      rbtModule: "rbt.thirdparty.prosemirror.v1.authority_rbt",
      nodeAdaptor: "AuthorityWeakReferenceNodeAdaptor",
      id: this.#id,
    });
  }

  get stateId(): string {
    return this.#id;
  }

  async __externalServiceCallCreate(
    context: Context | ExternalContext,
    partialRequest?: protobuf_es.PartialMessage<CreateRequest>,
    options?: reboot_api.CallOptions
  ): Promise<any> {
    const request = partialRequest instanceof CreateRequest ?
      partialRequest : new CreateRequest(partialRequest);

    const json = JSON.parse(
      await reboot_native.Service_call({
        external: this.#external,
        kind: "writer",
        method: "Create",
        requestModule: "rbt.thirdparty.prosemirror.v1.authority_pb2",
        requestType: "CreateRequest",
        context: context.__external,
        jsonRequest: JSON.stringify(request || {}),
        jsonOptions: JSON.stringify(options || {}),
      })
    );

    if ("status" in json) {
      throw Authority
        .CreateAborted
        .fromStatus(reboot_api.Status.fromJson(json["status"]));
    }

    return json;
  }

  async create(
    context: TransactionContext | WorkflowContext | ExternalContext,
    partialRequest?: protobuf_es.PartialMessage<CreateRequest>,
  ): Promise<CreateResponse> {
    const json = await this.__externalServiceCallCreate(
      context,
      partialRequest,
      this.#options,
    );

    // TODO: assert("response" in json)

    return CreateResponse.fromJson(json["response"]);
  }

  async __externalServiceCallApply(
    context: Context | ExternalContext,
    partialRequest?: protobuf_es.PartialMessage<ApplyRequest>,
    options?: reboot_api.CallOptions
  ): Promise<any> {
    const request = partialRequest instanceof ApplyRequest ?
      partialRequest : new ApplyRequest(partialRequest);

    const json = JSON.parse(
      await reboot_native.Service_call({
        external: this.#external,
        kind: "writer",
        method: "Apply",
        requestModule: "rbt.thirdparty.prosemirror.v1.authority_pb2",
        requestType: "ApplyRequest",
        context: context.__external,
        jsonRequest: JSON.stringify(request || {}),
        jsonOptions: JSON.stringify(options || {}),
      })
    );

    if ("status" in json) {
      throw Authority
        .ApplyAborted
        .fromStatus(reboot_api.Status.fromJson(json["status"]));
    }

    return json;
  }

  async apply(
    context: TransactionContext | WorkflowContext | ExternalContext,
    partialRequest?: protobuf_es.PartialMessage<ApplyRequest>,
  ): Promise<ApplyResponse> {
    const json = await this.__externalServiceCallApply(
      context,
      partialRequest,
      this.#options,
    );

    // TODO: assert("response" in json)

    return ApplyResponse.fromJson(json["response"]);
  }

  async __externalServiceCallChanges(
    context: Context | ExternalContext,
    partialRequest?: protobuf_es.PartialMessage<ChangesRequest>,
    options?: reboot_api.CallOptions
  ): Promise<any> {
    const request = partialRequest instanceof ChangesRequest ?
      partialRequest : new ChangesRequest(partialRequest);

    const json = JSON.parse(
      await reboot_native.Service_call({
        external: this.#external,
        kind: "reader",
        method: "Changes",
        requestModule: "rbt.thirdparty.prosemirror.v1.authority_pb2",
        requestType: "ChangesRequest",
        context: context.__external,
        jsonRequest: JSON.stringify(request || {}),
        jsonOptions: JSON.stringify(options || {}),
      })
    );

    if ("status" in json) {
      throw Authority
        .ChangesAborted
        .fromStatus(reboot_api.Status.fromJson(json["status"]));
    }

    return json;
  }

  async changes(
    context: ReaderContext | WriterContext | TransactionContext | WorkflowContext | ExternalContext,
    partialRequest?: protobuf_es.PartialMessage<ChangesRequest>,
  ): Promise<ChangesResponse> {
    const json = await this.__externalServiceCallChanges(
      context,
      partialRequest,
      this.#options,
    );

    // TODO: assert("response" in json)

    return ChangesResponse.fromJson(json["response"]);
  }


  static _Idempotently = class {

    #weakReference: any;
    #options: reboot_api.CallOptions;

    constructor(
      weakReference: any,
      options: reboot_api.CallOptions
    ) {
      this.#weakReference = weakReference;
      this.#options = options;
    }

    async create(
      context: reboot.TransactionContext | reboot.WorkflowContext | reboot.ExternalContext,
      partialRequest?: protobuf_es.PartialMessage<CreateRequest>
    ): Promise<CreateResponse> {
      const json = await this.#weakReference.__externalServiceCallCreate(
        context,
        partialRequest,
        this.#options,
      );

       // TODO: assert("response" in json)

       return CreateResponse.fromJson(json["response"]);
    }

    async apply(
      context: reboot.TransactionContext | reboot.WorkflowContext | reboot.ExternalContext,
      partialRequest?: protobuf_es.PartialMessage<ApplyRequest>
    ): Promise<ApplyResponse> {
      const json = await this.#weakReference.__externalServiceCallApply(
        context,
        partialRequest,
        this.#options,
      );

       // TODO: assert("response" in json)

       return ApplyResponse.fromJson(json["response"]);
    }


    public schedule(options?: reboot_api.ScheduleOptions) {
      return new Authority.WeakReference._Schedule(
        this.#weakReference,
        {
          ...this.#options,
          schedule: options || { when: new Date() }
        },
      );
    }
  };

  public idempotently(aliasOrOptions: string | reboot_api.IdempotencyOptions = {} as reboot_api.IdempotencyOptions) {
    const idempotency = typeof aliasOrOptions === "string" ? { alias: aliasOrOptions } : aliasOrOptions;
    return new Authority.WeakReference._Idempotently(
      this,
      {
        ...this.#options,
        idempotency: idempotency,
      },
    );
  }

  public unidempotently() {
    return this.idempotently({ key: uuid.v4() });
  }

  static _Schedule = class {

    #weakReference: any;
    #options: reboot_api.CallOptions;

    constructor(
      weakReference: any,
      options: reboot_api.CallOptions,
    ) {
      this.#weakReference = weakReference;
      this.#options = options;
    }

    async create(
      context: reboot.WriterContext | reboot.TransactionContext,
      partialRequest?: protobuf_es.PartialMessage<CreateRequest>
    ): Promise<reboot_api.TaskEffect>;

    async create(
      context: reboot.WorkflowContext | reboot.ExternalContext,
      partialRequest?: protobuf_es.PartialMessage<CreateRequest>
    ): Promise<{ responsePromise: Promise<CreateResponse>; taskId: reboot_api.tasks_pb.TaskId }>;

    async create(
      context: reboot.WriterContext | reboot.TransactionContext | reboot.WorkflowContext | reboot.ExternalContext,
      partialRequest?: protobuf_es.PartialMessage<CreateRequest>
    ): Promise<reboot_api.TaskEffect | { responsePromise: Promise<CreateResponse>; taskId: reboot_api.tasks_pb.TaskId }> {
      const json = await this.#weakReference.__externalServiceCallCreate(
        context,
        partialRequest,
        this.#options,
      );

      // TODO: assert("taskId" in json)

      const taskId = reboot_api.tasks_pb.TaskId.fromJson(json["taskId"]);

      if (
        context instanceof reboot.WriterContext ||
        context instanceof reboot.TransactionContext
      ) {
        return { taskId } as reboot_api.TaskEffect;
      }

      return {
        responsePromise: new Promise(async (resolve, reject) => {
          const json = JSON.parse(
            await reboot_native.Future_await({
              external: this.#weakReference.#external,
              context: context.__external,
              method: "Create",
              jsonTaskId: JSON.stringify(taskId),
            })
          );

          if ("status" in json) {
            reject(
              Authority
                .CreateAborted
                .fromStatus(reboot_api.Status.fromJson(json["status"]))
            );
          } else {
            // TODO: assert("response" in json)
            resolve(CreateResponse.fromJson(json["response"]));
          }
        }),
        taskId,
      };
    }

    async apply(
      context: reboot.WriterContext | reboot.TransactionContext,
      partialRequest?: protobuf_es.PartialMessage<ApplyRequest>
    ): Promise<reboot_api.TaskEffect>;

    async apply(
      context: reboot.WorkflowContext | reboot.ExternalContext,
      partialRequest?: protobuf_es.PartialMessage<ApplyRequest>
    ): Promise<{ responsePromise: Promise<ApplyResponse>; taskId: reboot_api.tasks_pb.TaskId }>;

    async apply(
      context: reboot.WriterContext | reboot.TransactionContext | reboot.WorkflowContext | reboot.ExternalContext,
      partialRequest?: protobuf_es.PartialMessage<ApplyRequest>
    ): Promise<reboot_api.TaskEffect | { responsePromise: Promise<ApplyResponse>; taskId: reboot_api.tasks_pb.TaskId }> {
      const json = await this.#weakReference.__externalServiceCallApply(
        context,
        partialRequest,
        this.#options,
      );

      // TODO: assert("taskId" in json)

      const taskId = reboot_api.tasks_pb.TaskId.fromJson(json["taskId"]);

      if (
        context instanceof reboot.WriterContext ||
        context instanceof reboot.TransactionContext
      ) {
        return { taskId } as reboot_api.TaskEffect;
      }

      return {
        responsePromise: new Promise(async (resolve, reject) => {
          const json = JSON.parse(
            await reboot_native.Future_await({
              external: this.#weakReference.#external,
              context: context.__external,
              method: "Apply",
              jsonTaskId: JSON.stringify(taskId),
            })
          );

          if ("status" in json) {
            reject(
              Authority
                .ApplyAborted
                .fromStatus(reboot_api.Status.fromJson(json["status"]))
            );
          } else {
            // TODO: assert("response" in json)
            resolve(ApplyResponse.fromJson(json["response"]));
          }
        }),
        taskId,
      };
    }

    async changes(
      context: reboot.WriterContext | reboot.TransactionContext,
      partialRequest?: protobuf_es.PartialMessage<ChangesRequest>
    ): Promise<reboot_api.TaskEffect>;

    async changes(
      context: reboot.WorkflowContext | reboot.ExternalContext,
      partialRequest?: protobuf_es.PartialMessage<ChangesRequest>
    ): Promise<{ responsePromise: Promise<ChangesResponse>; taskId: reboot_api.tasks_pb.TaskId }>;

    async changes(
      context: reboot.WriterContext | reboot.TransactionContext | reboot.WorkflowContext | reboot.ExternalContext,
      partialRequest?: protobuf_es.PartialMessage<ChangesRequest>
    ): Promise<reboot_api.TaskEffect | { responsePromise: Promise<ChangesResponse>; taskId: reboot_api.tasks_pb.TaskId }> {
      const json = await this.#weakReference.__externalServiceCallChanges(
        context,
        partialRequest,
        this.#options,
      );

      // TODO: assert("taskId" in json)

      const taskId = reboot_api.tasks_pb.TaskId.fromJson(json["taskId"]);

      if (
        context instanceof reboot.WriterContext ||
        context instanceof reboot.TransactionContext
      ) {
        return { taskId } as reboot_api.TaskEffect;
      }

      return {
        responsePromise: new Promise(async (resolve, reject) => {
          const json = JSON.parse(
            await reboot_native.Future_await({
              external: this.#weakReference.#external,
              context: context.__external,
              method: "Changes",
              jsonTaskId: JSON.stringify(taskId),
            })
          );

          if ("status" in json) {
            reject(
              Authority
                .ChangesAborted
                .fromStatus(reboot_api.Status.fromJson(json["status"]))
            );
          } else {
            // TODO: assert("response" in json)
            resolve(ChangesResponse.fromJson(json["response"]));
          }
        }),
        taskId,
      };
    }


  };

  public schedule(options?: reboot_api.ScheduleOptions) {
    return new Authority.WeakReference._Schedule(
      this,
      {
        ...this.#options,
        schedule: options || { when: new Date() }
      },
    );
  }
}

export class Authority {

  static Servicer = AuthorityServicer;
  static State = AuthorityState;
  static WeakReference = AuthorityWeakReference;


  static CreateAborted = AuthorityCreateAborted;

  static CreateEffects = class {
    state: AuthorityProto;
    response: CreateResponse;

    constructor(effects: {
      state: protobuf_es.PartialMessage<AuthorityProto>;
      response: protobuf_es.PartialMessage<CreateResponse>;
    }) {
      this.state = effects.state instanceof AuthorityProto
        ? effects.state
        : new AuthorityProto(effects.state);

      this.response = effects.response instanceof CreateResponse
        ? effects.response
        : new CreateResponse(effects.response);
    }
  };


  static ApplyAborted = AuthorityApplyAborted;

  static ApplyEffects = class {
    state: AuthorityProto;
    response: ApplyResponse;

    constructor(effects: {
      state: protobuf_es.PartialMessage<AuthorityProto>;
      response: protobuf_es.PartialMessage<ApplyResponse>;
    }) {
      this.state = effects.state instanceof AuthorityProto
        ? effects.state
        : new AuthorityProto(effects.state);

      this.response = effects.response instanceof ApplyResponse
        ? effects.response
        : new ApplyResponse(effects.response);
    }
  };


  static ChangesAborted = AuthorityChangesAborted;



  public static lookup(
    id: string,
    options?: { bearerToken?: string }
  ) {
    return new Authority.WeakReference(id, options?.bearerToken);
  }

  static _Construct = class {
    #id?: string;
    #options?: reboot_api.CallOptions;

    constructor(id?: string, options?: reboot_api.CallOptions) {
      this.#id = id;
      this.#options = options;
    }

    public async create(
      context: reboot.TransactionContext | reboot.WorkflowContext | reboot.ExternalContext,
      partialRequest?: protobuf_es.PartialMessage<CreateRequest>
    ): Promise<[
      Authority.WeakReference,
      CreateResponse
    ]> {
      if (this.#id === undefined) {
        this.#id = uuid.v4();
      }

      const weakReference = Authority.lookup(this.#id);

      const json = await weakReference.__externalServiceCallCreate(
        context,
        partialRequest,
        this.#options,
      );

      // TODO: assert("response" in json)

      return [
        weakReference,
        CreateResponse.fromJson(json["response"])
      ];
    }

    public async apply(
      context: reboot.TransactionContext | reboot.WorkflowContext | reboot.ExternalContext,
      partialRequest?: protobuf_es.PartialMessage<ApplyRequest>
    ): Promise<[
      Authority.WeakReference,
      ApplyResponse
    ]> {
      if (this.#id === undefined) {
        this.#id = uuid.v4();
      }

      const weakReference = Authority.lookup(this.#id);

      const json = await weakReference.__externalServiceCallApply(
        context,
        partialRequest,
        this.#options,
      );

      // TODO: assert("response" in json)

      return [
        weakReference,
        ApplyResponse.fromJson(json["response"])
      ];
    }


    public idempotently(aliasOrOptions: string | reboot_api.IdempotencyOptions = {} as reboot_api.IdempotencyOptions) {
    const idempotency = typeof aliasOrOptions === "string" ? { alias: aliasOrOptions } : aliasOrOptions;
      return new Authority._ConstructIdempotently(
        {
          ...this.#options,
          idempotency: idempotency,
        },
        this.#id,
      );
    }
  };

  public static construct(options?: { id: string }) {
    return new Authority._Construct(options?.id);
  }

  static _ConstructIdempotently = class {
    #options: reboot_api.CallOptions;
    #id?: string;

    constructor(options: reboot_api.CallOptions, id?: string) {
      this.#options = options;
      this.#id = id;
    }

    public async create(
      context: reboot.TransactionContext | reboot.WorkflowContext | reboot.ExternalContext,
      partialRequest?: protobuf_es.PartialMessage<CreateRequest>
    ): Promise<[
      Authority.WeakReference,
      CreateResponse
    ]> {
      if (this.#id === undefined) {
        this.#id = await context.generateIdempotentStateId(
          "rbt.thirdparty.prosemirror.v1.Authority",
          "rbt.thirdparty.prosemirror.v1.AuthorityMethods",
          "Create",
          this.#options.idempotency,
        ) as string;
      }

      const weakReference = Authority.lookup(this.#id);

      const json = await weakReference.__externalServiceCallCreate(
        context,
        partialRequest,
        this.#options,
      );

      // TODO: assert("response" in json)

      return [
        weakReference,
        CreateResponse.fromJson(json["response"])
      ];
    }

    public async apply(
      context: reboot.TransactionContext | reboot.WorkflowContext | reboot.ExternalContext,
      partialRequest?: protobuf_es.PartialMessage<ApplyRequest>
    ): Promise<[
      Authority.WeakReference,
      ApplyResponse
    ]> {
      if (this.#id === undefined) {
        this.#id = await context.generateIdempotentStateId(
          "rbt.thirdparty.prosemirror.v1.Authority",
          "rbt.thirdparty.prosemirror.v1.AuthorityMethods",
          "Apply",
          this.#options.idempotency,
        ) as string;
      }

      const weakReference = Authority.lookup(this.#id);

      const json = await weakReference.__externalServiceCallApply(
        context,
        partialRequest,
        this.#options,
      );

      // TODO: assert("response" in json)

      return [
        weakReference,
        ApplyResponse.fromJson(json["response"])
      ];
    }

  };
}

export namespace Authority {
  export type CreateAborted = typeof Authority.CreateAborted.prototype;
  export type CreateEffects = typeof Authority.CreateEffects.prototype;
}
export namespace Authority {
  export type ApplyAborted = typeof Authority.ApplyAborted.prototype;
  export type ApplyEffects = typeof Authority.ApplyEffects.prototype;
}

export namespace Authority {
  export type WeakReference = typeof Authority.WeakReference.prototype;
  export type State = typeof Authority.State.prototype;
}


export function importPys() {

    reboot_native.importPy("rbt.thirdparty.prosemirror.v1.authority_pb2", "H4sIAAAAAAAC/81XYW/aSBD9zq/YozqR3AVjrw2BSNGVC7SN1AQOSKWqPlk2Xogr4/XtLhHcr+/s2saGEMdUOek+APb6vTdvZncYeIeavzXRnPpBtLxCa7FoduVK7R36SCLCXEF85G2ReCQoZlTQOQ2Rt14sCAPSKg5CwjSEBiN0P5qh4eB29gtQOV2zOblCzBMt8RgwP3aZ2LZAgJNVwBhlrSej5a7FI2WB2GpKGXhj+QnqaLyFRxH6QhgPaHSFLA23Nb1Wr9dzV8/t+EQDRG3B6AotKV2GJFGWisEqpkwgn/A5C2JBGXI5cvLbiiwnphBxn6rWSvl8u/Jo6PiucD2XE8U/WDvK14JIEBa5YSbkrYPQJ4n39BrK9v59UgsniDhhAioGloB6lrD4ea0mwzm+h66fBdYGZOGuQ3EGqPIkBFvPhRN7WIZPQI5PYSUFqpsUJWGJGpwB7clww/jRNTIpGkuTPNMCiOJmMHWTYZRSrTYYTm8mt+PZaCJzOCh+noPW9/0pYYEbBv8S/wMczzOvYUfNk06ivTEwvHxpPSdpBRJkBAAXXvOkEK2sCK2kADshiXFl9Cy5VppYiqhP7MgW/cyADP0HrGz0S3vTMR/daEk4LHZhxUDwZp7Bm2dvTPyrVupPu1Hkyb7UFdxa9qYL+XntVFe363cqZMfeWAlO2vhdrVlckLhowNgZgNVL7fDETlX6kwJT4jqZfscMAxKJVBCnggpfeFqH2wVQ2A0j0OsT8s+acFh+UDJE2kwf8BhKqeyeq2cmiFh0/lOGcy5WfLULT8lX0IFhNik+qwcKC0zLiONwm/ktETKOCpVsPn6Dzc/r2k9sptWrW3ldE2Qxg3qSHA+iOfnychL7gHqoWIuiZL5X/6uqgBt/IbVkDEOXm5h14x2BC18Gw6u8Q9TRk2sXr4XbO73wPdCsSMj2JYm416w4qR80LXx+V6ba2blTXftKiP7+AXUvquGrOoqzjbLyjcLNSttSOHSuVpVR6itKXHWku45qeLMhZ+EypJ4bchgk6RXMvmycan/KzzvCubsk/cgfRuvVYDdt+Fk+hy5QJnTIntG4QAGRVG6f3ShPcTeT5ABsFIMFi+IA1JyH6dC5cXLpKbq+Rh8ASq5q8NNst65lMxUSv6cRgYeZ6LeG03+YfRpNbmdfG3+fAOS7WVvgwMTFUH7cadu6qdu6rjdekLgbwsVgCkqrpNUcb+tE7op8ayS9UNlMJaVqbrGtY/yTrlW7vIXpndB/7zltpjcpdS5V1XdU5vpAiAvolGvD7FaDk8i/xljfB9986t9/HB4VxhhXwCrVXu8AORn2Z8PJ8K+H4XR2VNzUjeoUGcM0OscJ0/Hofno8A9PonsCRUSzdPCjmePz5a1kilt6uzJAR2oZ+FF+SRtvA1SkqBr48tnPTsjzauHcCR0XpGi8wynLpmqeQZJxOz3i19Z4H6vSsk1gykqFb7bI/kCvqr+FfHp/TmJzXfgBWoa5ALBAAAA==");
    reboot_native.importPy("rbt.thirdparty.prosemirror.v1.authority_pb2_grpc", "H4sIAAAAAAAC/+1YUY/iNhB+z6/w7T0QpDSn6+NKSEUsVyHdcmiXSn2zTDyAq2CntrM9WvW/d2wnQLLZvVsdG/qwPEBMPOPxN58/j/2e/AoSNLPAyWpP7BbI5m4xIYu93SpJCq2sylROMrUrRA6aFHm5ETIlN1/I/MuSTG9my3fR1dXVJBcgLWGSEwP6AXtmOTMGDJpqDaZQkgu5IVYFp6ty/ROHtZAQDEQGJkU/kdgVSluy0UUWRWutdkSvbGq3QvOCabtP0dzATmitdPrwkVT9WYkBa2H3tFj9TJhxVpQrS4+Wvnli7dsPH/3P0dzZR1Hkoyfj+u9bwAdu7m25itXqD8js8Doi+MGQb4UxbmpooDLhoeQqK3eIB7MCUUTwXIMISVI/ebJGLP1svQ/EgVAqpLCUxgbydUKyLZMS8mqQaqCJksbqMrM48+jwYqw35tjNfSrjazL2MKaT0E5PfR2e3XjpRAPGTUa1aVpKpvfUf8cN3+4z+PBsStI2ah+C+0HyyJOGP0swliIDBMvF36BHP5K3ah53wWt6X3tdqnurMUVdAThmGqAczh1DcJx+Qgo/NfqwmYVxUeT7V0uC995DDvw4l01BFcLLM+BWygY169UWQvDfx0oII114KdRBfFcmnhTdsD3o1xHesFwr2a2ygPqrpIWvtqm/PzLeQZuD49SApZniEHuFvkcHpZlgO/1tPrtdfJ7eTufL6c2w046DZSI38SAARKSybhvMwQ0O/N3gaKaZMEDmys6O76cua88ZH7Dx6+gNmi5oKmq/gXMKTuSQYZzTp5YwtYqG8jCuij6dVPViBRnOiu68EUWEOZacTo3/acjFoKonrkN5cyLR9LH5Y9UOah9Gr3brpLNTrcnnrw2CKD8nhw1FfqXS5BubwrDZHIQC4hyge099Yd6oR3qHvFmKvBDxulw4C9GDr96Y3qw/+qd6q/T4PuT/9d8bdyQWWQ0s6o+HvyVLtNWtif/gZZXhIOlSvqDHQR9Tp6v1kK5v3SmOW4EkQyfF5D1ZboUJx3CCDy4OolCfJZn+vpjezdxWMf5MxotZ+kTldf6K6xfjOmZhnu0arN5FG0BapjfQ+k8VbjAzilsLpiraaaaBYxSYcDOaK9mS94zl3+oikDJZqWH0Cd+3zdWuQLoajKDD8i+Gp/g1UhOnxPcdHazYgSptxxsEhXFmmX91UkFosKWWgYPwtcBUe7ybZ5NDBVLhdaZDen+n8T7O3BVvki6idBMgecSW5JQASSvfSZ3e5JDN4XPEDwX2G+8vyfuue5HeLkB6uOb435G+Pjq90f6ict95FdXjnVMvN0uXIf9/lbLlHVYZAAA=");
    reboot_native.importPy("rbt.thirdparty.prosemirror.v1.authority_rbt", "H4sIAAAAAAAC/+29a3fjxpUo+p2/AmF/IOmw4WRu7jnnKosnaXfLjmbSj6uWnTNL0YIgsijBTREcAJTMePq/n713VQFVhSoAfEgtuctruUWChXru2u/Hi2ATr+ZHwSzJ46sF670IkjzNiqMg/5SsonlCj7L1HJos0/+Ke/DtYxEvZ3E2C5LbFTTNw948S2+DKJqvi3XGokj8EMTLZVrERZIuc3zv1dnZ8buzk/fvsKug2KxYHiTLoLhJ8gAHCvKbdL2YBVdMdMBmwX1S3EALlmTBevlf63iRzBM2g86U/5bxLQuGLLwOg0uaCXSdLK/lLF4tN5ejMDi7iYvgngaYxuucBdNFnN+wXO+LxoNfs5czNk+WMINbVtyksxwmAe/fxHcMpxPkOCYOHAY/5kzvY75eLDYvy8lSs1xOkM8tpEnB6vOCxbOwJzcs3yynSSq/zuIixlnmMEvx6DpNrxcsXGVpkV6t5+GM5dMsWRVp5mrxc54uo3ma3caFqwlML4+vWflztpqqn6McDnGdhxFNDyYZVA/5Mw4ASlu598oT/TV6SzTCGcrPi/T6GvZHfk3Lheeb8mORxVN2FU8/yQfrdTKTn1fJ9NOiXErGrtK00L+FMEYQvCAAPAqS62WasXPe4qIcgk5JfsOx0vlcfp2vl9MiTRc5X3Z8NS0B/irHyRUcZvjPcIisSG4lTJffxwH+O2OLIhbbp5+KbI+tYNNuV9Hq6t/GwX0Wr1Ysy/Gb9h5srnxF7DG20FceJ2k4jRcL2+N0WbBfitzy0w2AKIxo+SWZMXhWsOV0Y/sVesyW8SIPpzeACtgiuo2XAGdZY9vbZDZbsPs4Y3x5LY3kmoc9vHq38eaKRdkaIB4PCTBPVNwnUxYVaXQH9xE3P2LzOZsW+bg3apxIEeef8mgaT29Yh3aAP1dxAW1tq1stAGJv2bKw/Aa45g5maN1fPEgmd83eYH1le05zsj1HpFvbV4GKJQ6CGRURPrN0ACBCy9b6yFlRwHUpu3j76v9Er16fvT+NTt5Efz9+98PZ38bB25N3lofQ8rvjV6fHp9HZ+/84fid+EL1fFeHdH+PF6ib+Y3kbaLPpJpQfIxVhiZsLGBnwchZILJ5mMNk5ywBUmUK4HAgRbvF6WmgXCOYChCqbreKs2GDLnN0mWZZmMMUwXsN9z5Jis+Mr2grUZYfpisgn9QsUdDZL8Dtc4Q2s5yX7hR/ZYhEIHA54djkL2HJ9CzSVaCEQK3g5uE1na1hitbMdp6bfr1er1WJzyv5rDShprD7JVzBLxh+9htt+rX3OtVfKZ9pLGQNY19uJR7LZqNdD8gCnOlFQeXjNiog/H0YR0tooGuH5/+OGLYN7FiCSAIywRJaAeI1pOmNE6IH5uFzCl0tsdptc3wCDEC8BhlKkQ9AFNgGwniVzAp1isQmD7wGU2C+AjxeAwpM5jbCAmc42nDvIU8D1gowBgYde0nUWnMF1+kiUmg8Px5JTsxxxFrI8GZutga1aFmHwPsNe5VTiuzRBjmeVAc7BTgErTD9xKkhkFU4r58v8sIHPyyBfsSmwHtOw9+79m+N//3gUwGYtYNfSPGTLuyRLl7hr/EiNOxwev/vpp1en0enxd+/fn0W8g3HQnwOqY/3eCLb8HnZ6FEwmQR+uCTyDzW74L/g7u46nm+D69MPr4KNEdkHTK7DYMzyonBEKB44UZrlgd7ghw3S52IwCYGiCEnNy3izBI0EkG8TBohoTOhMNkdmMg1NabyDoXRicFNg/AL8cAbZ8ukigH8APPcAfwdv4E+OL+AGuqVgCMst8A+FaquOV0yIGA3jN5aDA870FNqM8GZzxkphBdjkWvVwxzpfa+gL2EQ76mi1ZFiNbfLWhi01tLgltTS9FN6vFGkBvFMxS4LKBF7hBwIiXG1jx7S1s5lUseN88SKGPTEwlvfoZdvsypF7ksBHnkYgWjIKX/9tKt0JlR444SMUJjPFTvFizY0Qqw3n/x+WnZXq/bNiowa/aqJ8HfbjFLaAlzlJCVfC2ZAsODGAlbOH9K2FI/o5ARIKTHYzGgC+mDG4+9onHNgcWkcMsIQvRjG5wBNcsjYJ8Pb2pADdDSHxBmEeyHQGycdDzPUEYSiwwrdv4GkEr/QSID4a/2qzwlPn3O5Yh4JE0hjQC+hN4/l/8GbAu0085yklMvAJwdQccXo7SGraFwbkcgc1JnBlDL5fyJvEmefAuXTIQuHpRJCcb0cQi6jWKQLQsEIXPB/L3l7/CkyFy8SH+86fhaPR50OtxIH0lqZE85eqQhy28YVg1HR31CDTxPuPEkiKK+PXl8L6Yj8tv34yVH/iYR/VpVI2AIV+InY2S2VGNswpfVQ1OZtV7UyRryxw4detbr+XP6jsaR3jk5hXDj/j1Lf9WvV4yohEHuiMrlxp+kJ9eUytlyjojf9SJ3Q+j1/xBbToKi33UyoSHZ/j5NX5UeiCY4sCN8xHi9fsVZ5POlU4RPkO9fR6e4fefxNeLql8uI0iZAfo6sglL4TE1+6lspQFFBf/xKok+sU0E+CZjBV2AqiXxDkdS9g+P78odHx1V575eIdUN67Bbh8CJ/nWsNVWBbqJ+0ZtxaEJAJJaq4rgq+CQIQ77mHTQYDpp5yvL6DEbGQPw6RVxJMgnOtV8VBkUZmL9Cw/Y7DvuWa3H6xugX+lfzekzMB8Ze6nA+Mb7rjWsQNak9GZuH6oKgScNvVSejnobgwqgkuJMSsZktVCSCzdTveltT7NVBxC0e82v8pvy+MyTLLic0HflNb6Ogj4nyWW9EF3BC/1o3DzWeyLwh6SZWJZ0HDLoRqsEBMg8ktgA5F2Qd28/k45xI9BVTOgSqCjgHDv5fKI0ui5Q6n6bAPkxJhmWhvtuiK34jrzYRH5puDepup8U54hR689yh3gvf8r8XF3BUv2o7MOCi1uBoG8kwtIhsZYckFm7ZX124rObHRcZtJ2gRPvG/z+rZ8lWUzBAAqHEnql/ayUvVNpe4Bz5fKBdOaTIcWeahcmv1uRyW3MG0hjZknBnvgbSHnKv2zHZRQBq2TROZQhRFkDEk9YS5r5JrPNKvJUkRp+slakC5HFGjDfP+QFvSQDKtICKtC2RcB9UxDOBCFusM1UHIifdtvXWlYvrLKKlI7jKezVDbiFsJO0ecZcC/HJGGnA7nIz0gkUpf+LZKoxCHM6ncx1KQKudhHHM1KfMcuY4fF5IsUVot5BKIEmRsfuTgBE7ZnNYjDRzYz0mB8mqataKkagP6/f6JFLa4pAHY9rJi5EM5rdFlCG1VZhpZMrppAF1Tuk2ReKovX+izJ3UVd/g3/rcOaAZdojGaiFPFQ8GWTcpPeqPRF+K5xK7QUBMbW3tK2/Caf7XSRA4mZC2zcA6oQGXxLcBBlFFXkWIpQF5laJvPuAakFcsCjK+yPZHBKckrPsHLpMwXtWP0Wq6jFj57RAJD+nkcGPND05z1Tfxvk7DFjP9q3hlYLXB0QG6yjUu6JCuZWLGBEXChtU0XoHkUuMG1aszZgpqAwXmHqw0uJ6A/QsBwXthiDXfw3CQvbdd4HCySvDgnSf7HH0/eXFzoN/uU8G9OzE4m9Lp4v1GZgZqVgeCogusEpCDUaAjLZMnzqXxTpd+WOH+gLXVAJ0ycGj8s2ct6NSNSi6waRxQ5jFVqecuphSp9Rr0IzhPI1ZCOOVwBmAiTNWl+pRoYJSpk/6h/oXEWcpbSHzyW6BxQCLzOtUPwuMjiOWlvK3BFkwy/EaZEElYyHHQQwbxMOimBpQldyTYWREWaXn4ZVXGx2pp378+OjwLUmgXrZZxtAn7lS8M5qrVAfOUGfQ1nvwjeMdynVJhphFZ8vYL54EvJcsqkhov6nwn+OoUfqu1ZxHDi8szqPFEb0AKeRbRR7fb1dcauUc1qYi24PAZ8o8B6ofI/fNG4ZSVPrW30i+BkeRcDCAOY0SITob1Gn4NcghNySwRSBHAzAgujm1mCogLsCfI5tDnFTZaur2+4faFSFZ8irBovT1NY1pKUjvc3Cd4PY9wrBtev6oPrL41OEF5JdpWLhmOakYU1D7Wm3DgTAvVGG0ydtvZ/SAtSqqJalHBnKVARgYHTT5baSFzssTFwnAMKBr/ylp8HpJUVb6s63UqhF9b76f9zaXn4Jg026Vrc9eAqS+/RwljEV0G6gu3C3hFQFwj8wFnlyLxYugF8R9dcuY9j5K/pfQULKb+Tha9Irxkq7P9i8p51plkVA674vfu4yQt2+4p/q5+BZnRkyEGQzTE84VvHt3U4qjM54jZNaj+0n0fTOjiNJQwxxREAJgg/kkkFNdV4xStt3UK/ekL69DfP3zx/8x715pWKmp6uh8s2dT56C5HNFN1uTMb3i8hR+8pTFrnK6JIb1SZBfB8nggGMuI8TKVc2XNMyFNth6Ude58keirPhyNVt+CHOcvY98OEfiwwxjMZ/W6bTIjYSXw288GIzbNpox7F3FxjrgqO6teVT+yQqOYvAazLYzgQhN3cwdvbeCcrl/CcqqLibipOZZDb9qkMh0ShDd5alc02Ydq/FzXaT19lyNqx17O4N0Bc0POJm/lnKuAYS5Af0hABpA8QYlLmm6WqDgud0nXH/nqOGHnPGgpuiWOVH3357DSC8voIbfvstv/AvZ+zu29t0mX6b5Dns8Lf/9j/+n/8ROnv76zaeiu49qxQP0FEkIGsoLUrLa9kD9wAicb9FHHJvAIciFOA1dFSO2vhi6+2tIfD2Zo2grP5X349J/VFzNw2gVioyJJrWzqLhRaCcmuga/G5SdtZ8DJxGD2XjcdPlGTX2pE+gGt/5Elt0nByp4ponthMumC5YnBkkSfjXWJgvwXYhEhOP6pPnp6bq5fjrEdIp4bBuh27DoT1EfTtvLsevnoxGFrpf65CYSMA1Py6RFt6gTxW3ZGjM2O1mtVF5MPNIHo/v92z/k2f7kfDN0/WyG9ffBfCsSu/bNWJtl9b7wbXYncna46uhNZ1nBx3hjjy7ao038OMu7PoLodi9J9t4im5/U+F3DtJcQMeNrulCjY6OjEIPYnTDscy98MaGKwUbekl2j4+EGV+nMxb++O7VT69O/v7qu78fX8LFM7q4Rc8OcVw4OOC3ZIq9AUNHEWRMjKJrYIxeihRQyXIGgL2Ip5++XaToAjtHtmSJfqB3iJr0V4wOzt6/eT+8YsubEcLxXZInQr8/Y9OEsA/3B2eAjIhbhCPB2KbaNHAjg0vt3owuOSAhf0o6ftU79x4VVkY39wzADCgfm67JK5VvAHfLlLhyDNcXqNnPuWnsNZRR44AV05G+eJxjJCKfABTFp/A7/tcAsPsbjN87y9YW3uBF8A8GJ/gJcTiGxr2cL9jsGq4JOQHjMOPScSaZayYQS1/3QMlvkxwADcn6MAlZaNhYpLuBZl2x9CS9cYnbHIHYgsQPzmWZ3gM2CYRPTkZhAXQi5Btr6SgDFAnQA2eghCVRVwLcRBjBIoE94NympZfKDYz7SKQ4weImtMjQZA2ym3U0Xwvo9Yd1nMXA03Cf8UuBai9Di7F6fbUdxuH+BzXfA+hn6JbPTddQDN6Qz4rULUPYbV/xbAb422n5csjVrYb7jpaxdnbO/rT+hPDBhM5A4HEHv9lFiAfyEmPkqFQfIA9KzK38wcZV1OdkVdnVZECKJqzJCJwdL23br5L0dDUlFx5kxInbsfcN959+DRGR8yCTBkrhlkOqyUkUNnTLQcj0J8s1s8sjSMAQtxRJsS64EyBNUZp3mcCtSP3YPYUEISaJyaTMposYTcF8UU5t5TqvhEcjtDZEqhDhSob4z8i1bTLutrr+7t3hPGvFj3OQE6wqH7BJ6tFn7r4OnKBpttUtZ0FgCxAU4V9mdwErgQ5/7rXOZCub0W6cmOrH6Bkxz4h5RswzYp4Re3aMGKFxz4d5PuzR+DCCuC/NhtUn8ZhcWOU/4H13OunwiXfhTCDbW4kvd/+hdPikrNcU+XCdAeMeRJ3/fFX5uznr7Gz2OSjIPLjdx8PMA5l/DCuODKB0WXAwfPKolmOIojl5FLQ1gB5xbOnPUOYh+R6TiSjGm+6BozIbzPvsWOde+v1+GVPKLTv0PkoPXDRjwXq5gM0LBtqcCG5zVqiyLqY1GaM8y9H8FDNm/LyGS8I9+/OK5cAxArhNaxLI2S9JXihoHF1QlCgA6ejBRZKrkk59c7X5JjBX+2cpBpW94UEmBR4KZ1N52Ki5SWhrUo1N0sSE1BUbh2rkaM9gXvTTsshGquAt2wUD6lcgEtpPeyCrwbjuYtzihz+saUh+zBlHXgsMIxC4C+V7EdwJ4vd9kE8BZ1QibpU6o2cKgMBpoP2Tx6STtCizXFySTHgpfEYuEUhu14siWaG5FAQ8hD6jO5nikDiMIWZEvAJYITVMQcwMSqllJwRR5KQ4IpwM4rXR301SiDQkaI01mWA5+UHOXTYFI4qcMwAnymo9tweRS/dchivZnBv/kWaf5ov03ureODra1gcQNyC6F31u6QZIzmrIpi1Y4eC7rbHrmP0oku9F+OtQfnN4qTilMqtH0LCkgXKz3NK5schJJ6+pKtRQerBEXeTkRmNDuVQeTwNYsBjuHh4eqEhi1LyaKwZXIuO+rRNXGpnmLhS3oYk9YWF4Un1u910DXBfnk/kAaVDwK62FADWZ8b8YEvR50OJD1nASTc5QXIYW8DjE4caq7xcKVKNRr8Vlz3zBPp7QGMhcJK8BoTGkUcduVQFHSq/RM5xrDQUOQ8l7Kt9HnVccUOYHGegYNvnF2W9pktPdjMpuh/aDGDU7qPFYvjIl3H6TdZ8Qd4ArsxQS+6Jv6HA0GnVxt+zW1R4ue8TF9no9p3qpiThs7by/Tdx1ucU7xF/XkaMzcl0HpPKFUWc36acZd9BImlXGnpKjtGkjR7rWRljMnjdjqaWv9HzlA/GVDlW6Zyt/o2xlg+lkX65SSxLkmUrPVHqm8jkzlQ5M4XnKr5SnLC1Qz1tdqWc493zlQ+krXaGHnrP8rSosuwSb7qyx1PNFPiJ36Vk1z6o9ef2f6+p5Zu2rYdb0fHiCF1gKM3SVwU74foRq2vqsiNKs5NZgb/r0sI/XHSm+xswRzAZ9+bVyXWhLCjvvvyoKEMELnlfu19rAn/mFH/xqcpefB4bjyLyfLsv0sXAGwhugTCZB1v6+mRzzReXvUlX7EKnwjgyXi6imU9ddLpq5GBjCklOGYHDLvMvyWy3Y9iD5oBVvEFdiCsUVxIwHORbtek5GRmFeho7YfiM1TJPVsxMXQ5s8aUhTYTgIdxaCKrdyutMWvyGtaJL637l9Ijs7WdRHMJLljyxBGUc8LoSz+7iFWboIFmm6EuWVeIUbkGIs3vea5z0PL0HnnYSiL/pIfProstWfpVRLx4zCAEzXx0IsAyFAYJoIxfkGnb8W9/EG3YGv1tfjAAMWxmZEyA2jCivLgnK80xzVWfGMAZeS2b8UF9sUoLjXEfkKBeT+vJQBCHEwj5PFOuN5sHG4GbtjC5DzzJAQvl/kAncPJ1Rw6UsUjyrjZ0RvvOoX+cUZ3QDhrvLL1zeRb1swW1OnLYcSBh8pFgIDM8Y86IdqG/H4mFmKp952rvg6wkNeZvcccF+ojL2UHBlsWXwdJ8vQlPfJAyrHopnI+ygcbc0r7e8whIULJDwgMu8gIYlqJRgiAjw7auDulRP+x37v1WwlZVWIJkyiJZIycZ9D9btHOptW7Day8YAOnDzsbYUX5XFN3DiMDq+SCOlrvRUwmYt0Stlh1ivElcortZ9cOKueMkbJ1gYgcFqmIjuqhdEJDFdlKxtz98AFE8gG0Owqxvw1Yd1ZtMsMzLIyNKQ5jzfKhVOu2IHm0jWBzovg7+k1BctF6yXHSrOIN9UL1QF+odizxMQOLM6xSABihhkD1HytJRikNq54SI6AsJ4rxfthHF4sfDLzMozsipfjq0UhYvU/vuBvYcHflo6n39bkztXmsirVq5FqviNVmTQt8TA+rWUXNl+D3x0hsCb2UzCf6GDc6ng8smlF36VlnV0RDarVQoStU2oa4uaS2q8uAguMLGoMNqBMt0d6xWv/KIEnGMJUugpGElGOgl/F+j//uYR44kLyYCBqzw3+uewHv3dOYTAIf4YbNSyrC4e82FnE7wYcqdz2Udf4sl2dw5scxMVihg6JUNd5kxYVXePhmIlIE/EulOqSjk6ANi/WvExlMFjBZmAqHSnVyew4XB4CcuroBCOMYQaIjpcxF8i4Rz3e9VvOI35KgHFJ544e+goG6f9ZBLcmyOJRPazghi1W8/UC+3P0UGIUCisl2Q2LpuasKulHWNO5D2XFu9BBv2UIx/pQANxvIcp2dQ5cRjsgacjGqMRifcHgskpco3Y0cr6ttkKFnQy9E4Fj8gbQN0tEpjMcUVJ4wu7WejG74B2Oez4oCOMBj9GNKMj21e346Ogc4N7p5Lru+eHoREdasf25fXGacRC6YQeJfenHHjTkYHTkYLTkMPTkMDTlAHSlI215NPpi6Had4kEXs9ALroJZgehYbABIYIULGaaHaSawLi2rbC1/5luPwLTOGe57LecI1b2Go1XOrYMo812cs2N5AynaXX4x53sINNeC3rqgtQOgM1IZluvEYqG8HPrno+DX8vFOyK4DkqvGbUu0cOiYyQZ0tjca2xt97Ye29kNXe6CpFvR0QLTUDWhbgldbDCmHNGfsYpTpbALB//QCYbVqRo6CYVLRoEbV7qz7P1LtfFwPz+sNcPM+lagElBcb1SprAbDbVTEolXj1cgaKg4GCjEk7DpcAAVXkeyjTYf2uV9ceUQIkqiEFDaMrBu+xqMr6CndsmcdTvtGLzXA0AFJFFgu1bJeIJOchuLkwCSivSm+uCK5FhEqpO/V1OXV11kx7vRD5ubhuy8RLL3BKmOJLHxNPOJkmKypgT8rzEfZBmsB6F0Kta4xMdWxl4bOaQlvkx8LBJlY3KKoNQgmALO9Y6/05SojahnSmU1FTl+8TT2zrs5alzTKzUDa2Ks7LbOpd6yaaIGgtk2j3jtGrHiod1dwmVcBpzFMjL6QCXTmmehpuXX+Do/RxUHf2auEVWvbrnvCt0/9v3NtmkpGjubnT9WY71RHZq4ZIk31IutmY+NRdA6VDDZHWlFcW7ksBtInyud6Q51bC5E7ZGrOHTZQEEeYkErhUbW3pCshyJBxGRpbSI4IAG5Qp6uAe0OAW0Lh9BzXo2err0Dr4isPSIU30YGkvrfZAF5eYmi5Gs+w1cJiXx9JjmNjM6SLOBa0DsifcWcg1+d6WiO+e50USxR2F2SfoEx5BvNbnWZKSaTCkqw0jvBRkM19f0WAst2UKTDipTteFTN5Olnr8LHuEQeBGFcg/oIknzZDhh1nMk1+IcjsdvMUulRidHALIsJNcgxzLznm7l3A0a3ZR40BzQA2z9YK1sKLfPAxXulV+/W1K0PISsVQNtp3h3YMGK4Viu3PY21R7tiLBp1Ny2SE5jHqH5nQ8T+156m489Zb8r6FWA7BQiyNTsj2JIxVCg8zV7yz+b8ECJELbgMJHN6eklH+0vamiN3WVWlut3A9GU8CpJQizVXrOGqHQ3qm3H1mUZ3YuokFlX0ffZ68+/kd08ibCgsNNPs7ZsKxLPKQ80pOm7Tv/w4XiMD/qXA6u16Q05neglFO8+LOL+GO6Ve6hf9leB2OvJPk8pLDO4oYX16x3e38pbBchjAz6ihOU5EJ5/I0z6qy7n3bnKLNRl9objoEEYasdIsex8udOMlwllSrEQLtw0kHQVZWu3dGykxM798Y8xz8X3aRPTn+lIMWDQlQCvLe82kbhm0l2RzK/I6lvJuzDlkCvHcm+i/Q7AuMaPBDGnZOmuwToBrrvbiGCZo6XRbZZpWjp5R7my5fSvTZYsgLd1Ek8yGWlgc0Kq2BUpQtyUTWhksgfzyS0tTx9CMuMgBMdTRgiv5K/W8rG6pdRz7hXe5YyUEXLdDlPstvS0ipjMKpKDlWZCO4SQNwAxmOqWbtflBVTegbx5tUkoqqXiaM0QdnCVZygSzGChuIDI1XOck3ud1JRUU4mqflRn4ktevf+TIR68KwE5Tth8H2a3cfZTJbEkC3gXEyej36IRFkG596oZRvKYYaOReioQNSKKDUwzeUkjAmNDCXMASteiEFHtRIqbfW1Wjmmsp6DRhuS5V0qgMZV12Hkslg5Sje8CN6ixjTnYUKbQJKfcgYBV2lUXXGdCYIG3kl0z9hW1q2mYqN2Lcat8tfdqlorSlR4Uz+ZdnP5wRCqpno0ze42lZ1hee/pssjG6qNrZQvbq0XUCKchyTmVzy5ho7W0fKcSJyZwaVejK0PRaC81NqCLwnerpT7BkG27Iti9f4J2d2KHLfXbd5Z5Go95jxi1LQCqrQr4NgFVhwiqqnsj7hdcVYlIz7c6+Zb+ow/hQ9rRj7Tx9Lr6k/KxPtBYVKOofEcZlxYj4t6qmDeqF2DpTGZ/4tYL1R9R7TJZUlw1ZVcy61UrFlRZaw2RHa+Kx/snQQodBHGMWYqmXWDugSjH60Vhc6zEsno3RbHKj7799hpAEVgrEOC/RUDl/yR5Dsjj2z/+6X/9f/9zTGDCQ35rZXlEf9xYQHYCdJnkMXuS1RG1ndB9E03JmGMinlvOr4un7aBytC1P55/LwQ6ur8OR7vnL01acz/tdvRovOsnXGHP6kl8+HaTwNK/FjeBL+l0HiJ4npF238icWKkKx5YoqROpVDcnQFUUig2uYy7iWh+0amC00N3tob5xK/3rltjYfeo3QEltb91k1kx8+6+QfWl7WvXN/UG8PkfqjITPtV5z5Q8uC7RN/+MQfPvFHnal4lMQfPKf+k8v7oeJjn/bDp/3waT8OmfZDLbnqs350iB7jWNIn/ThksLZP+tE5MHvv6Mca/PqcH4FbGfFUc350OEU3mvApP3Y6ti9NMA5CNBrsYD7jxyGJyWEIygGISkfC8ljExea77RN+PJeEH+UB+3wfB0diPt/Hw+T72BJm29J9NFpODmi/+G0m+9DU/T7Xh49LfF5xiVtGwJolXg8Q6tjJdc3HuvlUHweIHWuyCPlMH/tl+mj3BvCJPnyiD4P3LH2tG5nQbx6EH32GaT408uuzfDxMlg9nGXvPTHtm2if58Ek+fJIPn+TDJ/nwgprP8dEg8/kUH+1yp0/x4VN8PJkUH49lBnrQBB8Oa4zP7+Hze/j8Htvn93DQd5/e4ytJ7+FAp5rK8blm92jgXVuVoFtdBhto+eQezy+5x67Cjs/t4XN7+NwePreHz+3hc3v43B7G0XXK7fEaQ+5ZvlN2j1Niap5Sdg+xmj3ze+w0osnIHyAJSO1sdlM6/+bSgBh77hOB+EQgPhFInQN5lEQg4i4+lVQgpfDeQSDziTR8Io0vk0hDXBqfSmOLQswCz/hkGoeMg/bJNDrHPO9fSrwOwT6dRuCW/59qOo1O5+hGFT6hxk4H9+XJxkFIR4P1yafUOCRJOQxZOQBp6UheHo/E2HylfVKN55JUQzlin1bj4IjMp9V4mLQaW0NtW2KNFrPFQY0Hu9hAnn5yDafh4gun1/DhObvmJZAhI1kZwNcaS7JXsVin5rd7FEmHCJJGH7CtMjNkNIuHiwyqInmqo7BkAeDmUafBzIz972IEfCLR/xZBsPMFKuM0eZC+GTPLXbOLNIMfZWCvow9uCeCEttxUYVcCrhPYAKTG98KTwaXSgquDin+Yyn0azBJYdIbGNtrTXIQpT7M4v7Gz85o914W3IgVbRLQ4t3invNZVJ2lzZ7TlB2ihpd88EFl9hjkCDJrpswQ8TJYAY5uHnivwQbv7keZnH7TbbGb3YbtPJmy3kV3zgbutM/eBuz5w9+kE7j6mmulBg3ed2h4fvuvDd3347vbhu0467wN4v5IAXidK1fQBzzWEt5GP7RzZ2ulC7BB02eBG4YN4W0xT7v3bM4h3d9HHh/H6MF4fxuvDeH0Yrw/j9WG8xtE5w3iJ03Vqnp1GPEUNfYR6nx0tcjhkI3uLDYiLubAoTMz3Sm5HqEWQS8otHi6W2Bv8/hqgEEnI+bmz45L5urgYy25e4Z7SezjMxYVi0Ov3+6e08RiGKYUQvByUBrk0AFSxgpTyHSRdmR9a0WOc4r3Jg8sPLLsFVAZvvGHLhM0w2ghoD9zFV5XvBrEELEdj81WZVV4PzhVXpTx0JVoJpq068qRVo0AGPnFVF4VFihDX8pfb+DqZcpNQ2LMIG1cszljGDT2Y8TiK5KsRvcp/iaIjm5yn85HQK+caY23ptgTQlrcrUa+CfBF23gEACJLqI4G8DOwGd5vD/UU3w2BI4a9serNEXSEQlKWI851hqYHfjWTgrhnlqywLOTzgqze4vuQWkx8DxIW2ZNG2HbGz4C+C1yS4lFhWgmD1cliqguLgUpMFLmsRcjO2YvDPsoAFivIFMmu6xGLaO5UhD0DILTxJwWnoQOg/sFJZGORrfhV5gCDxztolC5tEM+AXVhvSP3EI5PZMoU/BPO1aVxaca5GxHlWg20eYIyuZVDg4bdDSegt/bGzBD6ww4Aeu1zTJrTuv7WYk2xmqBAUStzCMKp/Hj5f3YNxuRT9GB9lppS21bBRV5wjb1TeNiRPc+2tfyfnWESHvP413iCLBOQGCwEvFZtt3YNI+ew8X3eRyvHIk8JH0dGTlcgUdAPJqSk9AxOFq3iH/T5kFrBhO96iUIbySHTchHLny25QUZ9Hn0N1GcO59hzxcrssVNKDwCYNfjel9HgR9x2uchoKQsl6yX1YAvehihysa8Kna4U2ZsLtrktJ5QYzBr8rlhVdgq11vXXZElcPBrzWbSZjMPg9Gl5bYSXI/CGqU8mQu8leIWyqI6uVZtmaXY7H1QCO1eIRLTuMEsY+NLi2sHBeXh5KjAyp6SQ4Nl6OAqxsujTtkUmHqoC2ThAMzNNz1kVU426NLYxmj/QPCtf64lQXuaGdwekCQchmr94jV2wa3y7gLxy36z3QdAENuCAMkpOAefvH7WJdh5SRrzqgWRzISYCWDZxX+rMKmJsL9VPm8cdlF+LshU29zf6uEL1V8E3Ig9jJMxeAjmVRCH/4ySK9+VvPKwE7O1lNu465c76oB58pTTL9zxeSPDqluC7lb2pPqQpfKJetiBm2NVd5zKmj2FhANCOl9AVFDPZaplzf2kDcsXqI6tIXaLd+dx6f3JzbIG3dERb1e70XDf8Frcm8I0CEgD5pa9oTbRc5Kp+CMLdhdLFyRuJ8ECOJTNG7w0IRT2vRAhhYGH1Gj3XshHwCYImoH5HALm3jHcuAoMLVW2dUiT8eiUhlm2oK/VHCQSChGB1KOsFtqB7isxwsmRoo2ZH011JwDYZEhPpUelhb/40PCpKLDBCSRFFHUQXfZ6GYvHez/W/0VHhD+CY/FB3u6QiRkR47Fnap+Oiqc1dFwXmSG0lKNqzv5+PHH46HF0sHHfTljd9/epstU2jv+7d/+3/81Qm8dpQ/USZEBh5AxcPOLZJqg2maF5ytMHBqtWy8X6Lyj5GOixG/EKyNbamwMcMQ8qZKS1w3geo2npvZwW7o5kesVGTXVOfDB4Rd0PRFATbHVmVouT2iZNG2jwpsq7gqtJ2owojopKoU89XGFFCi4dogCjwmKipOSmSfN9FbS0U7nBGuVh7HDsdjAhh22yLwSI25NqsDStkkTOwrVijS+QtYclYN85VUFVnHAOdceJiLKjSfmuk6lpxmaCpXeyJFMFG0l5oeACC12ZUU+6R9GWQNvYp6mMJ4CVkEUuFA64wis53Asi5o9yziq009dxN9ZgjDqsRejnv4WYMGowoKRggWjuz9GpR+RqFsbPYzrmkT6im0FaSU10gmBRPldsHH3aGgdETuioextzir7XktnIsHljrj/m8cnA6ryr7y75+0sWNAllq3TVo677GQnlKvYnFswaBND14oAu2OpFxWwB/kKZGtgymV16KNe7wt6d+sGWDL9NkpxHPB+gFv+VjTXIWoXIDyYh2MtmgvJ+LDniEY4pOxS75YTnq06FdjS7HtgD7LaGaPL/TNXYLE4rJdxtpmgQtJsjCjA+gM/EyHAHSp5spo9bOLKV6m/Urozyw/b312SJwGCjmw2UZXVgTZ1273VqVhxia7TQY41H5IOevrlKY9KeQy6Q6b7w5Id6rJGdRQhpJHaKO3Ck+pzneQ8SzIm9sakYgr9sghr1Z4UZhy5IRJMHojWKdBJk2yIHuJQRJTQNaXD0UkO1ZMB39eBlbzZDesttEI5hYny2aAU6ll9Ypuj5jjzOmfygNzJQ3MonEuxbfuejAp16cy9U//Bxa8oPIsz8ntnxkW7xpaYfAfvQq9ZWZcOIGlqcgDgJsb3+gsdqEYD37M77+Pgf3Ti81i1aD3pcRd59JRnP8pjK2HvCc9DEx7bru9Hd6jHJ052tCvcmerQW57oeE2b17R5TdvXo2kzFW1Cs7Onqu2bJ6Z186o2r2rz8s42qjaTda4NXeaeuvBCklfPefWcV8959ZxXz30h9ZynVl6l51V6XqXnVXpepedVel6l553nFJ1elVTd+855hZ5X6D0/CYnXwcCV410+mXnBx6vpvJrOq+m8mq56055RnZJlYJYXnDDm9F2zEWVLbcx6fkSZV2E/j4Lkeplm7DwuiuwlULNkyWYXrhrqMAamUGgp63HUkHebmDkT2w9b6oBIpDx54PTVnfEzTy2cDVv6KQuUTKo6JvyEQipnMt6iHvs++V1caXNORCIM1zpkrpfBWS1NP2UaggeU4w9rHcks7QNXHmuvT/bcklcTe2bJq4m9mtgzSp5R8oxSK6P0mPYMzyx5ZukxVEtWk4xnlx5ct+Qs1ntgc9jT0y412cd2tJF5tsmzTZ5tejpsU80iXC+3bbcMR41mXy2V1YFMyXp6rOdh+dXm/ORMtRURq+ooTtUza7flPq4VVz1rAdX1k8NyokVyy4L/DvDPjC1Mhpi7/ygQgrBOGI/XA6xOWhSjb2jr4lWfCJuqVuPYwTpZlrEfyl0Nl+k9FsoqfxoZKSzrbJKsdV8dh0GTKZ9l2awVSsOIH0K8wjo3Q/xSTwmMTyvE81iKcw+gewHo1grh3wp8fiH/Sw+jOyDR7eXw5w6lLZnVqzo2rYnVT2Ui9SKtcqP/OYATU34QWdHDXq9e7q2EVPzyapHE+XapdiuY6FmrFFr7/2dP5dd34mGUPv57Zzqzcyc6Kqjx/NUBcrgz609UtYnysGprKcY3DuylH8c9wT03n2O9Q3qp9Xysg5ou7oepqtk9YbIhlnSqZVhT2+5dYrPbUYZvROWaIzV1u7ILqFvYUpkm4H9w5HZKJnxkSg/GTteFVqUW2HCnmy9yfo8O17UurshTMwaopD+22H93OavUtrkG3/sc91ZjtB9layWFb4Vck2l7lqCrc4kdNji313TtWitwWPqJf59muyKVcCtH8j2Q9m6ndHDlx364/FFPiCOmcBvPtWd2PnXR/xkdj0Ru4XYW8+d2hSyy76MfUovYJGpGfSxLRLXITt9hJUri3Bkv1YICFMte5lj7FCv4sFsQm0QRn3Ru1KSC9UEfJw5By2EE0GpKlf3IXwVPX21bM3NetStLUik29JwKUp33HtKue/EopbBqY0Q7i6i8q3myYNGM5dMsWRVptnV/b44/vj49+XD2/tRiicFrrpg2aoaJkVKV5937s+OjYMl4WcqbdDELeAVeLAd0m8xmC3aPVX2qGkCzNEiWi2SpFgq6R5tIHsDILBgQI0VPhmEYjgajqujPC+Wd79g0xvr2g6gaZiCLGAK5xFruqyy5wzJFVLGI6r7fsnipdAIdwC27jbEqfLBK4bZewWszxBRZusaSkAC7+Ti4Whe8E+qfygorvSySTwxeu07uGNXG2gBuXMNOUG2teIHG+E2QwsXMYKZMHX8wJcKuLGE4GoSGdqb6sUliFDfwbdlYLw+JJ1wfrF3ujVdlHbAomVmsaK+qBiczjTrkbJmvc/tbr+XP6jv8ggj3H+0l7RdxEd+aVbmo3BQivIhjMa2H8sfwg/zEy/+NzZJS1gnIMpe5WRQsjF7zB7XpcMP5NJ7eMEdXSgvSfOav8aPSg1ZXsb0oqN4+D8/w+0/i60XVLyMNa3QXL5IZHZydhnNF7E9lKw0oqsKf8SpBBwxA3QBfhaEcIdg/4kwF9H18V+440d4G8D1y3gJNLVR7b2jzycomOoDXIXuif61VaCuBeaJ+semQZTE47Zve0ITUiflg3FyfrqkunQJUE+Wz0UiDlIn+VW9aA5ZJ7UltX13AMWn4rR7bv5nQv2NLFTbBepmQUaG6ionj5KxLeWE743dRY/h0pKrvXffRmi9ry6CLNP20XnVA37s4eVZuW/9g8adTNmcZW07ZueN5GIl6O8LOcKGWxDx7/+b98Iotb0ZHQVIMsG4glgwUpBYpc1wQr3CpzvSSqlcq3VBNQuGQQDUHkchfAVuxns+TKVVxpUL18ScqvmoUoPxWmkCC2ZpRyUoi/IHwoFKA5c901YF7VktyEtnkRV37wAopbE1fr8RJi4kX9/EmD+7T7FOudEJlYmEuojDnJYGuOMbRZWhKVTr7adZ7xOqGw5FW97ksHplbKjhzf6TT9RINRcfIEtY1VIO3wktI4Oqyx7s4S6ia8qV4cvnnYFB/HRHzJl3DzlK9ZSpcSyIEuoKmwD9x4eMvA0OLZAK6A8ps9kCOjLnlSi1Xbje1mT6JjUDc0X8mwFO1VB6t2dr4VnCKmg/dnI1oobDfdiep+qU3Lv7hpG3VY7SOQq7T9HrBsNMivVrPQ+GGFr7lf+v2i5JG1ftaJHlx3mATvrD3Fk3TRTrFwsjReoVuWK6uizVIxIj0xrXfycXv4sIywsiWeIU7etH+opvXLht8MdLroNfELOp9IsaQBzCRH8Z8EzmJH1v2YFJ/dDg1Kwdn/kgC9ZMH3UOF0XvoJeh19VtB6PnuO/5lbseBdNxCdYZPfpOXoyFw0t+Nh7gb2oZ/oavBBz0h1Z3wYQZ2FhlDmNh6gRyrour9Kc6GA3fjwRjYJmIsQfjFEBaNTbK9NxSdf0BGAyZ47u78YmQm4+N3Ddnv9ru2z+VSwqRsyo3QPWcdFMMwVPcjIn3XUW8n3CE1IE6450K0bEYF1fnHnmUXUSK3jNjipq8nMdN3aaeN1lfQ7/fR3sSlxHWWoTgo69OjBhcEt3sxhRDa9pzXs8VzX1+GeQ9BCNO3UtNZWeWyrrIZCVjCeKP0eR9zbTfX685sYtkeopkhntkdHqyLldKYVJHWgUZ1iah1pBlKXNLiXwU+QLX6Io1nFljlNoSW66GGkcVonzIUmO0xKEaGPu1NmkJ21BEVnCOEXBgkMEqJkuVRpI+PwWKcyOWGskD5xQwWMhiJQrrdMY692RBnMBrrN7QOtyV++s2exDa4+8uc2K5TPBRp8if8Je/k7gcIBPADy+ZpdhvEy6DPbbF88/oOetlMArQw/doRj0ILaGjon5/bWN1V4uLZpJDuvhb8LzijE2XwI51YuZkkO3RazkLlnyyA1RikrNv87IkeDI+6I0c8uY03s7dUxoHGyjd9a5wou/VSu7du94t7GEJ5+IvpAIjWC1qZ7dj0U8Sbw4ALaF6P1ndQ2Bqq/U0c2x449wsc777T7X7+u2NzK5x4UHiyN32/k7bIX44TbvQ5r47L/ptKia0NSDTLaJJEpO2tql2ZVB/tTddLlYtw5S0ZucA88nC+L5yL4+Tg3g7htnQ06hHaWj3gBSidUZbXERMqdyug6QzVuKFN4mLTHv96ic+HvmX619br9ldUyyRTHkmj/3Ibb65glutlNF8vqahBVNyjG2+RypNh8lwar3Cnc6y3ccHk4/HuHq88a7ySzNUdUY9cehTbWfRtFLikiv0+XS9nsK0z+IMu99pIy+BSbPClXZNr3EglRxVOUQXUa7ZkGRmA7JPpnyhyf5YHqCIWnksYXZFk3KGbZ3jZBCwpbkD+RIWBvTt1HST3o2cMNFeff2Kbfq/zkg6gkS+18tvo47c+0p318nvq5h27t2d+yF7L3Wi/D8ZdKrNQtb6ozh5mY+vEOjt1BHfvSs9Dy7aJfA+BNWHa3/hfOxAYfsTSHazJn7iedKLuxzbubXHYwe8ncgWY7uwaDlZJINdrS6bXKVtnSagwtaOcrztHZz11x4Pm6txtSxUmgc+OPATQB+RkOcPTYzlhMRVZhi7wwpycO78vs4XUnSDMs27IkWgc7aSRh7Wn8nRd6Xi5GRbnf7hwpBQ8eXP89sP7s+N3r/8z+o/j/4z+dvzqzfEpzziHhE3OedSQb5CQ7k+Ycq8F5eJ/8/6blPBJzopg8GvnKX0eVJcG8G6GzH6/IbWfaz+MjdsSu8F1bV7esPOCMP47GxrTGY3G265JZGy1WHPXOZMZYtyTFpOcuLFniI7PBmoqwcI9XQN/HDIuzz2oWG4t41Bb5sHa/eJXvsyM6BzwRfAaOWGErPsqZowCyFbcWoMMGXIHt2se0Pk7d18No/yDYaQbdRRdMeiXReSWjszHoKiK0mH43HA0CK54lF1DjzBjzrXAK3gL8MrHgdKVQI1BFC9nEaxucNfUnVy6umqmdQffl7hJs3Q5KIDXosDVhh5hCSnAjT4nBI1kmqzw7WF8HSfLEfb58zrv0qVMhaTPbJCX3lah8+WKYEbyJIM2ZNDFx4ILUrBlkWWE5u4r6VPCaWPz0baYxcSYyso7YU1FzFmw5dDSTyj3fRT8bhL8obEn2RR2/T7DTFciXPs79BMk6jMcdeog/BAD9fgekNrHIoP70zyxti5JRt5GiIX5r5LppwUL0RSUl66FIU9a22scEANGSskbaPsskO6J0PNIHosqv7dCECffiIU7UO+Kin8sUpQ1+SgYo04zGvyqzieMRFA2EG+KnhlwcB0E/Y6jiAVB9+wXEGkLNlPHEWtUhvkzR70omE0pb8Cs41B9xAkD7HTAw4GwCz5mEM9hztgxItucrzsWK/9Le/ctRyqzEVB37qZaevZ2tGKShF53JDK2D8BjEmdJvooLgMHMjU2QfirjtyGIrdbFp7otXhy3tnd4sW3zYsNetXfDI+6OAsxWgTkgiJ0QBA0pP7DxwacE7ntaxUhyVIx02wjMdw8i1UYpqoXu8eKvYh49dom4/BLYQa5jwQC7sLXDMgCvQfzRFIsVVEyUz80vEjxJz24NGrjuORt1QHIS9XILhIAixeG65ZI+EO7dGf9y7Hi6G/KFmfa3GGVLBNy96/4smRGeldpKkrinaZYh1uXI+C/duutwfMLkYAtCl9F73fZeddPv9AL329dzdXZ7swwCcHE8nfeamIuJYDxm69tVLuGk2/6Oewc4Alx5s3rTDC+pspiHVZbdDvwm5alVmNRx0G2r+h9vKAOIUKnzRCC8t3sUX7L1cskjii+lp91l/xBbo+W5g0tXhbv+iqOHyu+fg34nZGUYYDqtX53G7ydBX+1D14a1r5ry96m2DW5f6Cw6uOakTYNzDnUrxqAf/N4y+O+D/qDLzPOOc5OVRpSBDKXSQywRy6jg+gwFEg7dAdSsHIuwBCMtimp5IgDNF9mm2w1apNeY6oL/6YblLDWkJp0ZN2P7Jsrnbi/XrdKT+qNuXTUWe9gRMQiXCQvbE05TzBRWsKGYZIfeHMKG00ERLfyaqYBHDSlO4ME344DF05sIpySS0ghXKvIGchh5eWhUaPgBO73jtp0gTIrMI6U55DDTqI3W4jgv9qk1fYfDFt9i4bF2YZ5FLawSzsYSUrnr9qCFQaJ17JL4YoECm+Km2swFA8POLYzbikHbarmGkQe9ZsWXma6icbFDp2vKpM0jSbXnNKUEUdrZtwKxPdWdolVO6F/zzk30r70W/q3uj/+jwSx8UY/8rRzqvQftPh5Ah/bt2/VabXW1Dnq95BUjvIr//MmhR7bIQKMn4sfr8m82/Awd7rkWF0N7dcKRTgn1d8z0k51wrY52dsS2Ylp/XWUpyMgimhsnSFyTOa+WOTWkoTNzAx0gH8tf4ytgBuJpoXhnHiQVtsPO+RRTYe+ca0Q5U+Ip3qXFicydy2bEXBwqM0jzOe2eEfvpHZMrI/auWS8e+JD0HNgt1+kryYu9e13YTofVkgubZ2dtTYF9hnmG42QJJ3PHFoi4X87jKerW4O1ss0oT7IScEpYbmQAbqVioVR66Sosb6E2kvybpo8xuHQzvb1LMGBgk1HaO9hO082XJ9U2VTTu4wmzc5JEyJtcPtlhAlyhQzIEuBVcMZyVHgPdvAW7uWD5SqxpFMgGdSKJiyaribDsYBwNneruPZcnPhkZ6DrzBSJmXynZtM8eG9x5gvmbWciGAfCwlhsYSQ5oocCxDC7q8IjX/vb3Sn3/UqgLtX85q99zm/Y7os6/l7eFk9fs1MEYKCqDsLCvgMvnNCub0e0D2GUQXM3J8TqV+XKrGyXXwhukoMkRUUmYNTUotcIzdpesCRX3hskR+VBk66GygOyWnMiLoO7ahGwyLAgSQTPMqEalU+UtHJDmfYZophesXiyBPU7zUI27Cu1nnckRyIrpOyMyPZqk4GM4SoCfJ1RqwXyUUiI2AGSVFqG7Xbol+GumOoDhYJKz6FR5QJt7wWHywiqbf1DN8UU5vszB0a9YQUWtOT16sWGaMXyzvirER4fBPimZP49rl3olmSlZeY9JWOUMbzDwMkk9llnwl0e8PPOIizc65oYj/u0cGvFraBqo3nldVnDkpSvIbgkA+95xn2S2dgSzpjkrNBq4DHcaws+HBeOhKXqTTJBWL5dwxhW35jCp0xy75VzuOsMJmY4cjtaPM89DWT8bmo06e9nmxvhJwR/BDjqxhVRJbLMXyJiAguxFIO4BI8UuTuvr1VfgP+OTWN1TQjO0ECzcUK5xo622wvJaO5dtGPtR97g+x+XV3FplAmtAuwxTyayrvcMWCJZtiotls0+SwyXsCHBzfXiXXa0wMdsWKewZMmRKlkTf7qRhhHs2OKiNLFIbDS7j2lP0yZSsgIAhfuJGvkvR0NSWmGZlJqjDjjLyhXwHtzxjc6MmE94KHsM5fw8Pw3fuz6Pv3P7570+aHv1vx+rIPR02cH5eflun98owwToPnFzma2MORuk9RcTiHNhH+Zc2uMfRzr21K3c288k5HcMn5ue2aP9l+3jnvVdrInMEKdkwT1qYX/uMmmd68X7J0Diyg+WufIKp83m8AIfNVdLbtOgf5pLe9SV3ZENQ8Psz8WKVraPAt3p2UOi4GHKMbcCn8Uy6ecwPmtEvennyky/VVlYDC+XqxIAnBfgO+DMY4WZIV/VV2vUbtwbCFYIjrM2mJHeKeOOgPgRbQ4Ff0gCgNokNKGauTT3IbirDJaPS5xTdt3r+Jc+7Zy6GhcqxrOpbPbe7MfaxCxN3nSGSiLneHs1Yfu76MTcWrgSOmSymk4YpuhAw3LYTjxF/6491ROtW6jhqIm4iS4ek9gfinS/hnipWxFws246gb5bZ8vVpx6GuBV1mT5rXsg5uR+2cEG3GudH61gYVzXk8I/P3RDuipfvo/Llfx9NOwPUqgcrjguNEmthgMfVjJKoIr1fK1W/UMpT5Da1qX8eWVttx58ROgi2qSxwLHihF/XALtO+85uHbZEUYn04vjtpZcq2e0vaiGf3t89rf3b6Lj09P3p9HZf344/ngU8LTRmOWJ3qP00Oe2l1vf0vFafazg960rPf3wers3To+/ew+cnPKOrbi75DmONbYmQu7wyOQMq58FCrW7m+ymmhDz2OKUDaVD45ys/isvAiU+lFRF5LrK3S+xyEuRrTkeTbCKx4yKuBg9EJ4IgzOhaCKMs84BH8gSRvC91p/RB6E9sVheACasbw2Js3kX8HKBWBew6jms0GY+6Hq9P2fCZJr9WF2EmZyciKjksSysEwKj1BEQq54TSBKQRsTAc55d6aied5k6cXoKvQjeokbuCl1wZQVM8hRPpujrM2OA2TAWR8Qpcsxs8e2giZoC1avv3p+eHb+xrVq8gX9sPwuYhhbiU5syq9oIUtYc12mlpr8yNtveJ0mKZZfG4ho61xdl71ssy10SCy9vwxj1bSESZCQgwpEITjjgDKeLnId3rMmzkIAJmR++LAPWJWDCS5zp5CDHhbJIAccZiPHJwqIH4b9bXIGgR+XuOf2mFOyG14B6k0IggjZGPOpPR8H/Dv5AnIaFnZIqgGb3aLHNMEd5gyXfLP5qV3pirMWYfec95LDGj8GGUuoz7/XcyiAQeNOyWldwzQrOFN9wE1xABWT1MmK8j0uxm+JEL0lcSpbTxZobItAOgJl4xE5copr1Nv7EjG5m7Gp9fU12xjhPMKtDb6sdHnUFa4v+gkBce3RkVRfZvWimNjA2D68+qPbNIoXJ9Wnt5C4P3Y6DztUneOs4albXXbICLZoTwjjopWrdBEVfolRr8aYrb7rypqsdTFd6gZonbrly+BV5w5U3XHnDlTdcecOVN1x5w9X2lNTbrbzd6mHsVhqYebPV12a2UgupNlut1JY14d7brLzNytusvM3K26y8zcrbrLzNytusvM3qedusRNSlt1p5q5W3Wu0ScKVHLT/5iCtXkLW3XHnLlbdcecuVt1x5y5W3XO1CS73tytuuHijmSgc0b736mqxXdVndG6G8EcobobwRyhuhvBHKG6G8EcobobwR6jkaoRTOVsvJOFSV88n03Jms8mKkJIePcvEj3RtiVljDq7vxUlwBioYUu8r0ZNbISW03Rf3dKwaHAUgh/cSWHVmxkc2UU+pwnRkc4SC4Di6pyf5VFk1LSkgTLOVmmdBnmZO6L4iJ1e+W9pYqLY21nNTCNCfV57f8Vauyjg+UkR49Qp1+fYByM3hCXrQnNHQlqgC2dCWykbZ0JaoAtHYm2rV0x80RLX2VJpOGjlQQhVbq1zZ2RcJKxa+4LlgDz1KCdlizAPKD3Msaq6Vd1m2y9hzajjZnVbHBls70Yg/bmoH1cgoVjNaKptRA3c3N15tObEM01iBoLklUGaWMM7U3V2FsUofCcUsBFsH7WHfAWjWr3C4LCmrbNtsrpSFd5+oWjeP8rnzLVdLGrLjxNvmFzQSE5A2lbvokbl9q5PiSbNeX5TFfcgXsyRuHFnLeH/xKc5d3+vMgQMXqKmN3SbrOyQIICIKEeVLQ2fvpz5I5TaEILsXUL1EfgCyicCBZwO0AWdvVwckyL+BMgynlG4KBluzeujh2x7JNNQrOShY0d62x2o9wkaaf1qthbdWjy7DfrQBQDf4M7GWrNLsl9voyWKciZw6so1DFtuujNp3YhnieWMfYAY91PNZ5VKyjwJ+JdQQmeI54R+F8XZhHZaJbcY/WeGIf6JniH3MfPAbyGOhxMZAKgQYOItn0GSKgUlx2YJ9K5m67PUrLiaX/54l09OV7jOMxzqNinAr8asVHTxniijv2YIVH5SU7cmtf62/toPx1+H7VlcDlZ0fbTlo93Um9Vt2seZts+LtbmAMp/tUipA1KYLX0qH27XEeWAPj+xLLcWsQ4WRaOzVesrq9wa04KEWuwX3xBbX6qT4BE+MF5h728sLi9czvfUXC7WW1eSvOONNPziBvLO5ct9qDLyksDHR2FU2COkTeW3uLFfbxBxLN8yQMyyM8jQS+qeAEbg4bGDUXtpOIUQouVlbzqd3Xp5C75drKpgMNE/TLGuXPLTnK9TDN2Dgt9iQ8uuoQqSJfzRiDmiAL9dt6K5k5X4844oz6VZK7eqmZzdr19KFfS/qK6bpiNrZMuA2ooqtOgBlJzdWbdGnM090jGKHV8au1f3T5338q2DS3QJCJBdCNfp/AQjc9r5vB24CL3Dw3ZOSSkUyhIw8UMfj+R22qJE6m/Bzgk20RX8fRTOkdCKz6F3/G/Fn/x+5tkwcgH3n7mzpikivwSx+gIztsieKs5LKt0fu5aInXQ4v7dCXQ4UUX/Xr6Eo15jn0jvBfovHdQz5O6qODBi9txSlCUurrHdKPz/8cjbO7PPib/dSHssoHmTziYDWXp23OktQRsn4m/4kWUJENZ/sbP0Y5EBmWjz1jd8GFsj1OSH5ldGzefJ4RuFCH6xSjd9YAzwrI9a54MFYQGfkZ+SvJZ5ihHAs3Q5KMgPu0MnAIGLVLg7LVFTUCS3FLkM16vD64C94H4Cmmt0dbcikXCK8x+2bJRAs2KRbDkLbuMNCIZ3GDoNMt465z651HWHnqp4CPTBLdJgwagTjAnjLlsk73XoSRGxsc49CaskoWZsim7Asz/jpmZYjbfLxJDMX0lps4yMCT5s4FJwmEAKSGfbobfhVIYojOBdmER8la6LIF9PMVSXU6kxh5cOveXJ7Qp2izOCWqy4MwpqTgvSgTv8W5x/n7DFrArs6o+OOt1yJALJcs3ageVB459sA4Uf4ixn32fprcA3xqLbwyrkfxvcG0d0Ranj4ZGZ38U5O6aPCcbD5OI5CnUNcSv/YCJ0BwEfLrh2fbmDOeKB1SKeUmnqhq6gDbyXiZcQZ0CX+HccsPA6lGIOKl0aeuEloNcrwKdsNg4wtkhBYFiJGm8k9+ZsCK6F6WTpKr6GXsbYAeU/uBeVrDMGnIYbYgFSLR7vSc5ZIno5vlqwqNzgYfmpBXZ5CLWG81rAqoTyxpihnq5WzkolD/c3svoUOStGVyqiYW8PbngrfeqopqhSi2K7PSYbSmdr3pOkSLmHdeJc+UKPXDvQsfsHUZ8ddor1/hUKpamjHB6EHdVt+qwxalV70K7FhleUb/WdlQ6T++zsjU1NgFiGUNV/E6aasUWlcbCouzptu9Ml3rZZhnNoU6oJ80XS8tpZTlzsBP+x/6zs9aR2Fq0yo6IHJXV410OJIiG3oSLzS5qyrJpVhyZVVzCov9Tczg9dHdpQAqnXpVUHxI03p+slQvVxc3qBwffpmkKzZ/AHKaQ20jK4FAu+HPQ6ijWqcm0SoGRESB3E64wRJ2GfjPJaK9xGwF/XYTeEp+2vxpgT1fIyPbe/fs0T6bCo8eqEslknvYvACiKtiu2Ku+6XcZvG2++m80pTGlh/o5soyd3WphKpYLlmef0tisvcXi65aCBTB6z04ZHQ146EHBhhfxyk3KWJ+GtvJK7ORPy1rkuP7lJlhxbnGtrvLWzOBkKAs66/XKbssHcB8tVNlJC11IpHMLDMEu2kMaCm0Kbyow0xV9tJgifOfazLKhM7iVBBtSEHoIpY7LCGVw0vFj+wCb8mxlZO9K8tLhMjHWjWSw1s3IIz3RKtLc6Nzhz/+dNwZPRsl17q+2WA1j4SiyGtNEooeoyRJo0o7iTjSqioC+uy/wP4lNBg5bJfA3lGXcv5+eOzFxdjiz/axaMImzVRffvgvwb2oNUdT2YUdIn7N2TuxT/7ifYvqg0mdTaetAAArd1fxfJTIBOLNJ59KXH0IZ1zakGBuA2UyZEXa6gfWBgaceFfZpsegnXffycrmsaXayYAdm7ib1O78aCgCTPsut1fufuV0Pg4LOC2/K6SsDqJCaXxkV/CZXo/HAW/VxD1iGcwS2B/MG1Yo4IRFYYVaarPjycGqRo/vJPXAYhgjSI9IU8ydXlN5qitxO5dxO8DieF2RttxoIZfWtMJfWVOeMAXzWby7vM0YvM0uyWhhoyqN6xcUdhr8pyzzm1ocZk7e/XxP6KPr/92/ObHvx87POEELgqTPOXTGRJykc85dhjYfKEQJQ3LeaHldr0CeWhky0tdplNXdRKWOBkL4a2P26hCFUi83UbSaB3ZwhNoC9fDkRXXKHhc1b105DdGrnTAIoWjk8C78UaVJGXyCK50lfVZWX0nvzruSEaJXCYDDhMNzmSGA9m4MdM5ZV+d1PKxNqxC3JeJ/DDuqtKs6WtUZmtHFZ1Myy7+tkJiRyHjoe0IXyBO4hno/R9DfDzsyT45YefZHn6FFeiEdhB4f0O2P3//m2T0RgABNkOsVOVyKZMhT+feLEo2WnJgpywEpsl6iPxDi+wy77+OlzS3UgsQlKoFme1S5jrvN3SzS8FdYhAGR8GcHDUHYvUDuXVNw6VzYjQSTA/Lk6bD9gz6HetxYGZaDlo7HZPTlob/IWj+ts9JLH/Hc9r16nY+3K9bTaYe2bCT2XiLyESbQXm/wEavo/M6Oq+j8zo6r6PbUUfX4GHkVXRfp4qOQOK3oKFTRK2npaDbMofJ81DR7ZPK5HF8Lw68689Fd7LPwSjqbnsx5y6+HA8O7c9cufVAN0d3DWk+PmRTlFnspNbQ8tX81lVQejafSrmhbsIjaKJ8SqUvlVLJax685sFrHrzmwWsedvUOcrGFXvfwFbsHtSabej7+QSrH/YD6BzMeSBSt8FFB2n8+KuigUUEPF9GyU5WrpxUc5AMtGgMt9iSeGoQ0080SlmWF9pbU9oRFRXr7Vty8O9Vr9oxuZX90OlXJh10plZdcvxbJtZsw5KVYL8V6KdbHuOwqbD6eoLkbue0ef9JJttxaruwgUz5SSqinx1x/HeEe3q3bu3V7t27v1u3duu3GVa8RaPLD9AoBrxDwCgGvEPAKAe9Q7/UBB9YHNDm7Pz11wMFdmJ+LQuDRnMu9I6x3hPWOsF5Wa7TeNnmueWnNS2teWvPSmpfWvBOyl9cOb79tdBD+khJbz+ZDma/YNJknU7EIxYuy2YOyLs89qbDIw8h7B63ata0AcDjmf3/G/+COljqBPZDfcu+huLruzNaufNY+PNZuLMnO7Mi2rMhebMhOLIitbBFJdar05/aMcuLmzhS1AzXtSEkVKtroc/NVoGOL6m17P5xH8ME5ZJm1PTxznF45NeWeRc3RSal3AIXeI3rgdNfgjXoH8rpxetzUvW2e+xl08655YM+a0VfOcTV70ezhQbOj94xn8zyb96XZPIe9+8lzeVbNzw583ilpyFpYvJ3MrM+QX9zBTLu9EkDauhz83F7m22bT7TPm7A5gpt2VwfsKNTMt5ti9TbGj3w6RfuYks4ViZkQdDMWIy+bgpJkHJ4V/pVwRXCdND5AiLtL003o1VPJJKJIV19EnM40IKjaCE0V3rhCFzuDEX2mqs3zuLJUsc10oFZabqysbRF8sbSI/GDRNrco7aZ3EuLflsbiOpGJVIlOVpp2MsttPRil1GAYjiuSJtHSjwaGtH7X4e7R/7g4CU7JRuoByvIddQwHjbUjnYcjmfiTzoIYMhW03hTPtPKtmhyKEO3h/dKWAu4qo23p5bOPdsadXx6i3vyy9E1OwDUOwMzOwtewscRY1rhCYBiplGxjaCiPGWTvyA1UjAUwO0YAd4j9/Qs8JtSF6XjS+rprjr9mSZfwXMYeiXEabAwE30gN5CuXSy6cuR7ycO/fxN+s4nf+6lffBW25qdzkhcBLbEgneWUuhIKlMIn/Y0IosmFyVuvNjN3/Qq9+uvFhfIWateA6LPsbkgIYGhyrpk+5gzjlW6P+ZWO224J0M/ZRnnb4s67S9VfGBLYqH5uU0Y6PCyu1oabRaGTU9lKGDatU/7al7eiSLYjdl06i3pxXRakHUrYfPcX/brYUPaCkcfWXii9squKNFcAdroJeVvKzkZSUvKz2QrNQUJfvVikrPwvJtOqj/FfsjcQkgpvw8nGfpv6Cns2zN+DsimfRrSXGVPNJRZQvoLFhUb/MM1Ks0L2QaarSUOLIgm/LOHZBwDGyL4nyaJENHrmO7Hp+wt/zJAstvX/2f6NXrs/en0cmb6O/H7344+5vFsYwtr4ub6DZZTt6evGtvz/DG1WIraC0nS1oN7RDIGkR3LECzWLDreBEBL5CB9AmMxGTwz+U/f/nDH+D/Pw66ODp81eEFj6Glr9n+quEilz5F2e/mYFVlLybKZ1vDioBOmi6Cd3p+rk7Pj6CmaIJlB8H7gqBsE7JanSt7rsAtZx1BvCAVhwd7QFcDRM0kzput2gBbAYunNxFyHxSgeRQAZC7g9+9j4DQNg3dFb0+U4fTT0SrtbTtlmM4ntjkKiP/98ceTN/tOoDZOCwrpsGdNd5Mmb75cLsbehbn/5ut4Ho4Lt93G1JwO7C9ZbpDKGtrQpUCAqkhoFy9oeyf0L530BP43IXCif63z6ZYLWflItBMWq3NJqbppV8VvxVg2uY+o3GuHMxpWq0xmo/3YZR1IeraD1iioQ3e+F89d07t4ntDzhA2E1FAVTmpZMjwb6dnI3ywbuSX0H4bz7L1o+C+QeY/gDGcsiGfxCuX/oOmd3ovgx5zNgqsNvRT+nEulYRYkt3DsaDIhsp9jppB4OmVAtz5s4HCWQKNn3GKG7V/iquIQOjxlC3aHqm54QXYG3AVAhPLDdJGgMQY4Q04Ka8mbcDqvcAlpNqyAQf46EkRSq09GiqEKpviJ/JxHchKRqkbkv5ZshtpuOKpbUIoiewmDJUsmlVM4tADuf8E7pVaqASdg87B6J5d6Vfhc90U1J2iM5VhZp6kr7g7ocCx4fXGFOhUvp5XCxGqzNm1yP+fpMuLpXaRd7iz9d3g4tKlJ1yvc/ZBuXUhTExOouXAoSyBV7bBnpx/bLKp6i2t/LTXsUO4Yy8evcNL0HB8rdeVo0QLRHOE2KewmbZqFEkqNM639KGixbRpGZhowY/l6IewJZb4b0WsN1XQ/J+pv1GtIJmMMjF2FKFzmw9q8jDf5Qb9OV5vvs/R2u1l+iLOcvUlcWWrUUc+5HndwMW5IXaYaVaKhLetQ0x4gx58VwYAPO+AG5GoGlv0ie4M6R/Hqha1fnNWQNxgFE7JJ9ay5fLBFNTMBg5ZDEb9oTBlfgULCaBmiZa9nD1vQrqxbsueCpujrXBvkIrxmxXBALUzDEoqkTS/B7+YrhvDa9DY2PZEtB2PifZTeRqGJWxSMYnCF/J7pDwmU+JFMSiRQ0Xo2/cQ1/SgW6j+ul+pOyjXwSeu/way5YqgWINCeVsgt322DQ9VYRSP+42g73lB+G5sOFke7u4crmPcQmYPo7khEtzMOFWhROo9070e8o97aqzQrGIj5dJhwMLx+7DmCMrLz+uOh8maRbZxExEyXlsUAcAvgIIYt7IUdtVo5FYu1jV8ii63N7Xw7daUYFhtT/6E6QsdvVoNsdXjslylbFeXGvkYnscWCzcggZ1Q95XMIc1aIjR0Siqk7iPXc7gTlidjpqkGHknkwYJS8LVeIUN1BQbQpidB5+dZFz+7N0ECm9yTVynxaKDXtxy4oZTgad/SvsSTKE5QR/Vhu4hwBfiimOw4GlDMPaFDQ//ePvPItNdywohKg2KzvTL+3x76Ve5YJPOXatt0xXzsfxBYIcnhq62aI415T9pWU52T9VczpFb9N9iZzAMyIz8INZHvCaHUbz+WCG+BUXpx1Tvv6kc+toST6aDsIdSrRnjXxVp0jd6TdjvRNnnR/GdLt8gXzlNtTbk+5D0i5Nbz3NAg3TcnTbQfdriV22IJya2mEnobYrSUx2VXudiXr8dT7Iak3TztiFbyd+bM9/a7T7xKdN+LTvcmHRGYHlfv0m/dEBD8+KU9BupqAS7P8fjZgzcLf3RAMPSmmYM0Q7LT3akPZjb7bpvWRxmHFuIbeGHUUil6QWTJT4uJ0Cqx4aEyFCdBiE2wx1VnshQrsCEQV8Xnhv5rBWKAxcQEuaiRafa91HlYyaLVPWgIclfFUYtZ6sYYaZg/qhLRGDiVWK2mh3PuKChsU4bs4Z8f0EcOl41w8R2+aWvBXFdhbNhprpzByYmwiA7P17cqBaH51RwEKpHHUjeVoR0bl3MMilchvtCV++dyC4NvJY+uu2HekolsH2Q/ZW0ck+rnXyJRHMn/XXuiC29mUu7WdKu4L5/ysSobJqmBjW7jwTtkdfosoTMcrkjHeup4d6iBQKmEFaSp6TmapY4E7WdzOyalXAZNYY0c0a6yvM7JGHwKoGzz7sNytWjGcUe9AWAS362R2GByCfYWivM8+eEQY3ncot1XF1zfG09eqcLVX37JW2qr7C8htUKtlSVCUXh6icJZ0yhqLwx8Ne60RrZ2iWRsiWUc1BxQXyNTBZRdQEVuhn/vnBjc0kbpza6qxPal4bimkHwLRd3Kz28INSj+NCOTO2QI50Pl6OS3SdJGHKEMn8UKHtdoFEVBQuyENaT5V754+/+UMf+hrd9TufcV9RFG40Z2LBMc80ZYztqlIuAtSO82RKwl+HwyEOKKnrDCWqB76RP0y7rn0PhO7Esjh8fkoV81fEYun4KEKR6j8k8vt8MhFRIih2zHybUdnxB0dEg/rlGjQQtLBCfru3jfKaTShurzA3N2uSC91Jr8ZkiM2DtFciJrvj0UGxzssJ1yOdXE+wIaDi1FbTutSoHKwjhMbB9mJfy15S5oyEG4hrdh0bZ2zaXREXB2Rl3Fc+5IXgflayEuntXoatBcNKirK4AmRJ0SeEHlC9FURIoFmPCl6AuKQPItHoENer+Bp1bOnVTLUzUavqladadXWdKq3NZFqIFCNxKkrYeqEph8Sh83JTSqinXgUPLYf6qFlCRVxI4rg63JZdazkhHuMVdRk1CH+UExl0m7LsvMO4v36HSSFP4d80qGbgOOwI7Ta9Pm+HNyQ7/ad8Gb9r8ys/yLYxKv5UcCWyPr1/i+XqRBikXsDAA==");
}

importPys()
