"use client";

import type {
	Message as __bufbuildProtobufMessage,
	MessageType as __bufbuildProtobufMessageType,
	PartialMessage as __bufbuildProtobufPartialMessage,
} from "@bufbuild/protobuf";
import { ListValue, Value, Struct } from "@bufbuild/protobuf";
import * as reboot_react from "@reboot-dev/reboot-react";
import * as reboot_api from "@reboot-dev/reboot-api";
import { useEffect, useMemo, useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import { v4 as uuidv4 } from "uuid";
// NOTE NOTE NOTE
//
// If you are reading this comment because you are trying to debug
// the error:
//
// Module not found: Error: Can't resolve './authority_pb.js'
//
// You can resolve this by passing --react-extensionless to `rbt
// protoc` (or better put it in your `.rbtrc` file).
//
// This is a known issue if you're using `webpack` which uses
// `ts-loader` (https://github.com/TypeStrong/ts-loader/issues/465).
import {
	Authority as AuthorityProto,
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

export interface AuthorityMutators {
	create: {
		// Mutators are functions and can be called directly.
		(
			partialRequest?: __bufbuildProtobufPartialMessage<CreateRequest>,
			optimistic_metadata?: any,
		): Promise<
			reboot_react.ResponseOrAborted<CreateResponse, AuthorityCreateAborted>
		>;

		pending: reboot_react.Mutation<CreateRequest>[];
	};
	apply: {
		// Mutators are functions and can be called directly.
		(
			partialRequest?: __bufbuildProtobufPartialMessage<ApplyRequest>,
			optimistic_metadata?: any,
		): Promise<
			reboot_react.ResponseOrAborted<ApplyResponse, AuthorityApplyAborted>
		>;

		pending: reboot_react.Mutation<ApplyRequest>[];
	};
}

const AUTHORITY_CREATE_ERROR_TYPES = [
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
	// Method errors.
] as const; // Need `as const` to ensure TypeScript infers this as a tuple!

export type AuthorityCreateAbortedError = reboot_api.InstanceTypeForErrorTypes<
	typeof AUTHORITY_CREATE_ERROR_TYPES
>[number];

export class AuthorityCreateAborted extends reboot_api.Aborted {
	static fromStatus(status: reboot_api.Status) {
		let error = reboot_api.errorFromGoogleRpcStatusDetails(
			status,
			AUTHORITY_CREATE_ERROR_TYPES,
		);

		if (error !== undefined) {
			return new AuthorityCreateAborted(error, { message: status.message });
		}

		error = reboot_api.errorFromGoogleRpcStatusCode(status);

		// TODO(benh): also consider getting the type names from
		// `status.details` and including that in `message` to make
		// debugging easier.

		return new AuthorityCreateAborted(error, { message: status.message });
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

const AUTHORITY_APPLY_ERROR_TYPES = [
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
	// Method errors.
] as const; // Need `as const` to ensure TypeScript infers this as a tuple!

export type AuthorityApplyAbortedError = reboot_api.InstanceTypeForErrorTypes<
	typeof AUTHORITY_APPLY_ERROR_TYPES
>[number];

export class AuthorityApplyAborted extends reboot_api.Aborted {
	static fromStatus(status: reboot_api.Status) {
		let error = reboot_api.errorFromGoogleRpcStatusDetails(
			status,
			AUTHORITY_APPLY_ERROR_TYPES,
		);

		if (error !== undefined) {
			return new AuthorityApplyAborted(error, { message: status.message });
		}

		error = reboot_api.errorFromGoogleRpcStatusCode(status);

		// TODO(benh): also consider getting the type names from
		// `status.details` and including that in `message` to make
		// debugging easier.

		return new AuthorityApplyAborted(error, { message: status.message });
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

const AUTHORITY_CHANGES_ERROR_TYPES = [
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
	// Method errors.
] as const; // Need `as const` to ensure TypeScript infers this as a tuple!

export type AuthorityChangesAbortedError = reboot_api.InstanceTypeForErrorTypes<
	typeof AUTHORITY_CHANGES_ERROR_TYPES
>[number];

export class AuthorityChangesAborted extends reboot_api.Aborted {
	static fromStatus(status: reboot_api.Status) {
		let error = reboot_api.errorFromGoogleRpcStatusDetails(
			status,
			AUTHORITY_CHANGES_ERROR_TYPES,
		);

		if (error !== undefined) {
			return new AuthorityChangesAborted(error, { message: status.message });
		}

		error = reboot_api.errorFromGoogleRpcStatusCode(status);

		// TODO(benh): also consider getting the type names from
		// `status.details` and including that in `message` to make
		// debugging easier.

		return new AuthorityChangesAborted(error, { message: status.message });
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

export interface UseAuthorityApi {
	mutators: AuthorityMutators;
	create: {
		// Mutators are functions and can be called directly.
		(
			partialRequest?: __bufbuildProtobufPartialMessage<CreateRequest>,
			optimistic_metadata?: any,
		): Promise<
			reboot_react.ResponseOrAborted<CreateResponse, AuthorityCreateAborted>
		>;

		pending: reboot_react.Mutation<CreateRequest>[];
	};
	apply: {
		// Mutators are functions and can be called directly.
		(
			partialRequest?: __bufbuildProtobufPartialMessage<ApplyRequest>,
			optimistic_metadata?: any,
		): Promise<
			reboot_react.ResponseOrAborted<ApplyResponse, AuthorityApplyAborted>
		>;

		pending: reboot_react.Mutation<ApplyRequest>[];
	};
	useChanges: (
		partialRequest?: __bufbuildProtobufPartialMessage<ChangesRequest>,
	) => {
		response: ChangesResponse | undefined;
		isLoading: boolean;
		aborted: undefined | AuthorityChangesAborted;
	};
	changes: (
		partialRequest?: __bufbuildProtobufPartialMessage<ChangesRequest>,
	) => Promise<
		reboot_react.ResponseOrAborted<ChangesResponse, AuthorityChangesAborted>
	>;
}

export interface SettingsParams {
	id: string;
	storeMutationsLocallyInNamespace?: string;
}

class AuthorityInstance {
	constructor(id: string, stateRef: string, endpoint: string) {
		this.id = id;
		this.stateRef = stateRef;
		this.endpoint = endpoint;
		this.refs = 1;

		// TODO(benh): rather than keeping a long-lived open connection
		// via `WebSocketsConnection`, we could consider aborting that
		// connection once the websocket is established.
		this.initializeWebSocketsConnection();
		this.initializeWebSocket();
	}

	private ref() {
		this.refs += 1;
		return this.refs;
	}

	private unref() {
		this.refs -= 1;

		if (this.refs === 0 && this.websocket !== undefined) {
			this.websocket.close();
			this.websocketsConnectionAbortController.abort();
		}

		return this.refs;
	}

	readonly id: string;
	readonly stateRef: string;
	private endpoint: string;
	private refs: number;
	private observers: reboot_react.Observers = {};
	private loadingReaders = 0;
	private runningMutates: reboot_react.Mutate[] = [];
	private queuedMutates: reboot_react.Mutate[] = [];
	private flushMutates?: reboot_react.Event = undefined;
	private websocket?: WebSocket = undefined;
	private backoff: reboot_react.Backoff = new reboot_react.Backoff();
	private websocketsConnectionAbortController = new AbortController();

	private hasRunningMutations() {
		return this.runningMutates.length > 0;
	}

	private async flushMutations() {
		if (this.flushMutates === undefined) {
			this.flushMutates = new reboot_react.Event();
		}
		await this.flushMutates.wait();
	}

	private readersLoadedOrFailed() {
		this.flushMutates = undefined;

		if (this.queuedMutates.length > 0) {
			this.runningMutates = this.queuedMutates;
			this.queuedMutates = [];

			if (this.websocket?.readyState === WebSocket.OPEN) {
				for (const { request, update } of this.runningMutates) {
					update({ isLoading: true });
					try {
						this.websocket.send(request.toBinary());
					} catch (e: unknown) {
						// We'll retry since we've stored in `*Mutates`.
					}
				}
			}
		}
	}

	private initializeWebSocketsConnection() {
		reboot_react.retryForever(async () => {
			const headers = new Headers();
			headers.set("Content-Type", "application/json");
			headers.append("Connection", "keep-alive");

			// NOTE: we use `fetch()` not `reboot_react.guardedFetch()`
			// because if there are only mutations than a disconnect will
			// cause us to show a warning when using `rbt dev` but we won't
			// ever remove the warning because the fetch to
			// `WebSocketsConnection` waits indefinitely.
			await fetch(
				new Request(
					`${this.endpoint}/__/reboot/rpc/${this.stateRef}/rbt.v1alpha1.React/WebSocketsConnection`,
					{
						method: "POST",
						headers,
						body: new reboot_api.react_pb.WebSocketsConnectionRequest().toJsonString(),
					},
				),
				{ signal: this.websocketsConnectionAbortController.signal },
			).catch((error: unknown) => {
				// In some legitimate cases,
				// this.websocketsConnectionAbortController.abort() will be called
				// before fetch() finishes, like on quick unmount.
				// Suppress this error, reraise everything else.
				if (error instanceof Error && error.name !== "AbortError") {
					throw error;
				}
			});
		});
	}

	private initializeWebSocket() {
		if (this.websocket === undefined && this.refs > 0) {
			const url = new URL(this.endpoint);
			const protocol = url.protocol === "https:" ? "wss:" : "ws:";
			this.websocket = new WebSocket(
				`${protocol}//${url.host}/__/reboot/rpc/${this.stateRef}`,
			);

			this.websocket.binaryType = "arraybuffer";

			this.websocket.onopen = () => {
				if (this.websocket?.readyState === WebSocket.OPEN) {
					for (const { request, update } of this.runningMutates) {
						update({ isLoading: true });
						try {
							this.websocket.send(request.toBinary());
						} catch (e: unknown) {
							// We'll retry since we've stored in `*Mutates`.
						}
					}
				}
			};

			this.websocket.onerror = async () => {
				if (this.websocket !== undefined) {
					// TODO: explicitly close?
					this.websocket = undefined;

					for (const { update } of this.runningMutates) {
						update({ isLoading: false, error: "WebSocket disconnected" });
					}

					if (this.refs > 0) {
						if (this.runningMutates.length > 0) {
							console.warn(
								`WebSocket disconnected, ${this.runningMutates.length} outstanding mutations will be retried when we reconnect`,
							);
						}

						await this.backoff.wait();

						this.initializeWebSocket();
					}
				}
			};

			this.websocket.onclose = async () => {
				if (this.websocket !== undefined) {
					// TODO: explicitly close?
					this.websocket = undefined;

					for (const { update } of this.runningMutates) {
						update({ isLoading: false, error: "WebSocket disconnected" });
					}

					if (this.refs > 0) {
						await this.backoff.wait();

						this.initializeWebSocket();
					}
				}
			};

			this.websocket.onmessage = async (event) => {
				const { resolve } = this.runningMutates[0];
				this.runningMutates.shift();

				const response = reboot_api.react_pb.MutateResponse.fromBinary(
					new Uint8Array(event.data),
				);

				resolve(response);

				if (
					this.flushMutates !== undefined &&
					this.runningMutates.length === 0
				) {
					this.flushMutates.set();
				}
			};
		}
	}

	private async mutate(
		partialRequest: __bufbuildProtobufPartialMessage<reboot_api.react_pb.MutateRequest>,
		update: (props: { isLoading: boolean; error?: any }) => void,
	): Promise<reboot_api.react_pb.MutateResponse> {
		const request =
			partialRequest instanceof reboot_api.react_pb.MutateRequest
				? partialRequest
				: new reboot_api.react_pb.MutateRequest(partialRequest);

		return new Promise((resolve, _) => {
			if (this.loadingReaders === 0) {
				this.runningMutates.push({ request, resolve, update });
				if (this.websocket?.readyState === WebSocket.OPEN) {
					update({ isLoading: true });
					try {
						this.websocket.send(request.toBinary());
					} catch (e: unknown) {
						// We'll retry since we've stored in `*Mutates`.
					}
				}
			} else {
				this.queuedMutates.push({ request, resolve, update });
			}
		});
	}

	private async read<
		RequestType extends __bufbuildProtobufMessage<RequestType>,
		ResponseType extends __bufbuildProtobufMessage<ResponseType>,
	>(
		method: string,
		request: RequestType,
		bearerToken: string | undefined,
		responseType: __bufbuildProtobufMessageType<ResponseType>,
		reader: reboot_react.Reader<ResponseType>,
	) {
		const headers = new Headers();
		headers.set("Content-Type", "application/json");
		headers.append("Connection", "keep-alive");

		if (bearerToken !== undefined) {
			headers.append("Authorization", `Bearer ${bearerToken}`);
		}

		const queryRequest = new reboot_api.react_pb.QueryRequest({
			method,
			request: request.toBinary(),
		});

		// Expected idempotency key we should observe due to a mutation.
		interface Expected {
			// Idempotency key of mutation.
			idempotencyKey: string;

			// Callback when we've observed this idempotency key.
			observed: (callback: () => void) => Promise<void>;

			// Callback when we no longer care about observing.
			aborted: () => void;
		}

		let expecteds: Expected[] = [];

		// When we disconnect we may not be able to observe
		// responses due to mutations yet there may still be
		// some outstanding responses that are expected which
		// we treat as "orphans" in the sense that we won't
		// observe their idempotency keys but once we reconnect
		// we will still have observed their effects and can
		// call `observed()` on them.
		let orphans: Expected[] = [];

		const id = `${uuidv4()}`;

		this.observers[id] = {
			observe: (
				idempotencyKey: string,
				observed: (callback: () => void) => Promise<void>,
				aborted: () => void,
			) => {
				expecteds.push({ idempotencyKey, observed, aborted });
			},
			unobserve: (idempotencyKey: string) => {
				expecteds = expecteds.filter(
					(expected) => expected.idempotencyKey !== idempotencyKey,
				);
			},
		};

		try {
			await reboot_react.retryForever(async () => {
				let loaded = false;
				this.loadingReaders += 1;

				// Any mutations started after we've incremented
				// `this.loadingReaders` will be queued until after
				// all the readers have loaded and thus (1) we know all
				// current `expected` are actually `orphans` that
				// we will haved "observed" once we are (re)connected
				// because we flush mutations before starting to read
				// and (2) all queued mutations can stay in `expected`
				// because we will in fact be able to observe them
				// since they won't get sent over the websocket
				// until after we are (re)connected.
				//
				// NOTE: we need to concatenate with `orphans`
				// because we may try to (re)connect multiple times
				// and between each try more mutations may have been
				// made (or queued ones will be moved to running).
				orphans = [...orphans, ...expecteds];
				expecteds = [];

				try {
					// Wait for potentially completed mutations to flush
					// before starting to read so that we read the latest
					// state including those mutations.
					if (this.hasRunningMutations()) {
						await this.flushMutations();
					}

					unstable_batchedUpdates(() => {
						for (const setIsLoading of Object.values(reader.setIsLoadings)) {
							setIsLoading(true);
						}
					});

					const queryResponses = reboot_react.grpcServerStream({
						endpoint: `${this.endpoint}/__/reboot/rpc/${this.stateRef}/rbt.v1alpha1.React/Query`,
						method: "POST",
						headers,
						request: queryRequest,
						responseType: reboot_api.react_pb.QueryResponse,
						signal: reader.abortController.signal,
					});

					for await (const queryResponse of queryResponses) {
						if (!loaded) {
							if ((this.loadingReaders -= 1) === 0) {
								this.readersLoadedOrFailed();
							}
							loaded = true;
						}

						unstable_batchedUpdates(() => {
							for (const setIsLoading of Object.values(reader.setIsLoadings)) {
								setIsLoading(false);
							}
						});

						const response =
							queryResponse.response !== undefined
								? responseType.fromBinary(queryResponse.response)
								: undefined;

						// If we were disconnected it must be that we've
						// observed all `orphans` because we waited
						// for any mutations to flush before we re-started to
						// read.
						if (orphans.length > 0) {
							// We mark all mutations as observed except the
							// last one which we also invoke all `setResponse`s.
							// In this way we effectively create a barrier
							// for all readers that will synchronize on the last
							// mutation, but note that this still may lead
							// to some partial state/response updates because
							// one reader may have actually received a response
							// while another reader got disconnected. While this
							// is likely very rare, it is possible. Mitigating
							// this issue is non-trivial and for now we have
							// no plans to address it.
							for (let i = 0; i < orphans.length - 1; i++) {
								orphans[i].observed(() => {});
							}
							await orphans[orphans.length - 1].observed(() => {
								if (response !== undefined) {
									reader.response = response;
									for (const setResponse of Object.values(
										reader.setResponses,
									)) {
										setResponse(response);
									}
								}
							});

							orphans = [];
						} else if (
							expecteds.length > 0 &&
							queryResponse.idempotencyKeys.includes(
								expecteds[0].idempotencyKey,
							)
						) {
							// eslint-disable-next-line no-loop-func
							await expecteds[0].observed(() => {
								if (response !== undefined) {
									reader.response = response;
									for (const setResponse of Object.values(
										reader.setResponses,
									)) {
										setResponse(response);
									}
								}
								// eslint-disable-next-line no-loop-func
								expecteds.shift();
							});
						} else if (response !== undefined) {
							unstable_batchedUpdates(() => {
								reader.response = response;
								for (const setResponse of Object.values(reader.setResponses)) {
									setResponse(response);
								}
							});
						}
					}

					throw new Error("Not expecting stream to ever be done");
				} catch (e: unknown) {
					if (!loaded) {
						if ((this.loadingReaders -= 1) === 0) {
							this.readersLoadedOrFailed();
						}
					}

					loaded = false;

					if (reader.abortController.signal.aborted) {
						for (const { aborted } of [...orphans, ...expecteds]) {
							aborted();
						}
						return;
					}

					unstable_batchedUpdates(() => {
						for (const setIsLoading of Object.values(reader.setIsLoadings)) {
							setIsLoading(false);
						}
						if (e instanceof reboot_api.Status) {
							for (const setStatus of Object.values(reader.setStatuses)) {
								setStatus(e);
							}
						}
					});

					throw e; // This just retries!
				}
			});
		} finally {
			delete this.observers[id];
		}
	}

	private useCreateMutations: reboot_react.Mutation<CreateRequest>[] = [];

	private useCreateSetPendings: {
		[id: string]: (mutations: reboot_react.Mutation<CreateRequest>[]) => void;
	} = {};

	async create(
		mutation: reboot_react.Mutation<CreateRequest>,
	): Promise<
		reboot_react.ResponseOrAborted<CreateResponse, AuthorityCreateAborted>
	> {
		// We always have at least 1 observer which is this function!
		let remainingObservers = 1;

		const event = new reboot_react.Event();

		const callbacks: (() => void)[] = [];

		const observed = (callback: () => void) => {
			callbacks.push(callback);
			remainingObservers -= 1;
			if (remainingObservers === 0) {
				unstable_batchedUpdates(() => {
					for (const callback of callbacks) {
						callback();
					}
				});
				event.set();
			}
			return event.wait();
		};

		const aborted = () => {
			observed(() => {});
		};

		// Tell observers about this pending mutation.
		for (const id in this.observers) {
			remainingObservers += 1;
			this.observers[id].observe(mutation.idempotencyKey, observed, aborted);
		}

		this.useCreateMutations.push(mutation);

		unstable_batchedUpdates(() => {
			for (const setPending of Object.values(this.useCreateSetPendings)) {
				setPending(this.useCreateMutations);
			}
		});

		return new Promise<
			reboot_react.ResponseOrAborted<CreateResponse, AuthorityCreateAborted>
		>(async (resolve, reject) => {
			const { responseOrStatus } = await this.mutate(
				{
					method: "Create",
					request: mutation.request.toBinary(),
					idempotencyKey: mutation.idempotencyKey,
					bearerToken: mutation.bearerToken,
				},
				({ isLoading, error }: { isLoading: boolean; error?: any }) => {
					let rerender = false;
					for (const m of this.useCreateMutations) {
						if (m === mutation) {
							if (m.isLoading !== isLoading) {
								m.isLoading = isLoading;
								rerender = true;
							}
							if (error !== undefined && m.error !== error) {
								m.error = error;
								rerender = true;
							}
						}
					}

					if (rerender) {
						unstable_batchedUpdates(() => {
							for (const setPending of Object.values(
								this.useCreateSetPendings,
							)) {
								setPending(this.useCreateMutations);
							}
						});
					}
				},
			);

			switch (responseOrStatus.case) {
				case "response":
					await observed(() => {
						this.useCreateMutations = this.useCreateMutations.filter(
							(m) => m !== mutation,
						);

						unstable_batchedUpdates(() => {
							for (const setPending of Object.values(
								this.useCreateSetPendings,
							)) {
								setPending(this.useCreateMutations);
							}
						});

						resolve({
							response: CreateResponse.fromBinary(responseOrStatus.value),
						});
					});
					break;
				case "status":
					// Let the observers know they no longer should expect to
					// observe this idempotency key.
					for (const id in this.observers) {
						this.observers[id].unobserve(mutation.idempotencyKey);
					}

					const status = reboot_api.Status.fromJsonString(
						responseOrStatus.value,
					);

					const aborted = AuthorityCreateAborted.fromStatus(status);

					console.warn(`'Authority.Create' aborted with ${aborted.message}`);

					resolve({ aborted });

					break;
				default:
					// TODO(benh): while this is a _really_ fatal error,
					// should we still set `aborted` instead of throwing?
					reject(new Error("Expecting either a response or a status"));
			}
		});
	}

	useCreate(
		id: string,
		setPending: (mutations: reboot_react.Mutation<CreateRequest>[]) => void,
	) {
		this.useCreateSetPendings[id] = setPending;
	}

	unuseCreate(id: string) {
		delete this.useCreateSetPendings[id];
	}

	private useApplyMutations: reboot_react.Mutation<ApplyRequest>[] = [];

	private useApplySetPendings: {
		[id: string]: (mutations: reboot_react.Mutation<ApplyRequest>[]) => void;
	} = {};

	async apply(
		mutation: reboot_react.Mutation<ApplyRequest>,
	): Promise<
		reboot_react.ResponseOrAborted<ApplyResponse, AuthorityApplyAborted>
	> {
		// We always have at least 1 observer which is this function!
		let remainingObservers = 1;

		const event = new reboot_react.Event();

		const callbacks: (() => void)[] = [];

		const observed = (callback: () => void) => {
			callbacks.push(callback);
			remainingObservers -= 1;
			if (remainingObservers === 0) {
				unstable_batchedUpdates(() => {
					for (const callback of callbacks) {
						callback();
					}
				});
				event.set();
			}
			return event.wait();
		};

		const aborted = () => {
			observed(() => {});
		};

		// Tell observers about this pending mutation.
		for (const id in this.observers) {
			remainingObservers += 1;
			this.observers[id].observe(mutation.idempotencyKey, observed, aborted);
		}

		this.useApplyMutations.push(mutation);

		unstable_batchedUpdates(() => {
			for (const setPending of Object.values(this.useApplySetPendings)) {
				setPending(this.useApplyMutations);
			}
		});

		return new Promise<
			reboot_react.ResponseOrAborted<ApplyResponse, AuthorityApplyAborted>
		>(async (resolve, reject) => {
			const { responseOrStatus } = await this.mutate(
				{
					method: "Apply",
					request: mutation.request.toBinary(),
					idempotencyKey: mutation.idempotencyKey,
					bearerToken: mutation.bearerToken,
				},
				({ isLoading, error }: { isLoading: boolean; error?: any }) => {
					let rerender = false;
					for (const m of this.useApplyMutations) {
						if (m === mutation) {
							if (m.isLoading !== isLoading) {
								m.isLoading = isLoading;
								rerender = true;
							}
							if (error !== undefined && m.error !== error) {
								m.error = error;
								rerender = true;
							}
						}
					}

					if (rerender) {
						unstable_batchedUpdates(() => {
							for (const setPending of Object.values(
								this.useApplySetPendings,
							)) {
								setPending(this.useApplyMutations);
							}
						});
					}
				},
			);

			switch (responseOrStatus.case) {
				case "response":
					await observed(() => {
						this.useApplyMutations = this.useApplyMutations.filter(
							(m) => m !== mutation,
						);

						unstable_batchedUpdates(() => {
							for (const setPending of Object.values(
								this.useApplySetPendings,
							)) {
								setPending(this.useApplyMutations);
							}
						});

						resolve({
							response: ApplyResponse.fromBinary(responseOrStatus.value),
						});
					});
					break;
				case "status":
					// Let the observers know they no longer should expect to
					// observe this idempotency key.
					for (const id in this.observers) {
						this.observers[id].unobserve(mutation.idempotencyKey);
					}

					const status = reboot_api.Status.fromJsonString(
						responseOrStatus.value,
					);

					const aborted = AuthorityApplyAborted.fromStatus(status);

					console.warn(`'Authority.Apply' aborted with ${aborted.message}`);

					resolve({ aborted });

					break;
				default:
					// TODO(benh): while this is a _really_ fatal error,
					// should we still set `aborted` instead of throwing?
					reject(new Error("Expecting either a response or a status"));
			}
		});
	}

	useApply(
		id: string,
		setPending: (mutations: reboot_react.Mutation<ApplyRequest>[]) => void,
	) {
		this.useApplySetPendings[id] = setPending;
	}

	unuseApply(id: string) {
		delete this.useApplySetPendings[id];
	}

	private useChangesReaders: {
		[id: string]: reboot_react.Reader<ChangesResponse>;
	} = {};

	useChanges(
		id: string,
		request: ChangesRequest,
		bearerToken: string | undefined,
		setResponse: (response: ChangesResponse) => void,
		setIsLoading: (isLoading: boolean) => void,
		setStatus: (status: reboot_api.Status) => void,
	) {
		let read = false;

		// NOTE: need to concatenate `request.toJsonString()` with `bearerToken`
		// because it uniquely identifies the request, i.e., a second call
		// that has the same `request` but a different bearerToken should be a
		// different call.
		const key = request.toJsonString() + bearerToken;

		if (!(key in this.useChangesReaders)) {
			this.useChangesReaders[key] = {
				abortController: new AbortController(),
				setResponses: {},
				setIsLoadings: {},
				setStatuses: {},
			};

			read = true;
		}

		let reader = this.useChangesReaders[key];

		reader.setResponses[id] = setResponse;
		reader.setIsLoadings[id] = setIsLoading;
		reader.setStatuses[id] = setStatus;

		if (reader.response !== undefined) {
			setResponse(reader.response);
		}

		if (read) {
			this.read("Changes", request, bearerToken, ChangesResponse, reader);
		}
	}

	unuseChanges(
		id: string,
		request: ChangesRequest,
		bearerToken: string | undefined,
	) {
		// See comment above in `useChanges` for why
		// we concatenate `request.toJsonString()` with `bearerToken`.
		const key = request.toJsonString() + bearerToken;

		const reader = this.useChangesReaders[key];

		delete reader.setResponses[id];
		delete reader.setIsLoadings[id];
		delete reader.setStatuses[id];

		if (Object.values(reader.setResponses).length === 0) {
			delete this.useChangesReaders[key];
			reader.abortController.abort();
		}
	}

	private static instances: { [id: string]: AuthorityInstance } = {};

	static use(id: string, stateRef: string, endpoint: string) {
		if (!(id in this.instances)) {
			this.instances[id] = new AuthorityInstance(id, stateRef, endpoint);
		} else {
			this.instances[id].ref();
		}

		return this.instances[id];
	}

	unuse() {
		if (this.unref() === 0) {
			delete AuthorityInstance.instances[this.id];
		}
	}
}

export const useAuthority = ({ id }: { id: string }): UseAuthorityApi => {
	const stateId = id;
	const stateRef = reboot_react.stateIdToRef(
		"rbt.thirdparty.prosemirror.v1.Authority",
		id,
	);

	const rebootContext = reboot_react.useRebootContext();

	const endpoint = rebootContext.client.endpoint;
	const bearerToken = rebootContext.bearerToken;

	const [instance, setInstance] = useState(() => {
		return AuthorityInstance.use(stateId, stateRef, endpoint);
	});

	if (instance.id !== stateId) {
		setInstance(AuthorityInstance.use(stateId, stateRef, endpoint));
	}

	useEffect(() => {
		return () => {
			instance.unuse();
		};
	}, [instance]);

	const headers = useMemo(() => {
		const headers = new Headers();
		headers.set("Content-Type", "application/json");
		headers.append("Connection", "keep-alive");

		if (bearerToken !== undefined) {
			headers.append("Authorization", `Bearer ${bearerToken}`);
		}

		return headers;
	}, [bearerToken]);

	function useCreate() {
		const [pending, setPending] = useState<
			reboot_react.Mutation<CreateRequest>[]
		>([]);

		useEffect(() => {
			const id = uuidv4();
			instance.useCreate(id, setPending);
			return () => {
				instance.unuseCreate(id);
			};
		}, []);

		const rebootContext = reboot_react.useRebootContext();

		const bearerToken = rebootContext.bearerToken;

		const create = useMemo(() => {
			const method = async (
				partialRequest: __bufbuildProtobufPartialMessage<CreateRequest> = {},
				optimistic_metadata?: any,
			) => {
				const request =
					partialRequest instanceof CreateRequest
						? partialRequest.clone()
						: new CreateRequest(partialRequest);

				const idempotencyKey = uuidv4();

				const mutation = {
					request,
					idempotencyKey,
					bearerToken,
					optimistic_metadata,
					isLoading: false, // Won't start loading if we're flushing mutations.
				};

				return instance.create(mutation);
			};

			method.pending = new Array<reboot_react.Mutation<CreateRequest>>();

			return method;
		}, [bearerToken]);

		create.pending = pending;

		return create;
	}

	const create = useCreate();

	function useApply() {
		const [pending, setPending] = useState<
			reboot_react.Mutation<ApplyRequest>[]
		>([]);

		useEffect(() => {
			const id = uuidv4();
			instance.useApply(id, setPending);
			return () => {
				instance.unuseApply(id);
			};
		}, []);

		const rebootContext = reboot_react.useRebootContext();

		const bearerToken = rebootContext.bearerToken;

		const apply = useMemo(() => {
			const method = async (
				partialRequest: __bufbuildProtobufPartialMessage<ApplyRequest> = {},
				optimistic_metadata?: any,
			) => {
				const request =
					partialRequest instanceof ApplyRequest
						? partialRequest.clone()
						: new ApplyRequest(partialRequest);

				const idempotencyKey = uuidv4();

				const mutation = {
					request,
					idempotencyKey,
					bearerToken,
					optimistic_metadata,
					isLoading: false, // Won't start loading if we're flushing mutations.
				};

				return instance.apply(mutation);
			};

			method.pending = new Array<reboot_react.Mutation<ApplyRequest>>();

			return method;
		}, [bearerToken]);

		apply.pending = pending;

		return apply;
	}

	const apply = useApply();

	function useChanges(
		partialRequest: __bufbuildProtobufPartialMessage<ChangesRequest> = {},
	) {
		const newRequest =
			partialRequest instanceof ChangesRequest
				? partialRequest.clone()
				: new ChangesRequest(partialRequest);

		const [request, setRequest] = useState(newRequest);

		if (!request.equals(newRequest)) {
			setRequest(newRequest);
		}

		const [response, setResponse] = useState<ChangesResponse>();
		const [isLoading, setIsLoading] = useState<boolean>(true);
		const [aborted, setAborted] = useState<
			undefined | AuthorityChangesAborted
		>();

		const rebootContext = reboot_react.useRebootContext();

		const bearerToken = rebootContext.bearerToken;

		useEffect(() => {
			const id = uuidv4();
			instance.useChanges(
				id,
				request,
				bearerToken,
				(response: ChangesResponse) => {
					unstable_batchedUpdates(() => {
						setAborted(undefined);
						setResponse(response);
					});
				},
				setIsLoading,
				(status: reboot_api.Status) => {
					const aborted = AuthorityChangesAborted.fromStatus(status);

					console.warn(`'Authority.Changes' aborted with ${aborted.message}`);

					setAborted(aborted);
				},
			);
			return () => {
				instance.unuseChanges(id, request, bearerToken);
			};
		}, [instance, request, bearerToken]);

		return { response, isLoading, aborted };
	}

	async function changes(
		partialRequest: __bufbuildProtobufPartialMessage<ChangesRequest> = {},
	) {
		const request =
			partialRequest instanceof ChangesRequest
				? partialRequest.clone()
				: new ChangesRequest(partialRequest);

		// Fetch with retry, using a backoff, i.e., if we get disconnected.
		const response = await (async () => {
			const backoff = new reboot_react.Backoff();

			while (true) {
				try {
					// Invariant here is that we use the '/package.service.method' path and
					// HTTP 'POST' method (we need 'POST' because we send an HTTP body).
					//
					// See also 'reboot/helpers.py'.
					return await reboot_react.guardedFetch(
						new Request(
							`${rebootContext.client.endpoint}/__/reboot/rpc/${stateRef}/rbt.thirdparty.prosemirror.v1.AuthorityMethods/Changes`,
							{
								method: "POST",
								headers,
								body: request.toJsonString(),
							},
						),
					);
				} catch (e: unknown) {
					if (e instanceof Error) {
						console.error(e.message);
					} else {
						console.error(`Unknown error: ${JSON.stringify(e)}`);
					}
				}

				await backoff.wait();
			}
		})();

		if (!response.ok) {
			if (response.headers.get("content-type") === "application/json") {
				const status = reboot_api.Status.fromJson(await response.json());

				const aborted = AuthorityChangesAborted.fromStatus(status);

				console.warn(`'Authority.Changes' aborted with ${aborted.message}`);

				return { aborted };
			} else {
				const aborted = new AuthorityChangesAborted(
					new reboot_api.errors_pb.Unknown(),
					{
						message: `Unknown error with HTTP status ${response.status}`,
					},
				);

				return { aborted };
			}
		} else {
			return { response: await response.json() };
		}
	}

	return {
		mutators: {
			create,
			apply,
		},
		create,
		apply,
		changes,
		useChanges,
	};
};

export class Authority {
	static State = AuthorityProto;
}

export namespace Authority {
	export type State = AuthorityProto;
}
