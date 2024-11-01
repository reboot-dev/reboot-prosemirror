import { reboot_native, createError } from "@reboot-dev/reboot";

import { Value, ListValue, Struct } from "@bufbuild/protobuf";
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

import { Authority as AuthorityProto } from "./authority_pb.js";

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
import { fileURLToPath } from "node:url";
import * as path from "node:path";
import * as protobuf_es from "@bufbuild/protobuf";
import * as reboot_api from "@reboot-dev/reboot-api";

// To support writers seeing partial updates of transactions,
// and transactions seeing updates from writers, we need to store
// a reference to the latest state in an ongoing transaction.
//
// Moreover, we need to update that _reference_ after each writer
// executes within a transaction. We do that in the generated
// code, see below.
const ongoingTransactionStates: { [id: string]: any } = {};

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

const AUTHORITY_CREATE_ERROR_TYPES = [
	...ERROR_TYPES,
	// Method errors.
] as const; // Need `as const` to ensure TypeScript infers this as a tuple!

type AuthorityCreateAbortedError = reboot_api.InstanceTypeForErrorTypes<
	typeof AUTHORITY_CREATE_ERROR_TYPES
>[number];

const AUTHORITY_APPLY_ERROR_TYPES = [
	...ERROR_TYPES,
	// Method errors.
] as const; // Need `as const` to ensure TypeScript infers this as a tuple!

type AuthorityApplyAbortedError = reboot_api.InstanceTypeForErrorTypes<
	typeof AUTHORITY_APPLY_ERROR_TYPES
>[number];

const AUTHORITY_CHANGES_ERROR_TYPES = [
	...ERROR_TYPES,
	// Method errors.
] as const; // Need `as const` to ensure TypeScript infers this as a tuple!

type AuthorityChangesAbortedError = reboot_api.InstanceTypeForErrorTypes<
	typeof AUTHORITY_CHANGES_ERROR_TYPES
>[number];

export abstract class AuthorityServicer extends reboot.Servicer<Authority.State> {
	static __rbtModule__ = "rbt.thirdparty.prosemirror.v1.authority_rbt";
	static __servicerNodeAdaptor__ = "AuthorityServicerNodeAdaptor";

	// External reference to the native `Servicer`.
	#external?: any | undefined;

	protected lookup() {
		return new Authority.WeakReference(null);
	}

	abstract create(
		context: WriterContext,
		state: Authority.State,
		request: CreateRequest,
	): Promise<CreateResponse | protobuf_es.PartialMessage<CreateResponse>>;
	abstract apply(
		context: WriterContext,
		state: Authority.State,
		request: ApplyRequest,
	): Promise<ApplyResponse | protobuf_es.PartialMessage<ApplyResponse>>;
	abstract changes(
		context: ReaderContext,
		state: Authority.State,
		request: ChangesRequest,
	): Promise<ChangesResponse | protobuf_es.PartialMessage<ChangesResponse>>;

	async _Create(
		context: WriterContext,
		jsonState: string,
		jsonRequest: string,
	): Promise<string> {
		try {
			let state = Authority.State.fromJsonString(jsonState);
			if (context.stateId in ongoingTransactionStates) {
				state = ongoingTransactionStates[context.stateId].clone();
			}
			const response = await this.create(
				context,
				state,
				CreateRequest.fromJsonString(jsonRequest),
			);
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
				effects: new Authority.CreateEffects({ state, response }),
			});
		} catch (e) {
			if (e instanceof reboot_api.Aborted) {
				return JSON.stringify({
					status: e.toStatus(),
				});
			}

			const error = createError(e);

			console.warn(
				`Unhandled (in 'rbt.thirdparty.prosemirror.v1.Authority.create') ${error.message}; propagating as 'Unknown'\n${error.stack}`,
			);

			throw error;
		}
	}

	async _Apply(
		context: WriterContext,
		jsonState: string,
		jsonRequest: string,
	): Promise<string> {
		try {
			let state = Authority.State.fromJsonString(jsonState);
			if (context.stateId in ongoingTransactionStates) {
				state = ongoingTransactionStates[context.stateId].clone();
			}
			const response = await this.apply(
				context,
				state,
				ApplyRequest.fromJsonString(jsonRequest),
			);
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
				effects: new Authority.ApplyEffects({ state, response }),
			});
		} catch (e) {
			if (e instanceof reboot_api.Aborted) {
				return JSON.stringify({
					status: e.toStatus(),
				});
			}

			const error = createError(e);

			console.warn(
				`Unhandled (in 'rbt.thirdparty.prosemirror.v1.Authority.apply') ${error.message}; propagating as 'Unknown'\n${error.stack}`,
			);

			throw error;
		}
	}

	async _Changes(
		context: ReaderContext,
		jsonState: string,
		jsonRequest: string,
	): Promise<string> {
		try {
			let state = Authority.State.fromJsonString(jsonState);
			const response = await this.changes(
				context,
				state,
				ChangesRequest.fromJsonString(jsonRequest),
			);
			return JSON.stringify({
				response,
			});
		} catch (e) {
			if (e instanceof reboot_api.Aborted) {
				return JSON.stringify({
					status: e.toStatus(),
				});
			}

			const error = createError(e);

			console.warn(
				`Unhandled (in 'rbt.thirdparty.prosemirror.v1.Authority.changes') ${error.message}; propagating as 'Unknown'\n${error.stack}`,
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

	static _State = class {
		#servicer: AuthorityServicer;

		constructor(servicer: AuthorityServicer) {
			this.#servicer = servicer;
		}

		async read(context: reboot.WorkflowContext): Promise<Authority.State> {
			return Authority.State.fromJsonString(
				await reboot_native.Servicer_read(
					this.#servicer.__external,
					context.__external,
				),
			);
		}

		async write(
			idempotencyAlias: string,
			context: reboot.WorkflowContext,
			writer: (state: Authority.State) => Promise<void>,
			options?: { parse: undefined },
		): Promise<void>;

		async write<T>(
			idempotencyAlias: string,
			context: reboot.WorkflowContext,
			writer: (state: Authority.State) => Promise<T>,
			options: { parse: (value: any) => T },
		): Promise<T>;

		async write<T>(
			idempotencyAlias: string,
			context: reboot.WorkflowContext,
			writer: (state: Authority.State) => Promise<T>,
			options: { parse: undefined | ((value: any) => T) } = {
				parse: undefined,
			},
		): Promise<void | T> {
			return await this.idempotently(idempotencyAlias).write(
				context,
				writer,
				options,
			);
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
				unidempotently?: boolean,
			): Promise<void>;

			async write<T>(
				context: reboot.WorkflowContext,
				writer: (state: Authority.State) => Promise<T>,
				options: { parse: (value: any) => T },
				unidempotently?: boolean,
			): Promise<T>;

			async write<T>(
				context: reboot.WorkflowContext,
				writer: (state: Authority.State) => Promise<T>,
				options: { parse: undefined | ((value: any) => T) } = {
					parse: undefined,
				},
				unidempotently: boolean = false,
			): Promise<void | T> {
				let t: T | undefined = undefined;

				const result = await reboot_native.Servicer_write(
					this.#external,
					context.__external,
					async (jsonState: string) => {
						const state = Authority.State.fromJsonString(jsonState);
						try {
							t = await writer(state);

							if (t !== undefined) {
								if (options.parse === undefined) {
									throw new Error(
										"Required 'parse' property in 'options' is undefined",
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
						throw new Error(
							"Required 'parse' property in 'options' is undefined",
						);
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

		public idempotently(
			aliasOrOptions: string | reboot_api.IdempotencyOptions,
		) {
			const options =
				typeof aliasOrOptions === "string"
					? { alias: aliasOrOptions }
					: aliasOrOptions;
			if (options.alias === undefined && options.key === undefined) {
				throw new Error(
					"Inline writers require either an idempotency alias or key",
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
				writer: (state: Authority.State) => Promise<void>,
			): Promise<void>;

			async write<T>(
				context: reboot.WorkflowContext,
				writer: (state: Authority.State) => Promise<T>,
			): Promise<T>;

			async write<T>(
				context: reboot.WorkflowContext,
				writer: (state: Authority.State) => Promise<T>,
			): Promise<T> {
				return new AuthorityServicer._State._Idempotently(this.#external, {
					key: uuid.v4(),
				}).write<T>(
					context,
					writer,
					{
						parse: (value: any): T => {
							throw new Error(
								"Unexpected attempt to parse unidempotent result",
							);
						},
					},
					true,
				);
			}
		};

		public unidempotently() {
			return new AuthorityServicer._State._Unidempotently(
				this.#servicer.__external,
			);
		}
	};

	get state() {
		return new AuthorityServicer._State(this);
	}
}

export class AuthorityState extends AuthorityProto {
	static fromBinary(
		bytes: Uint8Array,
		options?: Partial<protobuf_es.BinaryReadOptions>,
	) {
		const state = new Authority.State();
		state.fromBinary(bytes, options);
		return state;
	}

	static fromJson(
		jsonValue: protobuf_es.JsonValue,
		options?: Partial<protobuf_es.JsonReadOptions>,
	) {
		const state = new Authority.State();
		state.fromJson(jsonValue, options);
		return state;
	}

	static fromJsonString(
		jsonString: string,
		options?: Partial<protobuf_es.JsonReadOptions>,
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
			return new Authority.CreateAborted(error, { message: status.message });
		}

		error = reboot_api.errorFromGoogleRpcStatusCode(status);

		// TODO(benh): also consider getting the type names from
		// `status.details` and including that in `message` to make
		// debugging easier.

		return new Authority.CreateAborted(error, { message: status.message });
	}

	public toStatus(): reboot_api.Status {
		const isObject = (value: unknown): value is object => {
			return typeof value === "object";
		};

		const isArray = (value: unknown): value is any[] => {
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
			details: [detail],
		});
	}

	constructor(
		error: AuthorityCreateAbortedError,
		{ message }: { message?: string } = {},
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
			return new Authority.ApplyAborted(error, { message: status.message });
		}

		error = reboot_api.errorFromGoogleRpcStatusCode(status);

		// TODO(benh): also consider getting the type names from
		// `status.details` and including that in `message` to make
		// debugging easier.

		return new Authority.ApplyAborted(error, { message: status.message });
	}

	public toStatus(): reboot_api.Status {
		const isObject = (value: unknown): value is object => {
			return typeof value === "object";
		};

		const isArray = (value: unknown): value is any[] => {
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
			details: [detail],
		});
	}

	constructor(
		error: AuthorityApplyAbortedError,
		{ message }: { message?: string } = {},
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
			return new Authority.ChangesAborted(error, { message: status.message });
		}

		error = reboot_api.errorFromGoogleRpcStatusCode(status);

		// TODO(benh): also consider getting the type names from
		// `status.details` and including that in `message` to make
		// debugging easier.

		return new Authority.ChangesAborted(error, { message: status.message });
	}

	public toStatus(): reboot_api.Status {
		const isObject = (value: unknown): value is object => {
			return typeof value === "object";
		};

		const isArray = (value: unknown): value is any[] => {
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
			details: [detail],
		});
	}

	constructor(
		error: AuthorityChangesAbortedError,
		{ message }: { message?: string } = {},
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
	#id?: string;

	// TODO: using `null` to do "lazy" construction
	// once we have the id from a context.
	constructor(id: string | null) {
		if (typeof id === "string") {
			this.#id = id;
		} else if (id !== null) {
			throw new Error("Expecting 'id'");
		}
	}

	public __external(context: Context | ExternalContext) {
		if (this.#external === undefined) {
			if (this.#id === undefined) {
				if (!(context instanceof Context)) {
					throw new Error(
						"Lazy construction of 'Authority.WeakReference' " +
							"only valid when using a context, e.g., 'ReaderContext', 'WriterContext', etc",
					);
				}
				this.#id = context.stateId;
			}
			this.#external = reboot_native.Service_constructor({
				rbtModule: "rbt.thirdparty.prosemirror.v1.authority_rbt",
				nodeAdaptor: "AuthorityWeakReferenceNodeAdaptor",
				id: this.#id,
			});
		}
		return this.#external;
	}

	async __externalServiceCallCreate(
		context: Context | ExternalContext,
		partialRequest?: protobuf_es.PartialMessage<CreateRequest>,
		options?: reboot_api.CallOptions,
	): Promise<any> {
		const request =
			partialRequest instanceof CreateRequest
				? partialRequest
				: new CreateRequest(partialRequest);

		const json = JSON.parse(
			await reboot_native.Service_call({
				external: this.__external(context),
				kind: "writer",
				method: "Create",
				requestModule: "rbt.thirdparty.prosemirror.v1.authority_pb2",
				requestType: "CreateRequest",
				context: context.__external,
				jsonRequest: JSON.stringify(request || {}),
				jsonOptions: JSON.stringify(options || {}),
			}),
		);

		if ("status" in json) {
			throw Authority.CreateAborted.fromStatus(
				reboot_api.Status.fromJson(json["status"]),
			);
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
		);

		// TODO: assert("response" in json)

		return CreateResponse.fromJson(json["response"]);
	}

	async __externalServiceCallApply(
		context: Context | ExternalContext,
		partialRequest?: protobuf_es.PartialMessage<ApplyRequest>,
		options?: reboot_api.CallOptions,
	): Promise<any> {
		const request =
			partialRequest instanceof ApplyRequest
				? partialRequest
				: new ApplyRequest(partialRequest);

		const json = JSON.parse(
			await reboot_native.Service_call({
				external: this.__external(context),
				kind: "writer",
				method: "Apply",
				requestModule: "rbt.thirdparty.prosemirror.v1.authority_pb2",
				requestType: "ApplyRequest",
				context: context.__external,
				jsonRequest: JSON.stringify(request || {}),
				jsonOptions: JSON.stringify(options || {}),
			}),
		);

		if ("status" in json) {
			throw Authority.ApplyAborted.fromStatus(
				reboot_api.Status.fromJson(json["status"]),
			);
		}

		return json;
	}

	async apply(
		context: TransactionContext | WorkflowContext | ExternalContext,
		partialRequest?: protobuf_es.PartialMessage<ApplyRequest>,
	): Promise<ApplyResponse> {
		const json = await this.__externalServiceCallApply(context, partialRequest);

		// TODO: assert("response" in json)

		return ApplyResponse.fromJson(json["response"]);
	}

	async __externalServiceCallChanges(
		context: Context | ExternalContext,
		partialRequest?: protobuf_es.PartialMessage<ChangesRequest>,
		options?: reboot_api.CallOptions,
	): Promise<any> {
		const request =
			partialRequest instanceof ChangesRequest
				? partialRequest
				: new ChangesRequest(partialRequest);

		const json = JSON.parse(
			await reboot_native.Service_call({
				external: this.__external(context),
				kind: "reader",
				method: "Changes",
				requestModule: "rbt.thirdparty.prosemirror.v1.authority_pb2",
				requestType: "ChangesRequest",
				context: context.__external,
				jsonRequest: JSON.stringify(request || {}),
				jsonOptions: JSON.stringify(options || {}),
			}),
		);

		if ("status" in json) {
			throw Authority.ChangesAborted.fromStatus(
				reboot_api.Status.fromJson(json["status"]),
			);
		}

		return json;
	}

	async changes(
		context:
			| ReaderContext
			| WriterContext
			| TransactionContext
			| WorkflowContext
			| ExternalContext,
		partialRequest?: protobuf_es.PartialMessage<ChangesRequest>,
	): Promise<ChangesResponse> {
		const json = await this.__externalServiceCallChanges(
			context,
			partialRequest,
		);

		// TODO: assert("response" in json)

		return ChangesResponse.fromJson(json["response"]);
	}

	static _Idempotently = class {
		#weakReference: any;
		#options: reboot_api.IdempotencyOptions;

		constructor(weakReference: any, options: reboot_api.IdempotencyOptions) {
			this.#weakReference = weakReference;
			this.#options = options;
		}

		async create(
			context:
				| reboot.TransactionContext
				| reboot.WorkflowContext
				| reboot.ExternalContext,
			partialRequest?: protobuf_es.PartialMessage<CreateRequest>,
		): Promise<CreateResponse> {
			const json = await this.#weakReference.__externalServiceCallCreate(
				context,
				partialRequest,
				{ idempotency: this.#options },
			);

			// TODO: assert("response" in json)

			return CreateResponse.fromJson(json["response"]);
		}

		async apply(
			context:
				| reboot.TransactionContext
				| reboot.WorkflowContext
				| reboot.ExternalContext,
			partialRequest?: protobuf_es.PartialMessage<ApplyRequest>,
		): Promise<ApplyResponse> {
			const json = await this.#weakReference.__externalServiceCallApply(
				context,
				partialRequest,
				{ idempotency: this.#options },
			);

			// TODO: assert("response" in json)

			return ApplyResponse.fromJson(json["response"]);
		}

		public schedule(options?: reboot_api.ScheduleOptions) {
			return new Authority.WeakReference._Schedule(
				this.#weakReference,
				options || { when: new Date() },
				this.#options,
			);
		}
	};

	public idempotently(
		aliasOrOptions:
			| string
			| reboot_api.IdempotencyOptions = {} as reboot_api.IdempotencyOptions,
	) {
		return new Authority.WeakReference._Idempotently(
			this,
			typeof aliasOrOptions === "string"
				? { alias: aliasOrOptions }
				: aliasOrOptions,
		);
	}

	public unidempotently() {
		return this.idempotently({ key: uuid.v4() });
	}

	static _Schedule = class {
		#weakReference: any;
		#options: reboot_api.ScheduleOptions;
		#idempotencyOptions?: reboot_api.IdempotencyOptions;

		constructor(
			weakReference: any,
			options: reboot_api.ScheduleOptions,
			idempotencyOptions?: reboot_api.IdempotencyOptions,
		) {
			this.#weakReference = weakReference;
			this.#options = options;
			this.#idempotencyOptions = idempotencyOptions;
		}

		async create(
			context: reboot.WriterContext | reboot.TransactionContext,
			partialRequest?: protobuf_es.PartialMessage<CreateRequest>,
		): Promise<reboot_api.TaskEffect>;

		async create(
			context: reboot.WorkflowContext | reboot.ExternalContext,
			partialRequest?: protobuf_es.PartialMessage<CreateRequest>,
		): Promise<{
			responsePromise: Promise<CreateResponse>;
			taskId: reboot_api.tasks_pb.TaskId;
		}>;

		async create(
			context:
				| reboot.WriterContext
				| reboot.TransactionContext
				| reboot.WorkflowContext
				| reboot.ExternalContext,
			partialRequest?: protobuf_es.PartialMessage<CreateRequest>,
		): Promise<
			| reboot_api.TaskEffect
			| {
					responsePromise: Promise<CreateResponse>;
					taskId: reboot_api.tasks_pb.TaskId;
			  }
		> {
			const json = await this.#weakReference.__externalServiceCallCreate(
				context,
				partialRequest,
				{
					schedule: this.#options,
					...(this.#idempotencyOptions && {
						idempotency: this.#idempotencyOptions,
					}),
				},
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
							external: this.#weakReference.__external(context),
							context: context.__external,
							method: "Create",
							jsonTaskId: JSON.stringify(taskId),
						}),
					);

					if ("status" in json) {
						reject(
							Authority.CreateAborted.fromStatus(
								reboot_api.Status.fromJson(json["status"]),
							),
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
			partialRequest?: protobuf_es.PartialMessage<ApplyRequest>,
		): Promise<reboot_api.TaskEffect>;

		async apply(
			context: reboot.WorkflowContext | reboot.ExternalContext,
			partialRequest?: protobuf_es.PartialMessage<ApplyRequest>,
		): Promise<{
			responsePromise: Promise<ApplyResponse>;
			taskId: reboot_api.tasks_pb.TaskId;
		}>;

		async apply(
			context:
				| reboot.WriterContext
				| reboot.TransactionContext
				| reboot.WorkflowContext
				| reboot.ExternalContext,
			partialRequest?: protobuf_es.PartialMessage<ApplyRequest>,
		): Promise<
			| reboot_api.TaskEffect
			| {
					responsePromise: Promise<ApplyResponse>;
					taskId: reboot_api.tasks_pb.TaskId;
			  }
		> {
			const json = await this.#weakReference.__externalServiceCallApply(
				context,
				partialRequest,
				{
					schedule: this.#options,
					...(this.#idempotencyOptions && {
						idempotency: this.#idempotencyOptions,
					}),
				},
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
							external: this.#weakReference.__external(context),
							context: context.__external,
							method: "Apply",
							jsonTaskId: JSON.stringify(taskId),
						}),
					);

					if ("status" in json) {
						reject(
							Authority.ApplyAborted.fromStatus(
								reboot_api.Status.fromJson(json["status"]),
							),
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
			partialRequest?: protobuf_es.PartialMessage<ChangesRequest>,
		): Promise<reboot_api.TaskEffect>;

		async changes(
			context: reboot.WorkflowContext | reboot.ExternalContext,
			partialRequest?: protobuf_es.PartialMessage<ChangesRequest>,
		): Promise<{
			responsePromise: Promise<ChangesResponse>;
			taskId: reboot_api.tasks_pb.TaskId;
		}>;

		async changes(
			context:
				| reboot.WriterContext
				| reboot.TransactionContext
				| reboot.WorkflowContext
				| reboot.ExternalContext,
			partialRequest?: protobuf_es.PartialMessage<ChangesRequest>,
		): Promise<
			| reboot_api.TaskEffect
			| {
					responsePromise: Promise<ChangesResponse>;
					taskId: reboot_api.tasks_pb.TaskId;
			  }
		> {
			const json = await this.#weakReference.__externalServiceCallChanges(
				context,
				partialRequest,
				{
					schedule: this.#options,
					...(this.#idempotencyOptions && {
						idempotency: this.#idempotencyOptions,
					}),
				},
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
							external: this.#weakReference.__external(context),
							context: context.__external,
							method: "Changes",
							jsonTaskId: JSON.stringify(taskId),
						}),
					);

					if ("status" in json) {
						reject(
							Authority.ChangesAborted.fromStatus(
								reboot_api.Status.fromJson(json["status"]),
							),
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
			options || { when: new Date() },
		);
	}
}

export class Authority {
	static Interface = AuthorityServicer;
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
			this.state =
				effects.state instanceof AuthorityProto
					? effects.state
					: new AuthorityProto(effects.state);

			this.response =
				effects.response instanceof CreateResponse
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
			this.state =
				effects.state instanceof AuthorityProto
					? effects.state
					: new AuthorityProto(effects.state);

			this.response =
				effects.response instanceof ApplyResponse
					? effects.response
					: new ApplyResponse(effects.response);
		}
	};

	static ChangesAborted = AuthorityChangesAborted;

	public static lookup(id: string) {
		return new Authority.WeakReference(id);
	}

	static _Construct = class {
		#id?: string;

		constructor(id?: string) {
			this.#id = id;
		}

		public async create(
			context:
				| reboot.TransactionContext
				| reboot.WorkflowContext
				| reboot.ExternalContext,
			partialRequest?: protobuf_es.PartialMessage<CreateRequest>,
		): Promise<[Authority.WeakReference, CreateResponse]> {
			if (this.#id === undefined) {
				this.#id = uuid.v4();
			}

			const weakReference = Authority.lookup(this.#id);

			const json = await weakReference.__externalServiceCallCreate(
				context,
				partialRequest,
			);

			// TODO: assert("response" in json)

			return [weakReference, CreateResponse.fromJson(json["response"])];
		}

		public async apply(
			context:
				| reboot.TransactionContext
				| reboot.WorkflowContext
				| reboot.ExternalContext,
			partialRequest?: protobuf_es.PartialMessage<ApplyRequest>,
		): Promise<[Authority.WeakReference, ApplyResponse]> {
			if (this.#id === undefined) {
				this.#id = uuid.v4();
			}

			const weakReference = Authority.lookup(this.#id);

			const json = await weakReference.__externalServiceCallApply(
				context,
				partialRequest,
			);

			// TODO: assert("response" in json)

			return [weakReference, ApplyResponse.fromJson(json["response"])];
		}

		public idempotently(
			aliasOrOptions:
				| string
				| reboot_api.IdempotencyOptions = {} as reboot_api.IdempotencyOptions,
		) {
			return new Authority._ConstructIdempotently(
				typeof aliasOrOptions === "string"
					? { alias: aliasOrOptions }
					: aliasOrOptions,
				this.#id,
			);
		}
	};

	public static construct(options?: { id: string }) {
		return new Authority._Construct(options?.id);
	}

	static _ConstructIdempotently = class {
		#options: reboot_api.IdempotencyOptions;
		#id?: string;

		constructor(options: reboot_api.IdempotencyOptions, id?: string) {
			this.#options = options;
			this.#id = id;
		}

		public async create(
			context:
				| reboot.TransactionContext
				| reboot.WorkflowContext
				| reboot.ExternalContext,
			partialRequest?: protobuf_es.PartialMessage<CreateRequest>,
		): Promise<[Authority.WeakReference, CreateResponse]> {
			if (this.#id === undefined) {
				this.#id = (await context.generateIdempotentStateId(
					"rbt.thirdparty.prosemirror.v1.Authority",
					"Create",
					this.#options,
				)) as string;
			}

			const weakReference = Authority.lookup(this.#id);

			const json = await weakReference.__externalServiceCallCreate(
				context,
				partialRequest,
				{ idempotency: this.#options },
			);

			// TODO: assert("response" in json)

			return [weakReference, CreateResponse.fromJson(json["response"])];
		}

		public async apply(
			context:
				| reboot.TransactionContext
				| reboot.WorkflowContext
				| reboot.ExternalContext,
			partialRequest?: protobuf_es.PartialMessage<ApplyRequest>,
		): Promise<[Authority.WeakReference, ApplyResponse]> {
			if (this.#id === undefined) {
				this.#id = (await context.generateIdempotentStateId(
					"rbt.thirdparty.prosemirror.v1.Authority",
					"Apply",
					this.#options,
				)) as string;
			}

			const weakReference = Authority.lookup(this.#id);

			const json = await weakReference.__externalServiceCallApply(
				context,
				partialRequest,
				{ idempotency: this.#options },
			);

			// TODO: assert("response" in json)

			return [weakReference, ApplyResponse.fromJson(json["response"])];
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
	reboot_native.importPy(
		"rbt.thirdparty.prosemirror.v1.authority_pb2",
		"H4sIAAAAAAAC/81X72/iRhD9zl+x5VSRtMHYa0NIpKhHgdxF6gEFctLpXFlrvBCfjNfdNRH0r+/s2saGEJ85RVU/8MPr9968md3xwDvU/KWJFszzw9Ut2sTLZleu1N6hDzSknMTUQ+4OxU8URZzFbMEC5G6WS8qBtI78gHINocEYjcZzNBw8zH8CqmAbvqC3iLtxK37yuRcRHu9aICDo2uec8daz0SKb+IlxP95pShl4E/kJ6miyg1sh+ky58Fl4iywNtzW9Vq/Xc1cv7XhUA0RtydkarRhbBTRRlor+OmI8Rh4VC+5HMeOICOTklxVZTsQg4iFVrZXyxW7tssDxSExcIqjiH62d5Gt+GFMekiATcjd+4NHEe/odyvb+fVILxw8F5TFUDCwB9SJhictaTYZzPBfdvQisDeiSbIL4AlDlScR8s4idyMUyfAJyPAYrKVBdpCgJS9TgDGjPBgmiJ2JkUiySJkWmBRDFzWDqIsMopVptMJz1pw+T+Xgqczgqfp6D1vO8GeU+Cfx/qHcPx/PCbdhh86yTaG8NDC9PWs9JWoEEGQGAwGuRFKKVFaGVFGAvJDFERs+Sa6WJpYj61A7tuJcZkKF/g5Wtfm1vO+YTCVdUwGIXVgwEb+YFvLn21sQ/a6X+tL4iTw+lbuHSsrddyM9tp7q6Xf+kQnbsrZXgpI1f1ZolYhoVDRh7A7B6rR2f2JlKf1pgSlwn0++YgU/DOBXEqaDCF+7W4XIJFN7nFHp9Sv/eUAHLj0qGSpvpDRFBKZXdS3XPBBGLLX7IcM7Fiq924Tl5BB0Z5tPivbqvsMC0jCgKdpnfEiHjpFDJ5uM32Py8rr3EZlq9upXXNUEWM6gnyQk/XNDPrydxCKgHirUsSuZ79b+qCrihhtSyw8SbZWTd+CAfv0uyUKbXeY+owyfXrr4X8OD8wpOgWZGQ7UwS8aBdceIS2hY+vylT7ezkqb79Toje4RElV9XwVR1F2VZZ+VbhZqWNKRw7olVllPoKE1cd6a6jWt5syGm4CphLAgGjJP0G0y8bqNrv8vMTFYKsaC/0huFmPdjPG3GRT6IrlAkds+csKlBAJJU7ZDfKU9xPJTkCG8Vg/rI4AjXncTZ0+k4uPUN3d+geoPS2Bj/O9utaNlUh8RELKdzMRL82nN7j/ON4+jD/0vjrDKDYT9sCB2YuhvLjTtvWTd3Wdb3xisTDaD6c3vf6Q9BaU0jYE467c0Kypl8bSTdUtlNRq5pjbOsY/7Bz1TRvY3wv9V/4TtvqjUqei1X1HpY5PxISMXTNnWF2q8Fp6N1hrB+C+x97ow/Dk8IY4wpYpXpzc4ScDntQl+Gfj8PZ/KS4qRvVKTKGaXROE2aT8Wh2OgPT6J7BkVEs3Twq5mTyx5eyRCy9XZkhI7QN/SS+JI22gatTVAx8fWrnZmV5tPHNGRwVpWu8wijLpWueQ5JxOjdGheZ7GapzY53Jk9EM3bou+0u5Zt4G/veJBYvoZe1fXTxWqz4QAAA=",
	);
	reboot_native.importPy(
		"rbt.thirdparty.prosemirror.v1.authority_pb2_grpc",
		"H4sIAAAAAAAC/+1Yz4/iNhS+56/wzh4AKc1qexwJqYhhK6QdFs1QqTfLxA9wFezUdqZLq/7vfbYTICHD7miZ0MPkAJi8X/7e8+dnvye/ggTNLHCy3BG7AbJ+mI/JfGc3SpJcK6tSlZFUbXORgSZ5VqyFTMjdFzL7siCTu+niXXRzczPOBEhLmOTEgH5CyTRjxoBBVa3B5EpyIdfEqmB0Wax+4rASEoKCSMEkaCcS21xpS9Y6T6NopdWW6KVN7EZonjNtdwmqG9gKrZVOnj6SUp4VGLAWdkfz5c+EGadFubL0oOmHR9p+/PTRfx3UnX4URT56Mqr+nkoLesVSeLTFsq+Wf0BqB7cRwQeDvhfGuMmhikqFB5OrtNgiIswKxBHhcwMiJEn89MkK0fTz9TYQCUKpkMJS2jeQrWKSbpiUkJVOSkdjJY3VRWpx7tH+xUivzUHMPaXyLRl5IJNxGCfHtva/nb9krAHjJsNKNSkk0zvqP/s12+7pfTiblOQUtw/BQS8+saXhzwKMpVgFgmXib9DDH8ldOZOHYDV5rKwu1KPVmKS2AFx1GqAcLh1DMJx8wjJ+zvugnodRnme7V0yDt99BFryf6yahDOHlOXCrZY3M9YqLIXjoYjUET1deDlUQ35WLM+QbNgr9OgQcFm1Jv2UekIcVev9q6zz8I/72HB0MJwYsTRWHvmfqRzRQmDGOk99m0/v558n9ZLaY3A1a9ThYJjLT790DYsWJVNZtiBk458Df9Q5qmgkDZKbs9PB+4vJ2TnmPjV9Lb9C0QVMW9xs4x+BEDhnGOX1+EVOraGgV+2UDqOOydyxBw3nRrfdBEWOO7afj5H9qlNEr+4rb0OgcETU9VT/l7sD5wXu5a8etQhUvX75HCMR8jhJrrPxKLco3NoZBfdgLbcQlQPeWusK81pV0Dnm9IXkh4lXLcJFCD7Y6q/R6D9J9qTfaj+9D/l//uXbHY5FWwCL/ePgbtEQbYnX8ey/tD3txG/cFTg4MmThurZw62Uqo32+EEg8cHZP3ZLERJhzKCf5wkRCFHC3J5Pf55GHqtovRZzKaT5Nn+6/L912/GCeYhpk2O7FqL62BaZleQ+M/lTtnZthvLJqyfaepBo5RYNLNcKZkg+JTln1LRGDZpIWG4Sd831RX2xxL1mAELZp/MTzTr7A8cUp81yJgxRZUYVveICiMM8v8q6M+QoMttAx1CF9zTLbHu35K2fchJV4XO7J3dzbv4gReVk7cVirtJRCf1Et8XAJxI+NxleB4n8/BudIPjfZb5V+38ttuSTq7Dung0uN/V/bVIeqt8K9M+a0XUx3eQHVyz3Sd8v8PfTRjMGwZAAA=",
	);
	reboot_native.importPy(
		"rbt.thirdparty.prosemirror.v1.authority_rbt",
		"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",
	);
}

importPys();
