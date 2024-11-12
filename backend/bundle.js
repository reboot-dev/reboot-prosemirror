var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/main.ts
import { Struct as Struct3 } from "@bufbuild/protobuf";
import { Application } from "@reboot-dev/reboot";

// ../node_modules/@reboot-dev/reboot-api/errors_pb.js
var errors_pb_exports = {};
__export(errors_pb_exports, {
  Aborted: () => Aborted,
  AlreadyExists: () => AlreadyExists,
  Cancelled: () => Cancelled,
  DataLoss: () => DataLoss,
  DeadlineExceeded: () => DeadlineExceeded,
  FailedPrecondition: () => FailedPrecondition,
  Internal: () => Internal,
  InvalidArgument: () => InvalidArgument,
  InvalidMethod: () => InvalidMethod,
  NotFound: () => NotFound,
  Ok: () => Ok,
  OutOfRange: () => OutOfRange,
  PermissionDenied: () => PermissionDenied,
  ResourceExhausted: () => ResourceExhausted,
  StateAlreadyConstructed: () => StateAlreadyConstructed,
  StateNotConstructed: () => StateNotConstructed,
  TransactionParticipantFailedToCommit: () => TransactionParticipantFailedToCommit,
  TransactionParticipantFailedToPrepare: () => TransactionParticipantFailedToPrepare,
  Unauthenticated: () => Unauthenticated,
  Unavailable: () => Unavailable,
  Unimplemented: () => Unimplemented,
  Unknown: () => Unknown,
  UnknownService: () => UnknownService,
  UnknownTask: () => UnknownTask
});
import { proto3 } from "@bufbuild/protobuf";
var StateAlreadyConstructed = proto3.makeMessageType(
  "rbt.v1alpha1.StateAlreadyConstructed",
  []
);
var StateNotConstructed = proto3.makeMessageType(
  "rbt.v1alpha1.StateNotConstructed",
  () => [
    {
      no: 1,
      name: "requires_constructor",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
var UnknownService = proto3.makeMessageType(
  "rbt.v1alpha1.UnknownService",
  []
);
var InvalidMethod = proto3.makeMessageType(
  "rbt.v1alpha1.InvalidMethod",
  []
);
var UnknownTask = proto3.makeMessageType(
  "rbt.v1alpha1.UnknownTask",
  []
);
var TransactionParticipantFailedToPrepare = proto3.makeMessageType(
  "rbt.v1alpha1.TransactionParticipantFailedToPrepare",
  []
);
var TransactionParticipantFailedToCommit = proto3.makeMessageType(
  "rbt.v1alpha1.TransactionParticipantFailedToCommit",
  []
);
var Cancelled = proto3.makeMessageType(
  "rbt.v1alpha1.Cancelled",
  []
);
var Unknown = proto3.makeMessageType(
  "rbt.v1alpha1.Unknown",
  []
);
var InvalidArgument = proto3.makeMessageType(
  "rbt.v1alpha1.InvalidArgument",
  []
);
var DeadlineExceeded = proto3.makeMessageType(
  "rbt.v1alpha1.DeadlineExceeded",
  []
);
var NotFound = proto3.makeMessageType(
  "rbt.v1alpha1.NotFound",
  []
);
var AlreadyExists = proto3.makeMessageType(
  "rbt.v1alpha1.AlreadyExists",
  []
);
var PermissionDenied = proto3.makeMessageType(
  "rbt.v1alpha1.PermissionDenied",
  []
);
var ResourceExhausted = proto3.makeMessageType(
  "rbt.v1alpha1.ResourceExhausted",
  []
);
var FailedPrecondition = proto3.makeMessageType(
  "rbt.v1alpha1.FailedPrecondition",
  []
);
var Aborted = proto3.makeMessageType(
  "rbt.v1alpha1.Aborted",
  []
);
var OutOfRange = proto3.makeMessageType(
  "rbt.v1alpha1.OutOfRange",
  []
);
var Unimplemented = proto3.makeMessageType(
  "rbt.v1alpha1.Unimplemented",
  []
);
var Internal = proto3.makeMessageType(
  "rbt.v1alpha1.Internal",
  []
);
var Unavailable = proto3.makeMessageType(
  "rbt.v1alpha1.Unavailable",
  []
);
var DataLoss = proto3.makeMessageType(
  "rbt.v1alpha1.DataLoss",
  []
);
var Unauthenticated = proto3.makeMessageType(
  "rbt.v1alpha1.Unauthenticated",
  []
);
var Ok = proto3.makeMessageType(
  "rbt.v1alpha1.Ok",
  []
);

// src/main.ts
import { Step } from "prosemirror-transform";

// ../api/rbt/thirdparty/prosemirror/v1/authority_rbt.ts
import { reboot_native, createError } from "@reboot-dev/reboot";

// ../api/rbt/thirdparty/prosemirror/v1/authority_pb.ts
import { Message, proto3 as proto32, Struct } from "@bufbuild/protobuf";
var Authority = class _Authority extends Message {
  constructor(data) {
    super();
    /**
     * @generated from field: repeated rbt.thirdparty.prosemirror.v1.Change changes = 1;
     */
    this.changes = [];
    proto32.util.initPartial(data, this);
  }
  static {
    this.runtime = proto32;
  }
  static {
    this.typeName = "rbt.thirdparty.prosemirror.v1.Authority";
  }
  static {
    this.fields = proto32.util.newFieldList(() => [
      { no: 1, name: "changes", kind: "message", T: Change, repeated: true }
    ]);
  }
  static fromBinary(bytes, options) {
    return new _Authority().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _Authority().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _Authority().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto32.util.equals(_Authority, a, b);
  }
};
var Change = class _Change extends Message {
  constructor(data) {
    super();
    /**
     * The client that authored this change.
     *
     * @generated from field: string client = 2;
     */
    this.client = "";
    proto32.util.initPartial(data, this);
  }
  static {
    this.runtime = proto32;
  }
  static {
    this.typeName = "rbt.thirdparty.prosemirror.v1.Change";
  }
  static {
    this.fields = proto32.util.newFieldList(() => [
      { no: 1, name: "step", kind: "message", T: Struct },
      {
        no: 2,
        name: "client",
        kind: "scalar",
        T: 9
        /* ScalarType.STRING */
      }
    ]);
  }
  static fromBinary(bytes, options) {
    return new _Change().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _Change().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _Change().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto32.util.equals(_Change, a, b);
  }
};
var CreateRequest = class _CreateRequest extends Message {
  constructor(data) {
    super();
    proto32.util.initPartial(data, this);
  }
  static {
    this.runtime = proto32;
  }
  static {
    this.typeName = "rbt.thirdparty.prosemirror.v1.CreateRequest";
  }
  static {
    this.fields = proto32.util.newFieldList(() => []);
  }
  static fromBinary(bytes, options) {
    return new _CreateRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CreateRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CreateRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto32.util.equals(_CreateRequest, a, b);
  }
};
var CreateResponse = class _CreateResponse extends Message {
  constructor(data) {
    super();
    /**
     * @generated from field: uint32 version = 2;
     */
    this.version = 0;
    proto32.util.initPartial(data, this);
  }
  static {
    this.runtime = proto32;
  }
  static {
    this.typeName = "rbt.thirdparty.prosemirror.v1.CreateResponse";
  }
  static {
    this.fields = proto32.util.newFieldList(() => [
      { no: 1, name: "doc", kind: "message", T: Struct },
      {
        no: 2,
        name: "version",
        kind: "scalar",
        T: 13
        /* ScalarType.UINT32 */
      }
    ]);
  }
  static fromBinary(bytes, options) {
    return new _CreateResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _CreateResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _CreateResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto32.util.equals(_CreateResponse, a, b);
  }
};
var ApplyRequest = class _ApplyRequest extends Message {
  constructor(data) {
    super();
    /**
     * @generated from field: uint32 version = 1;
     */
    this.version = 0;
    /**
     * @generated from field: repeated rbt.thirdparty.prosemirror.v1.Change changes = 2;
     */
    this.changes = [];
    proto32.util.initPartial(data, this);
  }
  static {
    this.runtime = proto32;
  }
  static {
    this.typeName = "rbt.thirdparty.prosemirror.v1.ApplyRequest";
  }
  static {
    this.fields = proto32.util.newFieldList(() => [
      {
        no: 1,
        name: "version",
        kind: "scalar",
        T: 13
        /* ScalarType.UINT32 */
      },
      { no: 2, name: "changes", kind: "message", T: Change, repeated: true }
    ]);
  }
  static fromBinary(bytes, options) {
    return new _ApplyRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ApplyRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ApplyRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto32.util.equals(_ApplyRequest, a, b);
  }
};
var ApplyResponse = class _ApplyResponse extends Message {
  constructor(data) {
    super();
    proto32.util.initPartial(data, this);
  }
  static {
    this.runtime = proto32;
  }
  static {
    this.typeName = "rbt.thirdparty.prosemirror.v1.ApplyResponse";
  }
  static {
    this.fields = proto32.util.newFieldList(() => []);
  }
  static fromBinary(bytes, options) {
    return new _ApplyResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ApplyResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ApplyResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto32.util.equals(_ApplyResponse, a, b);
  }
};
var ChangesRequest = class _ChangesRequest extends Message {
  constructor(data) {
    super();
    /**
     * @generated from field: uint32 sinceVersion = 1;
     */
    this.sinceVersion = 0;
    proto32.util.initPartial(data, this);
  }
  static {
    this.runtime = proto32;
  }
  static {
    this.typeName = "rbt.thirdparty.prosemirror.v1.ChangesRequest";
  }
  static {
    this.fields = proto32.util.newFieldList(() => [
      {
        no: 1,
        name: "sinceVersion",
        kind: "scalar",
        T: 13
        /* ScalarType.UINT32 */
      }
    ]);
  }
  static fromBinary(bytes, options) {
    return new _ChangesRequest().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ChangesRequest().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ChangesRequest().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto32.util.equals(_ChangesRequest, a, b);
  }
};
var ChangesResponse = class _ChangesResponse extends Message {
  constructor(data) {
    super();
    /**
     * @generated from field: uint32 version = 1;
     */
    this.version = 0;
    /**
     * @generated from field: repeated rbt.thirdparty.prosemirror.v1.Change changes = 2;
     */
    this.changes = [];
    proto32.util.initPartial(data, this);
  }
  static {
    this.runtime = proto32;
  }
  static {
    this.typeName = "rbt.thirdparty.prosemirror.v1.ChangesResponse";
  }
  static {
    this.fields = proto32.util.newFieldList(() => [
      {
        no: 1,
        name: "version",
        kind: "scalar",
        T: 13
        /* ScalarType.UINT32 */
      },
      { no: 2, name: "changes", kind: "message", T: Change, repeated: true }
    ]);
  }
  static fromBinary(bytes, options) {
    return new _ChangesResponse().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _ChangesResponse().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _ChangesResponse().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto32.util.equals(_ChangesResponse, a, b);
  }
};

// ../node_modules/uuid/dist/esm-node/rng.js
import crypto from "crypto";
var rnds8Pool = new Uint8Array(256);
var poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

// ../node_modules/uuid/dist/esm-node/stringify.js
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

// ../node_modules/uuid/dist/esm-node/native.js
import crypto2 from "crypto";
var native_default = {
  randomUUID: crypto2.randomUUID
};

// ../node_modules/uuid/dist/esm-node/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// ../api/rbt/thirdparty/prosemirror/v1/authority_rbt.ts
import * as reboot from "@reboot-dev/reboot";
import * as protobuf_es2 from "@bufbuild/protobuf";

// ../node_modules/@reboot-dev/reboot-api/auth_pb.js
import { proto3 as proto33, Struct as Struct2 } from "@bufbuild/protobuf";
var Auth = proto33.makeMessageType(
  "rbt.v1alpha1.Auth",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9, opt: true },
    { no: 2, name: "properties", kind: "message", T: Struct2 }
  ]
);

// ../node_modules/@reboot-dev/reboot-api/index.js
import * as protobuf_es from "@bufbuild/protobuf";

// ../node_modules/@reboot-dev/reboot-api/react_pb.js
import { proto3 as proto34 } from "@bufbuild/protobuf";
var QueryRequest = proto34.makeMessageType(
  "rbt.v1alpha1.QueryRequest",
  () => [
    {
      no: 1,
      name: "method",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "request",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    }
  ]
);
var QueryResponse = proto34.makeMessageType(
  "rbt.v1alpha1.QueryResponse",
  () => [
    { no: 1, name: "response", kind: "scalar", T: 12, opt: true },
    { no: 2, name: "idempotency_keys", kind: "scalar", T: 9, repeated: true }
  ]
);
var MutateRequest = proto34.makeMessageType(
  "rbt.v1alpha1.MutateRequest",
  () => [
    {
      no: 1,
      name: "method",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "request",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    },
    {
      no: 3,
      name: "idempotency_key",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "bearer_token", kind: "scalar", T: 9, opt: true }
  ]
);
var MutateResponse = proto34.makeMessageType(
  "rbt.v1alpha1.MutateResponse",
  () => [
    { no: 1, name: "response", kind: "scalar", T: 12, oneof: "response_or_status" },
    { no: 2, name: "status", kind: "scalar", T: 9, oneof: "response_or_status" }
  ]
);
var WebSocketsConnectionRequest = proto34.makeMessageType(
  "rbt.v1alpha1.WebSocketsConnectionRequest",
  []
);
var WebSocketsConnectionResponse = proto34.makeMessageType(
  "rbt.v1alpha1.WebSocketsConnectionResponse",
  []
);

// ../node_modules/@reboot-dev/reboot-api/tasks_pb.js
var tasks_pb_exports = {};
__export(tasks_pb_exports, {
  CancelTaskRequest: () => CancelTaskRequest,
  CancelTaskResponse: () => CancelTaskResponse,
  CancelTaskResponse_Status: () => CancelTaskResponse_Status,
  ListTasksRequest: () => ListTasksRequest,
  ListTasksResponse: () => ListTasksResponse,
  TaskCancelledError: () => TaskCancelledError,
  TaskId: () => TaskId,
  TaskInfo: () => TaskInfo,
  TaskInfo_Status: () => TaskInfo_Status,
  TaskResponseOrError: () => TaskResponseOrError,
  WaitRequest: () => WaitRequest,
  WaitResponse: () => WaitResponse
});
import { Any, proto3 as proto35, Timestamp } from "@bufbuild/protobuf";
var TaskId = proto35.makeMessageType(
  "rbt.v1alpha1.TaskId",
  () => [
    {
      no: 1,
      name: "state_type",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "state_ref",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "task_uuid",
      kind: "scalar",
      T: 12
      /* ScalarType.BYTES */
    }
  ]
);
var TaskInfo = proto35.makeMessageType(
  "rbt.v1alpha1.TaskInfo",
  () => [
    { no: 1, name: "status", kind: "enum", T: proto35.getEnumType(TaskInfo_Status) },
    { no: 2, name: "task_id", kind: "message", T: TaskId },
    {
      no: 3,
      name: "method",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "occurred_at", kind: "message", T: Timestamp },
    { no: 5, name: "scheduled_at", kind: "message", T: Timestamp },
    {
      no: 6,
      name: "iterations",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    },
    {
      no: 7,
      name: "num_runs_failed_recently",
      kind: "scalar",
      T: 4
      /* ScalarType.UINT64 */
    }
  ]
);
var TaskInfo_Status = proto35.makeEnum(
  "rbt.v1alpha1.TaskInfo.Status",
  [
    { no: 0, name: "UNKNOWN" },
    { no: 1, name: "STARTED" },
    { no: 2, name: "SCHEDULED" },
    { no: 3, name: "SCHEDULED_RETRY" },
    { no: 4, name: "CANCELLED" },
    { no: 5, name: "COMPLETED" }
  ]
);
var WaitRequest = proto35.makeMessageType(
  "rbt.v1alpha1.WaitRequest",
  () => [
    { no: 1, name: "task_id", kind: "message", T: TaskId }
  ]
);
var TaskResponseOrError = proto35.makeMessageType(
  "rbt.v1alpha1.TaskResponseOrError",
  () => [
    { no: 1, name: "response", kind: "message", T: Any, oneof: "response_or_error" },
    { no: 2, name: "error", kind: "message", T: Any, oneof: "response_or_error" }
  ]
);
var WaitResponse = proto35.makeMessageType(
  "rbt.v1alpha1.WaitResponse",
  () => [
    { no: 1, name: "response_or_error", kind: "message", T: TaskResponseOrError }
  ]
);
var ListTasksRequest = proto35.makeMessageType(
  "rbt.v1alpha1.ListTasksRequest",
  () => [
    { no: 1, name: "only_consensus_id", kind: "scalar", T: 9, opt: true }
  ]
);
var ListTasksResponse = proto35.makeMessageType(
  "rbt.v1alpha1.ListTasksResponse",
  () => [
    { no: 1, name: "tasks", kind: "message", T: TaskInfo, repeated: true }
  ]
);
var CancelTaskRequest = proto35.makeMessageType(
  "rbt.v1alpha1.CancelTaskRequest",
  () => [
    { no: 1, name: "task_id", kind: "message", T: TaskId }
  ]
);
var CancelTaskResponse = proto35.makeMessageType(
  "rbt.v1alpha1.CancelTaskResponse",
  () => [
    { no: 1, name: "status", kind: "enum", T: proto35.getEnumType(CancelTaskResponse_Status) }
  ]
);
var CancelTaskResponse_Status = proto35.makeEnum(
  "rbt.v1alpha1.CancelTaskResponse.Status",
  [
    { no: 0, name: "OK" },
    { no: 1, name: "NOT_FOUND" },
    { no: 2, name: "CANCELLING" }
  ]
);
var TaskCancelledError = proto35.makeMessageType(
  "rbt.v1alpha1.TaskCancelledError",
  []
);

// ../node_modules/@reboot-dev/reboot-api/index.js
var StatusCode;
(function(StatusCode2) {
  StatusCode2[StatusCode2["OK"] = 0] = "OK";
  StatusCode2[StatusCode2["CANCELLED"] = 1] = "CANCELLED";
  StatusCode2[StatusCode2["UNKNOWN"] = 2] = "UNKNOWN";
  StatusCode2[StatusCode2["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
  StatusCode2[StatusCode2["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
  StatusCode2[StatusCode2["NOT_FOUND"] = 5] = "NOT_FOUND";
  StatusCode2[StatusCode2["ALREADY_EXISTS"] = 6] = "ALREADY_EXISTS";
  StatusCode2[StatusCode2["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
  StatusCode2[StatusCode2["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
  StatusCode2[StatusCode2["FAILED_PRECONDITION"] = 9] = "FAILED_PRECONDITION";
  StatusCode2[StatusCode2["ABORTED"] = 10] = "ABORTED";
  StatusCode2[StatusCode2["OUT_OF_RANGE"] = 11] = "OUT_OF_RANGE";
  StatusCode2[StatusCode2["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
  StatusCode2[StatusCode2["INTERNAL"] = 13] = "INTERNAL";
  StatusCode2[StatusCode2["UNAVAILABLE"] = 14] = "UNAVAILABLE";
  StatusCode2[StatusCode2["DATA_LOSS"] = 15] = "DATA_LOSS";
  StatusCode2[StatusCode2["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
})(StatusCode = StatusCode || (StatusCode = {}));
var Status = class _Status {
  constructor({ code, message, details }) {
    this.code = code;
    this.message = message;
    this.details = details ?? [];
  }
  toJsonString() {
    return JSON.stringify(this);
  }
  static fromJsonString(s) {
    const json = JSON.parse(s);
    return this.fromJson(json);
  }
  static fromJson(json) {
    const code = json["code"];
    if (typeof code != "number") {
      throw new Error(`Expected 'code' number in JSON object '${JSON.stringify(json)}'`);
    }
    const message = json["message"];
    if (message !== void 0 && typeof message != "string") {
      throw new Error(`Expected 'message' string in JSON object '${JSON.stringify(json)}'`);
    }
    const details = json["details"];
    if (details !== void 0 && !Array.isArray(details)) {
      throw new Error(`Expected 'details' array in JSON object '${JSON.stringify(json)}'`);
    }
    return new _Status({ code, message, details });
  }
};
function grpcStatusCodeFromError(error) {
  if (error instanceof Cancelled) {
    return StatusCode.CANCELLED;
  }
  if (error instanceof Unknown) {
    return StatusCode.UNKNOWN;
  }
  if (error instanceof InvalidArgument) {
    return StatusCode.INVALID_ARGUMENT;
  }
  if (error instanceof DeadlineExceeded) {
    return StatusCode.DEADLINE_EXCEEDED;
  }
  if (error instanceof NotFound) {
    return StatusCode.NOT_FOUND;
  }
  if (error instanceof AlreadyExists) {
    return StatusCode.ALREADY_EXISTS;
  }
  if (error instanceof PermissionDenied) {
    return StatusCode.PERMISSION_DENIED;
  }
  if (error instanceof ResourceExhausted) {
    return StatusCode.RESOURCE_EXHAUSTED;
  }
  if (error instanceof FailedPrecondition) {
    return StatusCode.FAILED_PRECONDITION;
  }
  if (error instanceof Aborted) {
    return StatusCode.ABORTED;
  }
  if (error instanceof OutOfRange) {
    return StatusCode.OUT_OF_RANGE;
  }
  if (error instanceof Unimplemented) {
    return StatusCode.UNIMPLEMENTED;
  }
  if (error instanceof Internal) {
    return StatusCode.INTERNAL;
  }
  if (error instanceof Unavailable) {
    return StatusCode.UNAVAILABLE;
  }
  if (error instanceof DataLoss) {
    return StatusCode.DATA_LOSS;
  }
  if (error instanceof Unauthenticated) {
    return StatusCode.UNAUTHENTICATED;
  }
  return void 0;
}
function errorFromGoogleRpcStatusDetails(status, errorTypes) {
  for (const detail of status.details) {
    const typeUrl = detail["@type"];
    if (typeof typeUrl !== "string" || typeUrl === "") {
      console.error(`Cannot decode google.protobuf.Any from JSON: '@type' is empty`);
      return void 0;
    }
    if (!typeUrl.length) {
      console.error(`Invalid google.protobuf.Any '@type': ${typeUrl}`);
      return void 0;
    }
    const slash = typeUrl.lastIndexOf("/");
    const typeName = slash >= 0 ? typeUrl.substring(slash + 1) : typeUrl;
    if (!typeName.length) {
      console.error(`Invalid google.protobuf.Any '@type': ${typeUrl}`);
      return void 0;
    }
    for (const errorType of errorTypes) {
      if (typeName === errorType.typeName) {
        const copy = Object.assign({}, detail);
        delete copy["@type"];
        return errorType.fromJson(copy);
      }
    }
  }
  return void 0;
}
function errorFromGoogleRpcStatusCode(status) {
  if (status.code == StatusCode.CANCELLED) {
    return new Cancelled();
  }
  if (status.code == StatusCode.UNKNOWN) {
    return new Unknown();
  }
  if (status.code == StatusCode.INVALID_ARGUMENT) {
    return new InvalidArgument();
  }
  if (status.code == StatusCode.DEADLINE_EXCEEDED) {
    return new DeadlineExceeded();
  }
  if (status.code == StatusCode.NOT_FOUND) {
    return new NotFound();
  }
  if (status.code == StatusCode.ALREADY_EXISTS) {
    return new AlreadyExists();
  }
  if (status.code == StatusCode.PERMISSION_DENIED) {
    return new PermissionDenied();
  }
  if (status.code == StatusCode.RESOURCE_EXHAUSTED) {
    return new ResourceExhausted();
  }
  if (status.code == StatusCode.FAILED_PRECONDITION) {
    return new FailedPrecondition();
  }
  if (status.code == StatusCode.ABORTED) {
    return new Aborted();
  }
  if (status.code == StatusCode.OUT_OF_RANGE) {
    return new OutOfRange();
  }
  if (status.code == StatusCode.UNIMPLEMENTED) {
    return new Unimplemented();
  }
  if (status.code == StatusCode.INTERNAL) {
    return new Internal();
  }
  if (status.code == StatusCode.UNAVAILABLE) {
    return new Unavailable();
  }
  if (status.code == StatusCode.DATA_LOSS) {
    return new DataLoss();
  }
  if (status.code == StatusCode.UNAUTHENTICATED) {
    return new Unauthenticated();
  }
  return new Unknown();
}
var Aborted2 = class extends Error {
};

// ../api/rbt/thirdparty/prosemirror/v1/authority_rbt.ts
var ongoingTransactionStates = {};
var ERROR_TYPES = [
  // TODO(benh): don't copy these errors everywhere.
  //
  // gRPC errors.
  errors_pb_exports.Cancelled,
  errors_pb_exports.Unknown,
  errors_pb_exports.InvalidArgument,
  errors_pb_exports.DeadlineExceeded,
  errors_pb_exports.NotFound,
  errors_pb_exports.AlreadyExists,
  errors_pb_exports.PermissionDenied,
  errors_pb_exports.ResourceExhausted,
  errors_pb_exports.FailedPrecondition,
  errors_pb_exports.Aborted,
  errors_pb_exports.OutOfRange,
  errors_pb_exports.Unimplemented,
  errors_pb_exports.Internal,
  errors_pb_exports.Unavailable,
  errors_pb_exports.DataLoss,
  errors_pb_exports.Unauthenticated,
  // Reboot errors.
  //
  // NOTE: also add any new errors into `rbt/v1alpha1/index.ts`.
  errors_pb_exports.StateAlreadyConstructed,
  errors_pb_exports.StateNotConstructed,
  errors_pb_exports.TransactionParticipantFailedToPrepare,
  errors_pb_exports.TransactionParticipantFailedToCommit,
  errors_pb_exports.UnknownService,
  errors_pb_exports.UnknownTask
];
var AUTHORITY_CREATE_ERROR_TYPES = [
  ...ERROR_TYPES
  // Method errors.
];
var AUTHORITY_APPLY_ERROR_TYPES = [
  ...ERROR_TYPES
  // Method errors.
];
var AUTHORITY_CHANGES_ERROR_TYPES = [
  ...ERROR_TYPES
  // Method errors.
];
var AuthorityServicer = class _AuthorityServicer extends reboot.Servicer {
  static {
    this.__rbtModule__ = "rbt.thirdparty.prosemirror.v1.authority_rbt";
  }
  static {
    this.__servicerNodeAdaptor__ = "AuthorityServicerNodeAdaptor";
  }
  // External reference to the native `Servicer`.
  #external;
  lookup(options) {
    const context = reboot.getContext();
    return new Authority2.WeakReference(context.stateId, options?.bearerToken);
  }
  async _Create(context, jsonState, jsonRequest) {
    try {
      let state = Authority2.State.fromJsonString(
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
      if (context.stateId in ongoingTransactionStates) {
        ongoingTransactionStates[context.stateId].copyFrom(state);
      }
      return JSON.stringify({
        effects: new Authority2.CreateEffects({ state, response })
      });
    } catch (e) {
      if (e instanceof Aborted2) {
        return JSON.stringify({
          status: e.toStatus()
        });
      }
      const error = createError(e);
      console.warn(
        `Unhandled (in 'rbt.thirdparty.prosemirror.v1.Authority.create') ${error.message}; propagating as 'Unknown'
${error.stack}`
      );
      throw error;
    }
  }
  async _Apply(context, jsonState, jsonRequest) {
    try {
      let state = Authority2.State.fromJsonString(
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
      if (context.stateId in ongoingTransactionStates) {
        ongoingTransactionStates[context.stateId].copyFrom(state);
      }
      return JSON.stringify({
        effects: new Authority2.ApplyEffects({ state, response })
      });
    } catch (e) {
      if (e instanceof Aborted2) {
        return JSON.stringify({
          status: e.toStatus()
        });
      }
      const error = createError(e);
      console.warn(
        `Unhandled (in 'rbt.thirdparty.prosemirror.v1.Authority.apply') ${error.message}; propagating as 'Unknown'
${error.stack}`
      );
      throw error;
    }
  }
  async _Changes(context, jsonState, jsonRequest) {
    try {
      let state = Authority2.State.fromJsonString(
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
      if (e instanceof Aborted2) {
        return JSON.stringify({
          status: e.toStatus()
        });
      }
      const error = createError(e);
      console.warn(
        `Unhandled (in 'rbt.thirdparty.prosemirror.v1.Authority.changes') ${error.message}; propagating as 'Unknown'
${error.stack}`
      );
      throw error;
    }
  }
  __storeExternal(external) {
    this.#external = external;
  }
  get __external() {
    if (this.#external === void 0) {
      throw new Error(`Unexpected undefined external`);
    }
    return this.#external;
  }
  authorizer() {
    return null;
  }
  _authorizer() {
    const authorizer = this.authorizer();
    if (authorizer !== null) {
      authorizer._authorize = async function(methodName, context, bytesState, bytesRequest) {
        let state = void 0;
        if (bytesState !== void 0) {
          state = Authority2.State.fromBinary(bytesState);
        }
        let request = void 0;
        const anyRequest = protobuf_es2.Any.fromBinary(bytesRequest);
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
        return protobuf_es2.Any.pack(
          await authorizer.authorize(methodName, context, state, request)
        ).toBinary();
      };
    }
    return authorizer;
  }
  static {
    this._State = class {
      #servicer;
      constructor(servicer) {
        this.#servicer = servicer;
      }
      async read(context) {
        return Authority2.State.fromJsonString(
          await reboot_native.Servicer_read(
            this.#servicer.__external,
            context.__external
          )
        );
      }
      async write(idempotencyAlias, context, writer, options = { parse: void 0 }) {
        return await this.idempotently(idempotencyAlias).write(context, writer, options);
      }
      static {
        this._Idempotently = class {
          #external2;
          #options;
          constructor(external, options) {
            this.#external2 = external;
            this.#options = options;
          }
          async write(context, writer, options = { parse: void 0 }, unidempotently = false) {
            let t = void 0;
            const result = await reboot_native.Servicer_write(
              this.#external2,
              context.__external,
              async (jsonState) => {
                const state = Authority2.State.fromJsonString(
                  jsonState
                );
                try {
                  t = await writer(state);
                  if (t !== void 0) {
                    if (options.parse === void 0) {
                      throw new Error(
                        "Required 'parse' property in 'options' is undefined"
                      );
                    }
                  }
                  return JSON.stringify({
                    // NOTE: using the empty string to represent a
                    // `callable` returning void or explicitly `undefined`.
                    result: t !== void 0 && JSON.stringify(t) || "",
                    state
                  });
                } catch (e) {
                  throw createError(e);
                }
              },
              JSON.stringify({ idempotency: this.#options, unidempotently })
            );
            if (t !== void 0) {
              return t;
            }
            if (result !== "") {
              if (options.parse === void 0) {
                throw new Error("Required 'parse' property in 'options' is undefined");
              }
              return options.parse(JSON.parse(result));
            }
            if (options.parse !== void 0) {
              return options.parse(void 0);
            }
          }
        };
      }
      idempotently(aliasOrOptions) {
        const options = typeof aliasOrOptions === "string" ? { alias: aliasOrOptions } : aliasOrOptions;
        if (options.alias === void 0 && options.key === void 0) {
          throw new Error(
            "Inline writers require either an idempotency alias or key"
          );
        }
        return new _AuthorityServicer._State._Idempotently(
          this.#servicer.__external,
          options
        );
      }
      static {
        this._Unidempotently = class {
          #external2;
          constructor(external) {
            this.#external2 = external;
          }
          async write(context, writer) {
            return new _AuthorityServicer._State._Idempotently(
              this.#external2,
              { key: v4_default() }
            ).write(
              context,
              writer,
              {
                parse: () => {
                  throw new Error("Unexpected attempt to parse unidempotent result");
                }
              },
              true
            );
          }
        };
      }
      unidempotently() {
        return new _AuthorityServicer._State._Unidempotently(
          this.#servicer.__external
        );
      }
    };
  }
  get state() {
    return new _AuthorityServicer._State(this);
  }
};
var AuthorityState = class extends Authority {
  static fromBinary(bytes, options) {
    const state = new Authority2.State();
    state.fromBinary(bytes, options);
    return state;
  }
  static fromJson(jsonValue, options) {
    const state = new Authority2.State();
    state.fromJson(jsonValue, options);
    return state;
  }
  static fromJsonString(jsonString, options) {
    const state = new Authority2.State();
    state.fromJsonString(jsonString, options);
    return state;
  }
  clone() {
    const state = new Authority2.State();
    state.copyFrom(super.clone());
    return state;
  }
  copyFrom(that) {
    reboot.clearFields(this);
    this.fromJson(that.toJson());
  }
};
var AuthorityCreateAborted = class extends Aborted2 {
  static fromStatus(status) {
    let error = errorFromGoogleRpcStatusDetails(
      status,
      AUTHORITY_CREATE_ERROR_TYPES
    );
    if (error !== void 0) {
      return new Authority2.CreateAborted(
        error,
        { message: status.message }
      );
    }
    error = errorFromGoogleRpcStatusCode(status);
    return new Authority2.CreateAborted(
      error,
      { message: status.message }
    );
  }
  toStatus() {
    const isObject = (value) => {
      return typeof value === "object";
    };
    const isArray = (value) => {
      return Array.isArray(value);
    };
    const error = this.error.toJson();
    if (!isObject(error) || isArray(error)) {
      throw new Error("Expecting 'error' to be an object (and not an array)");
    }
    const detail = { ...error };
    detail["@type"] = `type.googleapis.com/${this.error.getType().typeName}`;
    return new Status({
      code: this.code,
      message: this.#message,
      details: [detail]
    });
  }
  constructor(error, { message } = {}) {
    super();
    this.name = this.constructor.name;
    this.error = error;
    let code = grpcStatusCodeFromError(this.error);
    if (code === void 0) {
      code = StatusCode.ABORTED;
    }
    this.code = code;
    this.#message = message;
  }
  toString() {
    return `${this.name}: ${this.message}`;
  }
  get message() {
    return `${this.error.getType().typeName}${this.#message ? " with message " + this.#message : ""}`;
  }
  #message;
};
var AuthorityApplyAborted = class extends Aborted2 {
  static fromStatus(status) {
    let error = errorFromGoogleRpcStatusDetails(
      status,
      AUTHORITY_APPLY_ERROR_TYPES
    );
    if (error !== void 0) {
      return new Authority2.ApplyAborted(
        error,
        { message: status.message }
      );
    }
    error = errorFromGoogleRpcStatusCode(status);
    return new Authority2.ApplyAborted(
      error,
      { message: status.message }
    );
  }
  toStatus() {
    const isObject = (value) => {
      return typeof value === "object";
    };
    const isArray = (value) => {
      return Array.isArray(value);
    };
    const error = this.error.toJson();
    if (!isObject(error) || isArray(error)) {
      throw new Error("Expecting 'error' to be an object (and not an array)");
    }
    const detail = { ...error };
    detail["@type"] = `type.googleapis.com/${this.error.getType().typeName}`;
    return new Status({
      code: this.code,
      message: this.#message,
      details: [detail]
    });
  }
  constructor(error, { message } = {}) {
    super();
    this.name = this.constructor.name;
    this.error = error;
    let code = grpcStatusCodeFromError(this.error);
    if (code === void 0) {
      code = StatusCode.ABORTED;
    }
    this.code = code;
    this.#message = message;
  }
  toString() {
    return `${this.name}: ${this.message}`;
  }
  get message() {
    return `${this.error.getType().typeName}${this.#message ? " with message " + this.#message : ""}`;
  }
  #message;
};
var AuthorityChangesAborted = class extends Aborted2 {
  static fromStatus(status) {
    let error = errorFromGoogleRpcStatusDetails(
      status,
      AUTHORITY_CHANGES_ERROR_TYPES
    );
    if (error !== void 0) {
      return new Authority2.ChangesAborted(
        error,
        { message: status.message }
      );
    }
    error = errorFromGoogleRpcStatusCode(status);
    return new Authority2.ChangesAborted(
      error,
      { message: status.message }
    );
  }
  toStatus() {
    const isObject = (value) => {
      return typeof value === "object";
    };
    const isArray = (value) => {
      return Array.isArray(value);
    };
    const error = this.error.toJson();
    if (!isObject(error) || isArray(error)) {
      throw new Error("Expecting 'error' to be an object (and not an array)");
    }
    const detail = { ...error };
    detail["@type"] = `type.googleapis.com/${this.error.getType().typeName}`;
    return new Status({
      code: this.code,
      message: this.#message,
      details: [detail]
    });
  }
  constructor(error, { message } = {}) {
    super();
    this.name = this.constructor.name;
    this.error = error;
    let code = grpcStatusCodeFromError(this.error);
    if (code === void 0) {
      code = StatusCode.ABORTED;
    }
    this.code = code;
    this.#message = message;
  }
  toString() {
    return `${this.name}: ${this.message}`;
  }
  get message() {
    return `${this.error.getType().typeName}${this.#message ? " with message " + this.#message : ""}`;
  }
  #message;
};
var AuthorityWeakReference = class {
  #external;
  #id;
  #options;
  constructor(id, bearerToken) {
    this.#id = id;
    this.#options = {
      bearerToken
    };
    this.#external = reboot_native.Service_constructor({
      rbtModule: "rbt.thirdparty.prosemirror.v1.authority_rbt",
      nodeAdaptor: "AuthorityWeakReferenceNodeAdaptor",
      id: this.#id
    });
  }
  get stateId() {
    return this.#id;
  }
  async __externalServiceCallCreate(context, partialRequest, options) {
    const request = partialRequest instanceof CreateRequest ? partialRequest : new CreateRequest(partialRequest);
    const json = JSON.parse(
      await reboot_native.Service_call({
        external: this.#external,
        kind: "writer",
        method: "Create",
        requestModule: "rbt.thirdparty.prosemirror.v1.authority_pb2",
        requestType: "CreateRequest",
        context: context.__external,
        jsonRequest: JSON.stringify(request || {}),
        jsonOptions: JSON.stringify(options || {})
      })
    );
    if ("status" in json) {
      throw Authority2.CreateAborted.fromStatus(Status.fromJson(json["status"]));
    }
    return json;
  }
  async create(context, partialRequest) {
    const json = await this.__externalServiceCallCreate(
      context,
      partialRequest,
      this.#options
    );
    return CreateResponse.fromJson(json["response"]);
  }
  async __externalServiceCallApply(context, partialRequest, options) {
    const request = partialRequest instanceof ApplyRequest ? partialRequest : new ApplyRequest(partialRequest);
    const json = JSON.parse(
      await reboot_native.Service_call({
        external: this.#external,
        kind: "writer",
        method: "Apply",
        requestModule: "rbt.thirdparty.prosemirror.v1.authority_pb2",
        requestType: "ApplyRequest",
        context: context.__external,
        jsonRequest: JSON.stringify(request || {}),
        jsonOptions: JSON.stringify(options || {})
      })
    );
    if ("status" in json) {
      throw Authority2.ApplyAborted.fromStatus(Status.fromJson(json["status"]));
    }
    return json;
  }
  async apply(context, partialRequest) {
    const json = await this.__externalServiceCallApply(
      context,
      partialRequest,
      this.#options
    );
    return ApplyResponse.fromJson(json["response"]);
  }
  async __externalServiceCallChanges(context, partialRequest, options) {
    const request = partialRequest instanceof ChangesRequest ? partialRequest : new ChangesRequest(partialRequest);
    const json = JSON.parse(
      await reboot_native.Service_call({
        external: this.#external,
        kind: "reader",
        method: "Changes",
        requestModule: "rbt.thirdparty.prosemirror.v1.authority_pb2",
        requestType: "ChangesRequest",
        context: context.__external,
        jsonRequest: JSON.stringify(request || {}),
        jsonOptions: JSON.stringify(options || {})
      })
    );
    if ("status" in json) {
      throw Authority2.ChangesAborted.fromStatus(Status.fromJson(json["status"]));
    }
    return json;
  }
  async changes(context, partialRequest) {
    const json = await this.__externalServiceCallChanges(
      context,
      partialRequest,
      this.#options
    );
    return ChangesResponse.fromJson(json["response"]);
  }
  static {
    this._Idempotently = class {
      #weakReference;
      #options2;
      constructor(weakReference, options) {
        this.#weakReference = weakReference;
        this.#options2 = options;
      }
      async create(context, partialRequest) {
        const json = await this.#weakReference.__externalServiceCallCreate(
          context,
          partialRequest,
          this.#options2
        );
        return CreateResponse.fromJson(json["response"]);
      }
      async apply(context, partialRequest) {
        const json = await this.#weakReference.__externalServiceCallApply(
          context,
          partialRequest,
          this.#options2
        );
        return ApplyResponse.fromJson(json["response"]);
      }
      schedule(options) {
        return new Authority2.WeakReference._Schedule(
          this.#weakReference,
          {
            ...this.#options2,
            schedule: options || { when: /* @__PURE__ */ new Date() }
          }
        );
      }
    };
  }
  idempotently(aliasOrOptions = {}) {
    const idempotency = typeof aliasOrOptions === "string" ? { alias: aliasOrOptions } : aliasOrOptions;
    return new Authority2.WeakReference._Idempotently(
      this,
      {
        ...this.#options,
        idempotency
      }
    );
  }
  unidempotently() {
    return this.idempotently({ key: v4_default() });
  }
  static {
    this._Schedule = class {
      #weakReference;
      #options2;
      constructor(weakReference, options) {
        this.#weakReference = weakReference;
        this.#options2 = options;
      }
      async create(context, partialRequest) {
        const json = await this.#weakReference.__externalServiceCallCreate(
          context,
          partialRequest,
          this.#options2
        );
        const taskId = tasks_pb_exports.TaskId.fromJson(json["taskId"]);
        if (context instanceof reboot.WriterContext || context instanceof reboot.TransactionContext) {
          return { taskId };
        }
        return {
          responsePromise: new Promise(async (resolve, reject) => {
            const json2 = JSON.parse(
              await reboot_native.Future_await({
                external: this.#weakReference.#external,
                context: context.__external,
                method: "Create",
                jsonTaskId: JSON.stringify(taskId)
              })
            );
            if ("status" in json2) {
              reject(
                Authority2.CreateAborted.fromStatus(Status.fromJson(json2["status"]))
              );
            } else {
              resolve(CreateResponse.fromJson(json2["response"]));
            }
          }),
          taskId
        };
      }
      async apply(context, partialRequest) {
        const json = await this.#weakReference.__externalServiceCallApply(
          context,
          partialRequest,
          this.#options2
        );
        const taskId = tasks_pb_exports.TaskId.fromJson(json["taskId"]);
        if (context instanceof reboot.WriterContext || context instanceof reboot.TransactionContext) {
          return { taskId };
        }
        return {
          responsePromise: new Promise(async (resolve, reject) => {
            const json2 = JSON.parse(
              await reboot_native.Future_await({
                external: this.#weakReference.#external,
                context: context.__external,
                method: "Apply",
                jsonTaskId: JSON.stringify(taskId)
              })
            );
            if ("status" in json2) {
              reject(
                Authority2.ApplyAborted.fromStatus(Status.fromJson(json2["status"]))
              );
            } else {
              resolve(ApplyResponse.fromJson(json2["response"]));
            }
          }),
          taskId
        };
      }
      async changes(context, partialRequest) {
        const json = await this.#weakReference.__externalServiceCallChanges(
          context,
          partialRequest,
          this.#options2
        );
        const taskId = tasks_pb_exports.TaskId.fromJson(json["taskId"]);
        if (context instanceof reboot.WriterContext || context instanceof reboot.TransactionContext) {
          return { taskId };
        }
        return {
          responsePromise: new Promise(async (resolve, reject) => {
            const json2 = JSON.parse(
              await reboot_native.Future_await({
                external: this.#weakReference.#external,
                context: context.__external,
                method: "Changes",
                jsonTaskId: JSON.stringify(taskId)
              })
            );
            if ("status" in json2) {
              reject(
                Authority2.ChangesAborted.fromStatus(Status.fromJson(json2["status"]))
              );
            } else {
              resolve(ChangesResponse.fromJson(json2["response"]));
            }
          }),
          taskId
        };
      }
    };
  }
  schedule(options) {
    return new Authority2.WeakReference._Schedule(
      this,
      {
        ...this.#options,
        schedule: options || { when: /* @__PURE__ */ new Date() }
      }
    );
  }
};
var Authority2 = class _Authority {
  static {
    this.Servicer = AuthorityServicer;
  }
  static {
    this.State = AuthorityState;
  }
  static {
    this.WeakReference = AuthorityWeakReference;
  }
  static {
    this.CreateAborted = AuthorityCreateAborted;
  }
  static {
    this.CreateEffects = class {
      constructor(effects) {
        this.state = effects.state instanceof Authority ? effects.state : new Authority(effects.state);
        this.response = effects.response instanceof CreateResponse ? effects.response : new CreateResponse(effects.response);
      }
    };
  }
  static {
    this.ApplyAborted = AuthorityApplyAborted;
  }
  static {
    this.ApplyEffects = class {
      constructor(effects) {
        this.state = effects.state instanceof Authority ? effects.state : new Authority(effects.state);
        this.response = effects.response instanceof ApplyResponse ? effects.response : new ApplyResponse(effects.response);
      }
    };
  }
  static {
    this.ChangesAborted = AuthorityChangesAborted;
  }
  static lookup(id, options) {
    return new _Authority.WeakReference(id, options?.bearerToken);
  }
  static {
    this._Construct = class {
      #id;
      #options;
      constructor(id, options) {
        this.#id = id;
        this.#options = options;
      }
      async create(context, partialRequest) {
        if (this.#id === void 0) {
          this.#id = v4_default();
        }
        const weakReference = _Authority.lookup(this.#id);
        const json = await weakReference.__externalServiceCallCreate(
          context,
          partialRequest,
          this.#options
        );
        return [
          weakReference,
          CreateResponse.fromJson(json["response"])
        ];
      }
      async apply(context, partialRequest) {
        if (this.#id === void 0) {
          this.#id = v4_default();
        }
        const weakReference = _Authority.lookup(this.#id);
        const json = await weakReference.__externalServiceCallApply(
          context,
          partialRequest,
          this.#options
        );
        return [
          weakReference,
          ApplyResponse.fromJson(json["response"])
        ];
      }
      idempotently(aliasOrOptions = {}) {
        const idempotency = typeof aliasOrOptions === "string" ? { alias: aliasOrOptions } : aliasOrOptions;
        return new _Authority._ConstructIdempotently(
          {
            ...this.#options,
            idempotency
          },
          this.#id
        );
      }
    };
  }
  static construct(options) {
    return new _Authority._Construct(options?.id);
  }
  static {
    this._ConstructIdempotently = class {
      #options;
      #id;
      constructor(options, id) {
        this.#options = options;
        this.#id = id;
      }
      async create(context, partialRequest) {
        if (this.#id === void 0) {
          this.#id = await context.generateIdempotentStateId(
            "rbt.thirdparty.prosemirror.v1.Authority",
            "rbt.thirdparty.prosemirror.v1.AuthorityMethods",
            "Create",
            this.#options.idempotency
          );
        }
        const weakReference = _Authority.lookup(this.#id);
        const json = await weakReference.__externalServiceCallCreate(
          context,
          partialRequest,
          this.#options
        );
        return [
          weakReference,
          CreateResponse.fromJson(json["response"])
        ];
      }
      async apply(context, partialRequest) {
        if (this.#id === void 0) {
          this.#id = await context.generateIdempotentStateId(
            "rbt.thirdparty.prosemirror.v1.Authority",
            "rbt.thirdparty.prosemirror.v1.AuthorityMethods",
            "Apply",
            this.#options.idempotency
          );
        }
        const weakReference = _Authority.lookup(this.#id);
        const json = await weakReference.__externalServiceCallApply(
          context,
          partialRequest,
          this.#options
        );
        return [
          weakReference,
          ApplyResponse.fromJson(json["response"])
        ];
      }
    };
  }
};
function importPys() {
  reboot_native.importPy("rbt.thirdparty.prosemirror.v1.authority_pb2", "H4sIAAAAAAAC/81XYW/aSBD9zq/YozqR3AVjrw2BSNGVC7SN1AQOSKWqPlk2Xogr4/XtLhHcr+/s2saGEMdUOek+APb6vTdvZncYeIeavzXRnPpBtLxCa7FoduVK7R36SCLCXEF85G2ReCQoZlTQOQ2Rt14sCAPSKg5CwjSEBiN0P5qh4eB29gtQOV2zOblCzBMt8RgwP3aZ2LZAgJNVwBhlrSej5a7FI2WB2GpKGXhj+QnqaLyFRxH6QhgPaHSFLA23Nb1Wr9dzV8/t+EQDRG3B6AotKV2GJFGWisEqpkwgn/A5C2JBGXI5cvLbiiwnphBxn6rWSvl8u/Jo6PiucD2XE8U/WDvK14JIEBa5YSbkrYPQJ4n39BrK9v59UgsniDhhAioGloB6lrD4ea0mwzm+h66fBdYGZOGuQ3EGqPIkBFvPhRN7WIZPQI5PYSUFqpsUJWGJGpwB7clww/jRNTIpGkuTPNMCiOJmMHWTYZRSrTYYTm8mt+PZaCJzOCh+noPW9/0pYYEbBv8S/wMczzOvYUfNk06ivTEwvHxpPSdpBRJkBAAXXvOkEK2sCK2kADshiXFl9Cy5VppYiqhP7MgW/cyADP0HrGz0S3vTMR/daEk4LHZhxUDwZp7Bm2dvTPyrVupPu1Hkyb7UFdxa9qYL+XntVFe363cqZMfeWAlO2vhdrVlckLhowNgZgNVL7fDETlX6kwJT4jqZfscMAxKJVBCnggpfeFqH2wVQ2A0j0OsT8s+acFh+UDJE2kwf8BhKqeyeq2cmiFh0/lOGcy5WfLULT8lX0IFhNik+qwcKC0zLiONwm/ktETKOCpVsPn6Dzc/r2k9sptWrW3ldE2Qxg3qSHA+iOfnychL7gHqoWIuiZL5X/6uqgBt/IbVkDEOXm5h14x2BC18Gw6u8Q9TRk2sXr4XbO73wPdCsSMj2JYm416w4qR80LXx+V6ba2blTXftKiP7+AXUvquGrOoqzjbLyjcLNSttSOHSuVpVR6itKXHWku45qeLMhZ+EypJ4bchgk6RXMvmycan/KzzvCubsk/cgfRuvVYDdt+Fk+hy5QJnTIntG4QAGRVG6f3ShPcTeT5ABsFIMFi+IA1JyH6dC5cXLpKbq+Rh8ASq5q8NNst65lMxUSv6cRgYeZ6LeG03+YfRpNbmdfG3+fAOS7WVvgwMTFUH7cadu6qdu6rjdekLgbwsVgCkqrpNUcb+tE7op8ayS9UNlMJaVqbrGtY/yTrlW7vIXpndB/7zltpjcpdS5V1XdU5vpAiAvolGvD7FaDk8i/xljfB9986t9/HB4VxhhXwCrVXu8AORn2Z8PJ8K+H4XR2VNzUjeoUGcM0OscJ0/Hofno8A9PonsCRUSzdPCjmePz5a1kilt6uzJAR2oZ+FF+SRtvA1SkqBr48tnPTsjzauHcCR0XpGi8wynLpmqeQZJxOz3i19Z4H6vSsk1gykqFb7bI/kCvqr+FfHp/TmJzXfgBWoa5ALBAAAA==");
  reboot_native.importPy("rbt.thirdparty.prosemirror.v1.authority_pb2_grpc", "H4sIAAAAAAAC/+1YUY/iNhB+z6/w7T0QpDSn6+NKSEUsVyHdcmiXSn2zTDyAq2CntrM9WvW/d2wnQLLZvVsdG/qwPEBMPOPxN58/j/2e/AoSNLPAyWpP7BbI5m4xIYu93SpJCq2sylROMrUrRA6aFHm5ETIlN1/I/MuSTG9my3fR1dXVJBcgLWGSEwP6AXtmOTMGDJpqDaZQkgu5IVYFp6ty/ROHtZAQDEQGJkU/kdgVSluy0UUWRWutdkSvbGq3QvOCabtP0dzATmitdPrwkVT9WYkBa2H3tFj9TJhxVpQrS4+Wvnli7dsPH/3P0dzZR1Hkoyfj+u9bwAdu7m25itXqD8js8Doi+MGQb4UxbmpooDLhoeQqK3eIB7MCUUTwXIMISVI/ebJGLP1svQ/EgVAqpLCUxgbydUKyLZMS8mqQaqCJksbqMrM48+jwYqw35tjNfSrjazL2MKaT0E5PfR2e3XjpRAPGTUa1aVpKpvfUf8cN3+4z+PBsStI2ah+C+0HyyJOGP0swliIDBMvF36BHP5K3ah53wWt6X3tdqnurMUVdAThmGqAczh1DcJx+Qgo/NfqwmYVxUeT7V0uC995DDvw4l01BFcLLM+BWygY169UWQvDfx0oII114KdRBfFcmnhTdsD3o1xHesFwr2a2ygPqrpIWvtqm/PzLeQZuD49SApZniEHuFvkcHpZlgO/1tPrtdfJ7eTufL6c2w046DZSI38SAARKSybhvMwQ0O/N3gaKaZMEDmys6O76cua88ZH7Dx6+gNmi5oKmq/gXMKTuSQYZzTp5YwtYqG8jCuij6dVPViBRnOiu68EUWEOZacTo3/acjFoKonrkN5cyLR9LH5Y9UOah9Gr3brpLNTrcnnrw2CKD8nhw1FfqXS5BubwrDZHIQC4hyge099Yd6oR3qHvFmKvBDxulw4C9GDr96Y3qw/+qd6q/T4PuT/9d8bdyQWWQ0s6o+HvyVLtNWtif/gZZXhIOlSvqDHQR9Tp6v1kK5v3SmOW4EkQyfF5D1ZboUJx3CCDy4OolCfJZn+vpjezdxWMf5MxotZ+kTldf6K6xfjOmZhnu0arN5FG0BapjfQ+k8VbjAzilsLpiraaaaBYxSYcDOaK9mS94zl3+oikDJZqWH0Cd+3zdWuQLoajKDD8i+Gp/g1UhOnxPcdHazYgSptxxsEhXFmmX91UkFosKWWgYPwtcBUe7ybZ5NDBVLhdaZDen+n8T7O3BVvki6idBMgecSW5JQASSvfSZ3e5JDN4XPEDwX2G+8vyfuue5HeLkB6uOb435G+Pjq90f6ict95FdXjnVMvN0uXIf9/lbLlHVYZAAA=");
  reboot_native.importPy("rbt.thirdparty.prosemirror.v1.authority_rbt", "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");
}
importPys();

// ../common/constants.ts
import { Schema as Schema2 } from "prosemirror-model";

// ../node_modules/prosemirror-schema-basic/dist/index.js
import { Schema } from "prosemirror-model";
var pDOM = ["p", 0];
var blockquoteDOM = ["blockquote", 0];
var hrDOM = ["hr"];
var preDOM = ["pre", ["code", 0]];
var brDOM = ["br"];
var nodes = {
  /**
  NodeSpec The top level document node.
  */
  doc: {
    content: "block+"
  },
  /**
  A plain paragraph textblock. Represented in the DOM
  as a `<p>` element.
  */
  paragraph: {
    content: "inline*",
    group: "block",
    parseDOM: [{ tag: "p" }],
    toDOM() {
      return pDOM;
    }
  },
  /**
  A blockquote (`<blockquote>`) wrapping one or more blocks.
  */
  blockquote: {
    content: "block+",
    group: "block",
    defining: true,
    parseDOM: [{ tag: "blockquote" }],
    toDOM() {
      return blockquoteDOM;
    }
  },
  /**
  A horizontal rule (`<hr>`).
  */
  horizontal_rule: {
    group: "block",
    parseDOM: [{ tag: "hr" }],
    toDOM() {
      return hrDOM;
    }
  },
  /**
  A heading textblock, with a `level` attribute that
  should hold the number 1 to 6. Parsed and serialized as `<h1>` to
  `<h6>` elements.
  */
  heading: {
    attrs: { level: { default: 1, validate: "number" } },
    content: "inline*",
    group: "block",
    defining: true,
    parseDOM: [
      { tag: "h1", attrs: { level: 1 } },
      { tag: "h2", attrs: { level: 2 } },
      { tag: "h3", attrs: { level: 3 } },
      { tag: "h4", attrs: { level: 4 } },
      { tag: "h5", attrs: { level: 5 } },
      { tag: "h6", attrs: { level: 6 } }
    ],
    toDOM(node) {
      return ["h" + node.attrs.level, 0];
    }
  },
  /**
  A code listing. Disallows marks or non-text inline
  nodes by default. Represented as a `<pre>` element with a
  `<code>` element inside of it.
  */
  code_block: {
    content: "text*",
    marks: "",
    group: "block",
    code: true,
    defining: true,
    parseDOM: [{ tag: "pre", preserveWhitespace: "full" }],
    toDOM() {
      return preDOM;
    }
  },
  /**
  The text node.
  */
  text: {
    group: "inline"
  },
  /**
  An inline image (`<img>`) node. Supports `src`,
  `alt`, and `href` attributes. The latter two default to the empty
  string.
  */
  image: {
    inline: true,
    attrs: {
      src: { validate: "string" },
      alt: { default: null, validate: "string|null" },
      title: { default: null, validate: "string|null" }
    },
    group: "inline",
    draggable: true,
    parseDOM: [{ tag: "img[src]", getAttrs(dom) {
      return {
        src: dom.getAttribute("src"),
        title: dom.getAttribute("title"),
        alt: dom.getAttribute("alt")
      };
    } }],
    toDOM(node) {
      let { src, alt, title } = node.attrs;
      return ["img", { src, alt, title }];
    }
  },
  /**
  A hard line break, represented in the DOM as `<br>`.
  */
  hard_break: {
    inline: true,
    group: "inline",
    selectable: false,
    parseDOM: [{ tag: "br" }],
    toDOM() {
      return brDOM;
    }
  }
};
var emDOM = ["em", 0];
var strongDOM = ["strong", 0];
var codeDOM = ["code", 0];
var marks = {
  /**
  A link. Has `href` and `title` attributes. `title`
  defaults to the empty string. Rendered and parsed as an `<a>`
  element.
  */
  link: {
    attrs: {
      href: { validate: "string" },
      title: { default: null, validate: "string|null" }
    },
    inclusive: false,
    parseDOM: [{ tag: "a[href]", getAttrs(dom) {
      return { href: dom.getAttribute("href"), title: dom.getAttribute("title") };
    } }],
    toDOM(node) {
      let { href, title } = node.attrs;
      return ["a", { href, title }, 0];
    }
  },
  /**
  An emphasis mark. Rendered as an `<em>` element. Has parse rules
  that also match `<i>` and `font-style: italic`.
  */
  em: {
    parseDOM: [
      { tag: "i" },
      { tag: "em" },
      { style: "font-style=italic" },
      { style: "font-style=normal", clearMark: (m) => m.type.name == "em" }
    ],
    toDOM() {
      return emDOM;
    }
  },
  /**
  A strong mark. Rendered as `<strong>`, parse rules also match
  `<b>` and `font-weight: bold`.
  */
  strong: {
    parseDOM: [
      { tag: "strong" },
      // This works around a Google Docs misbehavior where
      // pasted content will be inexplicably wrapped in `<b>`
      // tags with a font-weight normal.
      { tag: "b", getAttrs: (node) => node.style.fontWeight != "normal" && null },
      { style: "font-weight=400", clearMark: (m) => m.type.name == "strong" },
      { style: "font-weight", getAttrs: (value) => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null }
    ],
    toDOM() {
      return strongDOM;
    }
  },
  /**
  Code font mark. Represented as a `<code>` element.
  */
  code: {
    parseDOM: [{ tag: "code" }],
    toDOM() {
      return codeDOM;
    }
  }
};
var schema = new Schema({ nodes, marks });

// ../node_modules/prosemirror-schema-list/dist/index.js
import { findWrapping, ReplaceAroundStep, canSplit, liftTarget, canJoin } from "prosemirror-transform";
import { NodeRange, Fragment, Slice } from "prosemirror-model";
var olDOM = ["ol", 0];
var ulDOM = ["ul", 0];
var liDOM = ["li", 0];
var orderedList = {
  attrs: { order: { default: 1, validate: "number" } },
  parseDOM: [{ tag: "ol", getAttrs(dom) {
    return { order: dom.hasAttribute("start") ? +dom.getAttribute("start") : 1 };
  } }],
  toDOM(node) {
    return node.attrs.order == 1 ? olDOM : ["ol", { start: node.attrs.order }, 0];
  }
};
var bulletList = {
  parseDOM: [{ tag: "ul" }],
  toDOM() {
    return ulDOM;
  }
};
var listItem = {
  parseDOM: [{ tag: "li" }],
  toDOM() {
    return liDOM;
  },
  defining: true
};
function add(obj, props) {
  let copy = {};
  for (let prop in obj)
    copy[prop] = obj[prop];
  for (let prop in props)
    copy[prop] = props[prop];
  return copy;
}
function addListNodes(nodes2, itemContent, listGroup) {
  return nodes2.append({
    ordered_list: add(orderedList, { content: "list_item+", group: listGroup }),
    bullet_list: add(bulletList, { content: "list_item+", group: listGroup }),
    list_item: add(listItem, { content: itemContent })
  });
}

// ../common/constants.ts
var SCHEMA = new Schema2({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  marks: schema.spec.marks
});
var INITIAL_DOC = SCHEMA.node("doc", null, [
  SCHEMA.node("paragraph", null, [SCHEMA.text("Replace me!")])
]);
var DOC_ID = "test";

// src/main.ts
var AuthorityServicer2 = class extends Authority2.Servicer {
  #docs;
  constructor() {
    super();
    this.#docs = {};
  }
  doc(stateId, state) {
    let [version, doc] = stateId in this.#docs ? this.#docs[stateId] : [0, INITIAL_DOC];
    if (version < state.changes.length) {
      const steps = state.changes.slice(version).map(
        ({ step }) => Step.fromJSON(SCHEMA, step.toJson())
      );
      for (const step of steps) {
        doc = step.apply(doc).doc;
        version++;
      }
      this.#docs[stateId] = [version, doc];
    }
    return doc;
  }
  async create(context, state, request) {
    return {
      doc: Struct3.fromJson(this.doc(context.stateId, state).toJSON()),
      version: state.changes.length
    };
  }
  async apply(context, state, request) {
    if (request.version != state.changes.length) {
      throw new Authority2.ApplyAborted(new FailedPrecondition());
    }
    let doc = this.doc(context.stateId, state);
    const steps = request.changes.map(
      ({ step }) => Step.fromJSON(SCHEMA, step.toJson())
    );
    for (const step of steps) {
      doc = step.apply(doc).doc;
    }
    state.changes = [...state.changes, ...request.changes];
    return {};
  }
  async changes(context, state, { sinceVersion }) {
    if (sinceVersion > state.changes.length) {
      throw new Authority2.ChangesAborted(new InvalidArgument());
    }
    return {
      version: sinceVersion,
      changes: state.changes.slice(sinceVersion)
    };
  }
};
var initialize = async (context) => {
  await Authority2.construct({ id: DOC_ID }).idempotently().create(context);
};
new Application({ servicers: [AuthorityServicer2], initialize }).run();
export {
  AuthorityServicer2 as AuthorityServicer
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAiLi4vbm9kZV9tb2R1bGVzL0ByZWJvb3QtZGV2L3JlYm9vdC1hcGkvZXJyb3JzX3BiLmpzIiwgIi4uL2FwaS9yYnQvdGhpcmRwYXJ0eS9wcm9zZW1pcnJvci92MS9hdXRob3JpdHlfcmJ0LnRzIiwgIi4uL2FwaS9yYnQvdGhpcmRwYXJ0eS9wcm9zZW1pcnJvci92MS9hdXRob3JpdHlfcGIudHMiLCAiLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9ybmcuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9zdHJpbmdpZnkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9uYXRpdmUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS92NC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHJlYm9vdC1kZXYvcmVib290LWFwaS9hdXRoX3BiLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcmVib290LWRldi9yZWJvb3QtYXBpL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcmVib290LWRldi9yZWJvb3QtYXBpL3JlYWN0X3BiLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AcmVib290LWRldi9yZWJvb3QtYXBpL3Rhc2tzX3BiLmpzIiwgIi4uL2NvbW1vbi9jb25zdGFudHMudHMiLCAiLi4vbm9kZV9tb2R1bGVzL3Byb3NlbWlycm9yLXNjaGVtYS1iYXNpYy9kaXN0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9wcm9zZW1pcnJvci1zY2hlbWEtbGlzdC9kaXN0L2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBQYXJ0aWFsTWVzc2FnZSwgU3RydWN0IH0gZnJvbSBcIkBidWZidWlsZC9wcm90b2J1ZlwiO1xuaW1wb3J0IHsgQXBwbGljYXRpb24sIFJlYWRlckNvbnRleHQsIFdyaXRlckNvbnRleHQgfSBmcm9tIFwiQHJlYm9vdC1kZXYvcmVib290XCI7XG5pbXBvcnQgeyBGYWlsZWRQcmVjb25kaXRpb24sIEludmFsaWRBcmd1bWVudCB9IGZyb20gXCJAcmVib290LWRldi9yZWJvb3QtYXBpL2Vycm9yc19wYi5qc1wiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCJwcm9zZW1pcnJvci1tb2RlbFwiO1xuaW1wb3J0IHsgU3RlcCB9IGZyb20gXCJwcm9zZW1pcnJvci10cmFuc2Zvcm1cIlxuaW1wb3J0IHtcbiAgQXBwbHlSZXF1ZXN0LFxuICBBcHBseVJlc3BvbnNlLFxuICBBdXRob3JpdHksXG4gIENyZWF0ZVJlcXVlc3QsXG4gIENyZWF0ZVJlc3BvbnNlLFxuICBDaGFuZ2VzUmVxdWVzdCxcbiAgQ2hhbmdlc1Jlc3BvbnNlXG59IGZyb20gXCJAbW9ub3JlcG8vYXBpL3JidC90aGlyZHBhcnR5L3Byb3NlbWlycm9yL3YxL2F1dGhvcml0eV9yYnQuanNcIjtcbmltcG9ydCB7IFNDSEVNQSwgSU5JVElBTF9ET0MsIERPQ19JRCB9IGZyb20gXCJAbW9ub3JlcG8vY29tbW9uL2NvbnN0YW50cy5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQXV0aG9yaXR5U2VydmljZXIgZXh0ZW5kcyBBdXRob3JpdHkuU2VydmljZXIge1xuXG4gICNkb2NzOiB7IFtrZXk6IHN0cmluZ106IFtudW1iZXIsIE5vZGVdIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLiNkb2NzID0ge307XG4gIH1cblxuICBwcml2YXRlIGRvYyhzdGF0ZUlkOiBzdHJpbmcsIHN0YXRlOiBBdXRob3JpdHkuU3RhdGUpIHtcbiAgICAvLyBIeWRyYXRlIHRoZSBkb2Mgb3IgcmV0dXJuIGFuIGFscmVhZHkgaHlkcmF0ZWQgZG9jIGlmIHRoZXJlIGFyZVxuICAgIC8vIG5vIG91dHN0YW5kaW5nIGNoYW5nZXMgaW4gdGhlIGxhdGVzdCBgc3RhdGVgIHRoYXQgbmVlZCB0byBiZVxuICAgIC8vIGh5ZHJhdGVkLlxuICAgIC8vXG4gICAgLy8gVE9ETzogZG8gc29tZXRoaW5nIGJldHRlciB0aGFuIGBJTklUSUFMX0RPQ2A/XG4gICAgbGV0IFt2ZXJzaW9uLCBkb2NdID0gc3RhdGVJZCBpbiB0aGlzLiNkb2NzXG4gICAgICA/IHRoaXMuI2RvY3Nbc3RhdGVJZF1cbiAgICAgIDogWzAsIElOSVRJQUxfRE9DXTtcblxuICAgIGlmICh2ZXJzaW9uIDwgc3RhdGUuY2hhbmdlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHN0ZXBzID0gc3RhdGUuY2hhbmdlcy5zbGljZSh2ZXJzaW9uKS5tYXAoXG4gICAgICAgICh7IHN0ZXAgfSkgPT4gU3RlcC5mcm9tSlNPTihTQ0hFTUEsIHN0ZXAudG9Kc29uKCkpXG4gICAgICApO1xuXG4gICAgICBmb3IgKGNvbnN0IHN0ZXAgb2Ygc3RlcHMpIHtcbiAgICAgICAgZG9jID0gc3RlcC5hcHBseShkb2MpLmRvYztcbiAgICAgICAgdmVyc2lvbisrO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiNkb2NzW3N0YXRlSWRdID0gW3ZlcnNpb24sIGRvY107XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvYztcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZShcbiAgICBjb250ZXh0OiBXcml0ZXJDb250ZXh0LFxuICAgIHN0YXRlOiBBdXRob3JpdHkuU3RhdGUsXG4gICAgcmVxdWVzdDogQ3JlYXRlUmVxdWVzdFxuICApOiBQcm9taXNlPFBhcnRpYWxNZXNzYWdlPENyZWF0ZVJlc3BvbnNlPj4ge1xuICAgIHJldHVybiB7XG4gICAgICBkb2M6IFN0cnVjdC5mcm9tSnNvbih0aGlzLmRvYyhjb250ZXh0LnN0YXRlSWQsIHN0YXRlKS50b0pTT04oKSksXG4gICAgICB2ZXJzaW9uOiBzdGF0ZS5jaGFuZ2VzLmxlbmd0aFxuICAgIH07XG4gIH1cblxuICBhc3luYyBhcHBseShcbiAgICBjb250ZXh0OiBXcml0ZXJDb250ZXh0LFxuICAgIHN0YXRlOiBBdXRob3JpdHkuU3RhdGUsXG4gICAgcmVxdWVzdDogQXBwbHlSZXF1ZXN0XG4gICk6IFByb21pc2U8UGFydGlhbE1lc3NhZ2U8QXBwbHlSZXNwb25zZT4+IHtcbiAgICBpZiAocmVxdWVzdC52ZXJzaW9uICE9IHN0YXRlLmNoYW5nZXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgQXV0aG9yaXR5LkFwcGx5QWJvcnRlZChuZXcgRmFpbGVkUHJlY29uZGl0aW9uKCkpO1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIHRoYXQgd2UgY2FuIGFwcGx5IHRoZXNlIGNoYW5nZXMhXG4gICAgLy9cbiAgICAvLyBUT0RPOiBlbXBlcmljYWwgcmVzdWx0cyBzaG93IHRoYXQgaWYgd2UgY291bGRcbiAgICAvLyBub3QgaW4gZmFjdCBhcHBseSB0aGUgY2hhbmdlcyB3ZSdsbCByYWlzZSBhbiBlcnJvclxuICAgIC8vIGFuZCB0aHVzIG5vdCBwZXJzaXN0IGFueSB1cGRhdGVzIHRvIGBzdGF0ZWAsXG4gICAgLy8gaG93ZXZlciwgaXQgd291bGQgYmUgZ3JlYXQgdG8gcHJvcGFnYXRlIGFuIGVycm9yXG4gICAgLy8gdGhhdCBjYXB0dXJlcyB0aGF0IGV4cGxpY2l0bHkuXG4gICAgbGV0IGRvYyA9IHRoaXMuZG9jKGNvbnRleHQuc3RhdGVJZCwgc3RhdGUpO1xuXG4gICAgY29uc3Qgc3RlcHMgPSByZXF1ZXN0LmNoYW5nZXMubWFwKFxuICAgICAgKHsgc3RlcCB9KSA9PiBTdGVwLmZyb21KU09OKFNDSEVNQSwgc3RlcC50b0pzb24oKSlcbiAgICApO1xuXG4gICAgZm9yIChjb25zdCBzdGVwIG9mIHN0ZXBzKSB7XG4gICAgICAvLyBUT0RPOiBhc3N1bWluZyB0aGF0IHRoaXMgd2lsbCB0aHJvdyBpZiB0aGUgc3RlcCBjYW4ndCBiZVxuICAgICAgLy8gYXBwbGllZCBkdWUgdG8gdGhlIHNjaGVtYS5cbiAgICAgIGRvYyA9IHN0ZXAuYXBwbHkoZG9jKS5kb2M7XG4gICAgfVxuXG4gICAgLy8gTk9URTogd2UgZG9uJ3Qgc2F2ZSBgZG9jYCBpbiBgdGhpcy4jZG9jc2AgYXMgdGhhdCBpcyBhXG4gICAgLy8gc2lkZS1lZmZlY3Q7IGluc3RlYWQgYHRoaXMuZG9jKC4uLilgIHdpbGwgY29ycmVjdGx5XG4gICAgLy8gcmV0dXJuIGEgaHlkcmF0ZWQgZG9jIGJhc2VkIG9uIHRoZSBsYXRlc3QgYHN0YXRlYCB3aGVuXG4gICAgLy8gZXZlciB3ZSBuZWVkIGl0LlxuXG4gICAgc3RhdGUuY2hhbmdlcyA9IFsuLi5zdGF0ZS5jaGFuZ2VzLCAuLi5yZXF1ZXN0LmNoYW5nZXNdO1xuXG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgYXN5bmMgY2hhbmdlcyhcbiAgICBjb250ZXh0OiBSZWFkZXJDb250ZXh0LFxuICAgIHN0YXRlOiBBdXRob3JpdHkuU3RhdGUsXG4gICAgeyBzaW5jZVZlcnNpb24gfTogQ2hhbmdlc1JlcXVlc3RcbiAgKTogUHJvbWlzZTxQYXJ0aWFsTWVzc2FnZTxDaGFuZ2VzUmVzcG9uc2U+PiB7XG4gICAgaWYgKHNpbmNlVmVyc2lvbiA+IHN0YXRlLmNoYW5nZXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgQXV0aG9yaXR5LkNoYW5nZXNBYm9ydGVkKG5ldyBJbnZhbGlkQXJndW1lbnQoKSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICB2ZXJzaW9uOiBzaW5jZVZlcnNpb24sXG4gICAgICBjaGFuZ2VzOiBzdGF0ZS5jaGFuZ2VzLnNsaWNlKHNpbmNlVmVyc2lvbilcbiAgICB9O1xuICB9XG59XG5cbmNvbnN0IGluaXRpYWxpemUgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuICBhd2FpdCBBdXRob3JpdHkuY29uc3RydWN0KHsgaWQ6IERPQ19JRCB9KS5pZGVtcG90ZW50bHkoKS5jcmVhdGUoY29udGV4dCk7XG59O1xuXG5uZXcgQXBwbGljYXRpb24oeyBzZXJ2aWNlcnM6IFtBdXRob3JpdHlTZXJ2aWNlcl0sIGluaXRpYWxpemUgfSkucnVuKCk7XG4iLCAiLy8gQGdlbmVyYXRlZCBieSBwcm90b2MtZ2VuLWVzIHYxLjMuMlxuLy8gQGdlbmVyYXRlZCBmcm9tIGZpbGUgcmJ0L3YxYWxwaGExL2Vycm9ycy5wcm90byAocGFja2FnZSByYnQudjFhbHBoYTEsIHN5bnRheCBwcm90bzMpXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcblxuaW1wb3J0IHsgcHJvdG8zIH0gZnJvbSBcIkBidWZidWlsZC9wcm90b2J1ZlwiO1xuXG4vKipcbiAqIEBnZW5lcmF0ZWQgZnJvbSBtZXNzYWdlIHJidC52MWFscGhhMS5TdGF0ZUFscmVhZHlDb25zdHJ1Y3RlZFxuICovXG5leHBvcnQgY29uc3QgU3RhdGVBbHJlYWR5Q29uc3RydWN0ZWQgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5TdGF0ZUFscmVhZHlDb25zdHJ1Y3RlZFwiLFxuICBbXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLlN0YXRlTm90Q29uc3RydWN0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXRlTm90Q29uc3RydWN0ZWQgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5TdGF0ZU5vdENvbnN0cnVjdGVkXCIsXG4gICgpID0+IFtcbiAgICB7IG5vOiAxLCBuYW1lOiBcInJlcXVpcmVzX2NvbnN0cnVjdG9yXCIsIGtpbmQ6IFwic2NhbGFyXCIsIFQ6IDggLyogU2NhbGFyVHlwZS5CT09MICovIH0sXG4gIF0sXG4pO1xuXG4vKipcbiAqIEBnZW5lcmF0ZWQgZnJvbSBtZXNzYWdlIHJidC52MWFscGhhMS5Vbmtub3duU2VydmljZVxuICovXG5leHBvcnQgY29uc3QgVW5rbm93blNlcnZpY2UgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5Vbmtub3duU2VydmljZVwiLFxuICBbXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLkludmFsaWRNZXRob2RcbiAqL1xuZXhwb3J0IGNvbnN0IEludmFsaWRNZXRob2QgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5JbnZhbGlkTWV0aG9kXCIsXG4gIFtdLFxuKTtcblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudjFhbHBoYTEuVW5rbm93blRhc2tcbiAqL1xuZXhwb3J0IGNvbnN0IFVua25vd25UYXNrID0gcHJvdG8zLm1ha2VNZXNzYWdlVHlwZShcbiAgXCJyYnQudjFhbHBoYTEuVW5rbm93blRhc2tcIixcbiAgW10sXG4pO1xuXG4vKipcbiAqIEBnZW5lcmF0ZWQgZnJvbSBtZXNzYWdlIHJidC52MWFscGhhMS5UcmFuc2FjdGlvblBhcnRpY2lwYW50RmFpbGVkVG9QcmVwYXJlXG4gKi9cbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvblBhcnRpY2lwYW50RmFpbGVkVG9QcmVwYXJlID0gcHJvdG8zLm1ha2VNZXNzYWdlVHlwZShcbiAgXCJyYnQudjFhbHBoYTEuVHJhbnNhY3Rpb25QYXJ0aWNpcGFudEZhaWxlZFRvUHJlcGFyZVwiLFxuICBbXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLlRyYW5zYWN0aW9uUGFydGljaXBhbnRGYWlsZWRUb0NvbW1pdFxuICovXG5leHBvcnQgY29uc3QgVHJhbnNhY3Rpb25QYXJ0aWNpcGFudEZhaWxlZFRvQ29tbWl0ID0gcHJvdG8zLm1ha2VNZXNzYWdlVHlwZShcbiAgXCJyYnQudjFhbHBoYTEuVHJhbnNhY3Rpb25QYXJ0aWNpcGFudEZhaWxlZFRvQ29tbWl0XCIsXG4gIFtdLFxuKTtcblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudjFhbHBoYTEuQ2FuY2VsbGVkXG4gKi9cbmV4cG9ydCBjb25zdCBDYW5jZWxsZWQgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5DYW5jZWxsZWRcIixcbiAgW10sXG4pO1xuXG4vKipcbiAqIEBnZW5lcmF0ZWQgZnJvbSBtZXNzYWdlIHJidC52MWFscGhhMS5Vbmtub3duXG4gKi9cbmV4cG9ydCBjb25zdCBVbmtub3duID0gcHJvdG8zLm1ha2VNZXNzYWdlVHlwZShcbiAgXCJyYnQudjFhbHBoYTEuVW5rbm93blwiLFxuICBbXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLkludmFsaWRBcmd1bWVudFxuICovXG5leHBvcnQgY29uc3QgSW52YWxpZEFyZ3VtZW50ID0gcHJvdG8zLm1ha2VNZXNzYWdlVHlwZShcbiAgXCJyYnQudjFhbHBoYTEuSW52YWxpZEFyZ3VtZW50XCIsXG4gIFtdLFxuKTtcblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudjFhbHBoYTEuRGVhZGxpbmVFeGNlZWRlZFxuICovXG5leHBvcnQgY29uc3QgRGVhZGxpbmVFeGNlZWRlZCA9IHByb3RvMy5tYWtlTWVzc2FnZVR5cGUoXG4gIFwicmJ0LnYxYWxwaGExLkRlYWRsaW5lRXhjZWVkZWRcIixcbiAgW10sXG4pO1xuXG4vKipcbiAqIEBnZW5lcmF0ZWQgZnJvbSBtZXNzYWdlIHJidC52MWFscGhhMS5Ob3RGb3VuZFxuICovXG5leHBvcnQgY29uc3QgTm90Rm91bmQgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5Ob3RGb3VuZFwiLFxuICBbXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLkFscmVhZHlFeGlzdHNcbiAqL1xuZXhwb3J0IGNvbnN0IEFscmVhZHlFeGlzdHMgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5BbHJlYWR5RXhpc3RzXCIsXG4gIFtdLFxuKTtcblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudjFhbHBoYTEuUGVybWlzc2lvbkRlbmllZFxuICovXG5leHBvcnQgY29uc3QgUGVybWlzc2lvbkRlbmllZCA9IHByb3RvMy5tYWtlTWVzc2FnZVR5cGUoXG4gIFwicmJ0LnYxYWxwaGExLlBlcm1pc3Npb25EZW5pZWRcIixcbiAgW10sXG4pO1xuXG4vKipcbiAqIEBnZW5lcmF0ZWQgZnJvbSBtZXNzYWdlIHJidC52MWFscGhhMS5SZXNvdXJjZUV4aGF1c3RlZFxuICovXG5leHBvcnQgY29uc3QgUmVzb3VyY2VFeGhhdXN0ZWQgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5SZXNvdXJjZUV4aGF1c3RlZFwiLFxuICBbXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLkZhaWxlZFByZWNvbmRpdGlvblxuICovXG5leHBvcnQgY29uc3QgRmFpbGVkUHJlY29uZGl0aW9uID0gcHJvdG8zLm1ha2VNZXNzYWdlVHlwZShcbiAgXCJyYnQudjFhbHBoYTEuRmFpbGVkUHJlY29uZGl0aW9uXCIsXG4gIFtdLFxuKTtcblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudjFhbHBoYTEuQWJvcnRlZFxuICovXG5leHBvcnQgY29uc3QgQWJvcnRlZCA9IHByb3RvMy5tYWtlTWVzc2FnZVR5cGUoXG4gIFwicmJ0LnYxYWxwaGExLkFib3J0ZWRcIixcbiAgW10sXG4pO1xuXG4vKipcbiAqIEBnZW5lcmF0ZWQgZnJvbSBtZXNzYWdlIHJidC52MWFscGhhMS5PdXRPZlJhbmdlXG4gKi9cbmV4cG9ydCBjb25zdCBPdXRPZlJhbmdlID0gcHJvdG8zLm1ha2VNZXNzYWdlVHlwZShcbiAgXCJyYnQudjFhbHBoYTEuT3V0T2ZSYW5nZVwiLFxuICBbXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLlVuaW1wbGVtZW50ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IFVuaW1wbGVtZW50ZWQgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5VbmltcGxlbWVudGVkXCIsXG4gIFtdLFxuKTtcblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudjFhbHBoYTEuSW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IEludGVybmFsID0gcHJvdG8zLm1ha2VNZXNzYWdlVHlwZShcbiAgXCJyYnQudjFhbHBoYTEuSW50ZXJuYWxcIixcbiAgW10sXG4pO1xuXG4vKipcbiAqIEBnZW5lcmF0ZWQgZnJvbSBtZXNzYWdlIHJidC52MWFscGhhMS5VbmF2YWlsYWJsZVxuICovXG5leHBvcnQgY29uc3QgVW5hdmFpbGFibGUgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5VbmF2YWlsYWJsZVwiLFxuICBbXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLkRhdGFMb3NzXG4gKi9cbmV4cG9ydCBjb25zdCBEYXRhTG9zcyA9IHByb3RvMy5tYWtlTWVzc2FnZVR5cGUoXG4gIFwicmJ0LnYxYWxwaGExLkRhdGFMb3NzXCIsXG4gIFtdLFxuKTtcblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudjFhbHBoYTEuVW5hdXRoZW50aWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBVbmF1dGhlbnRpY2F0ZWQgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5VbmF1dGhlbnRpY2F0ZWRcIixcbiAgW10sXG4pO1xuXG4vKipcbiAqIEBnZW5lcmF0ZWQgZnJvbSBtZXNzYWdlIHJidC52MWFscGhhMS5Pa1xuICovXG5leHBvcnQgY29uc3QgT2sgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5Pa1wiLFxuICBbXSxcbik7XG5cbiIsICIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcblxuaW1wb3J0IHsgcmVib290X25hdGl2ZSwgY3JlYXRlRXJyb3IgfSBmcm9tIFwiQHJlYm9vdC1kZXYvcmVib290XCI7XG5cblxuaW1wb3J0IHtcbiAgTGlzdFZhbHVlLCBcbiAgU3RydWN0LCBcbiAgVmFsdWVcbn0gZnJvbSBcIkBidWZidWlsZC9wcm90b2J1ZlwiO1xuaW1wb3J0IHtcbiAgQ2hhbmdlLFxuICBDcmVhdGVSZXF1ZXN0LFxuICBDcmVhdGVSZXNwb25zZSxcbiAgQXBwbHlSZXF1ZXN0LFxuICBBcHBseVJlc3BvbnNlLFxuICBDaGFuZ2VzUmVxdWVzdCxcbiAgQ2hhbmdlc1Jlc3BvbnNlLFxufSBmcm9tIFwiLi9hdXRob3JpdHlfcGIuanNcIjtcblxuLy8gQWRkaXRpb25hbGx5IHJlLWV4cG9ydCBhbGwgbWVzc2FnZXNfYW5kX2VudW1zIGZyb20gdGhlIHBiIG1vZHVsZS5cbmV4cG9ydCB7XG4gIENoYW5nZSxcbiAgQ3JlYXRlUmVxdWVzdCxcbiAgQ3JlYXRlUmVzcG9uc2UsXG4gIEFwcGx5UmVxdWVzdCxcbiAgQXBwbHlSZXNwb25zZSxcbiAgQ2hhbmdlc1JlcXVlc3QsXG4gIENoYW5nZXNSZXNwb25zZSxcbn07XG5cbmltcG9ydCB7XG4gIEF1dGhvcml0eSBhcyBBdXRob3JpdHlQcm90byxcbn0gZnJvbSBcIi4vYXV0aG9yaXR5X3BiLmpzXCI7XG5cbmltcG9ydCAqIGFzIHV1aWQgZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0ICogYXMgcmVib290IGZyb20gXCJAcmVib290LWRldi9yZWJvb3RcIjtcbmltcG9ydCB7XG4gIENvbnRleHQsXG4gIEV4dGVybmFsQ29udGV4dCxcbiAgV29ya2Zsb3dDb250ZXh0LFxuICBSZWFkZXJDb250ZXh0LFxuICBXcml0ZXJDb250ZXh0LFxuICBUcmFuc2FjdGlvbkNvbnRleHQsXG59IGZyb20gXCJAcmVib290LWRldi9yZWJvb3RcIjtcbmltcG9ydCAqIGFzIHByb3RvYnVmX2VzIGZyb20gXCJAYnVmYnVpbGQvcHJvdG9idWZcIjtcbmltcG9ydCAqIGFzIHJlYm9vdF9hcGkgZnJvbSBcIkByZWJvb3QtZGV2L3JlYm9vdC1hcGlcIjtcblxuXG4vLyBUbyBzdXBwb3J0IHdyaXRlcnMgc2VlaW5nIHBhcnRpYWwgdXBkYXRlcyBvZiB0cmFuc2FjdGlvbnMsXG4vLyBhbmQgdHJhbnNhY3Rpb25zIHNlZWluZyB1cGRhdGVzIGZyb20gd3JpdGVycywgd2UgbmVlZCB0byBzdG9yZVxuLy8gYSByZWZlcmVuY2UgdG8gdGhlIGxhdGVzdCBzdGF0ZSBpbiBhbiBvbmdvaW5nIHRyYW5zYWN0aW9uLlxuLy9cbi8vIE1vcmVvdmVyLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGF0IF9yZWZlcmVuY2VfIGFmdGVyIGVhY2ggd3JpdGVyXG4vLyBleGVjdXRlcyB3aXRoaW4gYSB0cmFuc2FjdGlvbi4gV2UgZG8gdGhhdCBpbiB0aGUgZ2VuZXJhdGVkXG4vLyBjb2RlLCBzZWUgYmVsb3cuXG5jb25zdCBvbmdvaW5nVHJhbnNhY3Rpb25TdGF0ZXM6IHsgW2lkOiBzdHJpbmddIDogYW55OyB9ID0ge307XG5cbmNvbnN0IEVSUk9SX1RZUEVTID0gW1xuICAvLyBUT0RPKGJlbmgpOiBkb24ndCBjb3B5IHRoZXNlIGVycm9ycyBldmVyeXdoZXJlLlxuICAvL1xuICAvLyBnUlBDIGVycm9ycy5cbiAgcmVib290X2FwaS5lcnJvcnNfcGIuQ2FuY2VsbGVkLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5Vbmtub3duLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5JbnZhbGlkQXJndW1lbnQsXG4gIHJlYm9vdF9hcGkuZXJyb3JzX3BiLkRlYWRsaW5lRXhjZWVkZWQsXG4gIHJlYm9vdF9hcGkuZXJyb3JzX3BiLk5vdEZvdW5kLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5BbHJlYWR5RXhpc3RzLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5QZXJtaXNzaW9uRGVuaWVkLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5SZXNvdXJjZUV4aGF1c3RlZCxcbiAgcmVib290X2FwaS5lcnJvcnNfcGIuRmFpbGVkUHJlY29uZGl0aW9uLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5BYm9ydGVkLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5PdXRPZlJhbmdlLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5VbmltcGxlbWVudGVkLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5JbnRlcm5hbCxcbiAgcmVib290X2FwaS5lcnJvcnNfcGIuVW5hdmFpbGFibGUsXG4gIHJlYm9vdF9hcGkuZXJyb3JzX3BiLkRhdGFMb3NzLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5VbmF1dGhlbnRpY2F0ZWQsXG4gIC8vIFJlYm9vdCBlcnJvcnMuXG4gIC8vXG4gIC8vIE5PVEU6IGFsc28gYWRkIGFueSBuZXcgZXJyb3JzIGludG8gYHJidC92MWFscGhhMS9pbmRleC50c2AuXG4gIHJlYm9vdF9hcGkuZXJyb3JzX3BiLlN0YXRlQWxyZWFkeUNvbnN0cnVjdGVkLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5TdGF0ZU5vdENvbnN0cnVjdGVkLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5UcmFuc2FjdGlvblBhcnRpY2lwYW50RmFpbGVkVG9QcmVwYXJlLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5UcmFuc2FjdGlvblBhcnRpY2lwYW50RmFpbGVkVG9Db21taXQsXG4gIHJlYm9vdF9hcGkuZXJyb3JzX3BiLlVua25vd25TZXJ2aWNlLFxuICByZWJvb3RfYXBpLmVycm9yc19wYi5Vbmtub3duVGFzayxcbl0gYXMgY29uc3Q7IC8vIE5lZWQgYGFzIGNvbnN0YCB0byBlbnN1cmUgVHlwZVNjcmlwdCBpbmZlcnMgdGhpcyBhcyBhIHR1cGxlIVxuXG5cbnR5cGUgQXV0aG9yaXR5UmVxdWVzdFR5cGVzID1cbiAgICAgICAgQ3JlYXRlUmVxdWVzdFxuICAgICAgICB8IEFwcGx5UmVxdWVzdFxuICAgICAgICB8IENoYW5nZXNSZXF1ZXN0XG47XG5cbmNvbnN0IEFVVEhPUklUWV9DUkVBVEVfRVJST1JfVFlQRVMgPSBbXG4gIC4uLkVSUk9SX1RZUEVTLFxuICAvLyBNZXRob2QgZXJyb3JzLlxuXSBhcyBjb25zdDsgLy8gTmVlZCBgYXMgY29uc3RgIHRvIGVuc3VyZSBUeXBlU2NyaXB0IGluZmVycyB0aGlzIGFzIGEgdHVwbGUhXG5cbnR5cGUgQXV0aG9yaXR5Q3JlYXRlQWJvcnRlZEVycm9yID1cbiAgcmVib290X2FwaS5JbnN0YW5jZVR5cGVGb3JFcnJvclR5cGVzPFxuICAgIHR5cGVvZiBBVVRIT1JJVFlfQ1JFQVRFX0VSUk9SX1RZUEVTXG4gID5bbnVtYmVyXTtcblxuY29uc3QgQVVUSE9SSVRZX0FQUExZX0VSUk9SX1RZUEVTID0gW1xuICAuLi5FUlJPUl9UWVBFUyxcbiAgLy8gTWV0aG9kIGVycm9ycy5cbl0gYXMgY29uc3Q7IC8vIE5lZWQgYGFzIGNvbnN0YCB0byBlbnN1cmUgVHlwZVNjcmlwdCBpbmZlcnMgdGhpcyBhcyBhIHR1cGxlIVxuXG50eXBlIEF1dGhvcml0eUFwcGx5QWJvcnRlZEVycm9yID1cbiAgcmVib290X2FwaS5JbnN0YW5jZVR5cGVGb3JFcnJvclR5cGVzPFxuICAgIHR5cGVvZiBBVVRIT1JJVFlfQVBQTFlfRVJST1JfVFlQRVNcbiAgPltudW1iZXJdO1xuXG5jb25zdCBBVVRIT1JJVFlfQ0hBTkdFU19FUlJPUl9UWVBFUyA9IFtcbiAgLi4uRVJST1JfVFlQRVMsXG4gIC8vIE1ldGhvZCBlcnJvcnMuXG5dIGFzIGNvbnN0OyAvLyBOZWVkIGBhcyBjb25zdGAgdG8gZW5zdXJlIFR5cGVTY3JpcHQgaW5mZXJzIHRoaXMgYXMgYSB0dXBsZSFcblxudHlwZSBBdXRob3JpdHlDaGFuZ2VzQWJvcnRlZEVycm9yID1cbiAgcmVib290X2FwaS5JbnN0YW5jZVR5cGVGb3JFcnJvclR5cGVzPFxuICAgIHR5cGVvZiBBVVRIT1JJVFlfQ0hBTkdFU19FUlJPUl9UWVBFU1xuICA+W251bWJlcl07XG5cblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXV0aG9yaXR5U2VydmljZXIgZXh0ZW5kcyByZWJvb3QuU2VydmljZXI8QXV0aG9yaXR5LlN0YXRlPiB7XG4gIHN0YXRpYyBfX3JidE1vZHVsZV9fID0gXCJyYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5hdXRob3JpdHlfcmJ0XCI7XG4gIHN0YXRpYyBfX3NlcnZpY2VyTm9kZUFkYXB0b3JfXyA9IFwiQXV0aG9yaXR5U2VydmljZXJOb2RlQWRhcHRvclwiO1xuXG4gIC8vIEV4dGVybmFsIHJlZmVyZW5jZSB0byB0aGUgbmF0aXZlIGBTZXJ2aWNlcmAuXG4gICNleHRlcm5hbD86IGFueSB8IHVuZGVmaW5lZDtcblxuICBwcm90ZWN0ZWQgbG9va3VwKFxuICAgIG9wdGlvbnM/OiB7IGJlYXJlclRva2VuPzogc3RyaW5nIH1cbiAgKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHJlYm9vdC5nZXRDb250ZXh0KCk7XG4gICAgcmV0dXJuIG5ldyBBdXRob3JpdHkuV2Vha1JlZmVyZW5jZShjb250ZXh0LnN0YXRlSWQsIG9wdGlvbnM/LmJlYXJlclRva2VuKTtcbiAgfVxuXG4gIGFic3RyYWN0IGNyZWF0ZShcbiAgICBjb250ZXh0OiBXcml0ZXJDb250ZXh0LFxuICAgIHN0YXRlOiBBdXRob3JpdHkuU3RhdGUsXG4gICAgcmVxdWVzdDogQ3JlYXRlUmVxdWVzdCxcbiAgKTogUHJvbWlzZTxcbiAgQ3JlYXRlUmVzcG9uc2UgfCBwcm90b2J1Zl9lcy5QYXJ0aWFsTWVzc2FnZTxDcmVhdGVSZXNwb25zZT5cbiAgPjtcblxuICBhc3luYyBfQ3JlYXRlKFxuICAgIGNvbnRleHQ6IFdyaXRlckNvbnRleHQsXG4gICAganNvblN0YXRlOiBzdHJpbmcsXG4gICAganNvblJlcXVlc3Q6IHN0cmluZ1xuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgc3RhdGUgPSBBdXRob3JpdHkuU3RhdGUuZnJvbUpzb25TdHJpbmcoXG4gICAgICAgIGpzb25TdGF0ZVxuICAgICAgKTtcbiAgICAgIGlmIChjb250ZXh0LnN0YXRlSWQgaW4gb25nb2luZ1RyYW5zYWN0aW9uU3RhdGVzKSB7XG4gICAgICAgIHN0YXRlID0gb25nb2luZ1RyYW5zYWN0aW9uU3RhdGVzW2NvbnRleHQuc3RhdGVJZF0uY2xvbmUoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVib290LnJ1bldpdGhDb250ZXh0KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgQ3JlYXRlUmVxdWVzdC5mcm9tSnNvblN0cmluZyhqc29uUmVxdWVzdClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgLy8gVE9ETzogaXQncyBwcmVtYXR1cmUgdG8gb3ZlcndyaXRlIHRoZSBzdGF0ZSBub3cgZ2l2ZW4gdGhhdCB0aGVcbiAgICAgIC8vIHdyaXRlciBtaWdodCBzdGlsbCBcImZhaWxcIiBhbmQgYW4gZXJyb3Igd2lsbCBnZXQgcHJvcGFnYXRlZCBiYWNrXG4gICAgICAvLyB0byB0aGUgb25nb2luZyB0cmFuc2FjdGlvbiB3aGljaCB3aWxsIHN0aWxsIHNlZSB0aGUgZWZmZWN0cyBvZlxuICAgICAgLy8gdGhpcyB3cml0ZXIuIFdoYXQgd2Ugc2hvdWxkIGJlIGRvaW5nIGluc3RlYWQgaXMgY3JlYXRpbmcgYVxuICAgICAgLy8gY2FsbGJhY2sgQVBJIHRoYXQgd2UgaW52b2tlIG9ubHkgYWZ0ZXIgYSB3cml0ZXIgY29tcGxldGVzXG4gICAgICAvLyB0aGF0IGxldHMgdXMgdXBkYXRlIHRoZSBzdGF0ZSBfcmVmZXJlbmNlXyB0aGVuLlxuICAgICAgaWYgKGNvbnRleHQuc3RhdGVJZCBpbiBvbmdvaW5nVHJhbnNhY3Rpb25TdGF0ZXMpIHtcbiAgICAgICAgb25nb2luZ1RyYW5zYWN0aW9uU3RhdGVzW2NvbnRleHQuc3RhdGVJZF0uY29weUZyb20oc3RhdGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZWZmZWN0czogbmV3IEF1dGhvcml0eS5DcmVhdGVFZmZlY3RzKHsgc3RhdGUsIHJlc3BvbnNlIH0pXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoZSBpbnN0YW5jZW9mIHJlYm9vdF9hcGkuQWJvcnRlZCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHN0YXR1czogZS50b1N0YXR1cygpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBlcnJvciA9IGNyZWF0ZUVycm9yKGUpO1xuXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBVbmhhbmRsZWQgKGluICdyYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5BdXRob3JpdHkuY3JlYXRlJykgJHtlcnJvci5tZXNzYWdlfTsgcHJvcGFnYXRpbmcgYXMgJ1Vua25vd24nXFxuJHtlcnJvci5zdGFja31gXG4gICAgICApO1xuXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBhYnN0cmFjdCBhcHBseShcbiAgICBjb250ZXh0OiBXcml0ZXJDb250ZXh0LFxuICAgIHN0YXRlOiBBdXRob3JpdHkuU3RhdGUsXG4gICAgcmVxdWVzdDogQXBwbHlSZXF1ZXN0LFxuICApOiBQcm9taXNlPFxuICBBcHBseVJlc3BvbnNlIHwgcHJvdG9idWZfZXMuUGFydGlhbE1lc3NhZ2U8QXBwbHlSZXNwb25zZT5cbiAgPjtcblxuICBhc3luYyBfQXBwbHkoXG4gICAgY29udGV4dDogV3JpdGVyQ29udGV4dCxcbiAgICBqc29uU3RhdGU6IHN0cmluZyxcbiAgICBqc29uUmVxdWVzdDogc3RyaW5nXG4gICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBzdGF0ZSA9IEF1dGhvcml0eS5TdGF0ZS5mcm9tSnNvblN0cmluZyhcbiAgICAgICAganNvblN0YXRlXG4gICAgICApO1xuICAgICAgaWYgKGNvbnRleHQuc3RhdGVJZCBpbiBvbmdvaW5nVHJhbnNhY3Rpb25TdGF0ZXMpIHtcbiAgICAgICAgc3RhdGUgPSBvbmdvaW5nVHJhbnNhY3Rpb25TdGF0ZXNbY29udGV4dC5zdGF0ZUlkXS5jbG9uZSgpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWJvb3QucnVuV2l0aENvbnRleHQoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hcHBseShcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIEFwcGx5UmVxdWVzdC5mcm9tSnNvblN0cmluZyhqc29uUmVxdWVzdClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgLy8gVE9ETzogaXQncyBwcmVtYXR1cmUgdG8gb3ZlcndyaXRlIHRoZSBzdGF0ZSBub3cgZ2l2ZW4gdGhhdCB0aGVcbiAgICAgIC8vIHdyaXRlciBtaWdodCBzdGlsbCBcImZhaWxcIiBhbmQgYW4gZXJyb3Igd2lsbCBnZXQgcHJvcGFnYXRlZCBiYWNrXG4gICAgICAvLyB0byB0aGUgb25nb2luZyB0cmFuc2FjdGlvbiB3aGljaCB3aWxsIHN0aWxsIHNlZSB0aGUgZWZmZWN0cyBvZlxuICAgICAgLy8gdGhpcyB3cml0ZXIuIFdoYXQgd2Ugc2hvdWxkIGJlIGRvaW5nIGluc3RlYWQgaXMgY3JlYXRpbmcgYVxuICAgICAgLy8gY2FsbGJhY2sgQVBJIHRoYXQgd2UgaW52b2tlIG9ubHkgYWZ0ZXIgYSB3cml0ZXIgY29tcGxldGVzXG4gICAgICAvLyB0aGF0IGxldHMgdXMgdXBkYXRlIHRoZSBzdGF0ZSBfcmVmZXJlbmNlXyB0aGVuLlxuICAgICAgaWYgKGNvbnRleHQuc3RhdGVJZCBpbiBvbmdvaW5nVHJhbnNhY3Rpb25TdGF0ZXMpIHtcbiAgICAgICAgb25nb2luZ1RyYW5zYWN0aW9uU3RhdGVzW2NvbnRleHQuc3RhdGVJZF0uY29weUZyb20oc3RhdGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZWZmZWN0czogbmV3IEF1dGhvcml0eS5BcHBseUVmZmVjdHMoeyBzdGF0ZSwgcmVzcG9uc2UgfSlcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgcmVib290X2FwaS5BYm9ydGVkKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgc3RhdHVzOiBlLnRvU3RhdHVzKClcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVycm9yID0gY3JlYXRlRXJyb3IoZSk7XG5cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFVuaGFuZGxlZCAoaW4gJ3JidC50aGlyZHBhcnR5LnByb3NlbWlycm9yLnYxLkF1dGhvcml0eS5hcHBseScpICR7ZXJyb3IubWVzc2FnZX07IHByb3BhZ2F0aW5nIGFzICdVbmtub3duJ1xcbiR7ZXJyb3Iuc3RhY2t9YFxuICAgICAgKTtcblxuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgYWJzdHJhY3QgY2hhbmdlcyhcbiAgICBjb250ZXh0OiBSZWFkZXJDb250ZXh0LFxuICAgIHN0YXRlOiBBdXRob3JpdHkuU3RhdGUsXG4gICAgcmVxdWVzdDogQ2hhbmdlc1JlcXVlc3QsXG4gICk6IFByb21pc2U8XG4gIENoYW5nZXNSZXNwb25zZSB8IHByb3RvYnVmX2VzLlBhcnRpYWxNZXNzYWdlPENoYW5nZXNSZXNwb25zZT5cbiAgPjtcblxuICBhc3luYyBfQ2hhbmdlcyhcbiAgICBjb250ZXh0OiBSZWFkZXJDb250ZXh0LFxuICAgIGpzb25TdGF0ZTogc3RyaW5nLFxuICAgIGpzb25SZXF1ZXN0OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IHN0YXRlID0gQXV0aG9yaXR5LlN0YXRlLmZyb21Kc29uU3RyaW5nKFxuICAgICAgICBqc29uU3RhdGVcbiAgICAgICk7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlYm9vdC5ydW5XaXRoQ29udGV4dChjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZXMoXG4gICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBDaGFuZ2VzUmVxdWVzdC5mcm9tSnNvblN0cmluZyhqc29uUmVxdWVzdClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcmVzcG9uc2VcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgcmVib290X2FwaS5BYm9ydGVkKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgc3RhdHVzOiBlLnRvU3RhdHVzKClcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVycm9yID0gY3JlYXRlRXJyb3IoZSk7XG5cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFVuaGFuZGxlZCAoaW4gJ3JidC50aGlyZHBhcnR5LnByb3NlbWlycm9yLnYxLkF1dGhvcml0eS5jaGFuZ2VzJykgJHtlcnJvci5tZXNzYWdlfTsgcHJvcGFnYXRpbmcgYXMgJ1Vua25vd24nXFxuJHtlcnJvci5zdGFja31gXG4gICAgICApO1xuXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gIH1cblxuXG4gIF9fc3RvcmVFeHRlcm5hbChleHRlcm5hbDogYW55KSB7XG4gICAgdGhpcy4jZXh0ZXJuYWwgPSBleHRlcm5hbDtcbiAgfVxuXG4gIGdldCBfX2V4dGVybmFsKCkge1xuICAgIGlmICh0aGlzLiNleHRlcm5hbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdW5kZWZpbmVkIGV4dGVybmFsYCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiNleHRlcm5hbDtcbiAgfVxuXG4gIGF1dGhvcml6ZXIoKTogcmVib290LkF1dGhvcml6ZXI8QXV0aG9yaXR5LCBBdXRob3JpdHlSZXF1ZXN0VHlwZXM+IHwgbnVsbCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBfYXV0aG9yaXplcigpIHtcbiAgICBjb25zdCBhdXRob3JpemVyID0gdGhpcy5hdXRob3JpemVyKCk7XG4gICAgaWYgKGF1dGhvcml6ZXIgIT09IG51bGwpIHtcbiAgICAgIGF1dGhvcml6ZXIuX2F1dGhvcml6ZSA9IGFzeW5jIGZ1bmN0aW9uKFxuICAgICAgICBtZXRob2ROYW1lOiBzdHJpbmcsXG4gICAgICAgIGNvbnRleHQ6IFJlYWRlckNvbnRleHQsXG4gICAgICAgIGJ5dGVzU3RhdGU/OiBVaW50OEFycmF5LFxuICAgICAgICBieXRlc1JlcXVlc3Q/OiBVaW50OEFycmF5XG4gICAgICApOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcbiAgICAgICAgbGV0IHN0YXRlOiBBdXRob3JpdHkuU3RhdGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChieXRlc1N0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdGF0ZSA9IEF1dGhvcml0eS5TdGF0ZS5mcm9tQmluYXJ5KGJ5dGVzU3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXF1ZXN0OiBBdXRob3JpdHlSZXF1ZXN0VHlwZXMgfCB1bmRlZmluZWQgID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBhbnlSZXF1ZXN0ID0gcHJvdG9idWZfZXMuQW55LmZyb21CaW5hcnkoYnl0ZXNSZXF1ZXN0KTtcbiAgICAgICAgaWYgKGFueVJlcXVlc3QuaXMoQ3JlYXRlUmVxdWVzdCkpIHtcbiAgICAgICAgICByZXF1ZXN0ID0gbmV3IENyZWF0ZVJlcXVlc3QoKTtcbiAgICAgICAgICBhbnlSZXF1ZXN0LnVucGFja1RvKHJlcXVlc3QpO1xuICAgICAgICB9IGVsc2UgaWYgKGFueVJlcXVlc3QuaXMoQXBwbHlSZXF1ZXN0KSkge1xuICAgICAgICAgIHJlcXVlc3QgPSBuZXcgQXBwbHlSZXF1ZXN0KCk7XG4gICAgICAgICAgYW55UmVxdWVzdC51bnBhY2tUbyhyZXF1ZXN0KTtcbiAgICAgICAgfSBlbHNlIGlmIChhbnlSZXF1ZXN0LmlzKENoYW5nZXNSZXF1ZXN0KSkge1xuICAgICAgICAgIHJlcXVlc3QgPSBuZXcgQ2hhbmdlc1JlcXVlc3QoKTtcbiAgICAgICAgICBhbnlSZXF1ZXN0LnVucGFja1RvKHJlcXVlc3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCB0eXBlIGZvciAke3JlcXVlc3R9OiAke2FueVJlcXVlc3QudHlwZVVybH0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3RvYnVmX2VzLkFueS5wYWNrKFxuICAgICAgICAgIGF3YWl0IGF1dGhvcml6ZXIuYXV0aG9yaXplKG1ldGhvZE5hbWUsIGNvbnRleHQsIHN0YXRlLCByZXF1ZXN0KVxuICAgICAgICApLnRvQmluYXJ5KCk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gYXV0aG9yaXplcjtcbiAgfVxuXG4gIHN0YXRpYyBfU3RhdGUgPSBjbGFzcyB7XG5cbiAgICAjc2VydmljZXI6IEF1dGhvcml0eVNlcnZpY2VyXG5cbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlcjogQXV0aG9yaXR5U2VydmljZXIpIHtcbiAgICAgIHRoaXMuI3NlcnZpY2VyID0gc2VydmljZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVhZChcbiAgICAgIGNvbnRleHQ6IHJlYm9vdC5Xb3JrZmxvd0NvbnRleHRcbiAgICApOiBQcm9taXNlPEF1dGhvcml0eS5TdGF0ZT4ge1xuICAgICAgcmV0dXJuIEF1dGhvcml0eS5TdGF0ZS5mcm9tSnNvblN0cmluZyhcbiAgICAgICAgYXdhaXQgcmVib290X25hdGl2ZS5TZXJ2aWNlcl9yZWFkKFxuICAgICAgICAgIHRoaXMuI3NlcnZpY2VyLl9fZXh0ZXJuYWwsXG4gICAgICAgICAgY29udGV4dC5fX2V4dGVybmFsXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgd3JpdGUoXG4gICAgICBpZGVtcG90ZW5jeUFsaWFzOiBzdHJpbmcsXG4gICAgICBjb250ZXh0OiByZWJvb3QuV29ya2Zsb3dDb250ZXh0LFxuICAgICAgd3JpdGVyOiAoc3RhdGU6IEF1dGhvcml0eS5TdGF0ZSkgPT4gUHJvbWlzZTx2b2lkPixcbiAgICAgIG9wdGlvbnM/OiB7IHBhcnNlOiB1bmRlZmluZWQgfVxuICAgICk6IFByb21pc2U8dm9pZD47XG5cbiAgICBhc3luYyB3cml0ZTxUPihcbiAgICAgIGlkZW1wb3RlbmN5QWxpYXM6IHN0cmluZyxcbiAgICAgIGNvbnRleHQ6IHJlYm9vdC5Xb3JrZmxvd0NvbnRleHQsXG4gICAgICB3cml0ZXI6IChzdGF0ZTogQXV0aG9yaXR5LlN0YXRlKSA9PiBQcm9taXNlPFQ+LFxuICAgICAgb3B0aW9uczogeyBwYXJzZTogKHZhbHVlOiBhbnkpID0+IFQgfVxuICAgICk6IFByb21pc2U8VD47XG5cbiAgICBhc3luYyB3cml0ZTxUPihcbiAgICAgIGlkZW1wb3RlbmN5QWxpYXM6IHN0cmluZyxcbiAgICAgIGNvbnRleHQ6IHJlYm9vdC5Xb3JrZmxvd0NvbnRleHQsXG4gICAgICB3cml0ZXI6IChzdGF0ZTogQXV0aG9yaXR5LlN0YXRlKSA9PiBQcm9taXNlPFQ+LFxuICAgICAgb3B0aW9uczogeyBwYXJzZTogdW5kZWZpbmVkIHwgKCh2YWx1ZTogYW55KSA9PiBUKSB9ID0geyBwYXJzZTogdW5kZWZpbmVkIH1cbiAgICApOiBQcm9taXNlPHZvaWQgfCBUPiB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5pZGVtcG90ZW50bHkoaWRlbXBvdGVuY3lBbGlhcylcbiAgICAgICAgLndyaXRlKGNvbnRleHQsIHdyaXRlciwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgc3RhdGljIF9JZGVtcG90ZW50bHkgPSBjbGFzcyB7XG5cbiAgICAgICNleHRlcm5hbDogYW55O1xuICAgICAgI29wdGlvbnM6IHJlYm9vdF9hcGkuSWRlbXBvdGVuY3lPcHRpb25zO1xuXG4gICAgICBjb25zdHJ1Y3RvcihleHRlcm5hbDogYW55LCBvcHRpb25zOiByZWJvb3RfYXBpLklkZW1wb3RlbmN5T3B0aW9ucykge1xuICAgICAgICB0aGlzLiNleHRlcm5hbCA9IGV4dGVybmFsO1xuICAgICAgICB0aGlzLiNvcHRpb25zID0gb3B0aW9ucztcbiAgICAgIH1cblxuICAgICAgYXN5bmMgd3JpdGUoXG4gICAgICAgIGNvbnRleHQ6IHJlYm9vdC5Xb3JrZmxvd0NvbnRleHQsXG4gICAgICAgIHdyaXRlcjogKHN0YXRlOiBBdXRob3JpdHkuU3RhdGUpID0+IFByb21pc2U8dm9pZD4sXG4gICAgICAgIG9wdGlvbnM/OiB7IHBhcnNlOiB1bmRlZmluZWQgfSxcbiAgICAgICAgdW5pZGVtcG90ZW50bHk/OiBib29sZWFuXG4gICAgICApOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgICBhc3luYyB3cml0ZTxUPihcbiAgICAgICAgY29udGV4dDogcmVib290LldvcmtmbG93Q29udGV4dCxcbiAgICAgICAgd3JpdGVyOiAoc3RhdGU6IEF1dGhvcml0eS5TdGF0ZSkgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgb3B0aW9uczogeyBwYXJzZTogKHZhbHVlOiBhbnkpID0+IFQgfSxcbiAgICAgICAgdW5pZGVtcG90ZW50bHk/OiBib29sZWFuXG4gICAgICApOiBQcm9taXNlPFQ+O1xuXG4gICAgICBhc3luYyB3cml0ZTxUPihcbiAgICAgICAgY29udGV4dDogcmVib290LldvcmtmbG93Q29udGV4dCxcbiAgICAgICAgd3JpdGVyOiAoc3RhdGU6IEF1dGhvcml0eS5TdGF0ZSkgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgb3B0aW9uczogeyBwYXJzZTogdW5kZWZpbmVkIHwgKCh2YWx1ZTogYW55KSA9PiBUKSB9ID0geyBwYXJzZTogdW5kZWZpbmVkIH0sXG4gICAgICAgIHVuaWRlbXBvdGVudGx5OiBib29sZWFuID0gZmFsc2UsXG4gICAgICApOiBQcm9taXNlPHZvaWQgfCBUPiB7XG4gICAgICAgIGxldCB0OiBUIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlYm9vdF9uYXRpdmUuU2VydmljZXJfd3JpdGUoXG4gICAgICAgICAgdGhpcy4jZXh0ZXJuYWwsXG4gICAgICAgICAgY29udGV4dC5fX2V4dGVybmFsLFxuICAgICAgICAgIGFzeW5jIChqc29uU3RhdGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBBdXRob3JpdHkuU3RhdGUuZnJvbUpzb25TdHJpbmcoXG4gICAgICAgICAgICAgIGpzb25TdGF0ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHQgPSBhd2FpdCB3cml0ZXIoc3RhdGUpO1xuXG4gICAgICAgICAgICAgIGlmICh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wYXJzZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIFwiUmVxdWlyZWQgJ3BhcnNlJyBwcm9wZXJ0eSBpbiAnb3B0aW9ucycgaXMgdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTk9URTogd2UndmUgZGVjaWRlZCBub3QgdG8gc3RyaW5naWZ5IGFuZCBwYXJzZSBgdGBcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBgb3B0aW9ucy5wYXJzZWAgbm93IHRvIGF2b2lkIHRoZSBleHRyYVxuICAgICAgICAgICAgICAgIC8vIG92ZXJoZWFkLCBidXQgaXQgbWlnaHQgY2F0Y2ggc29tZSBidWdzIF9iZWZvcmVfXG4gICAgICAgICAgICAgICAgLy8gYW55dGhpbmcgZ2V0cyBwZXJzaXN0ZWQgYW5kIHVzZXJzIG1heSBwcmVmZXIgdGhhdFxuICAgICAgICAgICAgICAgIC8vIHRyYWRlb2ZmLlxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZXZlciBkaWQgZGVjaWRlIHRvIGRvIHRoaXMgYW5kXG4gICAgICAgICAgICAgICAgLy8gYHVuaWRlbXBvdGVudGx5KClgIGlzIHN0aWxsIHVzaW5nIHRoaXMgbWV0aG9kIHRoZW5cbiAgICAgICAgICAgICAgICAvLyB3ZSdkIG5lZWQgdG8gYWxzbyB1cGRhdGUgdGhlIGBvcHRpb25zLnBhcnNlYCBwYXNzZWRcbiAgICAgICAgICAgICAgICAvLyBmcm9tIHRoZXJlIHNvIHRoYXQgaXQgZG9lc24ndCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIC8vIE5PVEU6IHVzaW5nIHRoZSBlbXB0eSBzdHJpbmcgdG8gcmVwcmVzZW50IGFcbiAgICAgICAgICAgICAgICAvLyBgY2FsbGFibGVgIHJldHVybmluZyB2b2lkIG9yIGV4cGxpY2l0bHkgYHVuZGVmaW5lZGAuXG4gICAgICAgICAgICAgICAgcmVzdWx0OiAodCAhPT0gdW5kZWZpbmVkICYmIEpTT04uc3RyaW5naWZ5KHQpKSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlRXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGlkZW1wb3RlbmN5OiB0aGlzLiNvcHRpb25zLCB1bmlkZW1wb3RlbnRseSB9KSxcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBhc3NlcnQocmVzdWx0ICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgIT09IFwiXCIpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5wYXJzZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCAncGFyc2UnIHByb3BlcnR5IGluICdvcHRpb25zJyBpcyB1bmRlZmluZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvcHRpb25zLnBhcnNlKEpTT04ucGFyc2UocmVzdWx0KSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUT0RPOiBhc3NlcnQocmVzdWx0ID09PSBcIlwiKTtcblxuICAgICAgICAvLyBMZXQgZW5kIHVzZXIgZGVjaWRlIHdoYXQgdGhleSB3YW50IHRvIGRvIHdpdGggYHVuZGVmaW5lZGAgaWZcbiAgICAgICAgLy8gdGhleSBzcGVjaWZ5IGBvcHRpb25zLnBhcnNlYC5cbiAgICAgICAgaWYgKG9wdGlvbnMucGFyc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLnBhcnNlKHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPdGhlcndpc2UgYGNhbGxhYmxlYCBtdXN0IHJldHVybiB2b2lkICh1bmRlZmluZWQpLCBmYWxsIHRocm91Z2guXG4gICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBpZGVtcG90ZW50bHkoYWxpYXNPck9wdGlvbnM6IHN0cmluZyB8IHJlYm9vdF9hcGkuSWRlbXBvdGVuY3lPcHRpb25zKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gdHlwZW9mIGFsaWFzT3JPcHRpb25zID09PSBcInN0cmluZ1wiXG4gICAgICAgID8geyBhbGlhczogYWxpYXNPck9wdGlvbnMgfVxuICAgICAgICA6IGFsaWFzT3JPcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMuYWxpYXMgPT09IHVuZGVmaW5lZCAmJiBvcHRpb25zLmtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBcIklubGluZSB3cml0ZXJzIHJlcXVpcmUgZWl0aGVyIGFuIGlkZW1wb3RlbmN5IGFsaWFzIG9yIGtleVwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEF1dGhvcml0eVNlcnZpY2VyLl9TdGF0ZS5fSWRlbXBvdGVudGx5KFxuICAgICAgICB0aGlzLiNzZXJ2aWNlci5fX2V4dGVybmFsLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX1VuaWRlbXBvdGVudGx5ID0gY2xhc3Mge1xuXG4gICAgICAjZXh0ZXJuYWw6IGFueTtcblxuICAgICAgY29uc3RydWN0b3IoZXh0ZXJuYWw6IGFueSkge1xuICAgICAgICB0aGlzLiNleHRlcm5hbCA9IGV4dGVybmFsO1xuICAgICAgfVxuXG4gICAgICBhc3luYyB3cml0ZShcbiAgICAgICAgY29udGV4dDogcmVib290LldvcmtmbG93Q29udGV4dCxcbiAgICAgICAgd3JpdGVyOiAoc3RhdGU6IEF1dGhvcml0eS5TdGF0ZSkgPT4gUHJvbWlzZTx2b2lkPlxuICAgICAgKTogUHJvbWlzZTx2b2lkPjtcblxuICAgICAgYXN5bmMgd3JpdGU8VD4oXG4gICAgICAgIGNvbnRleHQ6IHJlYm9vdC5Xb3JrZmxvd0NvbnRleHQsXG4gICAgICAgIHdyaXRlcjogKHN0YXRlOiBBdXRob3JpdHkuU3RhdGUpID0+IFByb21pc2U8VD5cbiAgICAgICk6IFByb21pc2U8VD47XG5cbiAgICAgIGFzeW5jIHdyaXRlPFQ+KFxuICAgICAgICBjb250ZXh0OiByZWJvb3QuV29ya2Zsb3dDb250ZXh0LFxuICAgICAgICB3cml0ZXI6IChzdGF0ZTogQXV0aG9yaXR5LlN0YXRlKSA9PiBQcm9taXNlPFQ+XG4gICAgICApOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRob3JpdHlTZXJ2aWNlci5fU3RhdGUuX0lkZW1wb3RlbnRseShcbiAgICAgICAgICB0aGlzLiNleHRlcm5hbCxcbiAgICAgICAgICB7IGtleTogdXVpZC52NCgpIH1cbiAgICAgICAgKS53cml0ZTxUPihcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIHdyaXRlcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXJzZTogKCk6IFQgPT4ge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGF0dGVtcHQgdG8gcGFyc2UgdW5pZGVtcG90ZW50IHJlc3VsdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcHVibGljIHVuaWRlbXBvdGVudGx5KCkge1xuICAgICAgcmV0dXJuIG5ldyBBdXRob3JpdHlTZXJ2aWNlci5fU3RhdGUuX1VuaWRlbXBvdGVudGx5KFxuICAgICAgICB0aGlzLiNzZXJ2aWNlci5fX2V4dGVybmFsXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIG5ldyBBdXRob3JpdHlTZXJ2aWNlci5fU3RhdGUodGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eUF1dGhvcml6ZXIgZXh0ZW5kcyByZWJvb3QuQXV0aG9yaXplcjxBdXRob3JpdHkuU3RhdGUsIEF1dGhvcml0eVJlcXVlc3RUeXBlcz4ge1xuXG4gIGFzeW5jIGF1dGhvcml6ZShcbiAgICBtZXRob2ROYW1lOiBzdHJpbmcsXG4gICAgY29udGV4dDogUmVhZGVyQ29udGV4dCxcbiAgICBzdGF0ZT86IEF1dGhvcml0eS5TdGF0ZSxcbiAgICByZXF1ZXN0PzogQXV0aG9yaXR5UmVxdWVzdFR5cGVzXG4gICk6IFByb21pc2U8cmVib290LkF1dGhvcml6ZXJEZWNpc2lvbj4ge1xuICAgIGlmIChtZXRob2ROYW1lID09ICdyYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5BdXRob3JpdHlNZXRob2RzLkNyZWF0ZScpIHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLkNyZWF0ZShcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHJlcXVlc3QgYXMgQ3JlYXRlUmVxdWVzdCxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09ICdyYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5BdXRob3JpdHlNZXRob2RzLkFwcGx5Jykge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuQXBwbHkoXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN0YXRlLFxuICAgICAgICByZXF1ZXN0IGFzIEFwcGx5UmVxdWVzdCxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChtZXRob2ROYW1lID09ICdyYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5BdXRob3JpdHlNZXRob2RzLkNoYW5nZXMnKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5DaGFuZ2VzKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcmVxdWVzdCBhcyBDaGFuZ2VzUmVxdWVzdCxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgcmVib290X2FwaS5lcnJvcnNfcGIuUGVybWlzc2lvbkRlbmllZCgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIENyZWF0ZShcbiAgICBjb250ZXh0OiBSZWFkZXJDb250ZXh0LFxuICAgIHN0YXRlOiBBdXRob3JpdHkuU3RhdGUsXG4gICAgcmVxdWVzdDogQ3JlYXRlUmVxdWVzdCxcbiAgKTogUHJvbWlzZTxyZWJvb3QuQXV0aG9yaXplckRlY2lzaW9uPiB7XG4gICAgcmV0dXJuIG5ldyByZWJvb3RfYXBpLmVycm9yc19wYi5QZXJtaXNzaW9uRGVuaWVkKCk7XG4gIH1cbiAgYXN5bmMgQXBwbHkoXG4gICAgY29udGV4dDogUmVhZGVyQ29udGV4dCxcbiAgICBzdGF0ZTogQXV0aG9yaXR5LlN0YXRlLFxuICAgIHJlcXVlc3Q6IEFwcGx5UmVxdWVzdCxcbiAgKTogUHJvbWlzZTxyZWJvb3QuQXV0aG9yaXplckRlY2lzaW9uPiB7XG4gICAgcmV0dXJuIG5ldyByZWJvb3RfYXBpLmVycm9yc19wYi5QZXJtaXNzaW9uRGVuaWVkKCk7XG4gIH1cbiAgYXN5bmMgQ2hhbmdlcyhcbiAgICBjb250ZXh0OiBSZWFkZXJDb250ZXh0LFxuICAgIHN0YXRlOiBBdXRob3JpdHkuU3RhdGUsXG4gICAgcmVxdWVzdDogQ2hhbmdlc1JlcXVlc3QsXG4gICk6IFByb21pc2U8cmVib290LkF1dGhvcml6ZXJEZWNpc2lvbj4ge1xuICAgIHJldHVybiBuZXcgcmVib290X2FwaS5lcnJvcnNfcGIuUGVybWlzc2lvbkRlbmllZCgpO1xuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eVN0YXRlIGV4dGVuZHMgQXV0aG9yaXR5UHJvdG8ge1xuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KFxuICAgIGJ5dGVzOiBVaW50OEFycmF5LFxuICAgIG9wdGlvbnM/OiBQYXJ0aWFsPHByb3RvYnVmX2VzLkJpbmFyeVJlYWRPcHRpb25zPlxuICApIHtcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBBdXRob3JpdHkuU3RhdGUoKTtcbiAgICBzdGF0ZS5mcm9tQmluYXJ5KGJ5dGVzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpzb24oXG4gICAganNvblZhbHVlOiBwcm90b2J1Zl9lcy5Kc29uVmFsdWUsXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8cHJvdG9idWZfZXMuSnNvblJlYWRPcHRpb25zPlxuICApIHtcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBBdXRob3JpdHkuU3RhdGUoKTtcbiAgICBzdGF0ZS5mcm9tSnNvbihqc29uVmFsdWUsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnNvblN0cmluZyhcbiAgICBqc29uU3RyaW5nOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IFBhcnRpYWw8cHJvdG9idWZfZXMuSnNvblJlYWRPcHRpb25zPlxuICApIHtcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBBdXRob3JpdHkuU3RhdGUoKTtcbiAgICBzdGF0ZS5mcm9tSnNvblN0cmluZyhqc29uU3RyaW5nLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBwdWJsaWMgY2xvbmUoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgQXV0aG9yaXR5LlN0YXRlKCk7XG4gICAgc3RhdGUuY29weUZyb20oc3VwZXIuY2xvbmUoKSk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgcHVibGljIGNvcHlGcm9tKHRoYXQ6IEF1dGhvcml0eS5TdGF0ZSB8IEF1dGhvcml0eVByb3RvKSB7XG4gICAgLy8gVW5mb3J0dW5hdGVseSwgcHJvdG9idWYtZXMgZG9lcyBub3QgaGF2ZSBgQ29weUZyb21gIGxpa2UgUHl0aG9uXG4gICAgLy8gb3IgQysrIHByb3RvYnVmLiBJbnN0ZWFkLCBwcm90b2J1Zi1lcyBoYXMgYGZyb21Kc29uYCBidXQgaXRcbiAgICAvLyBwZXJmb3JtcyBhIG1lcmdlLiBUaHVzLCB3ZSBoYXZlIHRvIGZpcnN0IGNsZWFyIGFsbCBvZiB0aGUgZmllbGRzXG4gICAgLy8gaW4gdGhlIG1lc3NhZ2UgYmVmb3JlIGNhbGxpbmcgYGZyb21Kc29uYC5cbiAgICByZWJvb3QuY2xlYXJGaWVsZHModGhpcyk7XG4gICAgdGhpcy5mcm9tSnNvbih0aGF0LnRvSnNvbigpKTtcbiAgfVxufVxuXG5cblxuXG5leHBvcnQgY2xhc3MgQXV0aG9yaXR5Q3JlYXRlQWJvcnRlZCBleHRlbmRzIHJlYm9vdF9hcGkuQWJvcnRlZCB7XG4gIHN0YXRpYyBmcm9tU3RhdHVzKHN0YXR1czogcmVib290X2FwaS5TdGF0dXMpIHtcbiAgICBsZXQgZXJyb3IgPSByZWJvb3RfYXBpLmVycm9yRnJvbUdvb2dsZVJwY1N0YXR1c0RldGFpbHMoXG4gICAgICBzdGF0dXMsXG4gICAgICBBVVRIT1JJVFlfQ1JFQVRFX0VSUk9SX1RZUEVTLFxuICAgICk7XG5cbiAgICBpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5ldyBBdXRob3JpdHkuQ3JlYXRlQWJvcnRlZChcbiAgICAgICAgZXJyb3IsIHsgbWVzc2FnZTogc3RhdHVzLm1lc3NhZ2UgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBlcnJvciA9IHJlYm9vdF9hcGkuZXJyb3JGcm9tR29vZ2xlUnBjU3RhdHVzQ29kZShzdGF0dXMpO1xuXG4gICAgLy8gVE9ETyhiZW5oKTogYWxzbyBjb25zaWRlciBnZXR0aW5nIHRoZSB0eXBlIG5hbWVzIGZyb21cbiAgICAvLyBgc3RhdHVzLmRldGFpbHNgIGFuZCBpbmNsdWRpbmcgdGhhdCBpbiBgbWVzc2FnZWAgdG8gbWFrZVxuICAgIC8vIGRlYnVnZ2luZyBlYXNpZXIuXG5cbiAgICByZXR1cm4gbmV3IEF1dGhvcml0eS5DcmVhdGVBYm9ydGVkKFxuICAgICAgZXJyb3IsIHsgbWVzc2FnZTogc3RhdHVzLm1lc3NhZ2UgfVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdG9TdGF0dXMoKTogcmVib290X2FwaS5TdGF0dXMge1xuICAgIGNvbnN0IGlzT2JqZWN0ID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgb2JqZWN0ID0+IHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0FycmF5ID0gKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgYW55W10gID0+IHtcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZXJyb3IgPSB0aGlzLmVycm9yLnRvSnNvbigpO1xuXG4gICAgaWYgKCFpc09iamVjdChlcnJvcikgfHwgaXNBcnJheShlcnJvcikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGluZyAnZXJyb3InIHRvIGJlIGFuIG9iamVjdCAoYW5kIG5vdCBhbiBhcnJheSlcIik7XG4gICAgfVxuXG4gICAgY29uc3QgZGV0YWlsID0geyAuLi5lcnJvciB9O1xuICAgIGRldGFpbFtcIkB0eXBlXCJdID0gYHR5cGUuZ29vZ2xlYXBpcy5jb20vJHt0aGlzLmVycm9yLmdldFR5cGUoKS50eXBlTmFtZX1gO1xuXG4gICAgcmV0dXJuIG5ldyByZWJvb3RfYXBpLlN0YXR1cyh7XG4gICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICBtZXNzYWdlOiB0aGlzLiNtZXNzYWdlLFxuICAgICAgZGV0YWlsczogW2RldGFpbF1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVycm9yOiBBdXRob3JpdHlDcmVhdGVBYm9ydGVkRXJyb3IsXG4gICAgeyBtZXNzYWdlIH06IHsgbWVzc2FnZT86IHN0cmluZyB9ID0ge31cbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIFNldCB0aGUgbmFtZSBvZiB0aGlzIGVycm9yIGZvciBldmVuIG1vcmUgaW5mb3JtYXRpb24hXG4gICAgdGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuXG4gICAgbGV0IGNvZGUgPSByZWJvb3RfYXBpLmdycGNTdGF0dXNDb2RlRnJvbUVycm9yKHRoaXMuZXJyb3IpO1xuXG4gICAgaWYgKGNvZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTXVzdCBiZSBvbmUgb2YgdGhlIFJlYm9vdCBzcGVjaWZpYyBlcnJvcnMuXG4gICAgICBjb2RlID0gcmVib290X2FwaS5TdGF0dXNDb2RlLkFCT1JURUQ7XG4gICAgfVxuXG4gICAgdGhpcy5jb2RlID0gY29kZTtcblxuICAgIHRoaXMuI21lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5uYW1lfTogJHt0aGlzLm1lc3NhZ2V9YDtcbiAgfVxuXG4gIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuZXJyb3IuZ2V0VHlwZSgpLnR5cGVOYW1lfSR7dGhpcy4jbWVzc2FnZSA/IFwiIHdpdGggbWVzc2FnZSBcIiArIHRoaXMuI21lc3NhZ2UgOiBcIlwifWA7XG4gIH1cblxuICByZWFkb25seSBlcnJvcjogQXV0aG9yaXR5Q3JlYXRlQWJvcnRlZEVycm9yO1xuICByZWFkb25seSBjb2RlOiByZWJvb3RfYXBpLlN0YXR1c0NvZGU7XG4gIHJlYWRvbmx5ICNtZXNzYWdlPzogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBBdXRob3JpdHlBcHBseUFib3J0ZWQgZXh0ZW5kcyByZWJvb3RfYXBpLkFib3J0ZWQge1xuICBzdGF0aWMgZnJvbVN0YXR1cyhzdGF0dXM6IHJlYm9vdF9hcGkuU3RhdHVzKSB7XG4gICAgbGV0IGVycm9yID0gcmVib290X2FwaS5lcnJvckZyb21Hb29nbGVScGNTdGF0dXNEZXRhaWxzKFxuICAgICAgc3RhdHVzLFxuICAgICAgQVVUSE9SSVRZX0FQUExZX0VSUk9SX1RZUEVTLFxuICAgICk7XG5cbiAgICBpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5ldyBBdXRob3JpdHkuQXBwbHlBYm9ydGVkKFxuICAgICAgICBlcnJvciwgeyBtZXNzYWdlOiBzdGF0dXMubWVzc2FnZSB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGVycm9yID0gcmVib290X2FwaS5lcnJvckZyb21Hb29nbGVScGNTdGF0dXNDb2RlKHN0YXR1cyk7XG5cbiAgICAvLyBUT0RPKGJlbmgpOiBhbHNvIGNvbnNpZGVyIGdldHRpbmcgdGhlIHR5cGUgbmFtZXMgZnJvbVxuICAgIC8vIGBzdGF0dXMuZGV0YWlsc2AgYW5kIGluY2x1ZGluZyB0aGF0IGluIGBtZXNzYWdlYCB0byBtYWtlXG4gICAgLy8gZGVidWdnaW5nIGVhc2llci5cblxuICAgIHJldHVybiBuZXcgQXV0aG9yaXR5LkFwcGx5QWJvcnRlZChcbiAgICAgIGVycm9yLCB7IG1lc3NhZ2U6IHN0YXR1cy5tZXNzYWdlIH1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIHRvU3RhdHVzKCk6IHJlYm9vdF9hcGkuU3RhdHVzIHtcbiAgICBjb25zdCBpc09iamVjdCA9ICh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIG9iamVjdCA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcbiAgICB9O1xuXG4gICAgY29uc3QgaXNBcnJheSA9ICh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIGFueVtdICA9PiB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVycm9yID0gdGhpcy5lcnJvci50b0pzb24oKTtcblxuICAgIGlmICghaXNPYmplY3QoZXJyb3IpIHx8IGlzQXJyYXkoZXJyb3IpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RpbmcgJ2Vycm9yJyB0byBiZSBhbiBvYmplY3QgKGFuZCBub3QgYW4gYXJyYXkpXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGRldGFpbCA9IHsgLi4uZXJyb3IgfTtcbiAgICBkZXRhaWxbXCJAdHlwZVwiXSA9IGB0eXBlLmdvb2dsZWFwaXMuY29tLyR7dGhpcy5lcnJvci5nZXRUeXBlKCkudHlwZU5hbWV9YDtcblxuICAgIHJldHVybiBuZXcgcmVib290X2FwaS5TdGF0dXMoe1xuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgbWVzc2FnZTogdGhpcy4jbWVzc2FnZSxcbiAgICAgIGRldGFpbHM6IFtkZXRhaWxdXG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBlcnJvcjogQXV0aG9yaXR5QXBwbHlBYm9ydGVkRXJyb3IsXG4gICAgeyBtZXNzYWdlIH06IHsgbWVzc2FnZT86IHN0cmluZyB9ID0ge31cbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIFNldCB0aGUgbmFtZSBvZiB0aGlzIGVycm9yIGZvciBldmVuIG1vcmUgaW5mb3JtYXRpb24hXG4gICAgdGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuXG4gICAgbGV0IGNvZGUgPSByZWJvb3RfYXBpLmdycGNTdGF0dXNDb2RlRnJvbUVycm9yKHRoaXMuZXJyb3IpO1xuXG4gICAgaWYgKGNvZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTXVzdCBiZSBvbmUgb2YgdGhlIFJlYm9vdCBzcGVjaWZpYyBlcnJvcnMuXG4gICAgICBjb2RlID0gcmVib290X2FwaS5TdGF0dXNDb2RlLkFCT1JURUQ7XG4gICAgfVxuXG4gICAgdGhpcy5jb2RlID0gY29kZTtcblxuICAgIHRoaXMuI21lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5uYW1lfTogJHt0aGlzLm1lc3NhZ2V9YDtcbiAgfVxuXG4gIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuZXJyb3IuZ2V0VHlwZSgpLnR5cGVOYW1lfSR7dGhpcy4jbWVzc2FnZSA/IFwiIHdpdGggbWVzc2FnZSBcIiArIHRoaXMuI21lc3NhZ2UgOiBcIlwifWA7XG4gIH1cblxuICByZWFkb25seSBlcnJvcjogQXV0aG9yaXR5QXBwbHlBYm9ydGVkRXJyb3I7XG4gIHJlYWRvbmx5IGNvZGU6IHJlYm9vdF9hcGkuU3RhdHVzQ29kZTtcbiAgcmVhZG9ubHkgI21lc3NhZ2U/OiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eUNoYW5nZXNBYm9ydGVkIGV4dGVuZHMgcmVib290X2FwaS5BYm9ydGVkIHtcbiAgc3RhdGljIGZyb21TdGF0dXMoc3RhdHVzOiByZWJvb3RfYXBpLlN0YXR1cykge1xuICAgIGxldCBlcnJvciA9IHJlYm9vdF9hcGkuZXJyb3JGcm9tR29vZ2xlUnBjU3RhdHVzRGV0YWlscyhcbiAgICAgIHN0YXR1cyxcbiAgICAgIEFVVEhPUklUWV9DSEFOR0VTX0VSUk9SX1RZUEVTLFxuICAgICk7XG5cbiAgICBpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG5ldyBBdXRob3JpdHkuQ2hhbmdlc0Fib3J0ZWQoXG4gICAgICAgIGVycm9yLCB7IG1lc3NhZ2U6IHN0YXR1cy5tZXNzYWdlIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgZXJyb3IgPSByZWJvb3RfYXBpLmVycm9yRnJvbUdvb2dsZVJwY1N0YXR1c0NvZGUoc3RhdHVzKTtcblxuICAgIC8vIFRPRE8oYmVuaCk6IGFsc28gY29uc2lkZXIgZ2V0dGluZyB0aGUgdHlwZSBuYW1lcyBmcm9tXG4gICAgLy8gYHN0YXR1cy5kZXRhaWxzYCBhbmQgaW5jbHVkaW5nIHRoYXQgaW4gYG1lc3NhZ2VgIHRvIG1ha2VcbiAgICAvLyBkZWJ1Z2dpbmcgZWFzaWVyLlxuXG4gICAgcmV0dXJuIG5ldyBBdXRob3JpdHkuQ2hhbmdlc0Fib3J0ZWQoXG4gICAgICBlcnJvciwgeyBtZXNzYWdlOiBzdGF0dXMubWVzc2FnZSB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyB0b1N0YXR1cygpOiByZWJvb3RfYXBpLlN0YXR1cyB7XG4gICAgY29uc3QgaXNPYmplY3QgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBvYmplY3QgPT4ge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzQXJyYXkgPSAodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBhbnlbXSAgPT4ge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBlcnJvciA9IHRoaXMuZXJyb3IudG9Kc29uKCk7XG5cbiAgICBpZiAoIWlzT2JqZWN0KGVycm9yKSB8fCBpc0FycmF5KGVycm9yKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0aW5nICdlcnJvcicgdG8gYmUgYW4gb2JqZWN0IChhbmQgbm90IGFuIGFycmF5KVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZXRhaWwgPSB7IC4uLmVycm9yIH07XG4gICAgZGV0YWlsW1wiQHR5cGVcIl0gPSBgdHlwZS5nb29nbGVhcGlzLmNvbS8ke3RoaXMuZXJyb3IuZ2V0VHlwZSgpLnR5cGVOYW1lfWA7XG5cbiAgICByZXR1cm4gbmV3IHJlYm9vdF9hcGkuU3RhdHVzKHtcbiAgICAgIGNvZGU6IHRoaXMuY29kZSxcbiAgICAgIG1lc3NhZ2U6IHRoaXMuI21lc3NhZ2UsXG4gICAgICBkZXRhaWxzOiBbZGV0YWlsXVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZXJyb3I6IEF1dGhvcml0eUNoYW5nZXNBYm9ydGVkRXJyb3IsXG4gICAgeyBtZXNzYWdlIH06IHsgbWVzc2FnZT86IHN0cmluZyB9ID0ge31cbiAgKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIFNldCB0aGUgbmFtZSBvZiB0aGlzIGVycm9yIGZvciBldmVuIG1vcmUgaW5mb3JtYXRpb24hXG4gICAgdGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gICAgdGhpcy5lcnJvciA9IGVycm9yO1xuXG4gICAgbGV0IGNvZGUgPSByZWJvb3RfYXBpLmdycGNTdGF0dXNDb2RlRnJvbUVycm9yKHRoaXMuZXJyb3IpO1xuXG4gICAgaWYgKGNvZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTXVzdCBiZSBvbmUgb2YgdGhlIFJlYm9vdCBzcGVjaWZpYyBlcnJvcnMuXG4gICAgICBjb2RlID0gcmVib290X2FwaS5TdGF0dXNDb2RlLkFCT1JURUQ7XG4gICAgfVxuXG4gICAgdGhpcy5jb2RlID0gY29kZTtcblxuICAgIHRoaXMuI21lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5uYW1lfTogJHt0aGlzLm1lc3NhZ2V9YDtcbiAgfVxuXG4gIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuZXJyb3IuZ2V0VHlwZSgpLnR5cGVOYW1lfSR7dGhpcy4jbWVzc2FnZSA/IFwiIHdpdGggbWVzc2FnZSBcIiArIHRoaXMuI21lc3NhZ2UgOiBcIlwifWA7XG4gIH1cblxuICByZWFkb25seSBlcnJvcjogQXV0aG9yaXR5Q2hhbmdlc0Fib3J0ZWRFcnJvcjtcbiAgcmVhZG9ubHkgY29kZTogcmVib290X2FwaS5TdGF0dXNDb2RlO1xuICByZWFkb25seSAjbWVzc2FnZT86IHN0cmluZztcbn1cblxuXG5cblxuZXhwb3J0IGNsYXNzIEF1dGhvcml0eVdlYWtSZWZlcmVuY2Uge1xuICAjZXh0ZXJuYWw6IGFueTtcbiAgI2lkOiBzdHJpbmc7XG4gICNvcHRpb25zPzogcmVib290X2FwaS5DYWxsT3B0aW9ucztcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBiZWFyZXJUb2tlbj86IHN0cmluZykge1xuICAgIHRoaXMuI2lkID0gaWQ7XG4gICAgdGhpcy4jb3B0aW9ucyA9IHtcbiAgICAgIGJlYXJlclRva2VuOiBiZWFyZXJUb2tlbixcbiAgICB9O1xuICAgIHRoaXMuI2V4dGVybmFsID0gcmVib290X25hdGl2ZS5TZXJ2aWNlX2NvbnN0cnVjdG9yKHtcbiAgICAgIHJidE1vZHVsZTogXCJyYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5hdXRob3JpdHlfcmJ0XCIsXG4gICAgICBub2RlQWRhcHRvcjogXCJBdXRob3JpdHlXZWFrUmVmZXJlbmNlTm9kZUFkYXB0b3JcIixcbiAgICAgIGlkOiB0aGlzLiNpZCxcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBzdGF0ZUlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuI2lkO1xuICB9XG5cbiAgYXN5bmMgX19leHRlcm5hbFNlcnZpY2VDYWxsQ3JlYXRlKFxuICAgIGNvbnRleHQ6IENvbnRleHQgfCBFeHRlcm5hbENvbnRleHQsXG4gICAgcGFydGlhbFJlcXVlc3Q/OiBwcm90b2J1Zl9lcy5QYXJ0aWFsTWVzc2FnZTxDcmVhdGVSZXF1ZXN0PixcbiAgICBvcHRpb25zPzogcmVib290X2FwaS5DYWxsT3B0aW9uc1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBwYXJ0aWFsUmVxdWVzdCBpbnN0YW5jZW9mIENyZWF0ZVJlcXVlc3QgP1xuICAgICAgcGFydGlhbFJlcXVlc3QgOiBuZXcgQ3JlYXRlUmVxdWVzdChwYXJ0aWFsUmVxdWVzdCk7XG5cbiAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShcbiAgICAgIGF3YWl0IHJlYm9vdF9uYXRpdmUuU2VydmljZV9jYWxsKHtcbiAgICAgICAgZXh0ZXJuYWw6IHRoaXMuI2V4dGVybmFsLFxuICAgICAgICBraW5kOiBcIndyaXRlclwiLFxuICAgICAgICBtZXRob2Q6IFwiQ3JlYXRlXCIsXG4gICAgICAgIHJlcXVlc3RNb2R1bGU6IFwicmJ0LnRoaXJkcGFydHkucHJvc2VtaXJyb3IudjEuYXV0aG9yaXR5X3BiMlwiLFxuICAgICAgICByZXF1ZXN0VHlwZTogXCJDcmVhdGVSZXF1ZXN0XCIsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQuX19leHRlcm5hbCxcbiAgICAgICAganNvblJlcXVlc3Q6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3QgfHwge30pLFxuICAgICAgICBqc29uT3B0aW9uczogSlNPTi5zdHJpbmdpZnkob3B0aW9ucyB8fCB7fSksXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoXCJzdGF0dXNcIiBpbiBqc29uKSB7XG4gICAgICB0aHJvdyBBdXRob3JpdHlcbiAgICAgICAgLkNyZWF0ZUFib3J0ZWRcbiAgICAgICAgLmZyb21TdGF0dXMocmVib290X2FwaS5TdGF0dXMuZnJvbUpzb24oanNvbltcInN0YXR1c1wiXSkpO1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlKFxuICAgIGNvbnRleHQ6IFRyYW5zYWN0aW9uQ29udGV4dCB8IFdvcmtmbG93Q29udGV4dCB8IEV4dGVybmFsQ29udGV4dCxcbiAgICBwYXJ0aWFsUmVxdWVzdD86IHByb3RvYnVmX2VzLlBhcnRpYWxNZXNzYWdlPENyZWF0ZVJlcXVlc3Q+LFxuICApOiBQcm9taXNlPENyZWF0ZVJlc3BvbnNlPiB7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHRoaXMuX19leHRlcm5hbFNlcnZpY2VDYWxsQ3JlYXRlKFxuICAgICAgY29udGV4dCxcbiAgICAgIHBhcnRpYWxSZXF1ZXN0LFxuICAgICAgdGhpcy4jb3B0aW9ucyxcbiAgICApO1xuXG4gICAgLy8gVE9ETzogYXNzZXJ0KFwicmVzcG9uc2VcIiBpbiBqc29uKVxuXG4gICAgcmV0dXJuIENyZWF0ZVJlc3BvbnNlLmZyb21Kc29uKGpzb25bXCJyZXNwb25zZVwiXSk7XG4gIH1cblxuICBhc3luYyBfX2V4dGVybmFsU2VydmljZUNhbGxBcHBseShcbiAgICBjb250ZXh0OiBDb250ZXh0IHwgRXh0ZXJuYWxDb250ZXh0LFxuICAgIHBhcnRpYWxSZXF1ZXN0PzogcHJvdG9idWZfZXMuUGFydGlhbE1lc3NhZ2U8QXBwbHlSZXF1ZXN0PixcbiAgICBvcHRpb25zPzogcmVib290X2FwaS5DYWxsT3B0aW9uc1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBwYXJ0aWFsUmVxdWVzdCBpbnN0YW5jZW9mIEFwcGx5UmVxdWVzdCA/XG4gICAgICBwYXJ0aWFsUmVxdWVzdCA6IG5ldyBBcHBseVJlcXVlc3QocGFydGlhbFJlcXVlc3QpO1xuXG4gICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoXG4gICAgICBhd2FpdCByZWJvb3RfbmF0aXZlLlNlcnZpY2VfY2FsbCh7XG4gICAgICAgIGV4dGVybmFsOiB0aGlzLiNleHRlcm5hbCxcbiAgICAgICAga2luZDogXCJ3cml0ZXJcIixcbiAgICAgICAgbWV0aG9kOiBcIkFwcGx5XCIsXG4gICAgICAgIHJlcXVlc3RNb2R1bGU6IFwicmJ0LnRoaXJkcGFydHkucHJvc2VtaXJyb3IudjEuYXV0aG9yaXR5X3BiMlwiLFxuICAgICAgICByZXF1ZXN0VHlwZTogXCJBcHBseVJlcXVlc3RcIixcbiAgICAgICAgY29udGV4dDogY29udGV4dC5fX2V4dGVybmFsLFxuICAgICAgICBqc29uUmVxdWVzdDogSlNPTi5zdHJpbmdpZnkocmVxdWVzdCB8fCB7fSksXG4gICAgICAgIGpzb25PcHRpb25zOiBKU09OLnN0cmluZ2lmeShvcHRpb25zIHx8IHt9KSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChcInN0YXR1c1wiIGluIGpzb24pIHtcbiAgICAgIHRocm93IEF1dGhvcml0eVxuICAgICAgICAuQXBwbHlBYm9ydGVkXG4gICAgICAgIC5mcm9tU3RhdHVzKHJlYm9vdF9hcGkuU3RhdHVzLmZyb21Kc29uKGpzb25bXCJzdGF0dXNcIl0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGFzeW5jIGFwcGx5KFxuICAgIGNvbnRleHQ6IFRyYW5zYWN0aW9uQ29udGV4dCB8IFdvcmtmbG93Q29udGV4dCB8IEV4dGVybmFsQ29udGV4dCxcbiAgICBwYXJ0aWFsUmVxdWVzdD86IHByb3RvYnVmX2VzLlBhcnRpYWxNZXNzYWdlPEFwcGx5UmVxdWVzdD4sXG4gICk6IFByb21pc2U8QXBwbHlSZXNwb25zZT4ge1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCB0aGlzLl9fZXh0ZXJuYWxTZXJ2aWNlQ2FsbEFwcGx5KFxuICAgICAgY29udGV4dCxcbiAgICAgIHBhcnRpYWxSZXF1ZXN0LFxuICAgICAgdGhpcy4jb3B0aW9ucyxcbiAgICApO1xuXG4gICAgLy8gVE9ETzogYXNzZXJ0KFwicmVzcG9uc2VcIiBpbiBqc29uKVxuXG4gICAgcmV0dXJuIEFwcGx5UmVzcG9uc2UuZnJvbUpzb24oanNvbltcInJlc3BvbnNlXCJdKTtcbiAgfVxuXG4gIGFzeW5jIF9fZXh0ZXJuYWxTZXJ2aWNlQ2FsbENoYW5nZXMoXG4gICAgY29udGV4dDogQ29udGV4dCB8IEV4dGVybmFsQ29udGV4dCxcbiAgICBwYXJ0aWFsUmVxdWVzdD86IHByb3RvYnVmX2VzLlBhcnRpYWxNZXNzYWdlPENoYW5nZXNSZXF1ZXN0PixcbiAgICBvcHRpb25zPzogcmVib290X2FwaS5DYWxsT3B0aW9uc1xuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBwYXJ0aWFsUmVxdWVzdCBpbnN0YW5jZW9mIENoYW5nZXNSZXF1ZXN0ID9cbiAgICAgIHBhcnRpYWxSZXF1ZXN0IDogbmV3IENoYW5nZXNSZXF1ZXN0KHBhcnRpYWxSZXF1ZXN0KTtcblxuICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKFxuICAgICAgYXdhaXQgcmVib290X25hdGl2ZS5TZXJ2aWNlX2NhbGwoe1xuICAgICAgICBleHRlcm5hbDogdGhpcy4jZXh0ZXJuYWwsXG4gICAgICAgIGtpbmQ6IFwicmVhZGVyXCIsXG4gICAgICAgIG1ldGhvZDogXCJDaGFuZ2VzXCIsXG4gICAgICAgIHJlcXVlc3RNb2R1bGU6IFwicmJ0LnRoaXJkcGFydHkucHJvc2VtaXJyb3IudjEuYXV0aG9yaXR5X3BiMlwiLFxuICAgICAgICByZXF1ZXN0VHlwZTogXCJDaGFuZ2VzUmVxdWVzdFwiLFxuICAgICAgICBjb250ZXh0OiBjb250ZXh0Ll9fZXh0ZXJuYWwsXG4gICAgICAgIGpzb25SZXF1ZXN0OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0IHx8IHt9KSxcbiAgICAgICAganNvbk9wdGlvbnM6IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMgfHwge30pLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgaWYgKFwic3RhdHVzXCIgaW4ganNvbikge1xuICAgICAgdGhyb3cgQXV0aG9yaXR5XG4gICAgICAgIC5DaGFuZ2VzQWJvcnRlZFxuICAgICAgICAuZnJvbVN0YXR1cyhyZWJvb3RfYXBpLlN0YXR1cy5mcm9tSnNvbihqc29uW1wic3RhdHVzXCJdKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBhc3luYyBjaGFuZ2VzKFxuICAgIGNvbnRleHQ6IFJlYWRlckNvbnRleHQgfCBXcml0ZXJDb250ZXh0IHwgVHJhbnNhY3Rpb25Db250ZXh0IHwgV29ya2Zsb3dDb250ZXh0IHwgRXh0ZXJuYWxDb250ZXh0LFxuICAgIHBhcnRpYWxSZXF1ZXN0PzogcHJvdG9idWZfZXMuUGFydGlhbE1lc3NhZ2U8Q2hhbmdlc1JlcXVlc3Q+LFxuICApOiBQcm9taXNlPENoYW5nZXNSZXNwb25zZT4ge1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCB0aGlzLl9fZXh0ZXJuYWxTZXJ2aWNlQ2FsbENoYW5nZXMoXG4gICAgICBjb250ZXh0LFxuICAgICAgcGFydGlhbFJlcXVlc3QsXG4gICAgICB0aGlzLiNvcHRpb25zLFxuICAgICk7XG5cbiAgICAvLyBUT0RPOiBhc3NlcnQoXCJyZXNwb25zZVwiIGluIGpzb24pXG5cbiAgICByZXR1cm4gQ2hhbmdlc1Jlc3BvbnNlLmZyb21Kc29uKGpzb25bXCJyZXNwb25zZVwiXSk7XG4gIH1cblxuXG4gIHN0YXRpYyBfSWRlbXBvdGVudGx5ID0gY2xhc3Mge1xuXG4gICAgI3dlYWtSZWZlcmVuY2U6IGFueTtcbiAgICAjb3B0aW9uczogcmVib290X2FwaS5DYWxsT3B0aW9ucztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgd2Vha1JlZmVyZW5jZTogYW55LFxuICAgICAgb3B0aW9uczogcmVib290X2FwaS5DYWxsT3B0aW9uc1xuICAgICkge1xuICAgICAgdGhpcy4jd2Vha1JlZmVyZW5jZSA9IHdlYWtSZWZlcmVuY2U7XG4gICAgICB0aGlzLiNvcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGUoXG4gICAgICBjb250ZXh0OiByZWJvb3QuVHJhbnNhY3Rpb25Db250ZXh0IHwgcmVib290LldvcmtmbG93Q29udGV4dCB8IHJlYm9vdC5FeHRlcm5hbENvbnRleHQsXG4gICAgICBwYXJ0aWFsUmVxdWVzdD86IHByb3RvYnVmX2VzLlBhcnRpYWxNZXNzYWdlPENyZWF0ZVJlcXVlc3Q+XG4gICAgKTogUHJvbWlzZTxDcmVhdGVSZXNwb25zZT4ge1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHRoaXMuI3dlYWtSZWZlcmVuY2UuX19leHRlcm5hbFNlcnZpY2VDYWxsQ3JlYXRlKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBwYXJ0aWFsUmVxdWVzdCxcbiAgICAgICAgdGhpcy4jb3B0aW9ucyxcbiAgICAgICk7XG5cbiAgICAgICAvLyBUT0RPOiBhc3NlcnQoXCJyZXNwb25zZVwiIGluIGpzb24pXG5cbiAgICAgICByZXR1cm4gQ3JlYXRlUmVzcG9uc2UuZnJvbUpzb24oanNvbltcInJlc3BvbnNlXCJdKTtcbiAgICB9XG5cbiAgICBhc3luYyBhcHBseShcbiAgICAgIGNvbnRleHQ6IHJlYm9vdC5UcmFuc2FjdGlvbkNvbnRleHQgfCByZWJvb3QuV29ya2Zsb3dDb250ZXh0IHwgcmVib290LkV4dGVybmFsQ29udGV4dCxcbiAgICAgIHBhcnRpYWxSZXF1ZXN0PzogcHJvdG9idWZfZXMuUGFydGlhbE1lc3NhZ2U8QXBwbHlSZXF1ZXN0PlxuICAgICk6IFByb21pc2U8QXBwbHlSZXNwb25zZT4ge1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHRoaXMuI3dlYWtSZWZlcmVuY2UuX19leHRlcm5hbFNlcnZpY2VDYWxsQXBwbHkoXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHBhcnRpYWxSZXF1ZXN0LFxuICAgICAgICB0aGlzLiNvcHRpb25zLFxuICAgICAgKTtcblxuICAgICAgIC8vIFRPRE86IGFzc2VydChcInJlc3BvbnNlXCIgaW4ganNvbilcblxuICAgICAgIHJldHVybiBBcHBseVJlc3BvbnNlLmZyb21Kc29uKGpzb25bXCJyZXNwb25zZVwiXSk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc2NoZWR1bGUob3B0aW9ucz86IHJlYm9vdF9hcGkuU2NoZWR1bGVPcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmV3IEF1dGhvcml0eS5XZWFrUmVmZXJlbmNlLl9TY2hlZHVsZShcbiAgICAgICAgdGhpcy4jd2Vha1JlZmVyZW5jZSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnRoaXMuI29wdGlvbnMsXG4gICAgICAgICAgc2NoZWR1bGU6IG9wdGlvbnMgfHwgeyB3aGVuOiBuZXcgRGF0ZSgpIH1cbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHB1YmxpYyBpZGVtcG90ZW50bHkoYWxpYXNPck9wdGlvbnM6IHN0cmluZyB8IHJlYm9vdF9hcGkuSWRlbXBvdGVuY3lPcHRpb25zID0ge30gYXMgcmVib290X2FwaS5JZGVtcG90ZW5jeU9wdGlvbnMpIHtcbiAgICBjb25zdCBpZGVtcG90ZW5jeSA9IHR5cGVvZiBhbGlhc09yT3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/IHsgYWxpYXM6IGFsaWFzT3JPcHRpb25zIH0gOiBhbGlhc09yT3B0aW9ucztcbiAgICByZXR1cm4gbmV3IEF1dGhvcml0eS5XZWFrUmVmZXJlbmNlLl9JZGVtcG90ZW50bHkoXG4gICAgICB0aGlzLFxuICAgICAge1xuICAgICAgICAuLi50aGlzLiNvcHRpb25zLFxuICAgICAgICBpZGVtcG90ZW5jeTogaWRlbXBvdGVuY3ksXG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdW5pZGVtcG90ZW50bHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWRlbXBvdGVudGx5KHsga2V5OiB1dWlkLnY0KCkgfSk7XG4gIH1cblxuICBzdGF0aWMgX1NjaGVkdWxlID0gY2xhc3Mge1xuXG4gICAgI3dlYWtSZWZlcmVuY2U6IGFueTtcbiAgICAjb3B0aW9uczogcmVib290X2FwaS5DYWxsT3B0aW9ucztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgd2Vha1JlZmVyZW5jZTogYW55LFxuICAgICAgb3B0aW9uczogcmVib290X2FwaS5DYWxsT3B0aW9ucyxcbiAgICApIHtcbiAgICAgIHRoaXMuI3dlYWtSZWZlcmVuY2UgPSB3ZWFrUmVmZXJlbmNlO1xuICAgICAgdGhpcy4jb3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlKFxuICAgICAgY29udGV4dDogcmVib290LldyaXRlckNvbnRleHQgfCByZWJvb3QuVHJhbnNhY3Rpb25Db250ZXh0LFxuICAgICAgcGFydGlhbFJlcXVlc3Q/OiBwcm90b2J1Zl9lcy5QYXJ0aWFsTWVzc2FnZTxDcmVhdGVSZXF1ZXN0PlxuICAgICk6IFByb21pc2U8cmVib290X2FwaS5UYXNrRWZmZWN0PjtcblxuICAgIGFzeW5jIGNyZWF0ZShcbiAgICAgIGNvbnRleHQ6IHJlYm9vdC5Xb3JrZmxvd0NvbnRleHQgfCByZWJvb3QuRXh0ZXJuYWxDb250ZXh0LFxuICAgICAgcGFydGlhbFJlcXVlc3Q/OiBwcm90b2J1Zl9lcy5QYXJ0aWFsTWVzc2FnZTxDcmVhdGVSZXF1ZXN0PlxuICAgICk6IFByb21pc2U8eyByZXNwb25zZVByb21pc2U6IFByb21pc2U8Q3JlYXRlUmVzcG9uc2U+OyB0YXNrSWQ6IHJlYm9vdF9hcGkudGFza3NfcGIuVGFza0lkIH0+O1xuXG4gICAgYXN5bmMgY3JlYXRlKFxuICAgICAgY29udGV4dDogcmVib290LldyaXRlckNvbnRleHQgfCByZWJvb3QuVHJhbnNhY3Rpb25Db250ZXh0IHwgcmVib290LldvcmtmbG93Q29udGV4dCB8IHJlYm9vdC5FeHRlcm5hbENvbnRleHQsXG4gICAgICBwYXJ0aWFsUmVxdWVzdD86IHByb3RvYnVmX2VzLlBhcnRpYWxNZXNzYWdlPENyZWF0ZVJlcXVlc3Q+XG4gICAgKTogUHJvbWlzZTxyZWJvb3RfYXBpLlRhc2tFZmZlY3QgfCB7IHJlc3BvbnNlUHJvbWlzZTogUHJvbWlzZTxDcmVhdGVSZXNwb25zZT47IHRhc2tJZDogcmVib290X2FwaS50YXNrc19wYi5UYXNrSWQgfT4ge1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHRoaXMuI3dlYWtSZWZlcmVuY2UuX19leHRlcm5hbFNlcnZpY2VDYWxsQ3JlYXRlKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBwYXJ0aWFsUmVxdWVzdCxcbiAgICAgICAgdGhpcy4jb3B0aW9ucyxcbiAgICAgICk7XG5cbiAgICAgIC8vIFRPRE86IGFzc2VydChcInRhc2tJZFwiIGluIGpzb24pXG5cbiAgICAgIGNvbnN0IHRhc2tJZCA9IHJlYm9vdF9hcGkudGFza3NfcGIuVGFza0lkLmZyb21Kc29uKGpzb25bXCJ0YXNrSWRcIl0pO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGNvbnRleHQgaW5zdGFuY2VvZiByZWJvb3QuV3JpdGVyQ29udGV4dCB8fFxuICAgICAgICBjb250ZXh0IGluc3RhbmNlb2YgcmVib290LlRyYW5zYWN0aW9uQ29udGV4dFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB7IHRhc2tJZCB9IGFzIHJlYm9vdF9hcGkuVGFza0VmZmVjdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzcG9uc2VQcm9taXNlOiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICBhd2FpdCByZWJvb3RfbmF0aXZlLkZ1dHVyZV9hd2FpdCh7XG4gICAgICAgICAgICAgIGV4dGVybmFsOiB0aGlzLiN3ZWFrUmVmZXJlbmNlLiNleHRlcm5hbCxcbiAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dC5fX2V4dGVybmFsLFxuICAgICAgICAgICAgICBtZXRob2Q6IFwiQ3JlYXRlXCIsXG4gICAgICAgICAgICAgIGpzb25UYXNrSWQ6IEpTT04uc3RyaW5naWZ5KHRhc2tJZCksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoXCJzdGF0dXNcIiBpbiBqc29uKSB7XG4gICAgICAgICAgICByZWplY3QoXG4gICAgICAgICAgICAgIEF1dGhvcml0eVxuICAgICAgICAgICAgICAgIC5DcmVhdGVBYm9ydGVkXG4gICAgICAgICAgICAgICAgLmZyb21TdGF0dXMocmVib290X2FwaS5TdGF0dXMuZnJvbUpzb24oanNvbltcInN0YXR1c1wiXSkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBhc3NlcnQoXCJyZXNwb25zZVwiIGluIGpzb24pXG4gICAgICAgICAgICByZXNvbHZlKENyZWF0ZVJlc3BvbnNlLmZyb21Kc29uKGpzb25bXCJyZXNwb25zZVwiXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRhc2tJZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgYXBwbHkoXG4gICAgICBjb250ZXh0OiByZWJvb3QuV3JpdGVyQ29udGV4dCB8IHJlYm9vdC5UcmFuc2FjdGlvbkNvbnRleHQsXG4gICAgICBwYXJ0aWFsUmVxdWVzdD86IHByb3RvYnVmX2VzLlBhcnRpYWxNZXNzYWdlPEFwcGx5UmVxdWVzdD5cbiAgICApOiBQcm9taXNlPHJlYm9vdF9hcGkuVGFza0VmZmVjdD47XG5cbiAgICBhc3luYyBhcHBseShcbiAgICAgIGNvbnRleHQ6IHJlYm9vdC5Xb3JrZmxvd0NvbnRleHQgfCByZWJvb3QuRXh0ZXJuYWxDb250ZXh0LFxuICAgICAgcGFydGlhbFJlcXVlc3Q/OiBwcm90b2J1Zl9lcy5QYXJ0aWFsTWVzc2FnZTxBcHBseVJlcXVlc3Q+XG4gICAgKTogUHJvbWlzZTx7IHJlc3BvbnNlUHJvbWlzZTogUHJvbWlzZTxBcHBseVJlc3BvbnNlPjsgdGFza0lkOiByZWJvb3RfYXBpLnRhc2tzX3BiLlRhc2tJZCB9PjtcblxuICAgIGFzeW5jIGFwcGx5KFxuICAgICAgY29udGV4dDogcmVib290LldyaXRlckNvbnRleHQgfCByZWJvb3QuVHJhbnNhY3Rpb25Db250ZXh0IHwgcmVib290LldvcmtmbG93Q29udGV4dCB8IHJlYm9vdC5FeHRlcm5hbENvbnRleHQsXG4gICAgICBwYXJ0aWFsUmVxdWVzdD86IHByb3RvYnVmX2VzLlBhcnRpYWxNZXNzYWdlPEFwcGx5UmVxdWVzdD5cbiAgICApOiBQcm9taXNlPHJlYm9vdF9hcGkuVGFza0VmZmVjdCB8IHsgcmVzcG9uc2VQcm9taXNlOiBQcm9taXNlPEFwcGx5UmVzcG9uc2U+OyB0YXNrSWQ6IHJlYm9vdF9hcGkudGFza3NfcGIuVGFza0lkIH0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCB0aGlzLiN3ZWFrUmVmZXJlbmNlLl9fZXh0ZXJuYWxTZXJ2aWNlQ2FsbEFwcGx5KFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBwYXJ0aWFsUmVxdWVzdCxcbiAgICAgICAgdGhpcy4jb3B0aW9ucyxcbiAgICAgICk7XG5cbiAgICAgIC8vIFRPRE86IGFzc2VydChcInRhc2tJZFwiIGluIGpzb24pXG5cbiAgICAgIGNvbnN0IHRhc2tJZCA9IHJlYm9vdF9hcGkudGFza3NfcGIuVGFza0lkLmZyb21Kc29uKGpzb25bXCJ0YXNrSWRcIl0pO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGNvbnRleHQgaW5zdGFuY2VvZiByZWJvb3QuV3JpdGVyQ29udGV4dCB8fFxuICAgICAgICBjb250ZXh0IGluc3RhbmNlb2YgcmVib290LlRyYW5zYWN0aW9uQ29udGV4dFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB7IHRhc2tJZCB9IGFzIHJlYm9vdF9hcGkuVGFza0VmZmVjdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzcG9uc2VQcm9taXNlOiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICBhd2FpdCByZWJvb3RfbmF0aXZlLkZ1dHVyZV9hd2FpdCh7XG4gICAgICAgICAgICAgIGV4dGVybmFsOiB0aGlzLiN3ZWFrUmVmZXJlbmNlLiNleHRlcm5hbCxcbiAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dC5fX2V4dGVybmFsLFxuICAgICAgICAgICAgICBtZXRob2Q6IFwiQXBwbHlcIixcbiAgICAgICAgICAgICAganNvblRhc2tJZDogSlNPTi5zdHJpbmdpZnkodGFza0lkKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChcInN0YXR1c1wiIGluIGpzb24pIHtcbiAgICAgICAgICAgIHJlamVjdChcbiAgICAgICAgICAgICAgQXV0aG9yaXR5XG4gICAgICAgICAgICAgICAgLkFwcGx5QWJvcnRlZFxuICAgICAgICAgICAgICAgIC5mcm9tU3RhdHVzKHJlYm9vdF9hcGkuU3RhdHVzLmZyb21Kc29uKGpzb25bXCJzdGF0dXNcIl0pKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVE9ETzogYXNzZXJ0KFwicmVzcG9uc2VcIiBpbiBqc29uKVxuICAgICAgICAgICAgcmVzb2x2ZShBcHBseVJlc3BvbnNlLmZyb21Kc29uKGpzb25bXCJyZXNwb25zZVwiXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRhc2tJZCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgY2hhbmdlcyhcbiAgICAgIGNvbnRleHQ6IHJlYm9vdC5Xcml0ZXJDb250ZXh0IHwgcmVib290LlRyYW5zYWN0aW9uQ29udGV4dCxcbiAgICAgIHBhcnRpYWxSZXF1ZXN0PzogcHJvdG9idWZfZXMuUGFydGlhbE1lc3NhZ2U8Q2hhbmdlc1JlcXVlc3Q+XG4gICAgKTogUHJvbWlzZTxyZWJvb3RfYXBpLlRhc2tFZmZlY3Q+O1xuXG4gICAgYXN5bmMgY2hhbmdlcyhcbiAgICAgIGNvbnRleHQ6IHJlYm9vdC5Xb3JrZmxvd0NvbnRleHQgfCByZWJvb3QuRXh0ZXJuYWxDb250ZXh0LFxuICAgICAgcGFydGlhbFJlcXVlc3Q/OiBwcm90b2J1Zl9lcy5QYXJ0aWFsTWVzc2FnZTxDaGFuZ2VzUmVxdWVzdD5cbiAgICApOiBQcm9taXNlPHsgcmVzcG9uc2VQcm9taXNlOiBQcm9taXNlPENoYW5nZXNSZXNwb25zZT47IHRhc2tJZDogcmVib290X2FwaS50YXNrc19wYi5UYXNrSWQgfT47XG5cbiAgICBhc3luYyBjaGFuZ2VzKFxuICAgICAgY29udGV4dDogcmVib290LldyaXRlckNvbnRleHQgfCByZWJvb3QuVHJhbnNhY3Rpb25Db250ZXh0IHwgcmVib290LldvcmtmbG93Q29udGV4dCB8IHJlYm9vdC5FeHRlcm5hbENvbnRleHQsXG4gICAgICBwYXJ0aWFsUmVxdWVzdD86IHByb3RvYnVmX2VzLlBhcnRpYWxNZXNzYWdlPENoYW5nZXNSZXF1ZXN0PlxuICAgICk6IFByb21pc2U8cmVib290X2FwaS5UYXNrRWZmZWN0IHwgeyByZXNwb25zZVByb21pc2U6IFByb21pc2U8Q2hhbmdlc1Jlc3BvbnNlPjsgdGFza0lkOiByZWJvb3RfYXBpLnRhc2tzX3BiLlRhc2tJZCB9PiB7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgdGhpcy4jd2Vha1JlZmVyZW5jZS5fX2V4dGVybmFsU2VydmljZUNhbGxDaGFuZ2VzKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBwYXJ0aWFsUmVxdWVzdCxcbiAgICAgICAgdGhpcy4jb3B0aW9ucyxcbiAgICAgICk7XG5cbiAgICAgIC8vIFRPRE86IGFzc2VydChcInRhc2tJZFwiIGluIGpzb24pXG5cbiAgICAgIGNvbnN0IHRhc2tJZCA9IHJlYm9vdF9hcGkudGFza3NfcGIuVGFza0lkLmZyb21Kc29uKGpzb25bXCJ0YXNrSWRcIl0pO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGNvbnRleHQgaW5zdGFuY2VvZiByZWJvb3QuV3JpdGVyQ29udGV4dCB8fFxuICAgICAgICBjb250ZXh0IGluc3RhbmNlb2YgcmVib290LlRyYW5zYWN0aW9uQ29udGV4dFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB7IHRhc2tJZCB9IGFzIHJlYm9vdF9hcGkuVGFza0VmZmVjdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzcG9uc2VQcm9taXNlOiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICBhd2FpdCByZWJvb3RfbmF0aXZlLkZ1dHVyZV9hd2FpdCh7XG4gICAgICAgICAgICAgIGV4dGVybmFsOiB0aGlzLiN3ZWFrUmVmZXJlbmNlLiNleHRlcm5hbCxcbiAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dC5fX2V4dGVybmFsLFxuICAgICAgICAgICAgICBtZXRob2Q6IFwiQ2hhbmdlc1wiLFxuICAgICAgICAgICAgICBqc29uVGFza0lkOiBKU09OLnN0cmluZ2lmeSh0YXNrSWQpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKFwic3RhdHVzXCIgaW4ganNvbikge1xuICAgICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgICBBdXRob3JpdHlcbiAgICAgICAgICAgICAgICAuQ2hhbmdlc0Fib3J0ZWRcbiAgICAgICAgICAgICAgICAuZnJvbVN0YXR1cyhyZWJvb3RfYXBpLlN0YXR1cy5mcm9tSnNvbihqc29uW1wic3RhdHVzXCJdKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGFzc2VydChcInJlc3BvbnNlXCIgaW4ganNvbilcbiAgICAgICAgICAgIHJlc29sdmUoQ2hhbmdlc1Jlc3BvbnNlLmZyb21Kc29uKGpzb25bXCJyZXNwb25zZVwiXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRhc2tJZCxcbiAgICAgIH07XG4gICAgfVxuXG5cbiAgfTtcblxuICBwdWJsaWMgc2NoZWR1bGUob3B0aW9ucz86IHJlYm9vdF9hcGkuU2NoZWR1bGVPcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBBdXRob3JpdHkuV2Vha1JlZmVyZW5jZS5fU2NoZWR1bGUoXG4gICAgICB0aGlzLFxuICAgICAge1xuICAgICAgICAuLi50aGlzLiNvcHRpb25zLFxuICAgICAgICBzY2hlZHVsZTogb3B0aW9ucyB8fCB7IHdoZW46IG5ldyBEYXRlKCkgfVxuICAgICAgfSxcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRob3JpdHkge1xuXG4gIHN0YXRpYyBTZXJ2aWNlciA9IEF1dGhvcml0eVNlcnZpY2VyO1xuICBzdGF0aWMgU3RhdGUgPSBBdXRob3JpdHlTdGF0ZTtcbiAgc3RhdGljIFdlYWtSZWZlcmVuY2UgPSBBdXRob3JpdHlXZWFrUmVmZXJlbmNlO1xuXG5cbiAgc3RhdGljIENyZWF0ZUFib3J0ZWQgPSBBdXRob3JpdHlDcmVhdGVBYm9ydGVkO1xuXG4gIHN0YXRpYyBDcmVhdGVFZmZlY3RzID0gY2xhc3Mge1xuICAgIHN0YXRlOiBBdXRob3JpdHlQcm90bztcbiAgICByZXNwb25zZTogQ3JlYXRlUmVzcG9uc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihlZmZlY3RzOiB7XG4gICAgICBzdGF0ZTogcHJvdG9idWZfZXMuUGFydGlhbE1lc3NhZ2U8QXV0aG9yaXR5UHJvdG8+O1xuICAgICAgcmVzcG9uc2U6IHByb3RvYnVmX2VzLlBhcnRpYWxNZXNzYWdlPENyZWF0ZVJlc3BvbnNlPjtcbiAgICB9KSB7XG4gICAgICB0aGlzLnN0YXRlID0gZWZmZWN0cy5zdGF0ZSBpbnN0YW5jZW9mIEF1dGhvcml0eVByb3RvXG4gICAgICAgID8gZWZmZWN0cy5zdGF0ZVxuICAgICAgICA6IG5ldyBBdXRob3JpdHlQcm90byhlZmZlY3RzLnN0YXRlKTtcblxuICAgICAgdGhpcy5yZXNwb25zZSA9IGVmZmVjdHMucmVzcG9uc2UgaW5zdGFuY2VvZiBDcmVhdGVSZXNwb25zZVxuICAgICAgICA/IGVmZmVjdHMucmVzcG9uc2VcbiAgICAgICAgOiBuZXcgQ3JlYXRlUmVzcG9uc2UoZWZmZWN0cy5yZXNwb25zZSk7XG4gICAgfVxuICB9O1xuXG5cbiAgc3RhdGljIEFwcGx5QWJvcnRlZCA9IEF1dGhvcml0eUFwcGx5QWJvcnRlZDtcblxuICBzdGF0aWMgQXBwbHlFZmZlY3RzID0gY2xhc3Mge1xuICAgIHN0YXRlOiBBdXRob3JpdHlQcm90bztcbiAgICByZXNwb25zZTogQXBwbHlSZXNwb25zZTtcblxuICAgIGNvbnN0cnVjdG9yKGVmZmVjdHM6IHtcbiAgICAgIHN0YXRlOiBwcm90b2J1Zl9lcy5QYXJ0aWFsTWVzc2FnZTxBdXRob3JpdHlQcm90bz47XG4gICAgICByZXNwb25zZTogcHJvdG9idWZfZXMuUGFydGlhbE1lc3NhZ2U8QXBwbHlSZXNwb25zZT47XG4gICAgfSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IGVmZmVjdHMuc3RhdGUgaW5zdGFuY2VvZiBBdXRob3JpdHlQcm90b1xuICAgICAgICA/IGVmZmVjdHMuc3RhdGVcbiAgICAgICAgOiBuZXcgQXV0aG9yaXR5UHJvdG8oZWZmZWN0cy5zdGF0ZSk7XG5cbiAgICAgIHRoaXMucmVzcG9uc2UgPSBlZmZlY3RzLnJlc3BvbnNlIGluc3RhbmNlb2YgQXBwbHlSZXNwb25zZVxuICAgICAgICA/IGVmZmVjdHMucmVzcG9uc2VcbiAgICAgICAgOiBuZXcgQXBwbHlSZXNwb25zZShlZmZlY3RzLnJlc3BvbnNlKTtcbiAgICB9XG4gIH07XG5cblxuICBzdGF0aWMgQ2hhbmdlc0Fib3J0ZWQgPSBBdXRob3JpdHlDaGFuZ2VzQWJvcnRlZDtcblxuXG5cbiAgcHVibGljIHN0YXRpYyBsb29rdXAoXG4gICAgaWQ6IHN0cmluZyxcbiAgICBvcHRpb25zPzogeyBiZWFyZXJUb2tlbj86IHN0cmluZyB9XG4gICkge1xuICAgIHJldHVybiBuZXcgQXV0aG9yaXR5LldlYWtSZWZlcmVuY2UoaWQsIG9wdGlvbnM/LmJlYXJlclRva2VuKTtcbiAgfVxuXG4gIHN0YXRpYyBfQ29uc3RydWN0ID0gY2xhc3Mge1xuICAgICNpZD86IHN0cmluZztcbiAgICAjb3B0aW9ucz86IHJlYm9vdF9hcGkuQ2FsbE9wdGlvbnM7XG5cbiAgICBjb25zdHJ1Y3RvcihpZD86IHN0cmluZywgb3B0aW9ucz86IHJlYm9vdF9hcGkuQ2FsbE9wdGlvbnMpIHtcbiAgICAgIHRoaXMuI2lkID0gaWQ7XG4gICAgICB0aGlzLiNvcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlKFxuICAgICAgY29udGV4dDogcmVib290LlRyYW5zYWN0aW9uQ29udGV4dCB8IHJlYm9vdC5Xb3JrZmxvd0NvbnRleHQgfCByZWJvb3QuRXh0ZXJuYWxDb250ZXh0LFxuICAgICAgcGFydGlhbFJlcXVlc3Q/OiBwcm90b2J1Zl9lcy5QYXJ0aWFsTWVzc2FnZTxDcmVhdGVSZXF1ZXN0PlxuICAgICk6IFByb21pc2U8W1xuICAgICAgQXV0aG9yaXR5LldlYWtSZWZlcmVuY2UsXG4gICAgICBDcmVhdGVSZXNwb25zZVxuICAgIF0+IHtcbiAgICAgIGlmICh0aGlzLiNpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuI2lkID0gdXVpZC52NCgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3ZWFrUmVmZXJlbmNlID0gQXV0aG9yaXR5Lmxvb2t1cCh0aGlzLiNpZCk7XG5cbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCB3ZWFrUmVmZXJlbmNlLl9fZXh0ZXJuYWxTZXJ2aWNlQ2FsbENyZWF0ZShcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgcGFydGlhbFJlcXVlc3QsXG4gICAgICAgIHRoaXMuI29wdGlvbnMsXG4gICAgICApO1xuXG4gICAgICAvLyBUT0RPOiBhc3NlcnQoXCJyZXNwb25zZVwiIGluIGpzb24pXG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIHdlYWtSZWZlcmVuY2UsXG4gICAgICAgIENyZWF0ZVJlc3BvbnNlLmZyb21Kc29uKGpzb25bXCJyZXNwb25zZVwiXSlcbiAgICAgIF07XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGFwcGx5KFxuICAgICAgY29udGV4dDogcmVib290LlRyYW5zYWN0aW9uQ29udGV4dCB8IHJlYm9vdC5Xb3JrZmxvd0NvbnRleHQgfCByZWJvb3QuRXh0ZXJuYWxDb250ZXh0LFxuICAgICAgcGFydGlhbFJlcXVlc3Q/OiBwcm90b2J1Zl9lcy5QYXJ0aWFsTWVzc2FnZTxBcHBseVJlcXVlc3Q+XG4gICAgKTogUHJvbWlzZTxbXG4gICAgICBBdXRob3JpdHkuV2Vha1JlZmVyZW5jZSxcbiAgICAgIEFwcGx5UmVzcG9uc2VcbiAgICBdPiB7XG4gICAgICBpZiAodGhpcy4jaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLiNpZCA9IHV1aWQudjQoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd2Vha1JlZmVyZW5jZSA9IEF1dGhvcml0eS5sb29rdXAodGhpcy4jaWQpO1xuXG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgd2Vha1JlZmVyZW5jZS5fX2V4dGVybmFsU2VydmljZUNhbGxBcHBseShcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgcGFydGlhbFJlcXVlc3QsXG4gICAgICAgIHRoaXMuI29wdGlvbnMsXG4gICAgICApO1xuXG4gICAgICAvLyBUT0RPOiBhc3NlcnQoXCJyZXNwb25zZVwiIGluIGpzb24pXG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIHdlYWtSZWZlcmVuY2UsXG4gICAgICAgIEFwcGx5UmVzcG9uc2UuZnJvbUpzb24oanNvbltcInJlc3BvbnNlXCJdKVxuICAgICAgXTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBpZGVtcG90ZW50bHkoYWxpYXNPck9wdGlvbnM6IHN0cmluZyB8IHJlYm9vdF9hcGkuSWRlbXBvdGVuY3lPcHRpb25zID0ge30gYXMgcmVib290X2FwaS5JZGVtcG90ZW5jeU9wdGlvbnMpIHtcbiAgICBjb25zdCBpZGVtcG90ZW5jeSA9IHR5cGVvZiBhbGlhc09yT3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/IHsgYWxpYXM6IGFsaWFzT3JPcHRpb25zIH0gOiBhbGlhc09yT3B0aW9ucztcbiAgICAgIHJldHVybiBuZXcgQXV0aG9yaXR5Ll9Db25zdHJ1Y3RJZGVtcG90ZW50bHkoXG4gICAgICAgIHtcbiAgICAgICAgICAuLi50aGlzLiNvcHRpb25zLFxuICAgICAgICAgIGlkZW1wb3RlbmN5OiBpZGVtcG90ZW5jeSxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy4jaWQsXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBwdWJsaWMgc3RhdGljIGNvbnN0cnVjdChvcHRpb25zPzogeyBpZDogc3RyaW5nIH0pIHtcbiAgICByZXR1cm4gbmV3IEF1dGhvcml0eS5fQ29uc3RydWN0KG9wdGlvbnM/LmlkKTtcbiAgfVxuXG4gIHN0YXRpYyBfQ29uc3RydWN0SWRlbXBvdGVudGx5ID0gY2xhc3Mge1xuICAgICNvcHRpb25zOiByZWJvb3RfYXBpLkNhbGxPcHRpb25zO1xuICAgICNpZD86IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IHJlYm9vdF9hcGkuQ2FsbE9wdGlvbnMsIGlkPzogc3RyaW5nKSB7XG4gICAgICB0aGlzLiNvcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHRoaXMuI2lkID0gaWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZShcbiAgICAgIGNvbnRleHQ6IHJlYm9vdC5UcmFuc2FjdGlvbkNvbnRleHQgfCByZWJvb3QuV29ya2Zsb3dDb250ZXh0IHwgcmVib290LkV4dGVybmFsQ29udGV4dCxcbiAgICAgIHBhcnRpYWxSZXF1ZXN0PzogcHJvdG9idWZfZXMuUGFydGlhbE1lc3NhZ2U8Q3JlYXRlUmVxdWVzdD5cbiAgICApOiBQcm9taXNlPFtcbiAgICAgIEF1dGhvcml0eS5XZWFrUmVmZXJlbmNlLFxuICAgICAgQ3JlYXRlUmVzcG9uc2VcbiAgICBdPiB7XG4gICAgICBpZiAodGhpcy4jaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLiNpZCA9IGF3YWl0IGNvbnRleHQuZ2VuZXJhdGVJZGVtcG90ZW50U3RhdGVJZChcbiAgICAgICAgICBcInJidC50aGlyZHBhcnR5LnByb3NlbWlycm9yLnYxLkF1dGhvcml0eVwiLFxuICAgICAgICAgIFwicmJ0LnRoaXJkcGFydHkucHJvc2VtaXJyb3IudjEuQXV0aG9yaXR5TWV0aG9kc1wiLFxuICAgICAgICAgIFwiQ3JlYXRlXCIsXG4gICAgICAgICAgdGhpcy4jb3B0aW9ucy5pZGVtcG90ZW5jeSxcbiAgICAgICAgKSBhcyBzdHJpbmc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdlYWtSZWZlcmVuY2UgPSBBdXRob3JpdHkubG9va3VwKHRoaXMuI2lkKTtcblxuICAgICAgY29uc3QganNvbiA9IGF3YWl0IHdlYWtSZWZlcmVuY2UuX19leHRlcm5hbFNlcnZpY2VDYWxsQ3JlYXRlKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBwYXJ0aWFsUmVxdWVzdCxcbiAgICAgICAgdGhpcy4jb3B0aW9ucyxcbiAgICAgICk7XG5cbiAgICAgIC8vIFRPRE86IGFzc2VydChcInJlc3BvbnNlXCIgaW4ganNvbilcblxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgd2Vha1JlZmVyZW5jZSxcbiAgICAgICAgQ3JlYXRlUmVzcG9uc2UuZnJvbUpzb24oanNvbltcInJlc3BvbnNlXCJdKVxuICAgICAgXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgYXBwbHkoXG4gICAgICBjb250ZXh0OiByZWJvb3QuVHJhbnNhY3Rpb25Db250ZXh0IHwgcmVib290LldvcmtmbG93Q29udGV4dCB8IHJlYm9vdC5FeHRlcm5hbENvbnRleHQsXG4gICAgICBwYXJ0aWFsUmVxdWVzdD86IHByb3RvYnVmX2VzLlBhcnRpYWxNZXNzYWdlPEFwcGx5UmVxdWVzdD5cbiAgICApOiBQcm9taXNlPFtcbiAgICAgIEF1dGhvcml0eS5XZWFrUmVmZXJlbmNlLFxuICAgICAgQXBwbHlSZXNwb25zZVxuICAgIF0+IHtcbiAgICAgIGlmICh0aGlzLiNpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuI2lkID0gYXdhaXQgY29udGV4dC5nZW5lcmF0ZUlkZW1wb3RlbnRTdGF0ZUlkKFxuICAgICAgICAgIFwicmJ0LnRoaXJkcGFydHkucHJvc2VtaXJyb3IudjEuQXV0aG9yaXR5XCIsXG4gICAgICAgICAgXCJyYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5BdXRob3JpdHlNZXRob2RzXCIsXG4gICAgICAgICAgXCJBcHBseVwiLFxuICAgICAgICAgIHRoaXMuI29wdGlvbnMuaWRlbXBvdGVuY3ksXG4gICAgICAgICkgYXMgc3RyaW5nO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3ZWFrUmVmZXJlbmNlID0gQXV0aG9yaXR5Lmxvb2t1cCh0aGlzLiNpZCk7XG5cbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCB3ZWFrUmVmZXJlbmNlLl9fZXh0ZXJuYWxTZXJ2aWNlQ2FsbEFwcGx5KFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBwYXJ0aWFsUmVxdWVzdCxcbiAgICAgICAgdGhpcy4jb3B0aW9ucyxcbiAgICAgICk7XG5cbiAgICAgIC8vIFRPRE86IGFzc2VydChcInJlc3BvbnNlXCIgaW4ganNvbilcblxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgd2Vha1JlZmVyZW5jZSxcbiAgICAgICAgQXBwbHlSZXNwb25zZS5mcm9tSnNvbihqc29uW1wicmVzcG9uc2VcIl0pXG4gICAgICBdO1xuICAgIH1cblxuICB9O1xufVxuXG5leHBvcnQgbmFtZXNwYWNlIEF1dGhvcml0eSB7XG4gIGV4cG9ydCB0eXBlIENyZWF0ZUFib3J0ZWQgPSB0eXBlb2YgQXV0aG9yaXR5LkNyZWF0ZUFib3J0ZWQucHJvdG90eXBlO1xuICBleHBvcnQgdHlwZSBDcmVhdGVFZmZlY3RzID0gdHlwZW9mIEF1dGhvcml0eS5DcmVhdGVFZmZlY3RzLnByb3RvdHlwZTtcbn1cbmV4cG9ydCBuYW1lc3BhY2UgQXV0aG9yaXR5IHtcbiAgZXhwb3J0IHR5cGUgQXBwbHlBYm9ydGVkID0gdHlwZW9mIEF1dGhvcml0eS5BcHBseUFib3J0ZWQucHJvdG90eXBlO1xuICBleHBvcnQgdHlwZSBBcHBseUVmZmVjdHMgPSB0eXBlb2YgQXV0aG9yaXR5LkFwcGx5RWZmZWN0cy5wcm90b3R5cGU7XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgQXV0aG9yaXR5IHtcbiAgZXhwb3J0IHR5cGUgV2Vha1JlZmVyZW5jZSA9IHR5cGVvZiBBdXRob3JpdHkuV2Vha1JlZmVyZW5jZS5wcm90b3R5cGU7XG4gIGV4cG9ydCB0eXBlIFN0YXRlID0gdHlwZW9mIEF1dGhvcml0eS5TdGF0ZS5wcm90b3R5cGU7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydFB5cygpIHtcblxuICAgIHJlYm9vdF9uYXRpdmUuaW1wb3J0UHkoXCJyYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5hdXRob3JpdHlfcGIyXCIsIFwiSDRzSUFBQUFBQUFDLzgxWFlXL2FTQkQ5enEvWW96cVIzQVZqcncyQlNOR1ZDN1NOMUFRT1NLV3FQbGsyWG9ncjQvWHRMaEhjcisvczJzYUdFTWRVT2VrK0FQYjZ2VGR2Wm5jWWVJZWF2elhSblBwQnRMeENhN0ZvZHVWSzdSMzZTQ0xDWEVGODVHMlJlQ1FvWmxUUU9RMlJ0MTRzQ0FQU0tnNUN3alNFQmlOMFA1cWg0ZUIyOWd0UU9WMnpPYmxDekJNdDhSZ3dQM2FaMkxaQWdKTlZ3QmhsclNlajVhN0ZJMldCMkdwS0dYaGorUW5xYUx5RlJ4SDZRaGdQYUhTRkxBMjNOYjFXcjlkelY4L3QrRVFEUkczQjZBb3RLVjJHSkZHV2lzRXFwa3dnbi9BNUMySkJHWEk1Y3ZMYmlpd25waEJ4bjZyV1N2bDh1L0pvNlBpdWNEMlhFOFUvV0R2SzE0SklFQmE1WVNia3JZUFFKNG4zOUJySzl2NTlVZ3NuaURoaEFpb0dsb0I2bHJENGVhMG13em0raDY2ZkJkWUdaT0d1UTNFR3FQSWtCRnZQaFJON1dJWlBRSTVQWVNVRnFwc1VKV0dKR3B3QjdjbHd3L2pSTlRJcEdrdVRQTk1DaU9KbU1IV1RZWlJTclRZWVRtOG10K1BaYUNKek9DaCtub1BXOS8wcFlZRWJCdjhTL3dNY3p6T3ZZVWZOazA2aXZURXd2SHhwUFNkcEJSSmtCQUFYWHZPa0VLMnNDSzJrQURzaGlYRmw5Q3k1VnBwWWlxaFA3TWdXL2N5QURQMEhyR3owUzN2VE1SL2RhRWs0TEhaaHhVRHdacDdCbTJkdlRQeXJWdXBQdTFIa3liN1VGZHhhOXFZTCtYbnRWRmUzNjNjcVpNZmVXQWxPMnZoZHJWbGNrTGhvd05nWmdOVkw3ZkRFVGxYNmt3SlQ0anFaZnNjTUF4S0pWQkNuZ2dwZmVGcUgyd1ZRMkEwajBPc1Q4cythY0ZoK1VESkUya3dmOEJoS3FleWVxMmNtaUZoMC9sT0djeTVXZkxVTFQ4bFgwSUZoTmlrK3F3Y0tDMHpMaU9Od20va3RFVEtPQ3BWc1BuNkR6Yy9yMms5c3B0V3JXM2xkRTJReGczcVNIQStpT2ZueWNoTDdnSHFvV0l1aVpMNVgvNnVxZ0J0L0liVmtERU9YbTVoMTR4MkJDMThHdzZ1OFE5VFJrMnNYcjRYYk83M3dQZENzU01qMkpZbTQxNnc0cVI4MExYeCtWNmJhMmJsVFhmdEtpUDcrQVhVdnF1R3JPb3F6amJMeWpjTE5TdHRTT0hTdVZwVlI2aXRLWEhXa3U0NXFlTE1oWitFeXBKNGJjaGdrNlJYTXZteWNhbi9Lenp2Q3Vic2svY2dmUnV2VllEZHQrRmsraHk1UUpuVEludEc0UUFHUlZHNmYzU2hQY1RlVDVBQnNGSU1GaStJQTFKeUg2ZEM1Y1hMcEticStSaDhBU3E1cThOTnN0NjVsTXhVU3Y2Y1JnWWVaNkxlRzAzK1lmUnBOYm1kZkczK2ZBT1M3V1Z2Z3dNVEZVSDdjYWR1NnFkdTZyamRla0xnYndzVmdDa3FycE5VY2IrdEU3b3A4YXlTOVVObE1KYVZxYnJHdFkveVRybFc3dklYcG5kQi83emx0cGpjcGRTNVYxWGRVNXZwQWlBdm9sR3ZEN0ZhRGs4aS94bGpmQjk5ODZ0OS9IQjRWeGhoWHdDclZYdThBT1JuMlo4UEo4SytINFhSMlZOelVqZW9VR2NNME9zY0owL0hvZm5vOEE5UG9uc0NSVVN6ZFBDam1lUHo1YTFraWx0NnV6SkFSMm9aK0ZGK1NSdHZBMVNrcUJyNDh0blBUc2p6YXVIY0NSMFhwR2k4d3luTHBtcWVRWkp4T3ozaTE5WjRINnZTc2sxZ3lrcUZiN2JJL2tDdnFyK0ZmSHAvVG1KelhmZ0JXb2E1QUxCQUFBQT09XCIpO1xuICAgIHJlYm9vdF9uYXRpdmUuaW1wb3J0UHkoXCJyYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5hdXRob3JpdHlfcGIyX2dycGNcIiwgXCJINHNJQUFBQUFBQUMvKzFZVVkvaU5oQit6Ni93N1QwUXBEU242K05LU0VVc1Z5SGRjbWlYU24yelREeUFxMkNudHJNOVd2Vy9kMnduUUxMWnZWc2RHL3F3UEVCTVBPUHhONTgvai8yZS9Bb1NOTFBBeVdwUDdCYkk1bTR4SVl1OTNTcEpDcTJzeWxST01yVXJSQTZhRkhtNUVUSWxOMS9JL011U1RHOW15M2ZSMWRYVkpCY2dMV0dTRXdQNkFYdG1PVE1HREpwcURhWlFrZ3U1SVZZRnA2dHkvUk9IdFpBUURFUUdKa1Uva2RnVlNsdXkwVVVXUld1dGRrU3ZiR3EzUXZPQ2FidFAwZHpBVG1pdGRQcndrVlQ5V1lrQmEySDN0Rmo5VEpoeFZwUXJTNCtXdm5saTdkc1BILzNQMGR6WlIxSGtveWZqK3U5YndBZHU3bTI1aXRYcUQ4anM4RG9pK01HUWI0VXhibXBvb0RMaG9lUXFLM2VJQjdNQ1VVVHdYSU1JU1ZJL2ViSkdMUDFzdlEvRWdWQXFwTENVeGdieWRVS3lMWk1TOG1xUWFxQ0prc2JxTXJNNDgrandZcXczNXRqTmZTcmphekwyTUthVDBFNVBmUjJlM1hqcFJBUEdUVWExYVZwS3B2ZlVmOGNOMys0eitQQnNTdEkyYWgrQyswSHl5Sk9HUDBzd2xpSURCTXZGMzZCSFA1SzNhaDUzd1d0NlgzdGRxbnVyTVVWZEFUaG1HcUFjemgxRGNKeCtRZ28vTmZxd21ZVnhVZVQ3VjB1Qzk5NUREdnc0bDAxQkZjTExNK0JXeWdZMTY5VVdRdkRmeDBvSUkxMTRLZFJCZkZjbW5oVGRzRDNvMXhIZXNGd3IyYTJ5Z1BxcnBJV3Z0cW0vUHpMZVFadUQ0OVNBcFpuaUVIdUZ2a2NIcFpsZ08vMXRQcnRkZko3ZVR1Zkw2YzJ3MDQ2RFpTSTM4U0FBUktTeWJodk13UTBPL04zZ2FLYVpNRURteXM2Tzc2Y3VhODhaSDdEeDYrZ05taTVvS21xL2dYTUtUdVNRWVp6VHA1WXd0WXFHOGpDdWlqNmRWUFZpQlJuT2l1NjhFVVdFT1phY1RvMy9hY2pGb0tvbnJrTjVjeUxSOUxINVk5VU9haDlHcjNicnBMTlRyY25ucncyQ0tEOG5odzFGZnFYUzVCdWJ3ckRaSElRQzRoeWdlMDk5WWQ2b1IzcUh2Rm1LdkJEeHVsdzRDOUdEcjk2WTNxdy8rcWQ2cS9UNFB1VC85ZDhiZHlRV1dRMHM2bytIdnlWTHROV3RpZi9nWlpYaElPbFN2cURIUVI5VHA2djFrSzV2M1NtT1c0RWtReWZGNUQxWmJvVUp4M0NDRHk0T29sQ2ZKWm4rdnBqZXpkeFdNZjVNeG90WitrVGxkZjZLNnhmak9tWmhudTBhck41RkcwQmFwamZRK2s4VmJqQXppbHNMcGlyYWFhYUJZeFNZY0RPYUs5bVM5NHpsMytvaWtESlpxV0gwQ2QrM3pkV3VRTG9haktERDhpK0dwL2cxVWhPbnhQY2RIYXpZZ1NwdHh4c0VoWEZtbVg5MVVrRm9zS1dXZ1lQd3RjQlVlN3liWjVOREJWTGhkYVpEZW4rbjhUN08zQlZ2a2k2aWRCTWdlY1NXNUpRQVNTdmZTWjNlNUpETjRYUEVEd1gyRys4dnlmdXVlNUhlTGtCNnVPYjQzNUcrUGpxOTBmNmljdDk1RmRYam5WTXZOMHVYSWY5L2xiTGxIVllaQUFBPVwiKTtcbiAgICByZWJvb3RfbmF0aXZlLmltcG9ydFB5KFwicmJ0LnRoaXJkcGFydHkucHJvc2VtaXJyb3IudjEuYXV0aG9yaXR5X3JidFwiLCBcIkg0c0lBQUFBQUFBQy8rMjlhM2ZqeHBVbytwMi9BbUYvSU9tdzRXUnU3am5uS29zbmFYZkxqbWJTajZ1V25UTkwwWUlnc2lqQlRSRWNBSlRNZVBxL243MTNWUUZWaFNvQWZFZ3R1Y3RydVVXQ2hYcnUydS9IaTJBVHIrWkh3U3pKNDZzRjY3MElranpOaXFNZy81U3NvbmxDajdMMUhKb3MwLytLZS9EdFl4RXZaM0UyQzVMYkZUVE53OTQ4UzIrREtKcXZpM1hHb2tqOEVNVExaVnJFUlpJdWMzenYxZG5aOGJ1emsvZnZzS3VnMkt4WUhpVExvTGhKOGdBSEN2S2JkTDJZQlZkTWRNQm13WDFTM0VBTGxtVEJldmxmNjNpUnpCTTJnODZVLzVieExRdUdMTHdPZzB1YUNYU2RMSy9sTEY0dE41ZWpNRGk3aVl2Z25nYVl4dXVjQmRORm5OK3dYTytMeG9OZnM1Y3pOaytXTUlOYlZ0eWtzeHdtQWUvZnhIY01weFBrT0NZT0hBWS81a3p2WTc1ZUxEWXZ5OGxTczF4T2tNOHRwRW5CNnZPQ3hiT3dKemNzM3l5blNTcS96dUlpeGxubU1Fdng2RHBOcnhjc1hHVnBrVjZ0NStHTTVkTXNXUlZwNW1yeGM1NHVvM21hM2NhRnF3bE1MNCt2V2ZsenRwcXFuNk1jRG5HZGh4Rk5EeVlaVkEvNU13NEFTbHU1OThvVC9UVjZTelRDR2NyUGkvVDZHdlpIZmszTGhlZWI4bU9SeFZOMkZVOC95UWZyZFRLVG4xZko5Tk9pWEVyR3J0SzAwTCtGTUVZUXZDQUFQQXFTNjJXYXNYUGU0cUljZ2s1SmZzT3gwdmxjZnAydmw5TWlUUmM1WDNaOE5TMEIvaXJIeVJVY1p2alBjSWlzU0c0bFRKZmZ4d0grTzJPTEloYmJwNStLYkkrdFlOTnVWOUhxNnQvR3dYMFdyMVlzeS9HYjloNXNybnhGN0RHMjBGY2VKMms0alJjTDIrTjBXYkJmaXR6eTB3MkFLSXhvK1NXWk1YaFdzT1YwWS9zVmVzeVc4U0lQcHplQUN0Z2l1bzJYQUdkWlk5dmJaRFpic1BzNFkzeDVMWTNrbW9jOXZIcTM4ZWFLUmRrYUlCNFBDVEJQVk53blV4WVZhWFFIOXhFM1AyTHpPWnNXK2JnM2FweElFZWVmOG1nYVQyOVloM2FBUDFkeEFXMXRxMXN0QUdKdjJiS3cvQWE0NWc1bWFOMWZQRWdtZDgzZVlIMWxlMDV6c2oxSHBGdmJWNEdLSlE2Q0dSVVJQck4wQUNCQ3k5YjZ5RmxSd0hVcHUzajc2djlFcjE2ZnZUK05UdDVFZno5Kzk4UFozOGJCMjVOM2xvZlE4cnZqVjZmSHA5SForLzg0ZmlkK0VMMWZGZUhkSCtQRjZpYitZM2tiYUxQcEpwUWZJeFZoaVpzTEdCbndjaFpJTEo1bU1OazV5d0JVbVVLNEhBZ1JidkY2V21nWENPWUNoQ3FicmVLczJHRExuTjBtV1pabU1NVXdYc045ejVKaXMrTXIyZ3JVWllmcGlzZ245UXNVZERaTDhEdGM0UTJzNXlYN2hSL1pZaEVJSEE1NGRqa0wySEo5Q3pTVmFDRVFLM2c1dUUxbmExaGl0Yk1kcDZiZnIxZXIxV0p6eXY1ckRTaHByRDdKVnpCTHhoKzlodHQrclgzT3RWZktaOXBMR1FOWTE5dUpSN0xacU5kRDhnQ25PbEZRZVhqTmlvZy9IMFlSMHRvb0d1SDUvK09HTFlON0ZpQ1NBSXl3UkphQWVJMXBPbU5FNklINXVGekNsMHRzZHB0YzN3Q0RFQzhCaGxLa1E5QUZOZ0d3bmlWekFwMWlzUW1EN3dHVTJDK0FqeGVBd3BNNWpiQ0FtYzQybkR2SVU4RDFnb3dCZ1lkZTBuVVduTUYxK2tpVW1nOFB4NUpUc3h4eEZySThHWnV0Z2ExYUZtSHdQc05lNVZUaXV6UkJqbWVWQWM3QlRnRXJURDl4S2toa0ZVNHI1OHY4c0lIUHl5QmZzU213SHRPdzkrNzltK04vLzNnVXdHWXRZTmZTUEdUTHV5UkxsN2hyL0VpTk94d2V2L3ZwcDFlbjBlbnhkKy9mbjBXOGczSFFud09xWS8zZUNMYjhIblo2RkV3bVFSK3VDVHlEelc3NEwvZzd1NDZubStENjlNUHI0S05FZGtIVEs3RFlNenlvbkJFS0I0NFVacmxnZDdnaHczUzUySXdDWUdpQ0VuTnkzaXpCSTBFa0c4VEJvaG9UT2hNTmtkbU1nMU5hYnlEb1hSaWNGTmcvQUw4Y0FiWjh1a2lnSDhBUFBjQWZ3ZHY0RStPTCtBR3VxVmdDTXN0OEErRmFxdU9WMHlJR0Ezak41YURBODcwRk5xTThHWnp4a3BoQmRqa1d2Vnd4enBmYStnTDJFUTc2bWkxWkZpTmJmTFdoaTAxdExnbHRUUzlGTjZ2RkdrQnZGTXhTNExLQkY3aEJ3SWlYRzFqeDdTMXM1bFVzZU44OFNLR1BURXdsdmZvWmR2c3lwRjdrc0JIbmtZZ1dqSUtYLzl0S3QwSmxSNDQ0U01VSmpQRlR2Rml6WTBRcXczbi94K1duWlhxL2JOaW93YS9hcUo4SGZiakZMYUFsemxKQ1ZmQzJaQXNPREdBbGJPSDlLMkZJL281QVJJS1RIWXpHZ0MrbURHNCs5b25ITmdjV2tjTXNJUXZSakc1d0JOY3NqWUo4UGIycEFEZERTSHhCbUVleUhRR3ljZER6UFVFWVNpd3dyZHY0R2tFci9RU0lENGEvMnF6d2xQbjNPNVloNEpFMGhqUUMraE40L2wvOEdiQXUwMDg1eWtsTXZBSndkUWNjWG83U0dyYUZ3YmtjZ2MxSm5CbERMNWZ5SnZFbWVmQXVYVElRdUhwUkpDY2IwY1FpNmpXS1FMUXNFSVhQQi9MM2w3L0NreUZ5OFNIKzg2ZmhhUFI1ME90eElIMGxxWkU4NWVxUWh5MjhZVmcxSFIzMUNEVHhQdVBFa2lLSytQWGw4TDZZajh0djM0eVZIL2lZUi9WcFZJMkFJVitJblkyUzJWR05zd3BmVlExT1p0VjdVeVJyeXh3NGRldGJyK1hQNmpzYVIzams1aFhEai9qMUxmOVd2VjR5b2hFSHVpTXJseHAra0o5ZVV5dGx5am9qZjlTSjNRK2oxL3hCYlRvS2kzM1V5b1NIWi9qNU5YNVVlaUNZNHNDTjh4SGk5ZnNWWjVQT2xVNFJQa085ZlI2ZTRmZWZ4TmVMcWw4dUkwaVpBZm82c2dsTDRURTErNmxzcFFGRkJmL3hLb2src1UwRStDWmpCVjJBcWlYeERrZFM5ZytQNzhvZEh4MVY1NzVlSWRVTjY3QmJoOENKL25Xc05WV0JicUorMFp0eGFFSkFKSmFxNHJncStDUUlRNzdtSFRRWURwcDV5dkw2REViR1FQdzZSVnhKTWduT3RWOFZCa1VabUw5Q3cvWTdEdnVXYTNINnh1Z1grbGZ6ZWt6TUI4WmU2bkErTWI3cmpXc1FOYWs5R1p1SDZvS2dTY052VlNlam5vYmd3cWdrdUpNU3Naa3RWQ1NDemRUdmVsdFQ3TlZCeEMwZTgydjhwdnkrTXlUTExpYzBIZmxOYjZPZ2o0bnlXVzlFRjNCQy8xbzNEeldleUx3aDZTWldKWjBIRExvUnFzRUJNZzhrdGdBNUYyUWQyOC9rNDV4STlCVlRPZ1NxQ2pnSER2NWZLSTB1aTVRNm42YkFQa3hKaG1XaHZ0dWlLMzRqcnpZUkg1cHVEZXB1cDhVNTRoUjY4OXloM2d2ZjhyOFhGM0JVdjJvN01PQ2kxdUJvRzhrd3RJaHNaWWNrRm03WlgxMjRyT2JIUmNadEoyZ1JQdkcveityWjhsV1V6QkFBcUhFbnFsL2F5VXZWTnBlNEJ6NWZLQmRPYVRJY1dlYWhjbXYxdVJ5VzNNRzBoalprbkJudmdiU0huS3YyekhaUlFCcTJUUk9aUWhSRmtERWs5WVM1cjVKclBOS3ZKVWtScCtzbGFrQzVIRkdqRGZQK1FGdlNRREt0SUNLdEMyUmNCOVV4RE9CQ0Z1c00xVUhJaWZkdHZYV2xZdnJMS0tsSTdqS2V6VkRiaUZzSk8wZWNaY0MvSEpHR25BN25JejBna1VwZitMWktveENITTZuY3gxS1FLdWRoSEhNMUtmTWN1WTRmRjVJc1VWb3Q1QktJRW1Sc2Z1VGdCRTdabk5ZakRSell6MG1COG1xYXRhS2thZ1A2L2Y2SkZMYTRwQUhZOXJKaTVFTTVyZEZsQ0cxVlpocFpNcnBwQUYxVHVrMlJlS292WCtpekozVVZkL2czL3JjT2FBWmRvakdhaUZQRlE4R1dUY3BQZXFQUkYrSzV4SzdRVUJNYlczdEsyL0NhZjdYU1JBNG1aQzJ6Y0E2b1FHWHhMY0JCbEZGWGtXSXBRRjVsYUp2UHVBYWtGY3NDaksreVBaSEJLY2tyUHNITHBNd1h0V1AwV3E2akZqNTdSQUpEK25rY0dQTkQwNXoxVGZ4dms3REZqUDlxM2hsWUxYQjBRRzZ5alV1NkpDdVpXTEdCRVhDaHRVMFhvSGtVdU1HMWFzelpncHFBd1htSHF3MHVKNkEvUXNCd1h0aGlEWGZ3M0NRdmJkZDRIQ3lTdkRnblNmN0hIMC9lWEZ6b04vdVU4RzlPekU0bTlMcDR2MUdaZ1pxVmdlQ29ndXNFcENEVWFBakxaTW56cVh4VHBkK1dPSCtnTFhWQUoweWNHajhzMmN0Nk5TTlNpNndhUnhRNWpGVnFlY3VwaFNwOVJyMEl6aFBJMVpDT09Wd0JtQWlUTldsK3BSb1lKU3BrLzZoL29YRVdjcGJTSHp5VzZCeFFDTHpPdFVQd3VNamlPV2x2SzNCRmt3eS9FYVpFRWxZeUhIUVF3YnhNT2ltQnBRbGR5VFlXUkVXYVhuNFpWWEd4MnBwMzc4K09qd0xVbWdYclpaeHRBbjdsUzhNNXFyVkFmT1VHZlExbnZ3amVNZHluVkpocGhGWjh2WUw1NEV2SmNzcWtob3Y2bnduK09vVWZxdTFaeEhEaThzenFQRkViMEFLZVJiUlI3ZmIxZGNhdVVjMXFZaTI0UEFaOG84QjZvZkkvZk5HNFpTVlByVzMwaStCa2VSY0RDQU9ZMFNJVG9iMUduNE5jZ2hOeVN3UlNCSEF6QWd1am0xbUNvZ0xzQ2ZJNXREbkZUWmF1cjIrNGZhRlNGWjhpckJvdlQxTlkxcEtVanZjM0NkNFBZOXdyQnRldjZvUHJMNDFPRUY1SmRwV0xobU9ha1lVMUQ3V20zRGdUQXZWR0cweWR0dlovU0F0U3FxSmFsSEJuS1ZBUmdZSFRUNWJhU0Z6c3NURnduQU1LQnIveWxwOEhwSlVWYjZzNjNVcWhGOWI3NmY5emFYbjRKZzAyNlZyYzllQXFTKy9Sd2xqRVYwRzZndTNDM2hGUUZ3ajh3Rm5seUx4WXVnRjhSOWRjdVk5ajVLL3BmUVVMS2IrVGhhOUlyeGtxN1A5aThwNTFwbGtWQTY3NHZmdTR5UXQyKzRwL3E1K0JablJreUVHUXpURTg0VnZIdDNVNHFqTTU0alpOYWorMG4wZlRPamlOSlF3eHhSRUFKZ2cva2trRk5kVjR4U3R0M1VLL2VrTDY5RGZQM3p4Lzh4NzE1cFdLbXA2dWg4czJkVDU2QzVITkZOMXVUTWIzaThoUis4cFRGcm5LNkpJYjFTWkJmQjhuZ2dHTXVJOFRLVmMyWE5NeUZOdGg2VWRlNThrZWlyUGh5TlZ0K0NIT2N2WTk4T0VmaXd3eGpNWi9XNmJUSWpZU1h3Mjg4R0l6Yk5wb3g3RjNGeGpyZ3FPNnRlVlQreVFxT1l2QWF6TFl6Z1FoTjNjd2R2YmVDY3JsL0NjcXFMaWJpcE9aWkRiOXFrTWgwU2hEZDVhbGMwMllkcS9GelhhVDE5bHlOcXgxN080TjBCYzBQT0ptL2xuS3VBWVM1QWYwaEFCcEE4UVlsTG1tNldxRGd1ZDBuWEgvbnFPR0huUEdncHVpV09WSDMzNTdEU0M4dm9JYmZ2c3R2L0F2Wit6dTI5dDBtWDZiNURuczhMZi85ai8rbi84Uk9udjc2emFlaXU0OXF4UVAwRkVrSUdzb0xVckxhOWtEOXdBaWNiOUZISEp2QUljaUZPQTFkRlNPMnZoaTYrMnRJZkQyWm8yZ3JQNVgzNDlKL1ZGek53MmdWaW95SkpyV3pxTGhSYUNjbXVnYS9HNVNkdFo4REp4R0QyWGpjZFBsR1RYMnBFK2dHdC81RWx0MG5CeXA0cG9udGhNdW1DNVluQmtrU2ZqWFdKZ3Z3WFloRWhPUDZwUG5wNmJxNWZqckVkSXA0YkJ1aDI3RG9UMUVmVHR2THNldm5veEdGcnBmNjVDWVNNQTFQeTZSRnQ2Z1R4VzNaR2pNMk8xbXRWRjVNUE5JSG8vdjkyei9rMmY3a2ZETjAvV3lHOWZmQmZDc1N1L2JOV0p0bDliN3diWFluY25hNDZ1aE5aMW5CeDNoamp5N2FvMDM4T011N1BvTG9kaTlKOXQ0aW01L1UrRjNEdEpjUU1lTnJ1bENqWTZPakVJUFluVERzY3k5OE1hR0t3VWJla2wyajQrRUdWK25NeGIrK083VlQ2OU8vdjdxdTc4Zlg4TEZNN3E0UmM4T2NWdzRPT0MzWklxOUFVTkhFV1JNaktKcllJeGVpaFJReVhJR2dMMklwNSsrWGFUb0FqdEh0bVNKZnFCM2lKcjBWNHdPenQ2L2VUKzhZc3ViRWNMeFhaSW5RcjgvWTlPRXNBLzNCMmVBakloYmhDUEIyS2JhTkhBamcwdnQzb3d1T1NBaGYwbzZmdFU3OXg0VlZrWTM5d3pBRENnZm02N0pLNVZ2QUhmTGxMaHlETmNYcU5uUHVXbnNOWlJSNDRBVjA1RytlSnhqSkNLZkFCVEZwL0E3L3RjQXNQc2JqTjg3eTlZVzN1QkY4QThHSi9nSmNUaUd4cjJjTDlqc0dxNEpPUUhqTU9QU2NTYVpheVlRUzEvM1FNbHZreHdBRGNuNk1BbFphTmhZcEx1QlpsMng5Q1M5Y1luYkhJSFlnc1FQem1XWjNnTTJDWVJQVGtaaEFYUWk1QnRyNlNnREZBblFBMmVnaENWUlZ3TGNSQmpCSW9FOTROeW1wWmZLRFl6N1NLUTR3ZUltdE1qUVpBMnltM1UwWHd2bzlZZDFuTVhBMDNDZjhVdUJhaTlEaTdGNmZiVWR4dUgrQnpYZkEraG42SmJQVGRkUURONlF6NHJVTFVQWWJWL3hiQWI0MjJuNWNzalZyWWI3anBheGRuYk8vclQraFBEQmhNNUE0SEVIdjlsRmlBZnlFbVBrcUZRZklBOUt6SzM4d2NaVjFPZGtWZG5WWkVDS0pxekpDSndkTDIzYnI1TDBkRFVsRng1a3hJbmJzZmNOOTU5K0RSR1I4eUNUQmtyaGxrT3F5VWtVTm5UTFFjajBKOHMxczhzalNNQVF0eFJKc1M2NEV5Qk5VWnAzbWNDdFNQM1lQWVVFSVNhSnlhVE1wb3NZVGNGOFVVNXQ1VHF2aEVjanREWkVxaERoU29iNHo4aTFiVEx1dHJyKzd0M2hQR3ZGajNPUUU2d3FIN0JKNnRGbjdyNE9uS0JwdHRVdFowRmdDeEFVNFY5bWR3RXJnUTUvN3JYT1pDdWIwVzZjbU9ySDZCa3h6NGg1UnN3ellwNFJlM2FNR0tGeHo0ZDVQdXpSK0RDQ3VDL05odFVuOFpoY1dPVS80SDEzT3Vud2lYZmhUQ0RiVzRrdmQvK2hkUGlrck5jVStYQ2RBZU1lUkozL2ZGWDV1em5yN0d6Mk9TaklQTGpkeDhQTUE1bC9EQ3VPREtCMFdYQXdmUEtvbG1PSW9qbDVGTFExZ0I1eGJPblBVT1loK1I2VGlTakdtKzZCb3pJYnpQdnNXT2RlK3YxK0dWUEtMVHYwUGtvUFhEUmp3WHE1Z00wTEJ0cWNDRzV6VnFpeUxxWTFHYU04eTlIOEZETm0vTHlHUzhJOSsvT0s1Y0F4QXJoTmF4TEkyUzlKWGlob0hGMVFsQ2dBNmVqQlJaS3JrazU5YzdYNUpqQlgrMmNwQnBXOTRVRW1CUjRLWjFONTJLaTVTV2hyVW8xTjBzU0UxQlViaDJya2FNOWdYdlRUc3NoR3F1QXQyd1VENmxjZ0V0cFBleUNyd2JqdVl0emloeitzYVVoK3pCbEhYZ3NNSXhDNEMrVjdFZHdKNHZkOWtFOEJaMVFpYnBVNm8yY0tnTUJwb1AyVHg2U1R0Q2l6WEZ5U1RIZ3BmRVl1RVVodTE0c2lXYUc1RkFROGhENmpPNW5pa0RpTUlXWkV2QUpZSVRWTVFjd01TcWxsSndSUjVLUTRJcHdNNHJYUjMwMVNpRFFrYUkwMW1XQTUrVUhPWFRZRkk0cWNNd0FueW1vOXR3ZVJTL2RjaGl2Wm5Cdi9rV2FmNW92MDN1cmVPRHJhMWdjUU55QzZGMzF1NlFaSXptcklwaTFZNGVDN3JiSHJtUDBva3U5RitPdFFmbk40cVRpbE1xdEgwTENrZ1hLejNOSzVzY2hKSjYrcEt0UlFlckJFWGVUa1JtTkR1VlFlVHdOWXNCanVIaDRlcUVoaTFMeWFLd1pYSXVPK3JSTlhHcG5tTGhTM29ZazlZV0Y0VW4xdTkxMERYQmZuay9rQWFWRHdLNjJGQURXWjhiOFlFdlI1ME9KRDFuQVNUYzVRWElZVzhEakU0Y2FxN3hjS1ZLTlJyOFZsejN6QlBwN1FHTWhjSks4Qm9UR2tVY2R1VlFGSFNxL1JNNXhyRFFVT1E4bDdLdDlIblZjY1VPWUhHZWdZTnZuRjJXOXBrdFBkak1wdWgvYURHRFU3cVBGWXZqSWwzSDZUZFo4UWQ0QXJzeFFTKzZKdjZIQTBHblZ4dCt6VzFSNHVlOFRGOW5vOXAzcXBpVGhzN2J5L1RkeDF1Y1U3eEYvWGthTXpjbDBIcFBLRlVXYzM2YWNaZDlCSW1sWEducEtqdEdralI3cldSbGpNbmpkanFhV3Y5SHpsQS9HVkRsVzZaeXQvbzJ4bGcrbGtYNjVTU3hMa21VclBWSHFtOGpremxRNU00WG5LcjVTbkxDMVF6MXRkcVdjNDkzemxRK2tyWGFHSG5yUDhyU29zdXdTYjdxeXgxUE5GUGlKMzZWazF6Nm85ZWYyZjYrcDVadTJyWWRiMGZIaUNGMWdLTTNTVndVNzRmb1JxMnZxc2lOS3M1TlpnYi9yMHNJL1hIU20reHN3UnpBWjkrYlZ5WFdoTENqdnZ2eW9LRU1FTG5sZnUxOXJBbi9tRkgveHFjcGVmQjRianlMeWZMc3Ywc1hBR3dodWdUQ1pCMXY2K21SenpSZVh2VWxYN0VLbndqZ3lYaTZpbVU5ZGRMcHE1R0JqQ2tsT0dZSERMdk12eVd5M1k5aUQ1b0JWdkVGZGlDc1VWeEl3SE9SYnRlazVHUm1GZWhvN1lmaU0xVEpQVnN4TVhRNXM4YVVoVFlUZ0lkeGFDS3JkeXV0TVd2eUd0YUpMNjM3bDlJanM3V2RSSE1KTGxqeXhCR1VjOExvU3orN2lGV2JvSUZtbTZFdVdWZUlVYmtHSXMzdmVhNXowUEwwSG5uWVNpTC9wSWZQcm9zdFdmcFZSTHg0ekNBRXpYeDBJc0F5RkFZSm9JeGZrR25iOFc5L0VHM1lHdjF0ZmpBQU1XeG1aRXlBMmpDaXZMZ25LODB4elZXZkdNQVplUzJiOFVGOXNVb0xqWEVma0tCZVQrdkpRQkNIRXdqNVBGT3VONXNIRzRHYnRqQzVEenpKQVF2bC9rQW5jUEoxUnc2VXNVanlyalowUnZ2T29YK2NVWjNRRGhydkxMMXplUmIxc3dXMU9uTFljU0JoOHBGZ0lETThZODZJZHFHL0g0bUZtS3A5NTJydmc2d2tOZVp2Y2NjRitvakwyVUhCbHNXWHdkSjh2UWxQZkpBeXJIb3BuSSt5Z2NiYzByN2U4d2hJVUxKRHdnTXU4Z0lZbHFKUmdpQWp3N2F1RHVsUlAreDM3djFXd2xaVldJSmt5aUpaSXljWjlEOWJ0SE9wdFc3RGF5OFlBT25EenNiWVVYNVhGTjNEaU1EcStTQ09scnZSVXdtWXQwU3RsaDFpdkVsY29ydFo5Y09LdWVNa2JKMWdZZ2NGcW1JanVxaGRFSkRGZGxLeHR6OThBRkU4Z0cwT3dxeHZ3MVlkMVp0TXNNekxJeU5LUTVqemZLaFZPdTJJSG0waldCem92ZzcrazFCY3RGNnlYSFNyT0lOOVVMMVFGK29kaXp4TVFPTE02eFNBQmloaGtEMUh5dEpSaWtOcTU0U0k2QXNKNHJ4ZnRoSEY0c2ZETHpNb3pzaXBmanEwVWhZdlUvdnVCdlljSGZsbzZuMzlia3p0WG1zaXJWcTVGcXZpTlZtVFF0OFRBK3JXVVhObCtEM3gwaHNDYjJVekNmNkdEYzZuZzhzbWxGMzZWbG5WMFJEYXJWUW9TdFUyb2E0dWFTMnE4dUFndU1MR29NTnFCTXQwZDZ4V3YvS0lFbkdNSlV1Z3BHRWxHT2dsL0Yrai8vdVlSNDRrTHlZQ0JxenczK3Vld0h2M2RPWVRBSWY0WWJOU3lyQzRlODJGbkU3d1ljcWR6MlVkZjRzbDJkdzVzY3hNVmloZzZKVU5kNWt4WVZYZVBobUlsSUUvRXVsT3FTams2QU5pL1d2RXhsTUZqQlptQXFIU25WeWV3NFhCNENjdXJvQkNPTVlRYUlqcGN4RjhpNFJ6M2U5VnZPSTM1S2dIRko1NDRlK2dvRzZmOVpCTGNteU9KUlBhemdoaTFXOC9VQyszUDBVR0lVQ2lzbDJRMkxwdWFzS3VsSFdOTzVEMlhGdTlCQnYyVUl4L3BRQU54dkljcDJkUTVjUmpzZ2FjakdxTVJpZmNIZ3NrcGNvM1kwY3I2dHRrS0ZuUXk5RTRGajhnYlFOMHRFcGpNY1VWSjR3dTdXZWpHNzRCMk9lejRvQ09NQmo5R05LTWoyMWUzNDZPZ2M0TjdwNUxydStlSG9SRWRhc2YyNWZYR2FjUkM2WVFlSmZlbkhIalRrWUhUa1lMVGtNUFRrTURUbEFIU2xJMjE1TlBwaTZIYWQ0a0VYczlBTHJvSlpnZWhZYkFCSVlJVUxHYWFIYVNhd0xpMnJiQzEvNWx1UHdMVE9HZTU3TGVjSTFiMkdvMVhPcllNbzgxMmNzMk41QXluYVhYNHg1M3NJTk5lQzNycWd0UU9nTTFJWmx1dkVZcUc4SFBybm8rRFg4dkZPeUs0RGtxdkdiVXUwY09pWXlRWjB0amNhMnh0OTdZZTI5a05YZTZDcEZ2UjBRTFRVRFdoYmdsZGJEQ21ITkdmc1lwVHBiQUxCLy9RQ1liVnFSbzZDWVZMUm9FYlY3cXo3UDFMdGZGd1B6K3NOY1BNK2xhZ0VsQmNiMVNwckFiRGJWVEVvbFhqMWNnYUtnNEdDakVrN0RwY0FBVlhrZXlqVFlmMnVWOWNlVVFJa3FpRUZEYU1yQnUreHFNcjZDbmRzbWNkVHZ0R0x6WEEwQUZKRkZndTFiSmVJSk9jaHVMa3dDU2l2U20rdUNLNUZoRXFwTy9WMU9YVjExa3g3dlJENXViaHV5OFJMTDNCS21PSkxIeE5QT0prbUt5cGdUOHJ6RWZaQm1zQjZGMEt0YTR4TWRXeGw0Yk9hUWx2a3g4TEJKbFkzS0tvTlFnbUFMTzlZNi8wNVNvamFoblNtVTFGVGwrOFRUMnpyczVhbHpUS3pVRGEyS3M3TGJPcGQ2eWFhSUdndGsyajNqdEdySGlvZDFkd21WY0JwekZNakw2UUNYVG1tZWhwdVhYK0RvL1J4VUhmMmF1RVZXdmJybnZDdDAvOXYzTnRta3BHanViblQ5V1k3MVJIWnE0WklrMzFJdXRtWStOUmRBNlZERFpIV2xGY1c3a3NCdElueXVkNlE1MWJDNUU3WkdyT0hUWlFFRWVZa0VyaFViVzNwQ3NoeUpCeEdScGJTSTRJQUc1UXA2dUFlME9BVzBMaDlCelhvMmVycjBEcjRpc1BTSVUzMFlHa3ZyZlpBRjVlWW1pNUdzK3cxY0ppWHg5SmptTmpNNlNMT0JhMERzaWZjV2NnMStkNldpTytlNTBVU3hSMkYyU2ZvRXg1QnZOYm5XWktTYVRDa3F3MGp2QlJrTTE5ZjBXQXN0MlVLVERpcFR0ZUZUTjVPbG5yOExIdUVRZUJHRmNnL29Ja256WkRoaDFuTWsxK0ljanNkdk1VdWxSaWRIQUxJc0pOY2d4ekx6bm03bDNBMGEzWlI0MEJ6UUEyejlZSzFzS0xmUEF4WHVsVisvVzFLMFBJU3NWUU50cDNoM1lNR0s0Vml1M1BZMjFSN3RpTEJwMU55MlNFNWpIcUg1blE4VCsxNTZtNDg5WmI4cjZGV0E3QlFpeU5Uc2oySkl4VkNnOHpWN3l6K2I4RUNKRUxiZ01KSE42ZWtsSCswdmFtaU4zV1ZXbHV0M0E5R1U4Q3BKUWl6VlhyT0dxSFEzcW0zSDFtVVozWXVva0ZsWDBmZlo2OCsva2QwOGliQ2dzTk5Qczdac0t4TFBLUTgwcE9tN1R2L3c0WGlNRC9xWEE2dTE2UTA1bmVnbEZPOCtMT0wrR082VmU2aGY5bGVCMk92SlBrOHBMRE80b1lYMTZ4M2UzOHBiQmNoakF6NmloT1U1RUo1L0kwejZxeTduM2JuS0xOUmw5b2Jqb0VFWWFzZElzZXg4dWRPTWx3bGxTckVRTHR3MGtIUVZaV3UzZEd5a3hNNzk4WTh4ejhYM2FSUFRuK2xJTVdEUWxRQ3ZMZTgya2JobTBsMlJ6Sy9JNmx2SnV6RGxrQ3ZIY20raS9RN0F1TWFQQkRHblpPbXV3VG9CcnJ2YmlHQ1pvNlhSYlpacFdqcDVSN215NWZTdlRaWXNnTGQxRWs4eUdXbGdjMEtxMkJVcFF0eVVUV2hrc2dmenlTMHRUeDlDTXVNZ0JNZFRSZ2l2NUsvVzhyRzZwZFJ6N2hYZTVZeVVFWExkRGxQc3R2UzBpcGpNS3BLRGxXWkNPNFNRTndBeG1PcVdidGZsQlZUZWdieDV0VWtvcXFYaWFNMFFkbkNWWnlnU3pHQ2h1SURJMVhPY2szdWQxSlJVVTRtcWZsUm40a3RldmYrVElSNjhLd0U1VHRoOEgyYTNjZlpUSmJFa0MzZ1hFeWVqMzZJUkZrRzU5Nm9aUnZLWVlhT1JlaW9RTlNLS0RVd3plVWtqQW1ORENYTUFTdGVpRUZIdFJJcWJmVzFXam1tc3A2RFJodVM1VjBxZ01aVjEySGtzbGc1U2plOENONml4alRuWVVLYlFKS2ZjZ1lCVjJsVVhYR2RDWUlHM2tsMHo5aFcxcTJtWXFOMkxjYXQ4dGZkcWxvclNsUjRVeitaZG5QNXdSQ3Fwbm8wemU0MmxaMWhlZS9wc3NqRzZxTnJaUXZicTBYVUNLY2h5VG1Wenk1aG83VzBmS2NTSnlad2FWZWpLMFBSYUM4MU5xQ0x3bmVycFQ3QmtHMjdJdGk5ZjRKMmQyS0hMZlhiZDVaNUdvOTVqeGkxTFFDcXJRcjROZ0ZWaHdpcXFuc2o3aGRjVllsSXo3YzYrWmIrb3cvaFE5clJqN1R4OUxyNmsvS3hQdEJZVktPb2ZFY1pseFlqNHQ2cW1EZXFGMkRwVEdaLzR0WUwxUjlSN1RKWlVsdzFaVmN5NjFVckZsUlphdzJSSGErS3gvc25RUW9kQkhHTVdZcW1YV0R1Z1NqSDYwVmhjNnpFc25vM1JiSEtqNzc5OWhwQUVWZ3JFT0MvUlVEbC95UjVEc2pqMnovKzZYLzlmLzl6VEdEQ1EzNXJaWGxFZjl4WVFIWUNkSm5rTVh1UzFSRzFuZEI5RTAzSm1HTWlubHZPcjR1bjdhQnl0QzFQNTUvTHdRNnVyOE9SN3ZuTDAxYWN6L3RkdlJvdk9zblhHSFA2a2w4K0hhVHdOSy9GamVCTCtsMEhpSjRucEYyMzhpY1dLa0t4NVlvcVJPcFZEY25RRlVVaWcydVl5N2lXaCswYW1DMDBOM3RvYjV4Sy8zcmx0allmZW8zUUVsdGI5MWsxa3g4KzYrUWZXbDdXdlhOL1VHOFBrZnFqSVRQdFY1ejVROHVDN1JOLytNUWZQdkZIbmFsNGxNUWZQS2Yrazh2N29lSmpuL2JEcC8zd2FUOE9tZlpETGJucXMzNTBpQjdqV05Jbi9UaGtzTFpQK3RFNU1IdnY2TWNhL1BxY0g0RmJHZkZVYzM1ME9FVTNtdkFwUDNZNnRpOU5NQTVDTkJyc1lEN2p4eUdKeVdFSXlnR0lTa2ZDOGxqRXhlYTc3Uk4rUEplRUgrVUIrM3dmQjBkaVB0L0h3K1Q3MkJKbTI5SjlORnBPRG1pLytHMG0rOURVL1Q3WGg0OUxmRjV4aVZ0R3dKb2xYZzhRNnRqSmRjM0h1dmxVSHdlSUhXdXlDUGxNSC90bCttajNCdkNKUG55aUQ0UDNMSDJ0RzVuUWJ4NkVIMzJHYVQ0MDh1dXpmRHhNbGc5bkdYdlBUSHRtMmlmNThFaytmSklQbitUREovbndncHJQOGRFZzgva1VIKzF5cDAveDRWTjhQSmtVSDQ5bEJuclFCQjhPYTR6UDcrSHplL2o4SHR2bjkzRFFkNS9lNHl0SjcrRkFwNXJLOGJsbTkyamdYVnVWb0Z0ZEJodG8rZVFlenkrNXg2N0Nqcy90NFhONytOd2VQcmVIeiszaGMzdjQzQjdHMFhYSzdmRWFRKzVadmxOMmoxTmlhcDVTZGcreG1qM3plK3cwb3NuSUh5QUpTTzFzZGxNNi8rYlNnQmg3N2hPQitFUWdQaEZJblFONWxFUWc0aTQrbFZRZ3BmRGVRU0R6aVRSOElvMHZrMGhEWEJxZlNtT0xRc3dDei9oa0dvZU1nL2JKTkRySFBPOWZTcndPd1Q2ZFJ1Q1cvNTlxT28xTzUraEdGVDZoeGs0SDkrWEp4a0ZJUjRQMXlhZlVPQ1JKT1F4Wk9RQnA2VWhlSG8vRTJIeWxmVktONTVKVVF6bGluMWJqNElqTXA5VjRtTFFhVzBOdFcyS05GclBGUVkwSHU5aEFubjV5RGFmaDRndW4xL0RoT2J2bUpaQWhJMWtad05jYVM3SlhzVmluNXJkN0ZFbUhDSkpHSDdDdE1qTmtOSXVIaXd5cUlubXFvN0JrQWVEbVVhZkJ6SXo5NzJJRWZDTFIveFpCc1BNRkt1TTBlWkMrR1RQTFhiT0xOSU1mWldDdm93OXVDZUNFdHR4VVlWY0NyaFBZQUtURzk4S1R3YVhTZ3F1RGluK1l5bjBhekJKWWRJYkdOdHJUWElRcFQ3TTR2N0d6ODVvOTE0VzNJZ1ZiUkxRNHQzaW52TlpWSjJselo3VGxCMmlocGQ4OEVGbDloamtDREpycHN3UThUSllBWTV1SG5pdndRYnY3a2Vabkg3VGJiR2IzWWJ0UEpteTNrVjN6Z2J1dE0vZUJ1ejV3OStrRTdqNm1tdWxCZzNlZDJoNGZ2dXZEZDMzNDd2Ymh1MDQ2N3dONHY1SUFYaWRLMWZRQnp6V0V0NUdQN1J6WjJ1bEM3QkIwMmVCRzRZTjRXMHhUN3YzYk00aDNkOUhIaC9INk1GNGZ4dXZEZUgwWXJ3L2o5V0c4eHRFNXczaUowM1ZxbnAxR1BFVU5mWVI2bngwdGNqaGtJM3VMRFlpTHViQW9UTXozU201SHFFV1FTOG90SGk2VzJCdjgvaHFnRUVuSStibXo0NUw1dXJnWXkyNWU0WjdTZXpqTXhZVmkwT3YzKzZlMDhSaUdLWVVRdkJ5VUJyazBBRlN4Z3BUeUhTUmRtUjlhMFdPYzRyM0pnOHNQTExzRlZBWnZ2R0hMaE0wdzJnaG9EOXpGVjVYdkJyRUVMRWRqODFXWlZWNFB6aFZYcFR4MEpWb0pwcTA2OHFSVm8wQUdQbkZWRjRWRmloRFg4cGZiK0RxWmNwTlEyTE1JRzFjc3psakdEVDJZOFRpSzVLc1J2Y3AvaWFJam01eW44NUhRSytjYVkyM3B0Z1RRbHJjclVhK0NmQkYyM2dFQUNKTHFJNEc4RE93R2Q1dkQvVVUzdzJCSTRhOXNlck5FWFNFUWxLV0k4NTFocVlIZmpXVGdyaG5scXl3TE9UemdxemU0dnVRV2t4OER4SVcyWk5HMkhiR3o0QytDMXlTNGxGaFdnbUQxY2xpcWd1TGdVcE1GTG1zUmNqTzJZdkRQc29BRml2SUZNbXU2eEdMYU81VWhEMERJTFR4SndXbm9RT2cvc0ZKWkdPUnJmaFY1Z0NEeHp0b2xDNXRFTStBWFZodlNQM0VJNVBaTW9VL0JQTzFhVnhhY2E1R3hIbFdnMjBlWUl5dVpWRGc0YmREU2VndC9iR3pCRDZ3dzRBZXUxelRKclR1djdXWWsyeG1xQkFVU3R6Q01LcC9IajVmM1lOeHVSVDlHQjlscHBTMjFiQlJWNXdqYjFUZU5pUlBjKzJ0ZnlmbldFU0h2UDQxM2lDTEJPUUdDd0V2Rlp0dDNZTkkrZXc4WDNlUnl2SElrOEpIMGRHVGxjZ1VkQVBKcVNrOUF4T0ZxM2lIL1Q1a0ZyQmhPOTZpVUlieVNIVGNoSExueTI1UVVaOUhuME4xR2NPNTloenhjcnNzVk5LRHdDWU5mamVsOUhnUjl4MnVjaG9LUXNsNnlYMVlBdmVoaWh5c2E4S25hNFUyWnNMdHJrdEo1UVl6QnI4cmxoVmRncTExdlhYWkVsY1BCcnpXYlNaak1QZzlHbDViWVNYSS9DR3FVOG1RdThsZUlXeXFJNnVWWnRtYVhZN0gxUUNPMWVJUkxUdU1Fc1krTkxpMnNIQmVYaDVLakF5cDZTUTRObDZPQXF4c3VqVHRrVW1IcW9DMlRoQU16Tk56MWtWVTQyNk5MWXhtai9RUEN0ZjY0bFFYdWFHZHdla0NRY2htcjk0alYyd2EzeTdnTHh5MzZ6M1FkQUVOdUNBTWtwT0FlZnZIN1dKZGg1U1JyenFnV1J6SVNZQ1dEWnhYK3JNS21Kc0w5VlBtOGNkbEYrTHNoVTI5emY2dUVMMVY4RTNJZzlqSk14ZUFqbVZSQ0gvNHlTSzkrVnZQS3dFN08xbE51NDY1Yzc2b0I1OHBUVEw5enhlU1BEcWx1QzdsYjJwUHFRcGZLSmV0aUJtMk5WZDV6S21qMkZoQU5DT2w5QVZGRFBaYXBsemYya0Rjc1hxSTZ0SVhhTGQrZHg2ZjNKemJJRzNkRVJiMWU3MFhEZjhGcmNtOEkwQ0VnRDVwYTlvVGJSYzVLcCtDTUxkaGRMRnlSdUo4RUNPSlRORzd3MElSVDJ2UkFoaFlHSDFHajNYc2hId0NZSW1vSDVIQUxtM2pIY3VBb01MVlcyZFVpVDhlaVVobG0yb0svVkhDUVNDaEdCMUtPc0Z0cUI3aXN4d3NtUm9vMlpIMDExSndEWVpFaFBwVWVsaGIvNDBQQ3BLTERCQ1NSRkZIVVFYZlo2R1l2SGV6L1cvMFZIaEQrQ1kvRkIzdTZRaVJrUjQ3Rm5hcCtPaXFjMWRGd1htU0cwbEtOcXp2NStQSEg0NkhGMHNISGZUbGpkOS9lcHN0VTJqdis3ZC8rMy84MVFtOGRwUS9VU1pFQmg1QXhjUE9MWkpxZzJtYUY1eXRNSEJxdFd5OFg2THlqNUdPaXhHL0VLeU5iYW13TWNNUThxWktTMXczZ2VvMm5wdlp3VzdvNWtlc1ZHVFhWT2ZEQjRSZDBQUkZBVGJIVm1Wb3VUMmlaTkcyandwc3E3Z3F0SjJvd29qb3BLb1U4OVhHRkZDaTRkb2dDandtS2lwT1NtU2ZOOUZiUzBVN25CR3VWaDdIRHNkakFoaDIyeUx3U0kyNU5xc0RTdGtrVE93clZpalMrUXRZY2xZTjg1VlVGVm5IQU9kY2VKaUxLalNmbXVrNmxweG1hQ3BYZXlKRk1GRzBsNW9lQUNDMTJaVVUrNlI5R1dRTnZZcDZtTUo0Q1ZrRVV1RkE2NHdpczUzQXNpNW85eXppcTAwOWR4TjlaZ2pEcXNSZWpudjRXWU1Hb3dvS1JnZ1dqdXo5R3BSK1JxRnNiUFl6cm1rVDZpbTBGYVNVMTBnbUJSUGxkc0hIM2FHZ2RFVHVpb2V4dHppcjdYa3RuSXNIbGpyai9tOGNuQTZyeXI3eTc1KzBzV05BbGxxM1RWbzY3N0dRbmxLdlluRnN3YUJORDE0b0F1Mk9wRnhXd0Iva0taR3RneW1WMTZLTmU3d3Q2ZCtzR1dETDlOa3B4SFBCK2dGditWalRYSVdvWElEeVloMk10bWd2SitMRG5pRVk0cE94Uzc1WVRucTA2RmRqUzdIdGdEN0xhR2FQTC9UTlhZTEU0ckpkeHRwbWdRdEpzakNqQStnTS9FeUhBSFNwNXNwbzliT0xLVjZtL1Vyb3p5dy9iMzEyU0p3R0NqbXcyVVpYVmdUWjEyNzNWcVZoeGlhN1RRWTQxSDVJT2V2cmxLWTlLZVF5NlE2Yjd3NUlkNnJKR2RSUWhwSkhhS08zQ2srcHpuZVE4U3pJbTlzYWtZZ3I5c2docjFaNFVaaHk1SVJKTUhvaldLZEJKazJ5SUh1SlFSSlRRTmFYRDBVa08xWk1CMzllQmxielpEZXN0dEVJNWhZbnkyYUFVNmxsOVlwdWo1amp6T21meWdOekpRM01vbkV1eGJmdWVqQXAxNmN5OVUvL0J4YThvUElzejhudG54a1c3eHBhWWZBZnZRcTlaV1pjT0lHbHFjZ0RnSnNiMytnc2RxRVlEMzdNNzcrUGdmM1RpODFpMWFEM3BjUmQ1OUpSblA4cGpLMkh2Q2M5REV4N2JydTlIZDZqSEowNTJ0Q3ZjbWVyUVc1N29lRTJiMTdSNVRkdlhvMmt6RlcxQ3M3T25xdTJiSjZaMTg2bzJyMnJ6OHM0MnFqYVRkYTROWGVhZXV2QkNrbGZQZWZXY1Y4OTU5WnhYejMwaDlaeW5WbDZsNTFWNlhxWG5WWHBlcGVkVmVsNmw1NTNuRkoxZWxWVGQrODU1aFo1WDZEMC9DWW5Yd2NDVjQxMCttWG5CeDZ2cHZKck9xK204bXE1NjA1NVJuWkpsWUpZWG5ERG05RjJ6RVdWTGJjeDZma1NaVjJFL2o0TGtlcGxtN0R3dWl1d2xVTE5reVdZWHJocnFNQWFtVUdncDYzSFVrSGVibURrVDJ3OWI2b0JJcER4NTRQVFZuZkV6VHkyY0RWdjZLUXVVVEtvNkp2eUVRaXBuTXQ2aUh2cysrVjFjYVhOT1JDSU0xenBrcnBmQldTMU5QMlVhZ2dlVTR3OXJIY2tzN1FOWEhtdXZUL2Jja2xjVGUyYkpxNG05bXRnelNwNVI4b3hTSzZQMG1QWU16eXg1WnVreFZFdFdrNHhubHg1Y3QrUXMxbnRnYzlqVDB5NDEyY2QydEpGNXRzbXpUWjV0ZWpwc1U4MGlYQyszYmJjTVI0MW1YeTJWMVlGTXlYcDZyT2RoK2RYbS9PUk10UlVScStvb1R0VXphN2ZsUHE0VlZ6MXJBZFgxazhOeW9rVnl5NEwvRHZEUGpDMU1ocGk3L3lnUWdyQk9HSS9YQTZ4T1doU2piMmpyNGxXZkNKdXFWdVBZd1RwWmxyRWZ5bDBObCtrOUZzb3FmeG9aS1N6cmJKS3NkVjhkaDBHVEtaOWwyYXdWU3NPSUgwSzh3am8zUS94U1R3bU1UeXZFODFpS2N3K2dld0hvMWdyaDN3cDhmaUgvU3crak95RFI3ZVh3NXc2bExablZxem8yclluVlQyVWk5U0t0Y3FQL09ZQVRVMzRRV2RIRFhxOWU3cTJFVlB6eWFwSEUrWGFwZGl1WTZGbXJGRnI3LzJkUDVkZDM0bUdVUHY1N1p6cXpjeWM2S3FqeC9OVUJjcmd6NjA5VXRZbnlzR3ByS2NZM0R1eWxIOGM5d1QwM24yTzlRM3FwOVh5c2c1b3U3b2VwcXRrOVliSWhsblNxWlZoVDIrNWRZclBiVVladlJPV2FJelYxdTdJTHFGdllVcGttNEg5dzVIWktKbnhrU2cvR1R0ZUZWcVVXMkhDbm15OXlmbzhPMTdVdXJzaFRNd2FvcEQrMjJIOTNPYXZVdHJrRzMvc2M5MVpqdEI5bGF5V0ZiNFZjazJsN2xxQ3JjNGtkTmppMzEzVHRXaXR3V1BxSmY1OW11eUtWY0N0SDhqMlE5bTZuZEhEbHgzNjQvRkZQaUNPbWNCdlB0V2QyUG5YUi94a2RqMFJ1NFhZVzgrZDJoU3l5NzZNZlVvdllKR3BHZlN4TFJMWElUdDloSlVyaTNCa3YxWUlDRk10ZTVsajdGQ3Y0c0ZzUW0wUVJuM1J1MUtTQzlVRWZKdzVCeTJFRTBHcEtsZjNJWHdWUFgyMWJNM05ldFN0TFVpazI5SndLVXAzM0h0S3VlL0VvcGJCcVkwUTdpNmk4cTNteVlOR001ZE1zV1JWcHRuVi9iNDQvdmo0OStYRDIvdFJpaWNGcnJwZzJhb2FKa1ZLVjU5MzdzK09qWU1sNFdjcWJkREVMZUFWZUxBZDBtOHhtQzNhUFZYMnFHa0N6TkVpV2kyU3BGZ3E2UjV0SUhzRElMQmdRSTBWUGhtRVlqZ2FqcXVqUEMrV2Q3OWcweHZyMmc2Z2FaaUNMR0FLNXhGcnVxeXk1d3pKRlZMR0k2cjdmc25pcGRBSWR3QzI3amJFcWZMQks0Ylpld1dzenhCUlp1c2FTa0FDNytUaTRXaGU4RStxZnlnb3J2U3lTVHd4ZXUwN3VHTlhHMmdCdVhNTk9VRzJ0ZUlIRytFMlF3c1hNWUtaTUhYOHdKY0t1TEdFNEdvU0dkcWI2c1VsaUZEZndiZGxZTHcrSkoxd2ZyRjN1alZkbEhiQW9tVm1zYUsrcUJpY3pqVHJrYkptdmMvdGJyK1hQNmp2OGdnajNIKzBsN1JkeEVkK2FWYm1vM0JRaXZJaGpNYTJIOHNmd2cvekV5LytOelpKUzFnbklNcGU1V1JRc2pGN3pCN1hwY01QNU5KN2VNRWRYU2d2U2ZPYXY4YVBTZzFaWHNiMG9xTjQrRDgvdyswL2k2MFhWTHlNTmEzUVhMNUlaSFp5ZGhuTkY3RTlsS3cwb3FzS2Y4U3BCQnd4QTNRQmZoYUVjSWRnLzRrd0Y5SDE4Vis0NDBkNEc4RDF5M2dKTkxWUjdiMmp6eWNvbU9vRFhJWHVpZjYxVmFDdUJlYUorc2VtUVpURTQ3WnZlMElUVWlmbGczRnlmcnFrdW5RSlVFK1d6MFVpRGxJbitWVzlhQTVaSjdVbHRYMTNBTVduNHJSN2J2NW5RdjJOTEZUYkJlcG1RVWFHNmlvbmo1S3hMZVdFNzQzZFJZL2gwcEtydlhmZlJtaTlyeTZDTE5QMjBYblZBMzdzNGVWWnVXLzlnOGFkVE5tY1pXMDdadWVONUdJbDZPOExPY0tHV3hEeDcvK2I5OElvdGIwWkhRVklNc0c0Z2xnd1VwQllwYzF3UXIzQ3B6dlNTcWxjcTNWQk5RdUdRUURVSGtjaGZBVnV4bnMrVEtWVnhwVUwxOFNjcXZtb1VvUHhXbWtDQzJacFJ5VW9pL0lId29GS0E1YzkwMVlGN1ZrdHlFdG5rUlYzN3dBb3BiRTFmcjhSSmk0a1g5L0VtRCs3VDdGT3VkRUpsWW1FdW9qRG5KWUd1T01iUlpXaEtWVHI3YWRaN3hPcUd3NUZXOTdrc0hwbGJLamh6ZjZUVDlSSU5SY2ZJRXRZMVZJTzN3a3RJNE9xeXg3czRTNmlhOHFWNGN2bm5ZRkIvSFJIekpsM0R6bEs5WlNwY1N5SUV1b0ttd0Q5eDRlTXZBME9MWkFLNkE4cHM5a0NPakxubFNpMVhiamUxbVQ2SmpVRGMwWDhtd0ZPMVZCNnQyZHI0Vm5DS21nL2RuSTFvb2JEZmRpZXArcVUzTHY3aHBHM1ZZN1NPUXE3VDlIckJzTk1pdlZyUFErR0dGcjdsZit2Mmk1SkcxZnRhSkhseDNtQVR2ckQzRmszVFJUckZ3c2pSZW9WdVdLNnVpelZJeElqMHhyWGZ5Y1h2NHNJeXdzaVdlSVU3ZXRIK29wdlhMaHQ4TWRMcm9OZkVMT3A5SXNhUUJ6Q1JIOFo4RXptSkgxdjJZRkovZERnMUt3ZG4va2dDOVpNSDNVT0YwWHZvSmVoMTlWdEI2UG51Ty81bGJzZUJkTnhDZFlaUGZwT1hveUZ3MHQrTmg3Z2Iyb1ovb2F2QkJ6MGgxWjN3WVFaMkZobERtTmg2Z1J5cm91cjlLYzZHQTNmandSallKbUlzUWZqRkVCYU5UYks5TnhTZGYwQkdBeVo0N3U3OFltUW00K04zRGRudjlydTJ6K1ZTd3FSc3lvM1FQV2NkRk1Nd1ZQY2pJbjNYVVc4bjNDRTFJRTY0NTBLMGJFWUYxZm5Ibm1VWFVTSzNqTmppcHE4bk1kTjNhYWVOMWxmUTcvZlIzc1NseEhXV29UZ282OU9qQmhjRXQzc3hoUkRhOXB6WHM4VnpYMStHZVE5QkNOTzNVdE5aV2VXeXJySVpDVmpDZUtQMGVSOXpiVGZYNjg1c1l0a2VvcGtobnRrZEhxeUxsZEtZVkpIV2dVWjFpYWgxcEJsS1hOTGlYd1UrUUxYNklvMW5GbGpsTm9TVzY2R0drY1ZvbnpJVW1PMHhLRWFHUHUxTm1rSjIxQkVWbkNPRVhCZ2tNRXFKa3VWUnBJK1B3V0tjeU9XR3NrRDV4UXdXTWhpSlFycmRNWTY5MlJCbk1CcnJON1FPdHlWKytzMmV4RGE0Kzh1YzJLNVRQQlJwOGlmOEplL2s3Z2NJQlBBRHkrWnBkaHZFeTZEUGJiRjg4L29PZXRsTUFyUXcvZG9SajBJTGFHam9uNS9iV04xVjR1TFpwSkR1dmhiOEx6aWpFMlh3STUxWXVaa2tPM1JhemtMbG55eUExUmlrck52ODdJa2VESSs2STBjOHVZMDNzN2RVeG9IR3lqZDlhNXdvdS9WU3U3ZHU5NHQ3R0VKNStJdnBBSWpXQzFxWjdkajBVOFNidzRBTGFGNlAxbmRRMkJxcS9VMGMyeDQ0OXdzYzc3N1Q3WDcrdTJOeks1eDRVSGl5TjMyL2s3YklYNDRUYnZRNXI0N0wvcHRLaWEwTlNEVExhSkpFcE8ydHFsMlpWQi90VGRkTGxZdHc1UzBadWNBODhuQytMNXlMNCtUZzNnN2h0blEwNmhIYVdqM2dCU2lkVVpiWEVSTXFkeXVnNlF6VnVLRk40bUxUSHY5NmljK0h2bVg2MTlicjlsZFV5eVJUSGttai8zSWJiNjVnbHV0bE5GOHZxYWhCVk55akcyK1J5cE5oOGx3YXIzQ25jNnkzY2NIazQvSHVIcTg4YTd5U3pOVWRVWTljZWhUYldmUnRGTGlraXYwK1hTOW5zSzB6K0lNdTk5cEl5K0JTYlBDbFhaTnIzRWdsUnhWT1VRWFVhN1prR1JtQTdKUHBueWh5ZjVZSHFDSVdua3NZWFpGazNLR2JaM2paQkN3cGJrRCtSSVdCdlR0MUhTVDNvMmNNTkZlZmYyS2JmcS96a2c2Z2tTKzE4dHZvNDdjKzBwMzE4bnZxNWgyN3QyZCt5RjdMM1dpL0Q4WmRLck5RdGI2b3poNW1ZK3ZFT2p0MUJIZnZTczlEeTdhSmZBK0JOV0hhMy9oZk94QVlmc1RTSGF6Sm43aWVkS0x1eHpidWJYSFl3ZThuY2dXWTd1d2FEbFpKSU5kclM2YlhLVnRuU2Fnd3RhT2NyenRIWnoxMXg0UG02dHh0U3hVbWdjK09QQVRRQitSa09jUFRZemxoTVJWWmhpN3d3cHljTzc4dnM0WFVuU0RNczI3SWtXZ2M3YVNSaDdXbjhuUmQ2WGk1R1JibmY3aHdwQlE4ZVhQODlzUDdzK04zci84eitvL2ovNHorZHZ6cXpmRXB6emlIaEUzT2VkU1FiNUNRN2srWWNxOEY1ZUovOC82YmxQQkp6b3BnOEd2bktYMGVWSmNHOEc2R3pINi9JYldmYXorTWpkc1N1OEYxYlY3ZXNQT0NNUDQ3R3hyVEdZM0cyNjVKWkd5MVdIUFhPWk1aWXR5VEZwT2N1TEZuaUk3UEJtb3F3Y0k5WFFOL0hESXV6ejJvV0c0dDQxQmI1c0hhL2VKWHZzeU02Qnp3UmZBYU9XR0VyUHNxWm93Q3lGYmNXb01NR1hJSHQyc2UwUGs3ZDE4Tm8veURZYVFiZFJSZE1laVhSZVNXanN6SG9LaUswbUg0M0hBMENLNTRsRjFEanpCanpyWEFLM2dMOE1ySGdkS1ZRSTFCRkM5bkVheHVjTmZVblZ5NnVtcW1kUWZmbDdoSnMzUTVLSURYb3NEVmhoNWhDU25BalQ0bkJJMWttcXp3N1dGOEhTZkxFZmI1OHpydjBxVk1oYVRQYkpDWDNsYWg4K1dLWUVieUpJTTJaTkRGeDRJTFVyQmxrV1dFNXU0cjZWUENhV1B6MGJhWXhjU1l5c283WVUxRnpGbXc1ZERTVHlqM2ZSVDhiaEw4b2JFbjJSUjIvVDdEVEZjaVhQczc5Qk1rNmpNY2Rlb2cvQkFEOWZnZWtOckhJb1A3MHp5eHRpNUpSdDVHaUlYNXI1THBwd1VMMFJTVWw2NkZJVTlhMjJzY0VBTkdTc2tiYVBzc2tPNkowUE5JSG9zcXY3ZENFQ2ZmaUlVN1VPK0tpbjhzVXBRMStTZ1lvMDR6R3Z5cXppZU1SRkEyRUcrS25obHdjQjBFL1k2amlBVkI5K3dYRUdrTE5sUEhFV3RVaHZrelI3MG9tRTBwYjhDczQxQjl4QWtEN0hUQXc0R3dDejVtRU05aHp0Z3hJdHVjcnpzV0svOUxlL2N0UnlxekVWQjM3cVphZXZaMnRHS1NoRjUzSkRLMkQ4QmpFbWRKdm9vTGdNSE1qVTJRZmlyanR5R0lyZGJGcDdvdFhoeTN0bmQ0c1czellzTmV0WGZESSs2T0FzeFdnVGtnaUowUUJBMHBQN0R4d2FjRTdudGF4VWh5Vkl4MDJ3ak1kdzhpMVVZcHFvWHU4ZUt2WWg0OWRvbTQvQkxZUWE1andRQzdzTFhETWdDdlFmelJGSXNWVkV5VXo4MHZFanhKejI0TkdyanVPUnQxUUhJUzlYSUxoSUFpeGVHNjVaSStFTzdkR2Y5eTdIaTZHL0tGbWZhM0dHVkxCTnk5Ni80c21SR2VsZHBLa3JpbmFaWWgxdVhJK0MvZHV1dHdmTUxrWUF0Q2w5RjczZlplZGRQdjlBTDMyOWR6ZFhaN3N3d0NjSEU4bmZlYW1JdUpZRHhtNjl0Vkx1R2syLzZPZXdjNEFseDVzM3JUREMrcHNwaUhWWmJkRHZ3bTVhbFZtTlJ4MEcycitoOXZLQU9JVUtuelJDQzh0M3NVWDdMMWNza2ppaStscDkxbC94QmJvK1c1ZzB0WGhiditpcU9IeXUrZmczNG5aR1VZWURxdFg1M0c3eWRCWCsxRDE0YTFyNXJ5OTZtMkRXNWY2Q3c2dU9ha1RZTnpEblVyeHFBZi9ONHkrTytEL3FETHpQT09jNU9WUnBTQkRLWFNReXdSeTZqZytnd0ZFZzdkQWRTc0hJdXdCQ010aW1wNUlnRE5GOW1tMncxYXBOZVk2b0wvNllibExEV2tKcDBaTjJQN0pzcm5iaS9YcmRLVCtxTnVYVFVXZTlnUk1RaVhDUXZiRTA1VHpCUldzS0dZWklmZUhNS0cwMEVSTGZ5YXFZQkhEU2xPNE1FMzQ0REYwNXNJcHlTUzBnaFhLdklHY2hoNWVXaFVhUGdCTzczanRwMGdUSXJNSTZVNTVERFRxSTNXNGpndjlxazFmWWZERnQ5aTRiRjJZWjVGTGF3U3pzWVNVcm5yOXFDRlFhSjE3Skw0WW9FQ20rS20yc3dGQThQT0xZemJpa0hiYXJtR2tRZTlac1dYbWE2aWNiRkRwMnZLcE0walNiWG5OS1VFVWRyWnR3S3hQZFdkb2xWTzZGL3p6azMwcjcwVy9xM3VqLytqd1N4OFVZLzhyUnpxdlFmdFBoNUFoL2J0Mi9WYWJYVzFEbnE5NUJVanZJci8vTW1oUjdiSVFLTW40c2ZyOG04Mi9Bd2Q3cmtXRjBON2RjS1JUZ24xZDh6MGs1MXdyWTUyZHNTMllscC9YV1VweU1naW1oc25TRnlUT2ErV09UV2tvVE56QXgwZ0g4dGY0eXRnQnVKcG9YaG5IaVFWdHNQTytSUlRZZStjYTBRNVUrSXAzcVhGaWN5ZHkyYkVYQndxTTBqek9lMmVFZnZwSFpNckkvYXVXUzhlK0pEMEhOZ3QxK2tyeVl1OWUxM1lUb2ZWa2d1YloyZHRUWUY5aG5tRzQyUUpKM1BIRm9pNFg4N2pLZXJXNE8xc3Mwb1Q3SVNjRXBZYm1RQWJxVmlvVlI2NlNvc2I2RTJrdnlicG84eHVIUXp2YjFMTUdCZ2sxSGFPOWhPMDgyWEo5VTJWVFR1NHdtemM1SkV5SnRjUHRsaEFseWhReklFdUJWY01aeVZIZ1BkdkFXN3VXRDVTcXhwRk1nR2RTS0ppeWFyaWJEc1lCd05uZXJ1UFpjblBoa1o2RHJ6QlNKbVh5blp0TThlRzl4NWd2bWJXY2lHQWZDd2xoc1lTUTVvb2NDeERDN3E4SWpYL3ZiM1NuMy9VcWdMdFg4NXE5OXptL1k3b3M2L2w3ZUZrOWZzMU1FWUtDcURzTEN2Z012bk5DdWIwZTBEMkdVUVhNM0o4VHFWK1hLckd5WFh3aHVrb01rUlVVbVlOVFVvdGNJemRwZXNDUlgzaHNrUitWQms2Nkd5Z095V25NaUxvTzdhaEd3eUxBZ1NRVFBNcUVhbFUrVXRISkRtZllab3BoZXNYaXlCUFU3elVJMjdDdTFubmNrUnlJcnBPeU15UFpxazRHTTRTb0NmSjFScXdYeVVVaUkyQUdTVkZxRzdYYm9sK0d1bU9vRGhZSkt6NkZSNVFKdDd3V0h5d2lxYmYxRE44VVU1dnN6QjBhOVlRVVd0T1QxNnNXR2FNWHl6dmlyRVI0ZkJQaW1aUDQ5cmwzb2xtU2xaZVk5SldPVU1iekR3TWtrOWxsbndsMGU4UFBPSWl6YzY1b1lqL3UwY0d2RnJhQnFvM25sZFZuRGtwU3ZJYmdrQSs5NXhuMlMyZGdTenBqa3JOQnE0REhjYXdzK0hCZU9oS1hxVFRKQldMNWR3eGhXMzVqQ3AweHk3NVZ6dU9zTUptWTRjanRhUE04OURXVDhibW8wNmU5bm14dmhKd1IvQkRqcXhoVlJKYkxNWHlKaUFndXhGSU80Qkk4VXVUdXZyMVZmZ1ArT1RXTjFUUWpPMEVDemNVSzV4bzYyMnd2SmFPNWR0R1B0Ujk3Zyt4K1hWM0ZwbEFtdEF1d3hUeWF5cnZjTVdDSlp0aW90bHMwK1N3eVhzQ0hCemZYaVhYYTB3TWRzV0tld1pNbVJLbGtUZjdxUmhoSHMyT0tpTkxGSWJEUzdqMmxQMHlaU3NnSUFoZnVKR3ZrdlIwTlNXbUdabEpxakRqakx5aFh3SHR6eGpjNk1tRTk0S0hzTTVmdzhQdzNmdXo2UHYzUDc1NzArYUh2MXZ4K3JJUFIwMmNINWVmbHVuOThvd3dUb1BuRnptYTJNT1J1azlSY1RpSE5oSCtaYzJ1TWZSenIyMUszYzI4OGs1SGNNbjV1ZTJhUDlsKzNqbnZWZHJJbk1FS2Rrd1QxcVlYL3VNbW1kNjhYN0owRGl5ZytXdWZJS3A4M204QUlmTlZkTGJ0T2dmNXBMZTlTVjNaRU5ROFBzejhXS1ZyYVBBdDNwMlVPaTRHSEtNYmNDbjhVeTZlY3dQbXRFdmVubnlreS9WVmxZREMrWHF4SUFuQmZnTytETVk0V1pJVi9WVjJ2VWJ0d2JDRllJanJNMm1KSGVLZU9PZ1BnUmJRNEZmMGdDZ05va05LR2F1VFQzSWJpckRKYVBTNXhUZHQzcitKYys3Wnk2R2hjcXhyT3BiUGJlN01mYXhDeE4zblNHU2lMbmVIczFZZnU3Nk1UY1dyZ1NPbVN5bWs0WXB1aEF3M0xZVGp4Ri82NDkxUk90VzZqaHFJbTRpUzRlazlnZmluUy9obmlwV3hGd3MyNDZnYjViWjh2VnB4Nkd1QlYxbVQ1clhzZzV1UisyY0VHM0d1ZEg2MWdZVnpYazhJL1AzUkR1aXBmdm8vTGxmeDlOT3dQVXFnY3JqZ3VORW10aGdNZlZqSktvSXIxZksxVy9VTXBUNURhMXFYOGVXVnR0eDU4Uk9naTJxU3h3TEhpaEYvWEFMdE8rODV1SGJaRVVZbjA0dmp0cFpjcTJlMHZhaUdmM3Q4OXJmM2I2TGowOVAzcDlIWmYzNDQvbmdVOExUUm1PV0ozcVAwME9lMmwxdmYwdkZhZmF6Zzk2MHJQZjN3ZXJzM1RvKy9ldytjblBLT3JiaTc1RG1PTmJZbVF1N3d5T1FNcTU4RkNyVzdtK3ltbWhEejJPS1VEYVZENDV5cy9pc3ZBaVUrbEZSRjVMckszUyt4eUV1UnJUa2VUYkNLeDR5S3VCZzlFSjRJZ3pPaGFDS01zODRCSDhnU1J2QzkxcC9SQjZFOXNWaGVBQ2FzYncySnMza1g4SEtCV0JldzZqbXMwR1krNkhxOVAyZkNaSnI5V0YyRW1aeWNpS2prc1N5c0V3S2oxQkVRcTU0VFNCS1FSc1RBYzU1ZDZhaWVkNWs2Y1hvS3ZRamVva2J1Q2wxd1pRVk04aFJQcHVqck0yT0EyVEFXUjhRcGNzeHM4ZTJnaVpvQzFhdnYzcCtlSGIreHJWcThnWDlzUHd1WWhoYmlVNXN5cTlvSVV0WWMxMm1scHI4eU50dmVKMG1LWlpmRzRobzYxeGRsNzFzc3kxMFNDeTl2d3hqMWJTRVNaQ1Fnd3BFSVRqamdES2VMbklkM3JNbXprSUFKbVIrK0xBUFdKV0RDUzV6cDVDREhoYkpJQWNjWmlQSEp3cUlINGI5YlhJR2dSK1h1T2YybUZPeUcxNEI2azBJZ2dqWkdQT3BQUjhIL0R2NUFuSWFGblpJcWdHYjNhTEhOTUVkNWd5WGZMUDVxVjNwaXJNV1lmZWM5NUxER2o4R0dVdW96Ny9YY3lpQVFlTk95V2xkd3pRck9GTjl3RTF4QUJXVDFNbUs4ajB1eG0rSkVMMGxjU3BiVHhab2JJdEFPZ0psNHhFNWNvcHIxTnY3RWpHNW03R3A5ZlUxMnhqaFBNS3REYjZzZEhuVUZhNHYrZ2tCY2UzUmtWUmZadldpbU5qQTJENjgrcVBiTklvWEo5V250NUM0UDNZNkR6dFVuZU9zNGFsYlhYYklDTFpvVHdqam9wV3JkQkVWZm9sUnI4YVlyYjdyeXBxc2RURmQ2Z1pvbmJybHkrQlY1dzVVM1hIbkRsVGRjZWNPVk4xeDV3OVgybE5UYnJiemQ2bUhzVmhxWWViUFYxMmEyVWd1cE5sdXQxSlkxNGQ3YnJMek55dHVzdk0zSzI2eTh6Y3Jickx6Tnl0dXN2TTNxZWR1c1JOU2x0MXA1cTVXM1d1MFNjS1ZITFQvNWlDdFhrTFczWEhuTGxiZGNlY3VWdDF4NXk1VzNYTzFDUzczdHl0dXVIaWptU2djMGI3MzZtcXhYZFZuZEc2RzhFY29ib2J3UnlodWh2QkhLRzZHOEVjb2JvYndSNmprYW9SVE9Wc3ZKT0ZTVjg4bjAzSm1zOG1La0pJZVBjdkVqM1J0aVZsakRxN3Z4VWx3QmlvWVV1OHIwWk5iSVNXMDNSZjNkS3dhSEFVZ2gvY1NXSFZteGtjMlVVK3B3blJrYzRTQzREaTZweWY1VkZrMUxTa2dUTE9WbW1kQm5tWk82TDRpSjFlK1c5cFlxTFkyMW5OVENOQ2ZWNTdmOFZhdXlqZytVa1I0OVFwMStmWUJ5TTNoQ1hyUW5OSFFscWdDMmRDV3lrYlowSmFvQXRIWW0yclYweDgwUkxYMlZKcE9HamxRUWhWYnExeloyUmNKS3hhKzRMbGdEejFLQ2RsaXpBUEtEM01zYXE2VmQxbTJ5OWh6YWpqWm5WYkhCbHM3MFlnL2Jtb0gxY2dvVmpOYUtwdFJBM2MzTjE1dE9iRU0wMWlCb0xrbFVHYVdNTTdVM1YyRnNVb2ZDY1VzQkZzSDdXSGZBV2pXcjNDNExDbXJiTnRzcnBTRmQ1K29XamVQOHJuekxWZExHckxqeE52bUZ6UVNFNUEybGJ2b2tibDlxNVBpU2JOZVg1VEZmY2dYc3lSdUhGbkxlSC94S2M1ZDMrdk1nUU1YcUttTjNTYnJPeVFJSUNJS0VlVkxRMmZ2cHo1STVUYUVJTHNYVUwxRWZnQ3lpY0NCWndPMEFXZHZWd2NreUwrQk1neW5sRzRLQmx1emV1amgyeDdKTk5Rck9TaFkwZDYyeDJvOXdrYWFmMXF0aGJkV2p5N0RmclFCUURmNE03R1dyTkxzbDl2b3lXS2NpWnc2c28xREZ0dXVqTnAzWWhuaWVXTWZZQVk5MVBOWjVWS3lqd0orSmRRUW1lSTU0UitGOFhaaEhaYUpiY1kvV2VHSWY2Sm5pSDNNZlBBYnlHT2h4TVpBS2dRWU9JdG4wR1NLZ1VseDJZSjlLNW02N1BVckxpYVgvNTRsMDlPVjdqT014enFOaW5Bcjhhc1ZIVHhuaWlqdjJZSVZINVNVN2NtdGY2Mi90b1B4MStIN1ZsY0RsWjBmYlRsbzkzVW05VnQyc2VadHMrTHRibUFNcC90VWlwQTFLWUxYMHFIMjdYRWVXQVBqK3hMTGNXc1E0V1JhT3pWZXNycTl3YTA0S0VXdXdYM3hCYlg2cVQ0QkUrTUY1aDcyOHNMaTljenZmVVhDN1dXMWVTdk9PTk5QemlCdkxPNWN0OXFETHlrc0RIUjJGVTJDT2tUZVczdUxGZmJ4QnhMTjh5UU15eU04alFTK3FlQUViZzRiR0RVWHRwT0lVUW91VmxienFkM1hwNUM3NWRyS3BnTU5FL1RMR3VYUExUbks5VEROMkRndDlpUTh1dW9RcVNKZnpSaURtaUFMOWR0Nks1azVYNDg0NG96NlZaSzdlcW1aemRyMTlLRmZTL3FLNmJwaU5yWk11QTJvb3F0T2dCbEp6ZFdiZEduTTA5MGpHS0hWOGF1MWYzVDUzMzhxMkRTM1FKQ0pCZENOZnAvQVFqYzlyNXZCMjRDTDNEdzNaT1NTa1V5aEl3OFVNZmorUjIycUpFNm0vQnpnazIwUlg4ZlJUT2tkQ0t6NkYzL0cvRm4veCs1dGt3Y2dIM243bXpwaWtpdndTeCtnSXp0c2llS3M1TEt0MGZ1NWFJblhRNHY3ZENYUTRVVVgvWHI2RW8xNWpuMGp2QmZvdkhkUXo1TzZxT0RCaTl0eFNsQ1V1cnJIZEtQei84Y2piTzdQUGliL2RTSHNzb0htVHppWURXWHAyM09rdFFSc240bS80a1dVSkVOWi9zYlAwWTVFQm1XanoxamQ4R0ZzajFPU0g1bGRHemVmSjRSdUZDSDZ4U2pkOVlBendySTlhNTRNRllRR2ZrWitTdkpaNWloSEFzM1E1S01nUHUwTW5BSUdMVkxnN0xWRlRVQ1MzRkxrTTE2dkQ2NEM5NEg0Q21tdDBkYmNpa1hDSzh4KzJiSlJBczJLUmJEa0xidU1OQ0laM0dEb05NdDQ2NXo2NTFIV0hucXA0Q1BUQkxkSmd3YWdUakFuakxsc2s3M1hvU1JHeHNjNDlDYXNrb1dac2ltN0Fzei9qcG1aWWpiZkx4SkRNWDBscHM0eU1DVDVzNEZKd21FQUtTR2Zib2JmaFZJWW9qT0JkbUVSOGxhNkxJRjlQTVZTWFU2a3hoNWNPdmVYSjdRcDJpek9DV3F5NE13cHFUZ3ZTZ1R2OFc1eC9uN0RGckFyczZvK09PdDF5SkFMSmNzM2FnZVZCNDU5c0E0VWY0aXhuMzJmcHJjQTN4cUxid3lya2Z4dmNHMGQwUmFuajRaR1ozOFU1TzZhUENjYkQ1T0k1Q25VTmNTdi9ZQ0owQndFZkxyaDJmYm1ET2VLQjFTS2VVbW5xaHE2Z0RieVhpWmNRWjBDWCtIY2NzUEE2bEdJT0tsMGFldUVsb05jcndLZHNOZzR3dGtoQllGaUpHbThrOStac0NLNkY2V1RwS3I2R1hzYllBZVUvdUJlVnJETUduSVliWWdGU0xSN3ZTYzVaSW5vNXZscXdxTnpnWWZtcEJYWjVDTFdHODFyQXFvVHl4cGlobnE1V3prb2xEL2Mzc3ZvVU9TdEdWeXFpWVc4UGJuZ3JmZXFvcHFoU2kySzdQU1liU21kcjNwT2tTTG1IZGVKYytVS1BYRHZRc2ZzSFVaOGRkb3IxL2hVS3BhbWpIQjZFSGRWdCtxd3hhbFY3MEs3RmhsZVViL1dkbFE2VCsrenNqVTFOZ0ZpR1VOVi9FNmFhc1VXbGNiQ291enB0dTlNbDNyWlpobk5vVTZvSjgwWFM4dHBaVGx6c0JQK3gvNnpzOWFSMkZxMHlvNklISlhWNDEwT0pJaUczb1NMelM1cXlySnBWaHlaVlZ6Q292OVRjemc5ZEhkcFFBcW5YcFZVSHhJMDNwK3NsUXZWeGMzcUJ3ZmZwbWtLelovQUhLYVEyMGpLNEZBdStIUFE2aWpXcWNtMFNvR1JFU0IzRTY0d1JKMkdmalBKYUs5eEd3Ri9YWVRlRXArMnZ4cGdUMWZJeVBiZS9mczBUNmJDbzhlcUVzbGtudll2QUNpS3RpdTJLdSs2WGNadkcyKyttODBwVEdsaC9vNXNveWQzV3BoS3BZTGxtZWYwdGlzdmNYaTY1YUNCVEI2ejA0WkhRMTQ2RUhCaGhmeHlrM0tXSitHdHZKSzdPUlB5MXJrdVA3bEpsaHhibkd0cnZMV3pPQmtLQXM2Ni9YS2Jzc0hjQjh0Vk5sSkMxMUlwSE1MRE1FdTJrTWFDbTBLYnlvdzB4Vjl0SmdpZk9mYXpMS2hNN2lWQkJ0U0VIb0lwWTdMQ0dWdzB2Rmord0NiOG14bFpPOUs4dExoTWpIV2pXU3cxczNJSXozUkt0TGM2Tnpoei8rZE53WlBSc2wxN3ErMldBMWo0U2l5R3RORW9vZW95UkpvMG83aVRqU3Fpb0MrdXkvd1A0bE5CZzViSmZBM2xHWGN2NStlT3pGeGRqaXovYXhhTUltelZSZmZ2Z3Z3YjJvTlVkVDJZVWRJbjdOMlR1eFQvN2lmWXZxZzBtZFRhZXRBQUFyZDFmeGZKVElCT0xOSjU5S1hIMElaMXpha0dCdUEyVXlaRVhhNmdmV0JnYWNlRmZacHNlZ25YZmZ5Y3Jtc2FYYXlZQWRtN2liMU83OGFDZ0NUUHN1dDFmdWZ1VjBQZzRMT0MyL0s2U3NEcUpDYVh4a1YvQ1pYby9IQVcvVnhEMWlHY3dTMkIvTUcxWW80SVJGWVlWYWFyUGp5Y0dxUm8vdkpQWEFZaGdqU0k5SVU4eWRYbE41cWl0eE81ZHhPOERpZUYyUnR0eG9JWmZXdE1KZldWT2VNQVh6V2J5N3ZNMFl2TTB1eVdoaG95cU42eGNVZGhyOHB5enptMW9jWms3ZS9YeFA2S1ByLzkyL09iSHZ4ODdQT0VFTGdxVFBPWFRHUkp5a2M4NWRoallmS0VRSlEzTGVhSGxkcjBDZVdoa3kwdGRwbE5YZFJLV09Ca0w0YTJQMjZoQ0ZVaTgzVWJTYUIzWndoTm9DOWZEa1JYWEtIaGMxYjEwNURkR3JuVEFJb1dqazhDNzhVYVZKR1h5Q0s1MGxmVlpXWDBudnpydVNFYUpYQ1lERGhNTnptU0dBOW00TWRNNVpWK2QxUEt4TnF4QzNKZUovRER1cXRLczZXdFVabXRIRloxTXl5Nyt0a0ppUnlIam9lMElYeUJPNGhuby9SOURmRHpzeVQ0NVllZlpIbjZGRmVpRWRoQjRmME8yUDMvL20yVDBSZ0FCTmtPc1ZPVnlLWk1oVCtmZUxFbzJXbkpncHl3RXBzbDZpUHhEaSt3eTc3K09selMzVWdzUWxLb0ZtZTFTNWpydk4zU3pTOEZkWWhBR1I4R2NIRFVIWXZVRHVYVk53NlZ6WWpRU1RBL0xrNmJEOWd6NkhldHhZR1phRGxvN0haUFRsb2IvSVdqK3RzOUpMSC9IYzlyMTZuWSszSzliVGFZZTJiQ1QyWGlMeUVTYlFYbS93RWF2by9NNk9xK2o4em82cjZQYlVVZlg0R0hrVlhSZnA0cU9RT0szb0tGVFJLMm5wYURiTW9mSjgxRFI3WlBLNUhGOEx3Njg2ODlGZDdMUHdTanFibnN4NXk2K0hBOE83YzljdWZWQU4wZDNEV2srUG1SVGxGbnNwTmJROHRYODFsVlFlamFmU3JtaGJzSWphS0o4U3FVdmxWTEpheDY4NXNGckhyem13V3NlZHZVT2NyR0ZYdmZ3RmJzSHRTYWJlajcrUVNySC9ZRDZCek1lU0JTdDhGRkIybjgrS3VpZ1VVRVBGOUd5VTVXcnB4VWM1QU10R2dNdDlpU2VHb1EwMDgwU2xtV0Y5cGJVOW9SRlJYcjdWdHk4TzlWcjlveHVaWDkwT2xYSmgxMHBsWmRjdnhiSnRac3c1S1ZZTDhWNktkYkh1T3dxYkQ2ZW9Ma2J1ZTBlZjlKSnR0eGFydXdnVXo1U1NxaW54MXgvSGVFZTNxM2J1M1Y3dDI3djF1M2R1dTNHVmE4UmFQTEQ5QW9CcnhEd0NnR3ZFUEFLQWU5UTcvVUJCOVlITkRtN1B6MTF3TUZkbUorTFF1RFJuTXU5STZ4M2hQV09zRjVXYTdUZU5ubXVlV25OUzJ0ZVd2UFNtcGZXdkJPeWw5Y09iNzl0ZEJEK2toSmJ6K1pEbWEvWU5Ka25VN0VJeFl1eTJZT3lMczg5cWJESXc4aDdCNjNhdGEwQWNEam1mMy9HLytDT2xqcUJQWkRmY3UraHVMcnV6TmF1Zk5ZK1BOWnVMTW5PN01pMnJNaGViTWhPTElpdGJCRkpkYXIwNS9hTWN1TG16aFMxQXpYdFNFa1ZLdHJvYy9OVm9HT0w2bTE3UDV4SDhNRTVaSm0xUFR4em5GNDVOZVdlUmMzUlNhbDNBSVhlSTNyZ2ROZmdqWG9IOHJweGV0elV2VzJlK3hsMDg2NTVZTSthMFZmT2NUVjcwZXpoUWJPajk0eG44enliOTZYWlBJZTkrOGx6ZVZiTnp3NTgzaWxweUZwWXZKM01yTStRWDl6QlRMdTlFa0RhdWh6ODNGN20yMmJUN1RQbTdBNWdwdDJWd2ZzS05UTXQ1dGk5VGJHajN3NlJmdVlrczRWaVprUWRETVdJeStiZ3BKa0hKNFYvcFZ3UlhDZE5ENUFpTHRMMDAzbzFWUEpKS0pJVjE5RW5NNDBJS2phQ0UwVjNyaENGenVERVgybXFzM3p1TEpVc2MxMG9GWmFicXlzYlJGOHNiU0kvR0RSTnJjbzdhWjNFdUxmbHNiaU9wR0pWSWxPVnBwMk1zdHRQUmlsMUdBWWppdVNKdEhTandhR3RIN1g0ZTdSLzdnNENVN0pSdW9CeXZJZGRRd0hqYlVqblljam1maVR6b0lZTWhXMDNoVFB0UEt0bWh5S0VPM2gvZEtXQXU0cW8yM3A1Yk9QZHNhZFh4Nmkzdnl5OUUxT3dEVU93TXpPd3Rld3NjUlkxcmhDWUJpcGxHeGphQ2lQR1dUdnlBMVVqQVV3TzBZQWQ0ajkvUXM4SnRTRjZYalMrcnByanI5bVNaZndYTVllaVhFYWJBd0UzMGdONUN1WFN5NmN1Ujd5Y08vZnhOK3M0bmYrNmxmZkJXMjVxZHpraGNCTGJFZ25lV1V1aElLbE1Jbi9ZMElvc21GeVZ1dk5qTjMvUXE5K3V2RmhmSVdhdGVBNkxQc2JrZ0lZR2h5cnBrKzVnempsVzZQK1pXTzIyNEowTS9aUm5uYjRzNjdTOVZmR0JMWXFINXVVMFk2UEN5dTFvYWJSYUdUVTlsS0dEYXRVLzdhbDdlaVNMWWpkbDA2aTNweFhSYWtIVXJZZlBjWC9icllVUGFDa2NmV1hpaTlzcXVLTkZjQWRyb0plVnZLemtaU1V2S3oyUXJOUVVKZnZWaWtyUHd2SnRPcWovRmZzamNRa2dwdnc4bkdmcHY2Q25zMnpOK0RzaW1mUnJTWEdWUE5KUlpRdm9MRmhVYi9NTTFLczBMMlFhYXJTVU9MSWdtL0xPSFpCd0RHeUw0bnlhSkVOSHJtTzdIcCt3dC96SkFzdHZYLzJmNk5YcnMvZW4wY21iNk8vSDczNDQrNXZGc1l3dHI0dWI2RFpaVHQ2ZXZHdHZ6L0RHMVdJcmFDMG5TMW9ON1JESUdrUjNMRUN6V0xEcmVCRUJMNUNCOUFtTXhHVHd6K1UvZi9uREgrRC9QdzY2T0RwODFlRUZqNkdscjluK3F1RWlsejVGMmUvbVlGVmxMeWJLWjF2RGlvQk9taTZDZDNwK3JrN1BqNkNtYUlKbEI4SDdncUJzRTdKYW5TdDdyc0F0WngxQnZDQVZod2Q3UUZjRFJNMGt6cHV0MmdCYkFZdW5OeEZ5SHhTZ2VSUUFaQzdnOSs5ajREUU5nM2RGYjArVTRmVFQwU3J0YlR0bG1NNG50amtLaVAvOThjZVROL3RPb0RaT0N3cnBzR2ROZDVNbWI3NWNMc2JlaGJuLzV1dDRIbzRMdDkzRzFKd083QzlaYnBES0d0clFwVUNBcWtob0Z5OW9leWYwTDUzMEJQNDNJWENpZjYzejZaWUxXZmxJdEJNV3EzTkpxYnBwVjhWdnhWZzJ1WStvM0d1SE14cFdxMHhtby8zWVpSMUllcmFEMWlpb1EzZStGODlkMDd0NG50RHpoQTJFMUZBVlRtcFpNandiNmRuSTN5d2J1U1gwSDRiejdMMW8rQytRZVkvZ0RHY3NpR2Z4Q3VYL29PbWQzb3ZneDV6Tmdxc052UlQrbkV1bFlSWWt0M0RzYURJaHNwOWpwcEI0T21WQXR6NXM0SENXUUtObjNHS0c3Vi9pcXVJUU9qeGxDM2FIcW01NFFYWUczQVZBaFBMRGRKR2dNUVk0UTA0S2E4bWJjRHF2Y0FscE5xeUFRZjQ2RWtSU3EwOUdpcUVLcHZpSi9KeEhjaEtScWtia3Y1WnNodHB1T0twYlVJb2lld21ESlVzbWxWTTR0QUR1ZjhFN3BWYXFBU2RnODdCNko1ZDZWZmhjOTBVMUoyaU01VmhacDZrcjdnN29jQ3g0ZlhHRk9oVXZwNVhDeEdxek5tMXlQK2ZwTXVMcFhhUmQ3aXo5ZDNnNHRLbEoxeXZjL1pCdVhVaFRFeE9vdVhBb1N5QlY3YkJucHgvYkxLcDZpMnQvTFRYc1VPNFl5OGV2Y05MMEhCOHJkZVZvMFFMUkhPRTJLZXdtYlpxRkVrcU5NNjM5S0dpeGJScEdaaG93WS9sNklld0paYjRiMFdzTjFYUS9KK3B2MUd0SUptTU1qRjJGS0Z6bXc5cThqRGY1UWI5T1Y1dnZzL1IydTFsK2lMT2N2VWxjV1dyVVVjKzVIbmR3TVc1SVhhWWFWYUtoTGV0UTB4NGd4NThWd1lBUE8rQUc1R29HbHYwaWU0TTZSL0hxaGExZm5OV1FOeGdGRTdKSjlheTVmTEJGTlRNQmc1WkRFYjlvVEJsZmdVTENhQm1pWmE5bkQxdlFycXhic3VlQ3B1anJYQnZrSXJ4bXhYQkFMVXpERW9xa1RTL0I3K1lyaHZEYTlEWTJQWkV0QjJQaWZaVGVScUdKV3hTTVluQ0YvSjdwRHdtVStKRk1TaVJRMFhvMi9jUTEvU2dXNmordWwrcE95alh3U2V1L3dheTVZcWdXSU5DZVZzZ3QzMjJEUTlWWVJTUCs0Mmc3M2xCK0c1c09Ga2U3dTRjcm1QY1FtWVBvN2toRXR6TU9GV2hST285MDcwZThvOTdhcXpRckdJajVkSmh3TUx4KzdEbUNNckx6K3VPaDhtYVJiWnhFeEV5WGxzVUFjQXZnSUlZdDdJVWR0Vm81Rll1MWpWOGlpNjNON1h3N2RhVVlGaHRULzZFNlFzZHZWb05zZFhqc2x5bGJGZVhHdmtZbnNjV0N6Y2dnWjFROTVYTUljMWFJalIwU2lxazdpUFhjN2dUbGlkanBxa0dIa25rd1lKUzhMVmVJVU4xQlFiUXBpZEI1K2RaRnorN04wRUNtOXlUVnlueGFLRFh0eHk0b1pUZ2FkL1N2c1NUS0U1UVIvVmh1NGh3QmZpaW1PdzRHbERNUGFGRFEvL2VQdlBJdE5keXdvaEtnMkt6dlRMKzN4NzZWZTVZSlBPWGF0dDB4WHpzZnhCWUljbmhxNjJhSTQxNVQ5cFdVNTJUOVZjenBGYjlOOWlaekFNeUl6OElOWkh2Q2FIVWJ6K1dDRytCVVhweDFUdnY2a2MrdG9TVDZhRHNJZFNyUm5qWHhWcDBqZDZUZGp2Uk5ublIvR2RMdDhnWHpsTnRUYmsrNUQwaTVOYnozTkFnM1RjblRiUWZkcmlWMjJJSnlhMm1Fbm9iWXJTVXgyVlh1ZGlYcjhkVDdJYWszVHp0aUZieWQrYk05L2E3VDd4S2ROK0xUdmNtSFJHWUhsZnYwbS9kRUJEOCtLVTlCdXBxQVM3UDhmalpnemNMZjNSQU1QU21tWU0wUTdMVDNha1BaamI3YnB2V1J4bUhGdUliZUdIVVVpbDZRV1RKVDR1SjBDcXg0YUV5RkNkQmlFMnd4MVZuc2hRcnNDRVFWOFhuaHY1ckJXS0F4Y1FFdWFpUmFmYTkxSGxZeWFMVlBXZ0ljbGZGVVl0WjZzWVlhWmcvcWhMUkdEaVZXSzJtaDNQdUtDaHNVNGJzNFo4ZjBFY09sNDF3OFIyK2FXdkJYRmRoYk5ocHJwekJ5WW13aUE3UDE3Y3FCYUg1MVJ3RUtwSEhVamVWb1IwYmwzTU1pbGNodnRDVisrZHlDNE52SlkrdXUySGVrb2xzSDJRL1pXMGNrK3JuWHlKUkhNbi9YWHVpQzI5bVV1N1dkS3U0TDUveXNTb2JKcW1Calc3andUdGtkZm9zb1RNY3JrakhldXA0ZDZpQlFLbUVGYVNwNlRtYXBZNEU3V2R6T3lhbFhBWk5ZWTBjMGE2eXZNN0pHSHdLb0d6ejdzTnl0V2pHY1VlOUFXQVMzNjJSMkdCeUNmWVdpdk04K2VFUVkzbmNvdDFYRjF6ZkcwOWVxY0xWWDM3SlcycXI3QzhodFVLdGxTVkNVWGg2aWNKWjB5aHFMd3g4TmU2MFJyWjJpV1JzaVdVYzFCeFFYeU5UQlpSZFFFVnVobi92bkJqYzBrYnB6YTZxeFBhbDRiaW1rSHdMUmQzS3oyOElOU2orTkNPVE8yUUk1MFBsNk9TM1NkSkdIS0VNbjhVS0h0ZG9GRVZCUXV5RU5hVDVWNzU0Ky8rVU1mK2hyZDlUdWZjVjlSRkc0MFoyTEJNYzgwWll6dHFsSXVBdFNPODJSS3dsK0h3eUVPS0tuckRDV3FCNzZSUDB5N3JuMFBoTzdFc2poOGZrb1Y4MWZFWXVuNEtFS1I2ajhrOHZ0OE1oRlJJaWgyekh5YlVkbnhCMGRFZy9ybEdqUVF0TEJDZnJ1M2pmS2FUU2h1cnpBM04ydVNDOTFKcjhaa2lNMkR0RmNpSnJ2ajBVR3h6c3NKMXlPZFhFK3dJYURpMUZiVHV0U29IS3dqaE1iQjltSmZ5MTVTNW95RUc0aHJkaDBiWjJ6YVhSRVhCMlJsM0ZjKzVJWGdmbGF5RXVudFhvYXRCY05LaXJLNEFtUkowU2VFSGxDOUZVUklvRm1QQ2w2QXVLUVBJdEhvRU5lcitCcDFiT25WVExVelVhdnFsYWRhZFhXZEtxM05aRnFJRkNOeEtrclllcUVwaDhTaDgzSlRTcWluWGdVUExZZjZxRmxDUlZ4STRyZzYzSlpkYXpraEh1TVZkUmsxQ0grVUV4bDBtN0xzdk1PNHYzNkhTU0ZQNGQ4MHFHYmdPT3dJN1RhOVBtK0hOeVE3L2FkOEdiOXI4eXMveUxZeEt2NVVjQ1d5UHIxL2krWHFSQmlrWHNEQUE9PVwiKTtcbn1cblxuaW1wb3J0UHlzKClcbiIsICIvLyBAZ2VuZXJhdGVkIGJ5IHByb3RvYy1nZW4tZXMgdjEuMy4yIHdpdGggcGFyYW1ldGVyIFwidGFyZ2V0PXRzXCJcbi8vIEBnZW5lcmF0ZWQgZnJvbSBmaWxlIHJidC90aGlyZHBhcnR5L3Byb3NlbWlycm9yL3YxL2F1dGhvcml0eS5wcm90byAocGFja2FnZSByYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MSwgc3ludGF4IHByb3RvMylcbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuXG5pbXBvcnQgdHlwZSB7IEJpbmFyeVJlYWRPcHRpb25zLCBGaWVsZExpc3QsIEpzb25SZWFkT3B0aW9ucywgSnNvblZhbHVlLCBQYXJ0aWFsTWVzc2FnZSwgUGxhaW5NZXNzYWdlIH0gZnJvbSBcIkBidWZidWlsZC9wcm90b2J1ZlwiO1xuaW1wb3J0IHsgTWVzc2FnZSwgcHJvdG8zLCBTdHJ1Y3QgfSBmcm9tIFwiQGJ1ZmJ1aWxkL3Byb3RvYnVmXCI7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnRoaXJkcGFydHkucHJvc2VtaXJyb3IudjEuQXV0aG9yaXR5XG4gKi9cbmV4cG9ydCBjbGFzcyBBdXRob3JpdHkgZXh0ZW5kcyBNZXNzYWdlPEF1dGhvcml0eT4ge1xuICAvKipcbiAgICogQGdlbmVyYXRlZCBmcm9tIGZpZWxkOiByZXBlYXRlZCByYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5DaGFuZ2UgY2hhbmdlcyA9IDE7XG4gICAqL1xuICBjaGFuZ2VzOiBDaGFuZ2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsTWVzc2FnZTxBdXRob3JpdHk+KSB7XG4gICAgc3VwZXIoKTtcbiAgICBwcm90bzMudXRpbC5pbml0UGFydGlhbChkYXRhLCB0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyByZWFkb25seSBydW50aW1lOiB0eXBlb2YgcHJvdG8zID0gcHJvdG8zO1xuICBzdGF0aWMgcmVhZG9ubHkgdHlwZU5hbWUgPSBcInJidC50aGlyZHBhcnR5LnByb3NlbWlycm9yLnYxLkF1dGhvcml0eVwiO1xuICBzdGF0aWMgcmVhZG9ubHkgZmllbGRzOiBGaWVsZExpc3QgPSBwcm90bzMudXRpbC5uZXdGaWVsZExpc3QoKCkgPT4gW1xuICAgIHsgbm86IDEsIG5hbWU6IFwiY2hhbmdlc1wiLCBraW5kOiBcIm1lc3NhZ2VcIiwgVDogQ2hhbmdlLCByZXBlYXRlZDogdHJ1ZSB9LFxuICBdKTtcblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogVWludDhBcnJheSwgb3B0aW9ucz86IFBhcnRpYWw8QmluYXJ5UmVhZE9wdGlvbnM+KTogQXV0aG9yaXR5IHtcbiAgICByZXR1cm4gbmV3IEF1dGhvcml0eSgpLmZyb21CaW5hcnkoYnl0ZXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25WYWx1ZTogSnNvblZhbHVlLCBvcHRpb25zPzogUGFydGlhbDxKc29uUmVhZE9wdGlvbnM+KTogQXV0aG9yaXR5IHtcbiAgICByZXR1cm4gbmV3IEF1dGhvcml0eSgpLmZyb21Kc29uKGpzb25WYWx1ZSwgb3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpzb25TdHJpbmcoanNvblN0cmluZzogc3RyaW5nLCBvcHRpb25zPzogUGFydGlhbDxKc29uUmVhZE9wdGlvbnM+KTogQXV0aG9yaXR5IHtcbiAgICByZXR1cm4gbmV3IEF1dGhvcml0eSgpLmZyb21Kc29uU3RyaW5nKGpzb25TdHJpbmcsIG9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGVxdWFscyhhOiBBdXRob3JpdHkgfCBQbGFpbk1lc3NhZ2U8QXV0aG9yaXR5PiB8IHVuZGVmaW5lZCwgYjogQXV0aG9yaXR5IHwgUGxhaW5NZXNzYWdlPEF1dGhvcml0eT4gfCB1bmRlZmluZWQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvdG8zLnV0aWwuZXF1YWxzKEF1dGhvcml0eSwgYSwgYik7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGBDaGFuZ2VgIGlzIGEgcHJvc2VtaXJyb3IgYHN0ZXBgIGZyb20gYSBzcGVjaWZpYyBgY2xpZW50YC5cbiAqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5DaGFuZ2VcbiAqL1xuZXhwb3J0IGNsYXNzIENoYW5nZSBleHRlbmRzIE1lc3NhZ2U8Q2hhbmdlPiB7XG4gIC8qKlxuICAgKiBTZWUgcHJvc2VtaXJyb3IgYFN0ZXBgIHR5cGUuXG4gICAqXG4gICAqIEBnZW5lcmF0ZWQgZnJvbSBmaWVsZDogZ29vZ2xlLnByb3RvYnVmLlN0cnVjdCBzdGVwID0gMTtcbiAgICovXG4gIHN0ZXA/OiBTdHJ1Y3Q7XG5cbiAgLyoqXG4gICAqIFRoZSBjbGllbnQgdGhhdCBhdXRob3JlZCB0aGlzIGNoYW5nZS5cbiAgICpcbiAgICogQGdlbmVyYXRlZCBmcm9tIGZpZWxkOiBzdHJpbmcgY2xpZW50ID0gMjtcbiAgICovXG4gIGNsaWVudCA9IFwiXCI7XG5cbiAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWxNZXNzYWdlPENoYW5nZT4pIHtcbiAgICBzdXBlcigpO1xuICAgIHByb3RvMy51dGlsLmluaXRQYXJ0aWFsKGRhdGEsIHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIHJlYWRvbmx5IHJ1bnRpbWU6IHR5cGVvZiBwcm90bzMgPSBwcm90bzM7XG4gIHN0YXRpYyByZWFkb25seSB0eXBlTmFtZSA9IFwicmJ0LnRoaXJkcGFydHkucHJvc2VtaXJyb3IudjEuQ2hhbmdlXCI7XG4gIHN0YXRpYyByZWFkb25seSBmaWVsZHM6IEZpZWxkTGlzdCA9IHByb3RvMy51dGlsLm5ld0ZpZWxkTGlzdCgoKSA9PiBbXG4gICAgeyBubzogMSwgbmFtZTogXCJzdGVwXCIsIGtpbmQ6IFwibWVzc2FnZVwiLCBUOiBTdHJ1Y3QgfSxcbiAgICB7IG5vOiAyLCBuYW1lOiBcImNsaWVudFwiLCBraW5kOiBcInNjYWxhclwiLCBUOiA5IC8qIFNjYWxhclR5cGUuU1RSSU5HICovIH0sXG4gIF0pO1xuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBVaW50OEFycmF5LCBvcHRpb25zPzogUGFydGlhbDxCaW5hcnlSZWFkT3B0aW9ucz4pOiBDaGFuZ2Uge1xuICAgIHJldHVybiBuZXcgQ2hhbmdlKCkuZnJvbUJpbmFyeShieXRlcywgb3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpzb24oanNvblZhbHVlOiBKc29uVmFsdWUsIG9wdGlvbnM/OiBQYXJ0aWFsPEpzb25SZWFkT3B0aW9ucz4pOiBDaGFuZ2Uge1xuICAgIHJldHVybiBuZXcgQ2hhbmdlKCkuZnJvbUpzb24oanNvblZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnNvblN0cmluZyhqc29uU3RyaW5nOiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPEpzb25SZWFkT3B0aW9ucz4pOiBDaGFuZ2Uge1xuICAgIHJldHVybiBuZXcgQ2hhbmdlKCkuZnJvbUpzb25TdHJpbmcoanNvblN0cmluZywgb3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgZXF1YWxzKGE6IENoYW5nZSB8IFBsYWluTWVzc2FnZTxDaGFuZ2U+IHwgdW5kZWZpbmVkLCBiOiBDaGFuZ2UgfCBQbGFpbk1lc3NhZ2U8Q2hhbmdlPiB8IHVuZGVmaW5lZCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcm90bzMudXRpbC5lcXVhbHMoQ2hhbmdlLCBhLCBiKTtcbiAgfVxufVxuXG4vKipcbiAqIEBnZW5lcmF0ZWQgZnJvbSBtZXNzYWdlIHJidC50aGlyZHBhcnR5LnByb3NlbWlycm9yLnYxLkNyZWF0ZVJlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIENyZWF0ZVJlcXVlc3QgZXh0ZW5kcyBNZXNzYWdlPENyZWF0ZVJlcXVlc3Q+IHtcbiAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWxNZXNzYWdlPENyZWF0ZVJlcXVlc3Q+KSB7XG4gICAgc3VwZXIoKTtcbiAgICBwcm90bzMudXRpbC5pbml0UGFydGlhbChkYXRhLCB0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyByZWFkb25seSBydW50aW1lOiB0eXBlb2YgcHJvdG8zID0gcHJvdG8zO1xuICBzdGF0aWMgcmVhZG9ubHkgdHlwZU5hbWUgPSBcInJidC50aGlyZHBhcnR5LnByb3NlbWlycm9yLnYxLkNyZWF0ZVJlcXVlc3RcIjtcbiAgc3RhdGljIHJlYWRvbmx5IGZpZWxkczogRmllbGRMaXN0ID0gcHJvdG8zLnV0aWwubmV3RmllbGRMaXN0KCgpID0+IFtcbiAgXSk7XG5cbiAgc3RhdGljIGZyb21CaW5hcnkoYnl0ZXM6IFVpbnQ4QXJyYXksIG9wdGlvbnM/OiBQYXJ0aWFsPEJpbmFyeVJlYWRPcHRpb25zPik6IENyZWF0ZVJlcXVlc3Qge1xuICAgIHJldHVybiBuZXcgQ3JlYXRlUmVxdWVzdCgpLmZyb21CaW5hcnkoYnl0ZXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25WYWx1ZTogSnNvblZhbHVlLCBvcHRpb25zPzogUGFydGlhbDxKc29uUmVhZE9wdGlvbnM+KTogQ3JlYXRlUmVxdWVzdCB7XG4gICAgcmV0dXJuIG5ldyBDcmVhdGVSZXF1ZXN0KCkuZnJvbUpzb24oanNvblZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnNvblN0cmluZyhqc29uU3RyaW5nOiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPEpzb25SZWFkT3B0aW9ucz4pOiBDcmVhdGVSZXF1ZXN0IHtcbiAgICByZXR1cm4gbmV3IENyZWF0ZVJlcXVlc3QoKS5mcm9tSnNvblN0cmluZyhqc29uU3RyaW5nLCBvcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBlcXVhbHMoYTogQ3JlYXRlUmVxdWVzdCB8IFBsYWluTWVzc2FnZTxDcmVhdGVSZXF1ZXN0PiB8IHVuZGVmaW5lZCwgYjogQ3JlYXRlUmVxdWVzdCB8IFBsYWluTWVzc2FnZTxDcmVhdGVSZXF1ZXN0PiB8IHVuZGVmaW5lZCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcm90bzMudXRpbC5lcXVhbHMoQ3JlYXRlUmVxdWVzdCwgYSwgYik7XG4gIH1cbn1cblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5DcmVhdGVSZXNwb25zZVxuICovXG5leHBvcnQgY2xhc3MgQ3JlYXRlUmVzcG9uc2UgZXh0ZW5kcyBNZXNzYWdlPENyZWF0ZVJlc3BvbnNlPiB7XG4gIC8qKlxuICAgKiBTZWUgcHJvc2VtaXJyb3IgYE5vZGVgIHR5cGUgd2hpY2ggaXMgdXNlZCB0byByZXByZXNlbnQgYSBcImRvY1wiLlxuICAgKlxuICAgKiBAZ2VuZXJhdGVkIGZyb20gZmllbGQ6IGdvb2dsZS5wcm90b2J1Zi5TdHJ1Y3QgZG9jID0gMTtcbiAgICovXG4gIGRvYz86IFN0cnVjdDtcblxuICAvKipcbiAgICogQGdlbmVyYXRlZCBmcm9tIGZpZWxkOiB1aW50MzIgdmVyc2lvbiA9IDI7XG4gICAqL1xuICB2ZXJzaW9uID0gMDtcblxuICBjb25zdHJ1Y3RvcihkYXRhPzogUGFydGlhbE1lc3NhZ2U8Q3JlYXRlUmVzcG9uc2U+KSB7XG4gICAgc3VwZXIoKTtcbiAgICBwcm90bzMudXRpbC5pbml0UGFydGlhbChkYXRhLCB0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyByZWFkb25seSBydW50aW1lOiB0eXBlb2YgcHJvdG8zID0gcHJvdG8zO1xuICBzdGF0aWMgcmVhZG9ubHkgdHlwZU5hbWUgPSBcInJidC50aGlyZHBhcnR5LnByb3NlbWlycm9yLnYxLkNyZWF0ZVJlc3BvbnNlXCI7XG4gIHN0YXRpYyByZWFkb25seSBmaWVsZHM6IEZpZWxkTGlzdCA9IHByb3RvMy51dGlsLm5ld0ZpZWxkTGlzdCgoKSA9PiBbXG4gICAgeyBubzogMSwgbmFtZTogXCJkb2NcIiwga2luZDogXCJtZXNzYWdlXCIsIFQ6IFN0cnVjdCB9LFxuICAgIHsgbm86IDIsIG5hbWU6IFwidmVyc2lvblwiLCBraW5kOiBcInNjYWxhclwiLCBUOiAxMyAvKiBTY2FsYXJUeXBlLlVJTlQzMiAqLyB9LFxuICBdKTtcblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogVWludDhBcnJheSwgb3B0aW9ucz86IFBhcnRpYWw8QmluYXJ5UmVhZE9wdGlvbnM+KTogQ3JlYXRlUmVzcG9uc2Uge1xuICAgIHJldHVybiBuZXcgQ3JlYXRlUmVzcG9uc2UoKS5mcm9tQmluYXJ5KGJ5dGVzLCBvcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uVmFsdWU6IEpzb25WYWx1ZSwgb3B0aW9ucz86IFBhcnRpYWw8SnNvblJlYWRPcHRpb25zPik6IENyZWF0ZVJlc3BvbnNlIHtcbiAgICByZXR1cm4gbmV3IENyZWF0ZVJlc3BvbnNlKCkuZnJvbUpzb24oanNvblZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnNvblN0cmluZyhqc29uU3RyaW5nOiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPEpzb25SZWFkT3B0aW9ucz4pOiBDcmVhdGVSZXNwb25zZSB7XG4gICAgcmV0dXJuIG5ldyBDcmVhdGVSZXNwb25zZSgpLmZyb21Kc29uU3RyaW5nKGpzb25TdHJpbmcsIG9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGVxdWFscyhhOiBDcmVhdGVSZXNwb25zZSB8IFBsYWluTWVzc2FnZTxDcmVhdGVSZXNwb25zZT4gfCB1bmRlZmluZWQsIGI6IENyZWF0ZVJlc3BvbnNlIHwgUGxhaW5NZXNzYWdlPENyZWF0ZVJlc3BvbnNlPiB8IHVuZGVmaW5lZCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcm90bzMudXRpbC5lcXVhbHMoQ3JlYXRlUmVzcG9uc2UsIGEsIGIpO1xuICB9XG59XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnRoaXJkcGFydHkucHJvc2VtaXJyb3IudjEuQXBwbHlSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBseVJlcXVlc3QgZXh0ZW5kcyBNZXNzYWdlPEFwcGx5UmVxdWVzdD4ge1xuICAvKipcbiAgICogQGdlbmVyYXRlZCBmcm9tIGZpZWxkOiB1aW50MzIgdmVyc2lvbiA9IDE7XG4gICAqL1xuICB2ZXJzaW9uID0gMDtcblxuICAvKipcbiAgICogQGdlbmVyYXRlZCBmcm9tIGZpZWxkOiByZXBlYXRlZCByYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5DaGFuZ2UgY2hhbmdlcyA9IDI7XG4gICAqL1xuICBjaGFuZ2VzOiBDaGFuZ2VbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsTWVzc2FnZTxBcHBseVJlcXVlc3Q+KSB7XG4gICAgc3VwZXIoKTtcbiAgICBwcm90bzMudXRpbC5pbml0UGFydGlhbChkYXRhLCB0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyByZWFkb25seSBydW50aW1lOiB0eXBlb2YgcHJvdG8zID0gcHJvdG8zO1xuICBzdGF0aWMgcmVhZG9ubHkgdHlwZU5hbWUgPSBcInJidC50aGlyZHBhcnR5LnByb3NlbWlycm9yLnYxLkFwcGx5UmVxdWVzdFwiO1xuICBzdGF0aWMgcmVhZG9ubHkgZmllbGRzOiBGaWVsZExpc3QgPSBwcm90bzMudXRpbC5uZXdGaWVsZExpc3QoKCkgPT4gW1xuICAgIHsgbm86IDEsIG5hbWU6IFwidmVyc2lvblwiLCBraW5kOiBcInNjYWxhclwiLCBUOiAxMyAvKiBTY2FsYXJUeXBlLlVJTlQzMiAqLyB9LFxuICAgIHsgbm86IDIsIG5hbWU6IFwiY2hhbmdlc1wiLCBraW5kOiBcIm1lc3NhZ2VcIiwgVDogQ2hhbmdlLCByZXBlYXRlZDogdHJ1ZSB9LFxuICBdKTtcblxuICBzdGF0aWMgZnJvbUJpbmFyeShieXRlczogVWludDhBcnJheSwgb3B0aW9ucz86IFBhcnRpYWw8QmluYXJ5UmVhZE9wdGlvbnM+KTogQXBwbHlSZXF1ZXN0IHtcbiAgICByZXR1cm4gbmV3IEFwcGx5UmVxdWVzdCgpLmZyb21CaW5hcnkoYnl0ZXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25WYWx1ZTogSnNvblZhbHVlLCBvcHRpb25zPzogUGFydGlhbDxKc29uUmVhZE9wdGlvbnM+KTogQXBwbHlSZXF1ZXN0IHtcbiAgICByZXR1cm4gbmV3IEFwcGx5UmVxdWVzdCgpLmZyb21Kc29uKGpzb25WYWx1ZSwgb3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpzb25TdHJpbmcoanNvblN0cmluZzogc3RyaW5nLCBvcHRpb25zPzogUGFydGlhbDxKc29uUmVhZE9wdGlvbnM+KTogQXBwbHlSZXF1ZXN0IHtcbiAgICByZXR1cm4gbmV3IEFwcGx5UmVxdWVzdCgpLmZyb21Kc29uU3RyaW5nKGpzb25TdHJpbmcsIG9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGVxdWFscyhhOiBBcHBseVJlcXVlc3QgfCBQbGFpbk1lc3NhZ2U8QXBwbHlSZXF1ZXN0PiB8IHVuZGVmaW5lZCwgYjogQXBwbHlSZXF1ZXN0IHwgUGxhaW5NZXNzYWdlPEFwcGx5UmVxdWVzdD4gfCB1bmRlZmluZWQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvdG8zLnV0aWwuZXF1YWxzKEFwcGx5UmVxdWVzdCwgYSwgYik7XG4gIH1cbn1cblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5BcHBseVJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBseVJlc3BvbnNlIGV4dGVuZHMgTWVzc2FnZTxBcHBseVJlc3BvbnNlPiB7XG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsTWVzc2FnZTxBcHBseVJlc3BvbnNlPikge1xuICAgIHN1cGVyKCk7XG4gICAgcHJvdG8zLnV0aWwuaW5pdFBhcnRpYWwoZGF0YSwgdGhpcyk7XG4gIH1cblxuICBzdGF0aWMgcmVhZG9ubHkgcnVudGltZTogdHlwZW9mIHByb3RvMyA9IHByb3RvMztcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGVOYW1lID0gXCJyYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5BcHBseVJlc3BvbnNlXCI7XG4gIHN0YXRpYyByZWFkb25seSBmaWVsZHM6IEZpZWxkTGlzdCA9IHByb3RvMy51dGlsLm5ld0ZpZWxkTGlzdCgoKSA9PiBbXG4gIF0pO1xuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBVaW50OEFycmF5LCBvcHRpb25zPzogUGFydGlhbDxCaW5hcnlSZWFkT3B0aW9ucz4pOiBBcHBseVJlc3BvbnNlIHtcbiAgICByZXR1cm4gbmV3IEFwcGx5UmVzcG9uc2UoKS5mcm9tQmluYXJ5KGJ5dGVzLCBvcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnNvbihqc29uVmFsdWU6IEpzb25WYWx1ZSwgb3B0aW9ucz86IFBhcnRpYWw8SnNvblJlYWRPcHRpb25zPik6IEFwcGx5UmVzcG9uc2Uge1xuICAgIHJldHVybiBuZXcgQXBwbHlSZXNwb25zZSgpLmZyb21Kc29uKGpzb25WYWx1ZSwgb3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpzb25TdHJpbmcoanNvblN0cmluZzogc3RyaW5nLCBvcHRpb25zPzogUGFydGlhbDxKc29uUmVhZE9wdGlvbnM+KTogQXBwbHlSZXNwb25zZSB7XG4gICAgcmV0dXJuIG5ldyBBcHBseVJlc3BvbnNlKCkuZnJvbUpzb25TdHJpbmcoanNvblN0cmluZywgb3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgZXF1YWxzKGE6IEFwcGx5UmVzcG9uc2UgfCBQbGFpbk1lc3NhZ2U8QXBwbHlSZXNwb25zZT4gfCB1bmRlZmluZWQsIGI6IEFwcGx5UmVzcG9uc2UgfCBQbGFpbk1lc3NhZ2U8QXBwbHlSZXNwb25zZT4gfCB1bmRlZmluZWQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gcHJvdG8zLnV0aWwuZXF1YWxzKEFwcGx5UmVzcG9uc2UsIGEsIGIpO1xuICB9XG59XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnRoaXJkcGFydHkucHJvc2VtaXJyb3IudjEuQ2hhbmdlc1JlcXVlc3RcbiAqL1xuZXhwb3J0IGNsYXNzIENoYW5nZXNSZXF1ZXN0IGV4dGVuZHMgTWVzc2FnZTxDaGFuZ2VzUmVxdWVzdD4ge1xuICAvKipcbiAgICogQGdlbmVyYXRlZCBmcm9tIGZpZWxkOiB1aW50MzIgc2luY2VWZXJzaW9uID0gMTtcbiAgICovXG4gIHNpbmNlVmVyc2lvbiA9IDA7XG5cbiAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWxNZXNzYWdlPENoYW5nZXNSZXF1ZXN0Pikge1xuICAgIHN1cGVyKCk7XG4gICAgcHJvdG8zLnV0aWwuaW5pdFBhcnRpYWwoZGF0YSwgdGhpcyk7XG4gIH1cblxuICBzdGF0aWMgcmVhZG9ubHkgcnVudGltZTogdHlwZW9mIHByb3RvMyA9IHByb3RvMztcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGVOYW1lID0gXCJyYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5DaGFuZ2VzUmVxdWVzdFwiO1xuICBzdGF0aWMgcmVhZG9ubHkgZmllbGRzOiBGaWVsZExpc3QgPSBwcm90bzMudXRpbC5uZXdGaWVsZExpc3QoKCkgPT4gW1xuICAgIHsgbm86IDEsIG5hbWU6IFwic2luY2VWZXJzaW9uXCIsIGtpbmQ6IFwic2NhbGFyXCIsIFQ6IDEzIC8qIFNjYWxhclR5cGUuVUlOVDMyICovIH0sXG4gIF0pO1xuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBVaW50OEFycmF5LCBvcHRpb25zPzogUGFydGlhbDxCaW5hcnlSZWFkT3B0aW9ucz4pOiBDaGFuZ2VzUmVxdWVzdCB7XG4gICAgcmV0dXJuIG5ldyBDaGFuZ2VzUmVxdWVzdCgpLmZyb21CaW5hcnkoYnl0ZXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Kc29uKGpzb25WYWx1ZTogSnNvblZhbHVlLCBvcHRpb25zPzogUGFydGlhbDxKc29uUmVhZE9wdGlvbnM+KTogQ2hhbmdlc1JlcXVlc3Qge1xuICAgIHJldHVybiBuZXcgQ2hhbmdlc1JlcXVlc3QoKS5mcm9tSnNvbihqc29uVmFsdWUsIG9wdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Kc29uU3RyaW5nKGpzb25TdHJpbmc6IHN0cmluZywgb3B0aW9ucz86IFBhcnRpYWw8SnNvblJlYWRPcHRpb25zPik6IENoYW5nZXNSZXF1ZXN0IHtcbiAgICByZXR1cm4gbmV3IENoYW5nZXNSZXF1ZXN0KCkuZnJvbUpzb25TdHJpbmcoanNvblN0cmluZywgb3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgZXF1YWxzKGE6IENoYW5nZXNSZXF1ZXN0IHwgUGxhaW5NZXNzYWdlPENoYW5nZXNSZXF1ZXN0PiB8IHVuZGVmaW5lZCwgYjogQ2hhbmdlc1JlcXVlc3QgfCBQbGFpbk1lc3NhZ2U8Q2hhbmdlc1JlcXVlc3Q+IHwgdW5kZWZpbmVkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHByb3RvMy51dGlsLmVxdWFscyhDaGFuZ2VzUmVxdWVzdCwgYSwgYik7XG4gIH1cbn1cblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudGhpcmRwYXJ0eS5wcm9zZW1pcnJvci52MS5DaGFuZ2VzUmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNsYXNzIENoYW5nZXNSZXNwb25zZSBleHRlbmRzIE1lc3NhZ2U8Q2hhbmdlc1Jlc3BvbnNlPiB7XG4gIC8qKlxuICAgKiBAZ2VuZXJhdGVkIGZyb20gZmllbGQ6IHVpbnQzMiB2ZXJzaW9uID0gMTtcbiAgICovXG4gIHZlcnNpb24gPSAwO1xuXG4gIC8qKlxuICAgKiBAZ2VuZXJhdGVkIGZyb20gZmllbGQ6IHJlcGVhdGVkIHJidC50aGlyZHBhcnR5LnByb3NlbWlycm9yLnYxLkNoYW5nZSBjaGFuZ2VzID0gMjtcbiAgICovXG4gIGNoYW5nZXM6IENoYW5nZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWxNZXNzYWdlPENoYW5nZXNSZXNwb25zZT4pIHtcbiAgICBzdXBlcigpO1xuICAgIHByb3RvMy51dGlsLmluaXRQYXJ0aWFsKGRhdGEsIHRoaXMpO1xuICB9XG5cbiAgc3RhdGljIHJlYWRvbmx5IHJ1bnRpbWU6IHR5cGVvZiBwcm90bzMgPSBwcm90bzM7XG4gIHN0YXRpYyByZWFkb25seSB0eXBlTmFtZSA9IFwicmJ0LnRoaXJkcGFydHkucHJvc2VtaXJyb3IudjEuQ2hhbmdlc1Jlc3BvbnNlXCI7XG4gIHN0YXRpYyByZWFkb25seSBmaWVsZHM6IEZpZWxkTGlzdCA9IHByb3RvMy51dGlsLm5ld0ZpZWxkTGlzdCgoKSA9PiBbXG4gICAgeyBubzogMSwgbmFtZTogXCJ2ZXJzaW9uXCIsIGtpbmQ6IFwic2NhbGFyXCIsIFQ6IDEzIC8qIFNjYWxhclR5cGUuVUlOVDMyICovIH0sXG4gICAgeyBubzogMiwgbmFtZTogXCJjaGFuZ2VzXCIsIGtpbmQ6IFwibWVzc2FnZVwiLCBUOiBDaGFuZ2UsIHJlcGVhdGVkOiB0cnVlIH0sXG4gIF0pO1xuXG4gIHN0YXRpYyBmcm9tQmluYXJ5KGJ5dGVzOiBVaW50OEFycmF5LCBvcHRpb25zPzogUGFydGlhbDxCaW5hcnlSZWFkT3B0aW9ucz4pOiBDaGFuZ2VzUmVzcG9uc2Uge1xuICAgIHJldHVybiBuZXcgQ2hhbmdlc1Jlc3BvbnNlKCkuZnJvbUJpbmFyeShieXRlcywgb3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpzb24oanNvblZhbHVlOiBKc29uVmFsdWUsIG9wdGlvbnM/OiBQYXJ0aWFsPEpzb25SZWFkT3B0aW9ucz4pOiBDaGFuZ2VzUmVzcG9uc2Uge1xuICAgIHJldHVybiBuZXcgQ2hhbmdlc1Jlc3BvbnNlKCkuZnJvbUpzb24oanNvblZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSnNvblN0cmluZyhqc29uU3RyaW5nOiBzdHJpbmcsIG9wdGlvbnM/OiBQYXJ0aWFsPEpzb25SZWFkT3B0aW9ucz4pOiBDaGFuZ2VzUmVzcG9uc2Uge1xuICAgIHJldHVybiBuZXcgQ2hhbmdlc1Jlc3BvbnNlKCkuZnJvbUpzb25TdHJpbmcoanNvblN0cmluZywgb3B0aW9ucyk7XG4gIH1cblxuICBzdGF0aWMgZXF1YWxzKGE6IENoYW5nZXNSZXNwb25zZSB8IFBsYWluTWVzc2FnZTxDaGFuZ2VzUmVzcG9uc2U+IHwgdW5kZWZpbmVkLCBiOiBDaGFuZ2VzUmVzcG9uc2UgfCBQbGFpbk1lc3NhZ2U8Q2hhbmdlc1Jlc3BvbnNlPiB8IHVuZGVmaW5lZCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBwcm90bzMudXRpbC5lcXVhbHMoQ2hhbmdlc1Jlc3BvbnNlLCBhLCBiKTtcbiAgfVxufVxuXG4iLCAiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuY29uc3Qgcm5kczhQb29sID0gbmV3IFVpbnQ4QXJyYXkoMjU2KTsgLy8gIyBvZiByYW5kb20gdmFsdWVzIHRvIHByZS1hbGxvY2F0ZVxuXG5sZXQgcG9vbFB0ciA9IHJuZHM4UG9vbC5sZW5ndGg7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIGlmIChwb29sUHRyID4gcm5kczhQb29sLmxlbmd0aCAtIDE2KSB7XG4gICAgY3J5cHRvLnJhbmRvbUZpbGxTeW5jKHJuZHM4UG9vbCk7XG4gICAgcG9vbFB0ciA9IDA7XG4gIH1cblxuICByZXR1cm4gcm5kczhQb29sLnNsaWNlKHBvb2xQdHIsIHBvb2xQdHIgKz0gMTYpO1xufSIsICJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCAiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEOiBjcnlwdG8ucmFuZG9tVVVJRFxufTsiLCAiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwgIi8vIEBnZW5lcmF0ZWQgYnkgcHJvdG9jLWdlbi1lcyB2MS4zLjJcbi8vIEBnZW5lcmF0ZWQgZnJvbSBmaWxlIHJidC92MWFscGhhMS9hdXRoLnByb3RvIChwYWNrYWdlIHJidC52MWFscGhhMSwgc3ludGF4IHByb3RvMylcbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuXG5pbXBvcnQgeyBwcm90bzMsIFN0cnVjdCB9IGZyb20gXCJAYnVmYnVpbGQvcHJvdG9idWZcIjtcblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudjFhbHBoYTEuQXV0aFxuICovXG5leHBvcnQgY29uc3QgQXV0aCA9IHByb3RvMy5tYWtlTWVzc2FnZVR5cGUoXG4gIFwicmJ0LnYxYWxwaGExLkF1dGhcIixcbiAgKCkgPT4gW1xuICAgIHsgbm86IDEsIG5hbWU6IFwidXNlcl9pZFwiLCBraW5kOiBcInNjYWxhclwiLCBUOiA5IC8qIFNjYWxhclR5cGUuU1RSSU5HICovLCBvcHQ6IHRydWUgfSxcbiAgICB7IG5vOiAyLCBuYW1lOiBcInByb3BlcnRpZXNcIiwga2luZDogXCJtZXNzYWdlXCIsIFQ6IFN0cnVjdCB9LFxuICBdLFxuKTtcblxuIiwgImltcG9ydCAqIGFzIGVycm9yc19wYiBmcm9tIFwiLi9lcnJvcnNfcGIuanNcIjtcbmV4cG9ydCAqIGFzIGF1dGhfcGIgZnJvbSBcIi4vYXV0aF9wYi5qc1wiO1xuZXhwb3J0ICogYXMgZXJyb3JzX3BiIGZyb20gXCIuL2Vycm9yc19wYi5qc1wiO1xuZXhwb3J0ICogYXMgcHJvdG9idWZfZXMgZnJvbSBcIkBidWZidWlsZC9wcm90b2J1ZlwiO1xuZXhwb3J0ICogYXMgcmVhY3RfcGIgZnJvbSBcIi4vcmVhY3RfcGIuanNcIjtcbmV4cG9ydCAqIGFzIHRhc2tzX3BiIGZyb20gXCIuL3Rhc2tzX3BiLmpzXCI7XG4vLyBOb3QgcHJvdmlkZWQgYnkgcHJvdG9idWYtZXMsIHNvIHdlIGhhdmUgYSBiYXJlYm9uZXMgaW1wbGVtZW50YXRpb24uXG5leHBvcnQgdmFyIFN0YXR1c0NvZGU7XG4oZnVuY3Rpb24gKFN0YXR1c0NvZGUpIHtcbiAgICBTdGF0dXNDb2RlW1N0YXR1c0NvZGVbXCJPS1wiXSA9IDBdID0gXCJPS1wiO1xuICAgIFN0YXR1c0NvZGVbU3RhdHVzQ29kZVtcIkNBTkNFTExFRFwiXSA9IDFdID0gXCJDQU5DRUxMRURcIjtcbiAgICBTdGF0dXNDb2RlW1N0YXR1c0NvZGVbXCJVTktOT1dOXCJdID0gMl0gPSBcIlVOS05PV05cIjtcbiAgICBTdGF0dXNDb2RlW1N0YXR1c0NvZGVbXCJJTlZBTElEX0FSR1VNRU5UXCJdID0gM10gPSBcIklOVkFMSURfQVJHVU1FTlRcIjtcbiAgICBTdGF0dXNDb2RlW1N0YXR1c0NvZGVbXCJERUFETElORV9FWENFRURFRFwiXSA9IDRdID0gXCJERUFETElORV9FWENFRURFRFwiO1xuICAgIFN0YXR1c0NvZGVbU3RhdHVzQ29kZVtcIk5PVF9GT1VORFwiXSA9IDVdID0gXCJOT1RfRk9VTkRcIjtcbiAgICBTdGF0dXNDb2RlW1N0YXR1c0NvZGVbXCJBTFJFQURZX0VYSVNUU1wiXSA9IDZdID0gXCJBTFJFQURZX0VYSVNUU1wiO1xuICAgIFN0YXR1c0NvZGVbU3RhdHVzQ29kZVtcIlBFUk1JU1NJT05fREVOSUVEXCJdID0gN10gPSBcIlBFUk1JU1NJT05fREVOSUVEXCI7XG4gICAgU3RhdHVzQ29kZVtTdGF0dXNDb2RlW1wiUkVTT1VSQ0VfRVhIQVVTVEVEXCJdID0gOF0gPSBcIlJFU09VUkNFX0VYSEFVU1RFRFwiO1xuICAgIFN0YXR1c0NvZGVbU3RhdHVzQ29kZVtcIkZBSUxFRF9QUkVDT05ESVRJT05cIl0gPSA5XSA9IFwiRkFJTEVEX1BSRUNPTkRJVElPTlwiO1xuICAgIFN0YXR1c0NvZGVbU3RhdHVzQ29kZVtcIkFCT1JURURcIl0gPSAxMF0gPSBcIkFCT1JURURcIjtcbiAgICBTdGF0dXNDb2RlW1N0YXR1c0NvZGVbXCJPVVRfT0ZfUkFOR0VcIl0gPSAxMV0gPSBcIk9VVF9PRl9SQU5HRVwiO1xuICAgIFN0YXR1c0NvZGVbU3RhdHVzQ29kZVtcIlVOSU1QTEVNRU5URURcIl0gPSAxMl0gPSBcIlVOSU1QTEVNRU5URURcIjtcbiAgICBTdGF0dXNDb2RlW1N0YXR1c0NvZGVbXCJJTlRFUk5BTFwiXSA9IDEzXSA9IFwiSU5URVJOQUxcIjtcbiAgICBTdGF0dXNDb2RlW1N0YXR1c0NvZGVbXCJVTkFWQUlMQUJMRVwiXSA9IDE0XSA9IFwiVU5BVkFJTEFCTEVcIjtcbiAgICBTdGF0dXNDb2RlW1N0YXR1c0NvZGVbXCJEQVRBX0xPU1NcIl0gPSAxNV0gPSBcIkRBVEFfTE9TU1wiO1xuICAgIFN0YXR1c0NvZGVbU3RhdHVzQ29kZVtcIlVOQVVUSEVOVElDQVRFRFwiXSA9IDE2XSA9IFwiVU5BVVRIRU5USUNBVEVEXCI7XG59KShTdGF0dXNDb2RlID0gU3RhdHVzQ29kZSB8fCAoU3RhdHVzQ29kZSA9IHt9KSk7XG4vLyBOb3QgcHJvdmlkZWQgYnkgcHJvdG9idWYtZXMsIHNvIHdlIGhhdmUgYSBiYXJlYm9uZXMgaW1wbGVtZW50YXRpb24uXG5leHBvcnQgY2xhc3MgU3RhdHVzIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGNvZGUsIG1lc3NhZ2UsIGRldGFpbHMsIH0pIHtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscyA/PyBbXTtcbiAgICB9XG4gICAgdG9Kc29uU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tSnNvblN0cmluZyhzKSB7XG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHMpO1xuICAgICAgICByZXR1cm4gdGhpcy5mcm9tSnNvbihqc29uKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21Kc29uKGpzb24pIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGpzb25bXCJjb2RlXCJdO1xuICAgICAgICBpZiAodHlwZW9mIGNvZGUgIT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCAnY29kZScgbnVtYmVyIGluIEpTT04gb2JqZWN0ICcke0pTT04uc3RyaW5naWZ5KGpzb24pfSdgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXNzYWdlID0ganNvbltcIm1lc3NhZ2VcIl07XG4gICAgICAgIGlmIChtZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIG1lc3NhZ2UgIT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCAnbWVzc2FnZScgc3RyaW5nIGluIEpTT04gb2JqZWN0ICcke0pTT04uc3RyaW5naWZ5KGpzb24pfSdgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXRhaWxzID0ganNvbltcImRldGFpbHNcIl07XG4gICAgICAgIGlmIChkZXRhaWxzICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkoZGV0YWlscykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgJ2RldGFpbHMnIGFycmF5IGluIEpTT04gb2JqZWN0ICcke0pTT04uc3RyaW5naWZ5KGpzb24pfSdgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFN0YXR1cyh7IGNvZGUsIG1lc3NhZ2UsIGRldGFpbHMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IEdSUENfRVJST1JfVFlQRVMgPSBbXG4gICAgZXJyb3JzX3BiLkNhbmNlbGxlZCxcbiAgICBlcnJvcnNfcGIuVW5rbm93bixcbiAgICBlcnJvcnNfcGIuSW52YWxpZEFyZ3VtZW50LFxuICAgIGVycm9yc19wYi5EZWFkbGluZUV4Y2VlZGVkLFxuICAgIGVycm9yc19wYi5Ob3RGb3VuZCxcbiAgICBlcnJvcnNfcGIuQWxyZWFkeUV4aXN0cyxcbiAgICBlcnJvcnNfcGIuUGVybWlzc2lvbkRlbmllZCxcbiAgICBlcnJvcnNfcGIuUmVzb3VyY2VFeGhhdXN0ZWQsXG4gICAgZXJyb3JzX3BiLkZhaWxlZFByZWNvbmRpdGlvbixcbiAgICBlcnJvcnNfcGIuQWJvcnRlZCxcbiAgICBlcnJvcnNfcGIuT3V0T2ZSYW5nZSxcbiAgICBlcnJvcnNfcGIuVW5pbXBsZW1lbnRlZCxcbiAgICBlcnJvcnNfcGIuSW50ZXJuYWwsXG4gICAgZXJyb3JzX3BiLlVuYXZhaWxhYmxlLFxuICAgIGVycm9yc19wYi5EYXRhTG9zcyxcbiAgICBlcnJvcnNfcGIuVW5hdXRoZW50aWNhdGVkLFxuXTsgLy8gTmVlZCBgYXMgY29uc3RgIHRvIGVuc3VyZSBUeXBlU2NyaXB0IGluZmVycyB0aGlzIGFzIGEgdHVwbGUhXG5leHBvcnQgY29uc3QgUkVCT09UX0VSUk9SX1RZUEVTID0gW1xuICAgIC8vIE5PVEU6IGFsc28gYWRkIGFueSBuZXcgZXJyb3JzIGludG9cbiAgICAvLyBgcmVib290L3RlbXBsYXRlcy9yZWJvb3RfcmVhY3QudHMuajJgLlxuICAgIGVycm9yc19wYi5TdGF0ZUFscmVhZHlDb25zdHJ1Y3RlZCxcbiAgICBlcnJvcnNfcGIuU3RhdGVOb3RDb25zdHJ1Y3RlZCxcbiAgICBlcnJvcnNfcGIuVHJhbnNhY3Rpb25QYXJ0aWNpcGFudEZhaWxlZFRvUHJlcGFyZSxcbiAgICBlcnJvcnNfcGIuVHJhbnNhY3Rpb25QYXJ0aWNpcGFudEZhaWxlZFRvQ29tbWl0LFxuICAgIGVycm9yc19wYi5Vbmtub3duU2VydmljZSxcbiAgICBlcnJvcnNfcGIuVW5rbm93blRhc2ssXG5dOyAvLyBOZWVkIGBhcyBjb25zdGAgdG8gZW5zdXJlIFR5cGVTY3JpcHQgaW5mZXJzIHRoaXMgYXMgYSB0dXBsZSFcbmV4cG9ydCBmdW5jdGlvbiBncnBjU3RhdHVzQ29kZUZyb21FcnJvcihlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIGVycm9yc19wYi5DYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIFN0YXR1c0NvZGUuQ0FOQ0VMTEVEO1xuICAgIH1cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBlcnJvcnNfcGIuVW5rbm93bikge1xuICAgICAgICByZXR1cm4gU3RhdHVzQ29kZS5VTktOT1dOO1xuICAgIH1cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBlcnJvcnNfcGIuSW52YWxpZEFyZ3VtZW50KSB7XG4gICAgICAgIHJldHVybiBTdGF0dXNDb2RlLklOVkFMSURfQVJHVU1FTlQ7XG4gICAgfVxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIGVycm9yc19wYi5EZWFkbGluZUV4Y2VlZGVkKSB7XG4gICAgICAgIHJldHVybiBTdGF0dXNDb2RlLkRFQURMSU5FX0VYQ0VFREVEO1xuICAgIH1cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBlcnJvcnNfcGIuTm90Rm91bmQpIHtcbiAgICAgICAgcmV0dXJuIFN0YXR1c0NvZGUuTk9UX0ZPVU5EO1xuICAgIH1cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBlcnJvcnNfcGIuQWxyZWFkeUV4aXN0cykge1xuICAgICAgICByZXR1cm4gU3RhdHVzQ29kZS5BTFJFQURZX0VYSVNUUztcbiAgICB9XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgZXJyb3JzX3BiLlBlcm1pc3Npb25EZW5pZWQpIHtcbiAgICAgICAgcmV0dXJuIFN0YXR1c0NvZGUuUEVSTUlTU0lPTl9ERU5JRUQ7XG4gICAgfVxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIGVycm9yc19wYi5SZXNvdXJjZUV4aGF1c3RlZCkge1xuICAgICAgICByZXR1cm4gU3RhdHVzQ29kZS5SRVNPVVJDRV9FWEhBVVNURUQ7XG4gICAgfVxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIGVycm9yc19wYi5GYWlsZWRQcmVjb25kaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIFN0YXR1c0NvZGUuRkFJTEVEX1BSRUNPTkRJVElPTjtcbiAgICB9XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgZXJyb3JzX3BiLkFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIFN0YXR1c0NvZGUuQUJPUlRFRDtcbiAgICB9XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgZXJyb3JzX3BiLk91dE9mUmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIFN0YXR1c0NvZGUuT1VUX09GX1JBTkdFO1xuICAgIH1cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBlcnJvcnNfcGIuVW5pbXBsZW1lbnRlZCkge1xuICAgICAgICByZXR1cm4gU3RhdHVzQ29kZS5VTklNUExFTUVOVEVEO1xuICAgIH1cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBlcnJvcnNfcGIuSW50ZXJuYWwpIHtcbiAgICAgICAgcmV0dXJuIFN0YXR1c0NvZGUuSU5URVJOQUw7XG4gICAgfVxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIGVycm9yc19wYi5VbmF2YWlsYWJsZSkge1xuICAgICAgICByZXR1cm4gU3RhdHVzQ29kZS5VTkFWQUlMQUJMRTtcbiAgICB9XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgZXJyb3JzX3BiLkRhdGFMb3NzKSB7XG4gICAgICAgIHJldHVybiBTdGF0dXNDb2RlLkRBVEFfTE9TUztcbiAgICB9XG4gICAgaWYgKGVycm9yIGluc3RhbmNlb2YgZXJyb3JzX3BiLlVuYXV0aGVudGljYXRlZCkge1xuICAgICAgICByZXR1cm4gU3RhdHVzQ29kZS5VTkFVVEhFTlRJQ0FURUQ7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG4vLyBIZWxwZXIgdGhhdCB0cmllcyB0byBjb25zdHJ1Y3QgYW4gZXJyb3IgdHlwZSBmcm9tIHRoZSBgZGV0YWlsc2Agb2Zcbi8vIGEgYFN0YXR1c2AgZnJvbSBhbiBhcnJheSBvZiBwb3NzaWJsZSBgZXJyb3JUeXBlc2AuXG4vL1xuLy8gUmV0dXJucyB0aGUgdW5pb24gb2YgdGhlIHR5cGVzIGluIHRoZSBgRXJyb3JzVHlwZXNgIHR1cGxlLiBXZSBnZXRcbi8vIHRoZSB1bmlvbiB0eXBlIGJ5IGdldHRpbmcgdGhlIHR5cGUgb2YgaW5kZXhpbmcgaW50byB0aGUgdW5pb24gYXRcbi8vIGFueSBhcmJpdHJhcnkgYG51bWJlcmAsIHdoaWNoIG11c3QgYmUgYWxsIHBvc3NpYmxlIHR5cGVzIGluIHRoZVxuLy8gdHVwbGUsIHRodXMgdGhlIHVuaW9uLlxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yRnJvbUdvb2dsZVJwY1N0YXR1c0RldGFpbHMoc3RhdHVzLCBlcnJvclR5cGVzKSB7XG4gICAgZm9yIChjb25zdCBkZXRhaWwgb2Ygc3RhdHVzLmRldGFpbHMpIHtcbiAgICAgICAgY29uc3QgdHlwZVVybCA9IGRldGFpbFtcIkB0eXBlXCJdO1xuICAgICAgICBpZiAodHlwZW9mIHR5cGVVcmwgIT09IFwic3RyaW5nXCIgfHwgdHlwZVVybCA9PT0gXCJcIikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgQ2Fubm90IGRlY29kZSBnb29nbGUucHJvdG9idWYuQW55IGZyb20gSlNPTjogJ0B0eXBlJyBpcyBlbXB0eWApO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXR5cGVVcmwubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGdvb2dsZS5wcm90b2J1Zi5BbnkgJ0B0eXBlJzogJHt0eXBlVXJsfWApO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzbGFzaCA9IHR5cGVVcmwubGFzdEluZGV4T2YoXCIvXCIpO1xuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHNsYXNoID49IDAgPyB0eXBlVXJsLnN1YnN0cmluZyhzbGFzaCArIDEpIDogdHlwZVVybDtcbiAgICAgICAgaWYgKCF0eXBlTmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgZ29vZ2xlLnByb3RvYnVmLkFueSAnQHR5cGUnOiAke3R5cGVVcmx9YCk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgZXJyb3JUeXBlIG9mIGVycm9yVHlwZXMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlTmFtZSA9PT0gZXJyb3JUeXBlLnR5cGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29weSA9IE9iamVjdC5hc3NpZ24oe30sIGRldGFpbCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvcHlbXCJAdHlwZVwiXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JUeXBlLmZyb21Kc29uKGNvcHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZXJyb3JGcm9tR29vZ2xlUnBjU3RhdHVzQ29kZShzdGF0dXMpIHtcbiAgICBpZiAoc3RhdHVzLmNvZGUgPT0gU3RhdHVzQ29kZS5DQU5DRUxMRUQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvcnNfcGIuQ2FuY2VsbGVkKCk7XG4gICAgfVxuICAgIGlmIChzdGF0dXMuY29kZSA9PSBTdGF0dXNDb2RlLlVOS05PV04pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvcnNfcGIuVW5rbm93bigpO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzLmNvZGUgPT0gU3RhdHVzQ29kZS5JTlZBTElEX0FSR1VNRU5UKSB7XG4gICAgICAgIHJldHVybiBuZXcgZXJyb3JzX3BiLkludmFsaWRBcmd1bWVudCgpO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzLmNvZGUgPT0gU3RhdHVzQ29kZS5ERUFETElORV9FWENFRURFRCkge1xuICAgICAgICByZXR1cm4gbmV3IGVycm9yc19wYi5EZWFkbGluZUV4Y2VlZGVkKCk7XG4gICAgfVxuICAgIGlmIChzdGF0dXMuY29kZSA9PSBTdGF0dXNDb2RlLk5PVF9GT1VORCkge1xuICAgICAgICByZXR1cm4gbmV3IGVycm9yc19wYi5Ob3RGb3VuZCgpO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzLmNvZGUgPT0gU3RhdHVzQ29kZS5BTFJFQURZX0VYSVNUUykge1xuICAgICAgICByZXR1cm4gbmV3IGVycm9yc19wYi5BbHJlYWR5RXhpc3RzKCk7XG4gICAgfVxuICAgIGlmIChzdGF0dXMuY29kZSA9PSBTdGF0dXNDb2RlLlBFUk1JU1NJT05fREVOSUVEKSB7XG4gICAgICAgIHJldHVybiBuZXcgZXJyb3JzX3BiLlBlcm1pc3Npb25EZW5pZWQoKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cy5jb2RlID09IFN0YXR1c0NvZGUuUkVTT1VSQ0VfRVhIQVVTVEVEKSB7XG4gICAgICAgIHJldHVybiBuZXcgZXJyb3JzX3BiLlJlc291cmNlRXhoYXVzdGVkKCk7XG4gICAgfVxuICAgIGlmIChzdGF0dXMuY29kZSA9PSBTdGF0dXNDb2RlLkZBSUxFRF9QUkVDT05ESVRJT04pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvcnNfcGIuRmFpbGVkUHJlY29uZGl0aW9uKCk7XG4gICAgfVxuICAgIGlmIChzdGF0dXMuY29kZSA9PSBTdGF0dXNDb2RlLkFCT1JURUQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvcnNfcGIuQWJvcnRlZCgpO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzLmNvZGUgPT0gU3RhdHVzQ29kZS5PVVRfT0ZfUkFOR0UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvcnNfcGIuT3V0T2ZSYW5nZSgpO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzLmNvZGUgPT0gU3RhdHVzQ29kZS5VTklNUExFTUVOVEVEKSB7XG4gICAgICAgIHJldHVybiBuZXcgZXJyb3JzX3BiLlVuaW1wbGVtZW50ZWQoKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cy5jb2RlID09IFN0YXR1c0NvZGUuSU5URVJOQUwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvcnNfcGIuSW50ZXJuYWwoKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cy5jb2RlID09IFN0YXR1c0NvZGUuVU5BVkFJTEFCTEUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBlcnJvcnNfcGIuVW5hdmFpbGFibGUoKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cy5jb2RlID09IFN0YXR1c0NvZGUuREFUQV9MT1NTKSB7XG4gICAgICAgIHJldHVybiBuZXcgZXJyb3JzX3BiLkRhdGFMb3NzKCk7XG4gICAgfVxuICAgIGlmIChzdGF0dXMuY29kZSA9PSBTdGF0dXNDb2RlLlVOQVVUSEVOVElDQVRFRCkge1xuICAgICAgICByZXR1cm4gbmV3IGVycm9yc19wYi5VbmF1dGhlbnRpY2F0ZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBlcnJvcnNfcGIuVW5rbm93bigpO1xufVxuZXhwb3J0IGNsYXNzIEFib3J0ZWQgZXh0ZW5kcyBFcnJvciB7XG59XG4iLCAiLy8gQGdlbmVyYXRlZCBieSBwcm90b2MtZ2VuLWVzIHYxLjMuMlxuLy8gQGdlbmVyYXRlZCBmcm9tIGZpbGUgcmJ0L3YxYWxwaGExL3JlYWN0LnByb3RvIChwYWNrYWdlIHJidC52MWFscGhhMSwgc3ludGF4IHByb3RvMylcbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuXG5pbXBvcnQgeyBwcm90bzMgfSBmcm9tIFwiQGJ1ZmJ1aWxkL3Byb3RvYnVmXCI7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLlF1ZXJ5UmVxdWVzdFxuICovXG5leHBvcnQgY29uc3QgUXVlcnlSZXF1ZXN0ID0gcHJvdG8zLm1ha2VNZXNzYWdlVHlwZShcbiAgXCJyYnQudjFhbHBoYTEuUXVlcnlSZXF1ZXN0XCIsXG4gICgpID0+IFtcbiAgICB7IG5vOiAxLCBuYW1lOiBcIm1ldGhvZFwiLCBraW5kOiBcInNjYWxhclwiLCBUOiA5IC8qIFNjYWxhclR5cGUuU1RSSU5HICovIH0sXG4gICAgeyBubzogMiwgbmFtZTogXCJyZXF1ZXN0XCIsIGtpbmQ6IFwic2NhbGFyXCIsIFQ6IDEyIC8qIFNjYWxhclR5cGUuQllURVMgKi8gfSxcbiAgXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLlF1ZXJ5UmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNvbnN0IFF1ZXJ5UmVzcG9uc2UgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5RdWVyeVJlc3BvbnNlXCIsXG4gICgpID0+IFtcbiAgICB7IG5vOiAxLCBuYW1lOiBcInJlc3BvbnNlXCIsIGtpbmQ6IFwic2NhbGFyXCIsIFQ6IDEyIC8qIFNjYWxhclR5cGUuQllURVMgKi8sIG9wdDogdHJ1ZSB9LFxuICAgIHsgbm86IDIsIG5hbWU6IFwiaWRlbXBvdGVuY3lfa2V5c1wiLCBraW5kOiBcInNjYWxhclwiLCBUOiA5IC8qIFNjYWxhclR5cGUuU1RSSU5HICovLCByZXBlYXRlZDogdHJ1ZSB9LFxuICBdLFxuKTtcblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudjFhbHBoYTEuTXV0YXRlUmVxdWVzdFxuICovXG5leHBvcnQgY29uc3QgTXV0YXRlUmVxdWVzdCA9IHByb3RvMy5tYWtlTWVzc2FnZVR5cGUoXG4gIFwicmJ0LnYxYWxwaGExLk11dGF0ZVJlcXVlc3RcIixcbiAgKCkgPT4gW1xuICAgIHsgbm86IDEsIG5hbWU6IFwibWV0aG9kXCIsIGtpbmQ6IFwic2NhbGFyXCIsIFQ6IDkgLyogU2NhbGFyVHlwZS5TVFJJTkcgKi8gfSxcbiAgICB7IG5vOiAyLCBuYW1lOiBcInJlcXVlc3RcIiwga2luZDogXCJzY2FsYXJcIiwgVDogMTIgLyogU2NhbGFyVHlwZS5CWVRFUyAqLyB9LFxuICAgIHsgbm86IDMsIG5hbWU6IFwiaWRlbXBvdGVuY3lfa2V5XCIsIGtpbmQ6IFwic2NhbGFyXCIsIFQ6IDkgLyogU2NhbGFyVHlwZS5TVFJJTkcgKi8gfSxcbiAgICB7IG5vOiA0LCBuYW1lOiBcImJlYXJlcl90b2tlblwiLCBraW5kOiBcInNjYWxhclwiLCBUOiA5IC8qIFNjYWxhclR5cGUuU1RSSU5HICovLCBvcHQ6IHRydWUgfSxcbiAgXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLk11dGF0ZVJlc3BvbnNlXG4gKi9cbmV4cG9ydCBjb25zdCBNdXRhdGVSZXNwb25zZSA9IHByb3RvMy5tYWtlTWVzc2FnZVR5cGUoXG4gIFwicmJ0LnYxYWxwaGExLk11dGF0ZVJlc3BvbnNlXCIsXG4gICgpID0+IFtcbiAgICB7IG5vOiAxLCBuYW1lOiBcInJlc3BvbnNlXCIsIGtpbmQ6IFwic2NhbGFyXCIsIFQ6IDEyIC8qIFNjYWxhclR5cGUuQllURVMgKi8sIG9uZW9mOiBcInJlc3BvbnNlX29yX3N0YXR1c1wiIH0sXG4gICAgeyBubzogMiwgbmFtZTogXCJzdGF0dXNcIiwga2luZDogXCJzY2FsYXJcIiwgVDogOSAvKiBTY2FsYXJUeXBlLlNUUklORyAqLywgb25lb2Y6IFwicmVzcG9uc2Vfb3Jfc3RhdHVzXCIgfSxcbiAgXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLldlYlNvY2tldHNDb25uZWN0aW9uUmVxdWVzdFxuICovXG5leHBvcnQgY29uc3QgV2ViU29ja2V0c0Nvbm5lY3Rpb25SZXF1ZXN0ID0gcHJvdG8zLm1ha2VNZXNzYWdlVHlwZShcbiAgXCJyYnQudjFhbHBoYTEuV2ViU29ja2V0c0Nvbm5lY3Rpb25SZXF1ZXN0XCIsXG4gIFtdLFxuKTtcblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudjFhbHBoYTEuV2ViU29ja2V0c0Nvbm5lY3Rpb25SZXNwb25zZVxuICovXG5leHBvcnQgY29uc3QgV2ViU29ja2V0c0Nvbm5lY3Rpb25SZXNwb25zZSA9IHByb3RvMy5tYWtlTWVzc2FnZVR5cGUoXG4gIFwicmJ0LnYxYWxwaGExLldlYlNvY2tldHNDb25uZWN0aW9uUmVzcG9uc2VcIixcbiAgW10sXG4pO1xuXG4iLCAiLy8gQGdlbmVyYXRlZCBieSBwcm90b2MtZ2VuLWVzIHYxLjMuMlxuLy8gQGdlbmVyYXRlZCBmcm9tIGZpbGUgcmJ0L3YxYWxwaGExL3Rhc2tzLnByb3RvIChwYWNrYWdlIHJidC52MWFscGhhMSwgc3ludGF4IHByb3RvMylcbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuXG5pbXBvcnQgeyBBbnksIHByb3RvMywgVGltZXN0YW1wIH0gZnJvbSBcIkBidWZidWlsZC9wcm90b2J1ZlwiO1xuXG4vKipcbiAqIEBnZW5lcmF0ZWQgZnJvbSBtZXNzYWdlIHJidC52MWFscGhhMS5UYXNrSWRcbiAqL1xuZXhwb3J0IGNvbnN0IFRhc2tJZCA9IHByb3RvMy5tYWtlTWVzc2FnZVR5cGUoXG4gIFwicmJ0LnYxYWxwaGExLlRhc2tJZFwiLFxuICAoKSA9PiBbXG4gICAgeyBubzogMSwgbmFtZTogXCJzdGF0ZV90eXBlXCIsIGtpbmQ6IFwic2NhbGFyXCIsIFQ6IDkgLyogU2NhbGFyVHlwZS5TVFJJTkcgKi8gfSxcbiAgICB7IG5vOiAyLCBuYW1lOiBcInN0YXRlX3JlZlwiLCBraW5kOiBcInNjYWxhclwiLCBUOiA5IC8qIFNjYWxhclR5cGUuU1RSSU5HICovIH0sXG4gICAgeyBubzogMywgbmFtZTogXCJ0YXNrX3V1aWRcIiwga2luZDogXCJzY2FsYXJcIiwgVDogMTIgLyogU2NhbGFyVHlwZS5CWVRFUyAqLyB9LFxuICBdLFxuKTtcblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudjFhbHBoYTEuVGFza0luZm9cbiAqL1xuZXhwb3J0IGNvbnN0IFRhc2tJbmZvID0gcHJvdG8zLm1ha2VNZXNzYWdlVHlwZShcbiAgXCJyYnQudjFhbHBoYTEuVGFza0luZm9cIixcbiAgKCkgPT4gW1xuICAgIHsgbm86IDEsIG5hbWU6IFwic3RhdHVzXCIsIGtpbmQ6IFwiZW51bVwiLCBUOiBwcm90bzMuZ2V0RW51bVR5cGUoVGFza0luZm9fU3RhdHVzKSB9LFxuICAgIHsgbm86IDIsIG5hbWU6IFwidGFza19pZFwiLCBraW5kOiBcIm1lc3NhZ2VcIiwgVDogVGFza0lkIH0sXG4gICAgeyBubzogMywgbmFtZTogXCJtZXRob2RcIiwga2luZDogXCJzY2FsYXJcIiwgVDogOSAvKiBTY2FsYXJUeXBlLlNUUklORyAqLyB9LFxuICAgIHsgbm86IDQsIG5hbWU6IFwib2NjdXJyZWRfYXRcIiwga2luZDogXCJtZXNzYWdlXCIsIFQ6IFRpbWVzdGFtcCB9LFxuICAgIHsgbm86IDUsIG5hbWU6IFwic2NoZWR1bGVkX2F0XCIsIGtpbmQ6IFwibWVzc2FnZVwiLCBUOiBUaW1lc3RhbXAgfSxcbiAgICB7IG5vOiA2LCBuYW1lOiBcIml0ZXJhdGlvbnNcIiwga2luZDogXCJzY2FsYXJcIiwgVDogNCAvKiBTY2FsYXJUeXBlLlVJTlQ2NCAqLyB9LFxuICAgIHsgbm86IDcsIG5hbWU6IFwibnVtX3J1bnNfZmFpbGVkX3JlY2VudGx5XCIsIGtpbmQ6IFwic2NhbGFyXCIsIFQ6IDQgLyogU2NhbGFyVHlwZS5VSU5UNjQgKi8gfSxcbiAgXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIGVudW0gcmJ0LnYxYWxwaGExLlRhc2tJbmZvLlN0YXR1c1xuICovXG5leHBvcnQgY29uc3QgVGFza0luZm9fU3RhdHVzID0gcHJvdG8zLm1ha2VFbnVtKFxuICBcInJidC52MWFscGhhMS5UYXNrSW5mby5TdGF0dXNcIixcbiAgW1xuICAgIHtubzogMCwgbmFtZTogXCJVTktOT1dOXCJ9LFxuICAgIHtubzogMSwgbmFtZTogXCJTVEFSVEVEXCJ9LFxuICAgIHtubzogMiwgbmFtZTogXCJTQ0hFRFVMRURcIn0sXG4gICAge25vOiAzLCBuYW1lOiBcIlNDSEVEVUxFRF9SRVRSWVwifSxcbiAgICB7bm86IDQsIG5hbWU6IFwiQ0FOQ0VMTEVEXCJ9LFxuICAgIHtubzogNSwgbmFtZTogXCJDT01QTEVURURcIn0sXG4gIF0sXG4pO1xuXG4vKipcbiAqIEBnZW5lcmF0ZWQgZnJvbSBtZXNzYWdlIHJidC52MWFscGhhMS5XYWl0UmVxdWVzdFxuICovXG5leHBvcnQgY29uc3QgV2FpdFJlcXVlc3QgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5XYWl0UmVxdWVzdFwiLFxuICAoKSA9PiBbXG4gICAgeyBubzogMSwgbmFtZTogXCJ0YXNrX2lkXCIsIGtpbmQ6IFwibWVzc2FnZVwiLCBUOiBUYXNrSWQgfSxcbiAgXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLlRhc2tSZXNwb25zZU9yRXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IFRhc2tSZXNwb25zZU9yRXJyb3IgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5UYXNrUmVzcG9uc2VPckVycm9yXCIsXG4gICgpID0+IFtcbiAgICB7IG5vOiAxLCBuYW1lOiBcInJlc3BvbnNlXCIsIGtpbmQ6IFwibWVzc2FnZVwiLCBUOiBBbnksIG9uZW9mOiBcInJlc3BvbnNlX29yX2Vycm9yXCIgfSxcbiAgICB7IG5vOiAyLCBuYW1lOiBcImVycm9yXCIsIGtpbmQ6IFwibWVzc2FnZVwiLCBUOiBBbnksIG9uZW9mOiBcInJlc3BvbnNlX29yX2Vycm9yXCIgfSxcbiAgXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLldhaXRSZXNwb25zZVxuICovXG5leHBvcnQgY29uc3QgV2FpdFJlc3BvbnNlID0gcHJvdG8zLm1ha2VNZXNzYWdlVHlwZShcbiAgXCJyYnQudjFhbHBoYTEuV2FpdFJlc3BvbnNlXCIsXG4gICgpID0+IFtcbiAgICB7IG5vOiAxLCBuYW1lOiBcInJlc3BvbnNlX29yX2Vycm9yXCIsIGtpbmQ6IFwibWVzc2FnZVwiLCBUOiBUYXNrUmVzcG9uc2VPckVycm9yIH0sXG4gIF0sXG4pO1xuXG4vKipcbiAqIEBnZW5lcmF0ZWQgZnJvbSBtZXNzYWdlIHJidC52MWFscGhhMS5MaXN0VGFza3NSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjb25zdCBMaXN0VGFza3NSZXF1ZXN0ID0gcHJvdG8zLm1ha2VNZXNzYWdlVHlwZShcbiAgXCJyYnQudjFhbHBoYTEuTGlzdFRhc2tzUmVxdWVzdFwiLFxuICAoKSA9PiBbXG4gICAgeyBubzogMSwgbmFtZTogXCJvbmx5X2NvbnNlbnN1c19pZFwiLCBraW5kOiBcInNjYWxhclwiLCBUOiA5IC8qIFNjYWxhclR5cGUuU1RSSU5HICovLCBvcHQ6IHRydWUgfSxcbiAgXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLkxpc3RUYXNrc1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjb25zdCBMaXN0VGFza3NSZXNwb25zZSA9IHByb3RvMy5tYWtlTWVzc2FnZVR5cGUoXG4gIFwicmJ0LnYxYWxwaGExLkxpc3RUYXNrc1Jlc3BvbnNlXCIsXG4gICgpID0+IFtcbiAgICB7IG5vOiAxLCBuYW1lOiBcInRhc2tzXCIsIGtpbmQ6IFwibWVzc2FnZVwiLCBUOiBUYXNrSW5mbywgcmVwZWF0ZWQ6IHRydWUgfSxcbiAgXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIG1lc3NhZ2UgcmJ0LnYxYWxwaGExLkNhbmNlbFRhc2tSZXF1ZXN0XG4gKi9cbmV4cG9ydCBjb25zdCBDYW5jZWxUYXNrUmVxdWVzdCA9IHByb3RvMy5tYWtlTWVzc2FnZVR5cGUoXG4gIFwicmJ0LnYxYWxwaGExLkNhbmNlbFRhc2tSZXF1ZXN0XCIsXG4gICgpID0+IFtcbiAgICB7IG5vOiAxLCBuYW1lOiBcInRhc2tfaWRcIiwga2luZDogXCJtZXNzYWdlXCIsIFQ6IFRhc2tJZCB9LFxuICBdLFxuKTtcblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudjFhbHBoYTEuQ2FuY2VsVGFza1Jlc3BvbnNlXG4gKi9cbmV4cG9ydCBjb25zdCBDYW5jZWxUYXNrUmVzcG9uc2UgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5DYW5jZWxUYXNrUmVzcG9uc2VcIixcbiAgKCkgPT4gW1xuICAgIHsgbm86IDEsIG5hbWU6IFwic3RhdHVzXCIsIGtpbmQ6IFwiZW51bVwiLCBUOiBwcm90bzMuZ2V0RW51bVR5cGUoQ2FuY2VsVGFza1Jlc3BvbnNlX1N0YXR1cykgfSxcbiAgXSxcbik7XG5cbi8qKlxuICogQGdlbmVyYXRlZCBmcm9tIGVudW0gcmJ0LnYxYWxwaGExLkNhbmNlbFRhc2tSZXNwb25zZS5TdGF0dXNcbiAqL1xuZXhwb3J0IGNvbnN0IENhbmNlbFRhc2tSZXNwb25zZV9TdGF0dXMgPSBwcm90bzMubWFrZUVudW0oXG4gIFwicmJ0LnYxYWxwaGExLkNhbmNlbFRhc2tSZXNwb25zZS5TdGF0dXNcIixcbiAgW1xuICAgIHtubzogMCwgbmFtZTogXCJPS1wifSxcbiAgICB7bm86IDEsIG5hbWU6IFwiTk9UX0ZPVU5EXCJ9LFxuICAgIHtubzogMiwgbmFtZTogXCJDQU5DRUxMSU5HXCJ9LFxuICBdLFxuKTtcblxuLyoqXG4gKiBAZ2VuZXJhdGVkIGZyb20gbWVzc2FnZSByYnQudjFhbHBoYTEuVGFza0NhbmNlbGxlZEVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBUYXNrQ2FuY2VsbGVkRXJyb3IgPSBwcm90bzMubWFrZU1lc3NhZ2VUeXBlKFxuICBcInJidC52MWFscGhhMS5UYXNrQ2FuY2VsbGVkRXJyb3JcIixcbiAgW10sXG4pO1xuXG4iLCAiaW1wb3J0IHsgU2NoZW1hIH0gZnJvbSBcInByb3NlbWlycm9yLW1vZGVsXCI7XG5pbXBvcnQgeyBzY2hlbWEgYXMgYmFzZSB9IGZyb20gXCJwcm9zZW1pcnJvci1zY2hlbWEtYmFzaWNcIjtcbmltcG9ydCB7IGFkZExpc3ROb2RlcyB9IGZyb20gXCJwcm9zZW1pcnJvci1zY2hlbWEtbGlzdFwiO1xuXG5leHBvcnQgY29uc3QgU0NIRU1BID0gbmV3IFNjaGVtYSh7XG4gIG5vZGVzOiBhZGRMaXN0Tm9kZXMoYmFzZS5zcGVjLm5vZGVzLCBcInBhcmFncmFwaCBibG9jaypcIiwgXCJibG9ja1wiKSxcbiAgbWFya3M6IGJhc2Uuc3BlYy5tYXJrcyxcbn0pO1xuXG5leHBvcnQgY29uc3QgSU5JVElBTF9ET0MgPSBTQ0hFTUEubm9kZShcImRvY1wiLCBudWxsLCBbXG4gIFNDSEVNQS5ub2RlKFwicGFyYWdyYXBoXCIsIG51bGwsIFtTQ0hFTUEudGV4dChcIlJlcGxhY2UgbWUhXCIpXSksXG5dKTtcblxuLy8gU2luZ2xldG9uIHN0YXRlIElEIGZvciBkZXZlbG9wbWVudCBhbmQgdGVzdGluZyBwdXJwb3Nlcy5cbmV4cG9ydCBjb25zdCBET0NfSUQgPSBcInRlc3RcIjtcbiIsICJpbXBvcnQgeyBTY2hlbWEgfSBmcm9tICdwcm9zZW1pcnJvci1tb2RlbCc7XG5cbmNvbnN0IHBET00gPSBbXCJwXCIsIDBdLCBibG9ja3F1b3RlRE9NID0gW1wiYmxvY2txdW90ZVwiLCAwXSwgaHJET00gPSBbXCJoclwiXSwgcHJlRE9NID0gW1wicHJlXCIsIFtcImNvZGVcIiwgMF1dLCBickRPTSA9IFtcImJyXCJdO1xuLyoqXG5bU3BlY3NdKGh0dHBzOi8vcHJvc2VtaXJyb3IubmV0L2RvY3MvcmVmLyNtb2RlbC5Ob2RlU3BlYykgZm9yIHRoZSBub2RlcyBkZWZpbmVkIGluIHRoaXMgc2NoZW1hLlxuKi9cbmNvbnN0IG5vZGVzID0ge1xuICAgIC8qKlxuICAgIE5vZGVTcGVjIFRoZSB0b3AgbGV2ZWwgZG9jdW1lbnQgbm9kZS5cbiAgICAqL1xuICAgIGRvYzoge1xuICAgICAgICBjb250ZW50OiBcImJsb2NrK1wiXG4gICAgfSxcbiAgICAvKipcbiAgICBBIHBsYWluIHBhcmFncmFwaCB0ZXh0YmxvY2suIFJlcHJlc2VudGVkIGluIHRoZSBET01cbiAgICBhcyBhIGA8cD5gIGVsZW1lbnQuXG4gICAgKi9cbiAgICBwYXJhZ3JhcGg6IHtcbiAgICAgICAgY29udGVudDogXCJpbmxpbmUqXCIsXG4gICAgICAgIGdyb3VwOiBcImJsb2NrXCIsXG4gICAgICAgIHBhcnNlRE9NOiBbeyB0YWc6IFwicFwiIH1dLFxuICAgICAgICB0b0RPTSgpIHsgcmV0dXJuIHBET007IH1cbiAgICB9LFxuICAgIC8qKlxuICAgIEEgYmxvY2txdW90ZSAoYDxibG9ja3F1b3RlPmApIHdyYXBwaW5nIG9uZSBvciBtb3JlIGJsb2Nrcy5cbiAgICAqL1xuICAgIGJsb2NrcXVvdGU6IHtcbiAgICAgICAgY29udGVudDogXCJibG9jaytcIixcbiAgICAgICAgZ3JvdXA6IFwiYmxvY2tcIixcbiAgICAgICAgZGVmaW5pbmc6IHRydWUsXG4gICAgICAgIHBhcnNlRE9NOiBbeyB0YWc6IFwiYmxvY2txdW90ZVwiIH1dLFxuICAgICAgICB0b0RPTSgpIHsgcmV0dXJuIGJsb2NrcXVvdGVET007IH1cbiAgICB9LFxuICAgIC8qKlxuICAgIEEgaG9yaXpvbnRhbCBydWxlIChgPGhyPmApLlxuICAgICovXG4gICAgaG9yaXpvbnRhbF9ydWxlOiB7XG4gICAgICAgIGdyb3VwOiBcImJsb2NrXCIsXG4gICAgICAgIHBhcnNlRE9NOiBbeyB0YWc6IFwiaHJcIiB9XSxcbiAgICAgICAgdG9ET00oKSB7IHJldHVybiBockRPTTsgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgQSBoZWFkaW5nIHRleHRibG9jaywgd2l0aCBhIGBsZXZlbGAgYXR0cmlidXRlIHRoYXRcbiAgICBzaG91bGQgaG9sZCB0aGUgbnVtYmVyIDEgdG8gNi4gUGFyc2VkIGFuZCBzZXJpYWxpemVkIGFzIGA8aDE+YCB0b1xuICAgIGA8aDY+YCBlbGVtZW50cy5cbiAgICAqL1xuICAgIGhlYWRpbmc6IHtcbiAgICAgICAgYXR0cnM6IHsgbGV2ZWw6IHsgZGVmYXVsdDogMSwgdmFsaWRhdGU6IFwibnVtYmVyXCIgfSB9LFxuICAgICAgICBjb250ZW50OiBcImlubGluZSpcIixcbiAgICAgICAgZ3JvdXA6IFwiYmxvY2tcIixcbiAgICAgICAgZGVmaW5pbmc6IHRydWUsXG4gICAgICAgIHBhcnNlRE9NOiBbeyB0YWc6IFwiaDFcIiwgYXR0cnM6IHsgbGV2ZWw6IDEgfSB9LFxuICAgICAgICAgICAgeyB0YWc6IFwiaDJcIiwgYXR0cnM6IHsgbGV2ZWw6IDIgfSB9LFxuICAgICAgICAgICAgeyB0YWc6IFwiaDNcIiwgYXR0cnM6IHsgbGV2ZWw6IDMgfSB9LFxuICAgICAgICAgICAgeyB0YWc6IFwiaDRcIiwgYXR0cnM6IHsgbGV2ZWw6IDQgfSB9LFxuICAgICAgICAgICAgeyB0YWc6IFwiaDVcIiwgYXR0cnM6IHsgbGV2ZWw6IDUgfSB9LFxuICAgICAgICAgICAgeyB0YWc6IFwiaDZcIiwgYXR0cnM6IHsgbGV2ZWw6IDYgfSB9XSxcbiAgICAgICAgdG9ET00obm9kZSkgeyByZXR1cm4gW1wiaFwiICsgbm9kZS5hdHRycy5sZXZlbCwgMF07IH1cbiAgICB9LFxuICAgIC8qKlxuICAgIEEgY29kZSBsaXN0aW5nLiBEaXNhbGxvd3MgbWFya3Mgb3Igbm9uLXRleHQgaW5saW5lXG4gICAgbm9kZXMgYnkgZGVmYXVsdC4gUmVwcmVzZW50ZWQgYXMgYSBgPHByZT5gIGVsZW1lbnQgd2l0aCBhXG4gICAgYDxjb2RlPmAgZWxlbWVudCBpbnNpZGUgb2YgaXQuXG4gICAgKi9cbiAgICBjb2RlX2Jsb2NrOiB7XG4gICAgICAgIGNvbnRlbnQ6IFwidGV4dCpcIixcbiAgICAgICAgbWFya3M6IFwiXCIsXG4gICAgICAgIGdyb3VwOiBcImJsb2NrXCIsXG4gICAgICAgIGNvZGU6IHRydWUsXG4gICAgICAgIGRlZmluaW5nOiB0cnVlLFxuICAgICAgICBwYXJzZURPTTogW3sgdGFnOiBcInByZVwiLCBwcmVzZXJ2ZVdoaXRlc3BhY2U6IFwiZnVsbFwiIH1dLFxuICAgICAgICB0b0RPTSgpIHsgcmV0dXJuIHByZURPTTsgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgVGhlIHRleHQgbm9kZS5cbiAgICAqL1xuICAgIHRleHQ6IHtcbiAgICAgICAgZ3JvdXA6IFwiaW5saW5lXCJcbiAgICB9LFxuICAgIC8qKlxuICAgIEFuIGlubGluZSBpbWFnZSAoYDxpbWc+YCkgbm9kZS4gU3VwcG9ydHMgYHNyY2AsXG4gICAgYGFsdGAsIGFuZCBgaHJlZmAgYXR0cmlidXRlcy4gVGhlIGxhdHRlciB0d28gZGVmYXVsdCB0byB0aGUgZW1wdHlcbiAgICBzdHJpbmcuXG4gICAgKi9cbiAgICBpbWFnZToge1xuICAgICAgICBpbmxpbmU6IHRydWUsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBzcmM6IHsgdmFsaWRhdGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICAgIGFsdDogeyBkZWZhdWx0OiBudWxsLCB2YWxpZGF0ZTogXCJzdHJpbmd8bnVsbFwiIH0sXG4gICAgICAgICAgICB0aXRsZTogeyBkZWZhdWx0OiBudWxsLCB2YWxpZGF0ZTogXCJzdHJpbmd8bnVsbFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdXA6IFwiaW5saW5lXCIsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgcGFyc2VET006IFt7IHRhZzogXCJpbWdbc3JjXVwiLCBnZXRBdHRycyhkb20pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogZG9tLmdldEF0dHJpYnV0ZShcInNyY1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkb20uZ2V0QXR0cmlidXRlKFwidGl0bGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IGRvbS5nZXRBdHRyaWJ1dGUoXCJhbHRcIilcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IH1dLFxuICAgICAgICB0b0RPTShub2RlKSB7IGxldCB7IHNyYywgYWx0LCB0aXRsZSB9ID0gbm9kZS5hdHRyczsgcmV0dXJuIFtcImltZ1wiLCB7IHNyYywgYWx0LCB0aXRsZSB9XTsgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgQSBoYXJkIGxpbmUgYnJlYWssIHJlcHJlc2VudGVkIGluIHRoZSBET00gYXMgYDxicj5gLlxuICAgICovXG4gICAgaGFyZF9icmVhazoge1xuICAgICAgICBpbmxpbmU6IHRydWUsXG4gICAgICAgIGdyb3VwOiBcImlubGluZVwiLFxuICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgcGFyc2VET006IFt7IHRhZzogXCJiclwiIH1dLFxuICAgICAgICB0b0RPTSgpIHsgcmV0dXJuIGJyRE9NOyB9XG4gICAgfVxufTtcbmNvbnN0IGVtRE9NID0gW1wiZW1cIiwgMF0sIHN0cm9uZ0RPTSA9IFtcInN0cm9uZ1wiLCAwXSwgY29kZURPTSA9IFtcImNvZGVcIiwgMF07XG4vKipcbltTcGVjc10oaHR0cHM6Ly9wcm9zZW1pcnJvci5uZXQvZG9jcy9yZWYvI21vZGVsLk1hcmtTcGVjKSBmb3IgdGhlIG1hcmtzIGluIHRoZSBzY2hlbWEuXG4qL1xuY29uc3QgbWFya3MgPSB7XG4gICAgLyoqXG4gICAgQSBsaW5rLiBIYXMgYGhyZWZgIGFuZCBgdGl0bGVgIGF0dHJpYnV0ZXMuIGB0aXRsZWBcbiAgICBkZWZhdWx0cyB0byB0aGUgZW1wdHkgc3RyaW5nLiBSZW5kZXJlZCBhbmQgcGFyc2VkIGFzIGFuIGA8YT5gXG4gICAgZWxlbWVudC5cbiAgICAqL1xuICAgIGxpbms6IHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGhyZWY6IHsgdmFsaWRhdGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICAgIHRpdGxlOiB7IGRlZmF1bHQ6IG51bGwsIHZhbGlkYXRlOiBcInN0cmluZ3xudWxsXCIgfVxuICAgICAgICB9LFxuICAgICAgICBpbmNsdXNpdmU6IGZhbHNlLFxuICAgICAgICBwYXJzZURPTTogW3sgdGFnOiBcImFbaHJlZl1cIiwgZ2V0QXR0cnMoZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGhyZWY6IGRvbS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLCB0aXRsZTogZG9tLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpIH07XG4gICAgICAgICAgICAgICAgfSB9XSxcbiAgICAgICAgdG9ET00obm9kZSkgeyBsZXQgeyBocmVmLCB0aXRsZSB9ID0gbm9kZS5hdHRyczsgcmV0dXJuIFtcImFcIiwgeyBocmVmLCB0aXRsZSB9LCAwXTsgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgQW4gZW1waGFzaXMgbWFyay4gUmVuZGVyZWQgYXMgYW4gYDxlbT5gIGVsZW1lbnQuIEhhcyBwYXJzZSBydWxlc1xuICAgIHRoYXQgYWxzbyBtYXRjaCBgPGk+YCBhbmQgYGZvbnQtc3R5bGU6IGl0YWxpY2AuXG4gICAgKi9cbiAgICBlbToge1xuICAgICAgICBwYXJzZURPTTogW1xuICAgICAgICAgICAgeyB0YWc6IFwiaVwiIH0sIHsgdGFnOiBcImVtXCIgfSxcbiAgICAgICAgICAgIHsgc3R5bGU6IFwiZm9udC1zdHlsZT1pdGFsaWNcIiB9LFxuICAgICAgICAgICAgeyBzdHlsZTogXCJmb250LXN0eWxlPW5vcm1hbFwiLCBjbGVhck1hcms6IG0gPT4gbS50eXBlLm5hbWUgPT0gXCJlbVwiIH1cbiAgICAgICAgXSxcbiAgICAgICAgdG9ET00oKSB7IHJldHVybiBlbURPTTsgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgQSBzdHJvbmcgbWFyay4gUmVuZGVyZWQgYXMgYDxzdHJvbmc+YCwgcGFyc2UgcnVsZXMgYWxzbyBtYXRjaFxuICAgIGA8Yj5gIGFuZCBgZm9udC13ZWlnaHQ6IGJvbGRgLlxuICAgICovXG4gICAgc3Ryb25nOiB7XG4gICAgICAgIHBhcnNlRE9NOiBbXG4gICAgICAgICAgICB7IHRhZzogXCJzdHJvbmdcIiB9LFxuICAgICAgICAgICAgLy8gVGhpcyB3b3JrcyBhcm91bmQgYSBHb29nbGUgRG9jcyBtaXNiZWhhdmlvciB3aGVyZVxuICAgICAgICAgICAgLy8gcGFzdGVkIGNvbnRlbnQgd2lsbCBiZSBpbmV4cGxpY2FibHkgd3JhcHBlZCBpbiBgPGI+YFxuICAgICAgICAgICAgLy8gdGFncyB3aXRoIGEgZm9udC13ZWlnaHQgbm9ybWFsLlxuICAgICAgICAgICAgeyB0YWc6IFwiYlwiLCBnZXRBdHRyczogKG5vZGUpID0+IG5vZGUuc3R5bGUuZm9udFdlaWdodCAhPSBcIm5vcm1hbFwiICYmIG51bGwgfSxcbiAgICAgICAgICAgIHsgc3R5bGU6IFwiZm9udC13ZWlnaHQ9NDAwXCIsIGNsZWFyTWFyazogbSA9PiBtLnR5cGUubmFtZSA9PSBcInN0cm9uZ1wiIH0sXG4gICAgICAgICAgICB7IHN0eWxlOiBcImZvbnQtd2VpZ2h0XCIsIGdldEF0dHJzOiAodmFsdWUpID0+IC9eKGJvbGQoZXIpP3xbNS05XVxcZHsyLH0pJC8udGVzdCh2YWx1ZSkgJiYgbnVsbCB9LFxuICAgICAgICBdLFxuICAgICAgICB0b0RPTSgpIHsgcmV0dXJuIHN0cm9uZ0RPTTsgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgQ29kZSBmb250IG1hcmsuIFJlcHJlc2VudGVkIGFzIGEgYDxjb2RlPmAgZWxlbWVudC5cbiAgICAqL1xuICAgIGNvZGU6IHtcbiAgICAgICAgcGFyc2VET006IFt7IHRhZzogXCJjb2RlXCIgfV0sXG4gICAgICAgIHRvRE9NKCkgeyByZXR1cm4gY29kZURPTTsgfVxuICAgIH1cbn07XG4vKipcblRoaXMgc2NoZW1hIHJvdWdobHkgY29ycmVzcG9uZHMgdG8gdGhlIGRvY3VtZW50IHNjaGVtYSB1c2VkIGJ5XG5bQ29tbW9uTWFya10oaHR0cDovL2NvbW1vbm1hcmsub3JnLyksIG1pbnVzIHRoZSBsaXN0IGVsZW1lbnRzLFxud2hpY2ggYXJlIGRlZmluZWQgaW4gdGhlIFtgcHJvc2VtaXJyb3Itc2NoZW1hLWxpc3RgXShodHRwczovL3Byb3NlbWlycm9yLm5ldC9kb2NzL3JlZi8jc2NoZW1hLWxpc3QpXG5tb2R1bGUuXG5cblRvIHJldXNlIGVsZW1lbnRzIGZyb20gdGhpcyBzY2hlbWEsIGV4dGVuZCBvciByZWFkIGZyb20gaXRzXG5gc3BlYy5ub2Rlc2AgYW5kIGBzcGVjLm1hcmtzYCBbcHJvcGVydGllc10oaHR0cHM6Ly9wcm9zZW1pcnJvci5uZXQvZG9jcy9yZWYvI21vZGVsLlNjaGVtYS5zcGVjKS5cbiovXG5jb25zdCBzY2hlbWEgPSBuZXcgU2NoZW1hKHsgbm9kZXMsIG1hcmtzIH0pO1xuXG5leHBvcnQgeyBtYXJrcywgbm9kZXMsIHNjaGVtYSB9O1xuIiwgImltcG9ydCB7IGZpbmRXcmFwcGluZywgUmVwbGFjZUFyb3VuZFN0ZXAsIGNhblNwbGl0LCBsaWZ0VGFyZ2V0LCBjYW5Kb2luIH0gZnJvbSAncHJvc2VtaXJyb3ItdHJhbnNmb3JtJztcbmltcG9ydCB7IE5vZGVSYW5nZSwgRnJhZ21lbnQsIFNsaWNlIH0gZnJvbSAncHJvc2VtaXJyb3ItbW9kZWwnO1xuaW1wb3J0IHsgU2VsZWN0aW9uIH0gZnJvbSAncHJvc2VtaXJyb3Itc3RhdGUnO1xuXG5jb25zdCBvbERPTSA9IFtcIm9sXCIsIDBdLCB1bERPTSA9IFtcInVsXCIsIDBdLCBsaURPTSA9IFtcImxpXCIsIDBdO1xuLyoqXG5BbiBvcmRlcmVkIGxpc3QgW25vZGUgc3BlY10oaHR0cHM6Ly9wcm9zZW1pcnJvci5uZXQvZG9jcy9yZWYvI21vZGVsLk5vZGVTcGVjKS4gSGFzIGEgc2luZ2xlXG5hdHRyaWJ1dGUsIGBvcmRlcmAsIHdoaWNoIGRldGVybWluZXMgdGhlIG51bWJlciBhdCB3aGljaCB0aGUgbGlzdFxuc3RhcnRzIGNvdW50aW5nLCBhbmQgZGVmYXVsdHMgdG8gMS4gUmVwcmVzZW50ZWQgYXMgYW4gYDxvbD5gXG5lbGVtZW50LlxuKi9cbmNvbnN0IG9yZGVyZWRMaXN0ID0ge1xuICAgIGF0dHJzOiB7IG9yZGVyOiB7IGRlZmF1bHQ6IDEsIHZhbGlkYXRlOiBcIm51bWJlclwiIH0gfSxcbiAgICBwYXJzZURPTTogW3sgdGFnOiBcIm9sXCIsIGdldEF0dHJzKGRvbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IG9yZGVyOiBkb20uaGFzQXR0cmlidXRlKFwic3RhcnRcIikgPyArZG9tLmdldEF0dHJpYnV0ZShcInN0YXJ0XCIpIDogMSB9O1xuICAgICAgICAgICAgfSB9XSxcbiAgICB0b0RPTShub2RlKSB7XG4gICAgICAgIHJldHVybiBub2RlLmF0dHJzLm9yZGVyID09IDEgPyBvbERPTSA6IFtcIm9sXCIsIHsgc3RhcnQ6IG5vZGUuYXR0cnMub3JkZXIgfSwgMF07XG4gICAgfVxufTtcbi8qKlxuQSBidWxsZXQgbGlzdCBub2RlIHNwZWMsIHJlcHJlc2VudGVkIGluIHRoZSBET00gYXMgYDx1bD5gLlxuKi9cbmNvbnN0IGJ1bGxldExpc3QgPSB7XG4gICAgcGFyc2VET006IFt7IHRhZzogXCJ1bFwiIH1dLFxuICAgIHRvRE9NKCkgeyByZXR1cm4gdWxET007IH1cbn07XG4vKipcbkEgbGlzdCBpdGVtIChgPGxpPmApIHNwZWMuXG4qL1xuY29uc3QgbGlzdEl0ZW0gPSB7XG4gICAgcGFyc2VET006IFt7IHRhZzogXCJsaVwiIH1dLFxuICAgIHRvRE9NKCkgeyByZXR1cm4gbGlET007IH0sXG4gICAgZGVmaW5pbmc6IHRydWVcbn07XG5mdW5jdGlvbiBhZGQob2JqLCBwcm9wcykge1xuICAgIGxldCBjb3B5ID0ge307XG4gICAgZm9yIChsZXQgcHJvcCBpbiBvYmopXG4gICAgICAgIGNvcHlbcHJvcF0gPSBvYmpbcHJvcF07XG4gICAgZm9yIChsZXQgcHJvcCBpbiBwcm9wcylcbiAgICAgICAgY29weVtwcm9wXSA9IHByb3BzW3Byb3BdO1xuICAgIHJldHVybiBjb3B5O1xufVxuLyoqXG5Db252ZW5pZW5jZSBmdW5jdGlvbiBmb3IgYWRkaW5nIGxpc3QtcmVsYXRlZCBub2RlIHR5cGVzIHRvIGEgbWFwXG5zcGVjaWZ5aW5nIHRoZSBub2RlcyBmb3IgYSBzY2hlbWEuIEFkZHNcbltgb3JkZXJlZExpc3RgXShodHRwczovL3Byb3NlbWlycm9yLm5ldC9kb2NzL3JlZi8jc2NoZW1hLWxpc3Qub3JkZXJlZExpc3QpIGFzIGBcIm9yZGVyZWRfbGlzdFwiYCxcbltgYnVsbGV0TGlzdGBdKGh0dHBzOi8vcHJvc2VtaXJyb3IubmV0L2RvY3MvcmVmLyNzY2hlbWEtbGlzdC5idWxsZXRMaXN0KSBhcyBgXCJidWxsZXRfbGlzdFwiYCwgYW5kXG5bYGxpc3RJdGVtYF0oaHR0cHM6Ly9wcm9zZW1pcnJvci5uZXQvZG9jcy9yZWYvI3NjaGVtYS1saXN0Lmxpc3RJdGVtKSBhcyBgXCJsaXN0X2l0ZW1cImAuXG5cbmBpdGVtQ29udGVudGAgZGV0ZXJtaW5lcyB0aGUgY29udGVudCBleHByZXNzaW9uIGZvciB0aGUgbGlzdCBpdGVtcy5cbklmIHlvdSB3YW50IHRoZSBjb21tYW5kcyBkZWZpbmVkIGluIHRoaXMgbW9kdWxlIHRvIGFwcGx5IHRvIHlvdXJcbmxpc3Qgc3RydWN0dXJlLCBpdCBzaG91bGQgaGF2ZSBhIHNoYXBlIGxpa2UgYFwicGFyYWdyYXBoIGJsb2NrKlwiYCBvclxuYFwicGFyYWdyYXBoIChvcmRlcmVkX2xpc3QgfCBidWxsZXRfbGlzdCkqXCJgLiBgbGlzdEdyb3VwYCBjYW4gYmVcbmdpdmVuIHRvIGFzc2lnbiBhIGdyb3VwIG5hbWUgdG8gdGhlIGxpc3Qgbm9kZSB0eXBlcywgZm9yIGV4YW1wbGVcbmBcImJsb2NrXCJgLlxuKi9cbmZ1bmN0aW9uIGFkZExpc3ROb2Rlcyhub2RlcywgaXRlbUNvbnRlbnQsIGxpc3RHcm91cCkge1xuICAgIHJldHVybiBub2Rlcy5hcHBlbmQoe1xuICAgICAgICBvcmRlcmVkX2xpc3Q6IGFkZChvcmRlcmVkTGlzdCwgeyBjb250ZW50OiBcImxpc3RfaXRlbStcIiwgZ3JvdXA6IGxpc3RHcm91cCB9KSxcbiAgICAgICAgYnVsbGV0X2xpc3Q6IGFkZChidWxsZXRMaXN0LCB7IGNvbnRlbnQ6IFwibGlzdF9pdGVtK1wiLCBncm91cDogbGlzdEdyb3VwIH0pLFxuICAgICAgICBsaXN0X2l0ZW06IGFkZChsaXN0SXRlbSwgeyBjb250ZW50OiBpdGVtQ29udGVudCB9KVxuICAgIH0pO1xufVxuLyoqXG5SZXR1cm5zIGEgY29tbWFuZCBmdW5jdGlvbiB0aGF0IHdyYXBzIHRoZSBzZWxlY3Rpb24gaW4gYSBsaXN0IHdpdGhcbnRoZSBnaXZlbiB0eXBlIGFuIGF0dHJpYnV0ZXMuIElmIGBkaXNwYXRjaGAgaXMgbnVsbCwgb25seSByZXR1cm4gYVxudmFsdWUgdG8gaW5kaWNhdGUgd2hldGhlciB0aGlzIGlzIHBvc3NpYmxlLCBidXQgZG9uJ3QgYWN0dWFsbHlcbnBlcmZvcm0gdGhlIGNoYW5nZS5cbiovXG5mdW5jdGlvbiB3cmFwSW5MaXN0KGxpc3RUeXBlLCBhdHRycyA9IG51bGwpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBkaXNwYXRjaCkge1xuICAgICAgICBsZXQgeyAkZnJvbSwgJHRvIH0gPSBzdGF0ZS5zZWxlY3Rpb247XG4gICAgICAgIGxldCByYW5nZSA9ICRmcm9tLmJsb2NrUmFuZ2UoJHRvKSwgZG9Kb2luID0gZmFsc2UsIG91dGVyUmFuZ2UgPSByYW5nZTtcbiAgICAgICAgaWYgKCFyYW5nZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gVGhpcyBpcyBhdCB0aGUgdG9wIG9mIGFuIGV4aXN0aW5nIGxpc3QgaXRlbVxuICAgICAgICBpZiAocmFuZ2UuZGVwdGggPj0gMiAmJiAkZnJvbS5ub2RlKHJhbmdlLmRlcHRoIC0gMSkudHlwZS5jb21wYXRpYmxlQ29udGVudChsaXN0VHlwZSkgJiYgcmFuZ2Uuc3RhcnRJbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiB0aGlzIGlzIHRoZSB0b3Agb2YgdGhlIGxpc3RcbiAgICAgICAgICAgIGlmICgkZnJvbS5pbmRleChyYW5nZS5kZXB0aCAtIDEpID09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgbGV0ICRpbnNlcnQgPSBzdGF0ZS5kb2MucmVzb2x2ZShyYW5nZS5zdGFydCAtIDIpO1xuICAgICAgICAgICAgb3V0ZXJSYW5nZSA9IG5ldyBOb2RlUmFuZ2UoJGluc2VydCwgJGluc2VydCwgcmFuZ2UuZGVwdGgpO1xuICAgICAgICAgICAgaWYgKHJhbmdlLmVuZEluZGV4IDwgcmFuZ2UucGFyZW50LmNoaWxkQ291bnQpXG4gICAgICAgICAgICAgICAgcmFuZ2UgPSBuZXcgTm9kZVJhbmdlKCRmcm9tLCBzdGF0ZS5kb2MucmVzb2x2ZSgkdG8uZW5kKHJhbmdlLmRlcHRoKSksIHJhbmdlLmRlcHRoKTtcbiAgICAgICAgICAgIGRvSm9pbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdyYXAgPSBmaW5kV3JhcHBpbmcob3V0ZXJSYW5nZSwgbGlzdFR5cGUsIGF0dHJzLCByYW5nZSk7XG4gICAgICAgIGlmICghd3JhcClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGRpc3BhdGNoKVxuICAgICAgICAgICAgZGlzcGF0Y2goZG9XcmFwSW5MaXN0KHN0YXRlLnRyLCByYW5nZSwgd3JhcCwgZG9Kb2luLCBsaXN0VHlwZSkuc2Nyb2xsSW50b1ZpZXcoKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG59XG5mdW5jdGlvbiBkb1dyYXBJbkxpc3QodHIsIHJhbmdlLCB3cmFwcGVycywgam9pbkJlZm9yZSwgbGlzdFR5cGUpIHtcbiAgICBsZXQgY29udGVudCA9IEZyYWdtZW50LmVtcHR5O1xuICAgIGZvciAobGV0IGkgPSB3cmFwcGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcbiAgICAgICAgY29udGVudCA9IEZyYWdtZW50LmZyb20od3JhcHBlcnNbaV0udHlwZS5jcmVhdGUod3JhcHBlcnNbaV0uYXR0cnMsIGNvbnRlbnQpKTtcbiAgICB0ci5zdGVwKG5ldyBSZXBsYWNlQXJvdW5kU3RlcChyYW5nZS5zdGFydCAtIChqb2luQmVmb3JlID8gMiA6IDApLCByYW5nZS5lbmQsIHJhbmdlLnN0YXJ0LCByYW5nZS5lbmQsIG5ldyBTbGljZShjb250ZW50LCAwLCAwKSwgd3JhcHBlcnMubGVuZ3RoLCB0cnVlKSk7XG4gICAgbGV0IGZvdW5kID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdyYXBwZXJzLmxlbmd0aDsgaSsrKVxuICAgICAgICBpZiAod3JhcHBlcnNbaV0udHlwZSA9PSBsaXN0VHlwZSlcbiAgICAgICAgICAgIGZvdW5kID0gaSArIDE7XG4gICAgbGV0IHNwbGl0RGVwdGggPSB3cmFwcGVycy5sZW5ndGggLSBmb3VuZDtcbiAgICBsZXQgc3BsaXRQb3MgPSByYW5nZS5zdGFydCArIHdyYXBwZXJzLmxlbmd0aCAtIChqb2luQmVmb3JlID8gMiA6IDApLCBwYXJlbnQgPSByYW5nZS5wYXJlbnQ7XG4gICAgZm9yIChsZXQgaSA9IHJhbmdlLnN0YXJ0SW5kZXgsIGUgPSByYW5nZS5lbmRJbmRleCwgZmlyc3QgPSB0cnVlOyBpIDwgZTsgaSsrLCBmaXJzdCA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghZmlyc3QgJiYgY2FuU3BsaXQodHIuZG9jLCBzcGxpdFBvcywgc3BsaXREZXB0aCkpIHtcbiAgICAgICAgICAgIHRyLnNwbGl0KHNwbGl0UG9zLCBzcGxpdERlcHRoKTtcbiAgICAgICAgICAgIHNwbGl0UG9zICs9IDIgKiBzcGxpdERlcHRoO1xuICAgICAgICB9XG4gICAgICAgIHNwbGl0UG9zICs9IHBhcmVudC5jaGlsZChpKS5ub2RlU2l6ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRyO1xufVxuLyoqXG5CdWlsZCBhIGNvbW1hbmQgdGhhdCBzcGxpdHMgYSBub24tZW1wdHkgdGV4dGJsb2NrIGF0IHRoZSB0b3AgbGV2ZWxcbm9mIGEgbGlzdCBpdGVtIGJ5IGFsc28gc3BsaXR0aW5nIHRoYXQgbGlzdCBpdGVtLlxuKi9cbmZ1bmN0aW9uIHNwbGl0TGlzdEl0ZW0oaXRlbVR5cGUsIGl0ZW1BdHRycykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGRpc3BhdGNoKSB7XG4gICAgICAgIGxldCB7ICRmcm9tLCAkdG8sIG5vZGUgfSA9IHN0YXRlLnNlbGVjdGlvbjtcbiAgICAgICAgaWYgKChub2RlICYmIG5vZGUuaXNCbG9jaykgfHwgJGZyb20uZGVwdGggPCAyIHx8ICEkZnJvbS5zYW1lUGFyZW50KCR0bykpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBncmFuZFBhcmVudCA9ICRmcm9tLm5vZGUoLTEpO1xuICAgICAgICBpZiAoZ3JhbmRQYXJlbnQudHlwZSAhPSBpdGVtVHlwZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCRmcm9tLnBhcmVudC5jb250ZW50LnNpemUgPT0gMCAmJiAkZnJvbS5ub2RlKC0xKS5jaGlsZENvdW50ID09ICRmcm9tLmluZGV4QWZ0ZXIoLTEpKSB7XG4gICAgICAgICAgICAvLyBJbiBhbiBlbXB0eSBibG9jay4gSWYgdGhpcyBpcyBhIG5lc3RlZCBsaXN0LCB0aGUgd3JhcHBpbmdcbiAgICAgICAgICAgIC8vIGxpc3QgaXRlbSBzaG91bGQgYmUgc3BsaXQuIE90aGVyd2lzZSwgYmFpbCBvdXQgYW5kIGxldCBuZXh0XG4gICAgICAgICAgICAvLyBjb21tYW5kIGhhbmRsZSBsaWZ0aW5nLlxuICAgICAgICAgICAgaWYgKCRmcm9tLmRlcHRoID09IDMgfHwgJGZyb20ubm9kZSgtMykudHlwZSAhPSBpdGVtVHlwZSB8fFxuICAgICAgICAgICAgICAgICRmcm9tLmluZGV4KC0yKSAhPSAkZnJvbS5ub2RlKC0yKS5jaGlsZENvdW50IC0gMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoZGlzcGF0Y2gpIHtcbiAgICAgICAgICAgICAgICBsZXQgd3JhcCA9IEZyYWdtZW50LmVtcHR5O1xuICAgICAgICAgICAgICAgIGxldCBkZXB0aEJlZm9yZSA9ICRmcm9tLmluZGV4KC0xKSA/IDEgOiAkZnJvbS5pbmRleCgtMikgPyAyIDogMztcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBhIGZyYWdtZW50IGNvbnRhaW5pbmcgZW1wdHkgdmVyc2lvbnMgb2YgdGhlIHN0cnVjdHVyZVxuICAgICAgICAgICAgICAgIC8vIGZyb20gdGhlIG91dGVyIGxpc3QgaXRlbSB0byB0aGUgcGFyZW50IG5vZGUgb2YgdGhlIGN1cnNvclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGQgPSAkZnJvbS5kZXB0aCAtIGRlcHRoQmVmb3JlOyBkID49ICRmcm9tLmRlcHRoIC0gMzsgZC0tKVxuICAgICAgICAgICAgICAgICAgICB3cmFwID0gRnJhZ21lbnQuZnJvbSgkZnJvbS5ub2RlKGQpLmNvcHkod3JhcCkpO1xuICAgICAgICAgICAgICAgIGxldCBkZXB0aEFmdGVyID0gJGZyb20uaW5kZXhBZnRlcigtMSkgPCAkZnJvbS5ub2RlKC0yKS5jaGlsZENvdW50ID8gMVxuICAgICAgICAgICAgICAgICAgICA6ICRmcm9tLmluZGV4QWZ0ZXIoLTIpIDwgJGZyb20ubm9kZSgtMykuY2hpbGRDb3VudCA/IDIgOiAzO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhIHNlY29uZCBsaXN0IGl0ZW0gd2l0aCBhbiBlbXB0eSBkZWZhdWx0IHN0YXJ0IG5vZGVcbiAgICAgICAgICAgICAgICB3cmFwID0gd3JhcC5hcHBlbmQoRnJhZ21lbnQuZnJvbShpdGVtVHlwZS5jcmVhdGVBbmRGaWxsKCkpKTtcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnQgPSAkZnJvbS5iZWZvcmUoJGZyb20uZGVwdGggLSAoZGVwdGhCZWZvcmUgLSAxKSk7XG4gICAgICAgICAgICAgICAgbGV0IHRyID0gc3RhdGUudHIucmVwbGFjZShzdGFydCwgJGZyb20uYWZ0ZXIoLWRlcHRoQWZ0ZXIpLCBuZXcgU2xpY2Uod3JhcCwgNCAtIGRlcHRoQmVmb3JlLCAwKSk7XG4gICAgICAgICAgICAgICAgbGV0IHNlbCA9IC0xO1xuICAgICAgICAgICAgICAgIHRyLmRvYy5ub2Rlc0JldHdlZW4oc3RhcnQsIHRyLmRvYy5jb250ZW50LnNpemUsIChub2RlLCBwb3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbCA+IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5pc1RleHRibG9jayAmJiBub2RlLmNvbnRlbnQuc2l6ZSA9PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsID4gLTEpXG4gICAgICAgICAgICAgICAgICAgIHRyLnNldFNlbGVjdGlvbihTZWxlY3Rpb24ubmVhcih0ci5kb2MucmVzb2x2ZShzZWwpKSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godHIuc2Nyb2xsSW50b1ZpZXcoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dFR5cGUgPSAkdG8ucG9zID09ICRmcm9tLmVuZCgpID8gZ3JhbmRQYXJlbnQuY29udGVudE1hdGNoQXQoMCkuZGVmYXVsdFR5cGUgOiBudWxsO1xuICAgICAgICBsZXQgdHIgPSBzdGF0ZS50ci5kZWxldGUoJGZyb20ucG9zLCAkdG8ucG9zKTtcbiAgICAgICAgbGV0IHR5cGVzID0gbmV4dFR5cGUgPyBbaXRlbUF0dHJzID8geyB0eXBlOiBpdGVtVHlwZSwgYXR0cnM6IGl0ZW1BdHRycyB9IDogbnVsbCwgeyB0eXBlOiBuZXh0VHlwZSB9XSA6IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFjYW5TcGxpdCh0ci5kb2MsICRmcm9tLnBvcywgMiwgdHlwZXMpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoZGlzcGF0Y2gpXG4gICAgICAgICAgICBkaXNwYXRjaCh0ci5zcGxpdCgkZnJvbS5wb3MsIDIsIHR5cGVzKS5zY3JvbGxJbnRvVmlldygpKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cbi8qKlxuQWN0cyBsaWtlIFtgc3BsaXRMaXN0SXRlbWBdKGh0dHBzOi8vcHJvc2VtaXJyb3IubmV0L2RvY3MvcmVmLyNzY2hlbWEtbGlzdC5zcGxpdExpc3RJdGVtKSwgYnV0XG53aXRob3V0IHJlc2V0dGluZyB0aGUgc2V0IG9mIGFjdGl2ZSBtYXJrcyBhdCB0aGUgY3Vyc29yLlxuKi9cbmZ1bmN0aW9uIHNwbGl0TGlzdEl0ZW1LZWVwTWFya3MoaXRlbVR5cGUsIGl0ZW1BdHRycykge1xuICAgIGxldCBzcGxpdCA9IHNwbGl0TGlzdEl0ZW0oaXRlbVR5cGUsIGl0ZW1BdHRycyk7XG4gICAgcmV0dXJuIChzdGF0ZSwgZGlzcGF0Y2gpID0+IHtcbiAgICAgICAgcmV0dXJuIHNwbGl0KHN0YXRlLCBkaXNwYXRjaCAmJiAodHIgPT4ge1xuICAgICAgICAgICAgbGV0IG1hcmtzID0gc3RhdGUuc3RvcmVkTWFya3MgfHwgKHN0YXRlLnNlbGVjdGlvbi4kdG8ucGFyZW50T2Zmc2V0ICYmIHN0YXRlLnNlbGVjdGlvbi4kZnJvbS5tYXJrcygpKTtcbiAgICAgICAgICAgIGlmIChtYXJrcylcbiAgICAgICAgICAgICAgICB0ci5lbnN1cmVNYXJrcyhtYXJrcyk7XG4gICAgICAgICAgICBkaXNwYXRjaCh0cik7XG4gICAgICAgIH0pKTtcbiAgICB9O1xufVxuLyoqXG5DcmVhdGUgYSBjb21tYW5kIHRvIGxpZnQgdGhlIGxpc3QgaXRlbSBhcm91bmQgdGhlIHNlbGVjdGlvbiB1cCBpbnRvXG5hIHdyYXBwaW5nIGxpc3QuXG4qL1xuZnVuY3Rpb24gbGlmdExpc3RJdGVtKGl0ZW1UeXBlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdGF0ZSwgZGlzcGF0Y2gpIHtcbiAgICAgICAgbGV0IHsgJGZyb20sICR0byB9ID0gc3RhdGUuc2VsZWN0aW9uO1xuICAgICAgICBsZXQgcmFuZ2UgPSAkZnJvbS5ibG9ja1JhbmdlKCR0bywgbm9kZSA9PiBub2RlLmNoaWxkQ291bnQgPiAwICYmIG5vZGUuZmlyc3RDaGlsZC50eXBlID09IGl0ZW1UeXBlKTtcbiAgICAgICAgaWYgKCFyYW5nZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCFkaXNwYXRjaClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoJGZyb20ubm9kZShyYW5nZS5kZXB0aCAtIDEpLnR5cGUgPT0gaXRlbVR5cGUpIC8vIEluc2lkZSBhIHBhcmVudCBsaXN0XG4gICAgICAgICAgICByZXR1cm4gbGlmdFRvT3V0ZXJMaXN0KHN0YXRlLCBkaXNwYXRjaCwgaXRlbVR5cGUsIHJhbmdlKTtcbiAgICAgICAgZWxzZSAvLyBPdXRlciBsaXN0IG5vZGVcbiAgICAgICAgICAgIHJldHVybiBsaWZ0T3V0T2ZMaXN0KHN0YXRlLCBkaXNwYXRjaCwgcmFuZ2UpO1xuICAgIH07XG59XG5mdW5jdGlvbiBsaWZ0VG9PdXRlckxpc3Qoc3RhdGUsIGRpc3BhdGNoLCBpdGVtVHlwZSwgcmFuZ2UpIHtcbiAgICBsZXQgdHIgPSBzdGF0ZS50ciwgZW5kID0gcmFuZ2UuZW5kLCBlbmRPZkxpc3QgPSByYW5nZS4kdG8uZW5kKHJhbmdlLmRlcHRoKTtcbiAgICBpZiAoZW5kIDwgZW5kT2ZMaXN0KSB7XG4gICAgICAgIC8vIFRoZXJlIGFyZSBzaWJsaW5ncyBhZnRlciB0aGUgbGlmdGVkIGl0ZW1zLCB3aGljaCBtdXN0IGJlY29tZVxuICAgICAgICAvLyBjaGlsZHJlbiBvZiB0aGUgbGFzdCBpdGVtXG4gICAgICAgIHRyLnN0ZXAobmV3IFJlcGxhY2VBcm91bmRTdGVwKGVuZCAtIDEsIGVuZE9mTGlzdCwgZW5kLCBlbmRPZkxpc3QsIG5ldyBTbGljZShGcmFnbWVudC5mcm9tKGl0ZW1UeXBlLmNyZWF0ZShudWxsLCByYW5nZS5wYXJlbnQuY29weSgpKSksIDEsIDApLCAxLCB0cnVlKSk7XG4gICAgICAgIHJhbmdlID0gbmV3IE5vZGVSYW5nZSh0ci5kb2MucmVzb2x2ZShyYW5nZS4kZnJvbS5wb3MpLCB0ci5kb2MucmVzb2x2ZShlbmRPZkxpc3QpLCByYW5nZS5kZXB0aCk7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGxpZnRUYXJnZXQocmFuZ2UpO1xuICAgIGlmICh0YXJnZXQgPT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHRyLmxpZnQocmFuZ2UsIHRhcmdldCk7XG4gICAgbGV0IGFmdGVyID0gdHIubWFwcGluZy5tYXAoZW5kLCAtMSkgLSAxO1xuICAgIGlmIChjYW5Kb2luKHRyLmRvYywgYWZ0ZXIpKVxuICAgICAgICB0ci5qb2luKGFmdGVyKTtcbiAgICBkaXNwYXRjaCh0ci5zY3JvbGxJbnRvVmlldygpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGxpZnRPdXRPZkxpc3Qoc3RhdGUsIGRpc3BhdGNoLCByYW5nZSkge1xuICAgIGxldCB0ciA9IHN0YXRlLnRyLCBsaXN0ID0gcmFuZ2UucGFyZW50O1xuICAgIC8vIE1lcmdlIHRoZSBsaXN0IGl0ZW1zIGludG8gYSBzaW5nbGUgYmlnIGl0ZW1cbiAgICBmb3IgKGxldCBwb3MgPSByYW5nZS5lbmQsIGkgPSByYW5nZS5lbmRJbmRleCAtIDEsIGUgPSByYW5nZS5zdGFydEluZGV4OyBpID4gZTsgaS0tKSB7XG4gICAgICAgIHBvcyAtPSBsaXN0LmNoaWxkKGkpLm5vZGVTaXplO1xuICAgICAgICB0ci5kZWxldGUocG9zIC0gMSwgcG9zICsgMSk7XG4gICAgfVxuICAgIGxldCAkc3RhcnQgPSB0ci5kb2MucmVzb2x2ZShyYW5nZS5zdGFydCksIGl0ZW0gPSAkc3RhcnQubm9kZUFmdGVyO1xuICAgIGlmICh0ci5tYXBwaW5nLm1hcChyYW5nZS5lbmQpICE9IHJhbmdlLnN0YXJ0ICsgJHN0YXJ0Lm5vZGVBZnRlci5ub2RlU2l6ZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBhdFN0YXJ0ID0gcmFuZ2Uuc3RhcnRJbmRleCA9PSAwLCBhdEVuZCA9IHJhbmdlLmVuZEluZGV4ID09IGxpc3QuY2hpbGRDb3VudDtcbiAgICBsZXQgcGFyZW50ID0gJHN0YXJ0Lm5vZGUoLTEpLCBpbmRleEJlZm9yZSA9ICRzdGFydC5pbmRleCgtMSk7XG4gICAgaWYgKCFwYXJlbnQuY2FuUmVwbGFjZShpbmRleEJlZm9yZSArIChhdFN0YXJ0ID8gMCA6IDEpLCBpbmRleEJlZm9yZSArIDEsIGl0ZW0uY29udGVudC5hcHBlbmQoYXRFbmQgPyBGcmFnbWVudC5lbXB0eSA6IEZyYWdtZW50LmZyb20obGlzdCkpKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGxldCBzdGFydCA9ICRzdGFydC5wb3MsIGVuZCA9IHN0YXJ0ICsgaXRlbS5ub2RlU2l6ZTtcbiAgICAvLyBTdHJpcCBvZmYgdGhlIHN1cnJvdW5kaW5nIGxpc3QuIEF0IHRoZSBzaWRlcyB3aGVyZSB3ZSdyZSBub3QgYXRcbiAgICAvLyB0aGUgZW5kIG9mIHRoZSBsaXN0LCB0aGUgZXhpc3RpbmcgbGlzdCBpcyBjbG9zZWQuIEF0IHNpZGVzIHdoZXJlXG4gICAgLy8gdGhpcyBpcyB0aGUgZW5kLCBpdCBpcyBvdmVyd3JpdHRlbiB0byBpdHMgZW5kLlxuICAgIHRyLnN0ZXAobmV3IFJlcGxhY2VBcm91bmRTdGVwKHN0YXJ0IC0gKGF0U3RhcnQgPyAxIDogMCksIGVuZCArIChhdEVuZCA/IDEgOiAwKSwgc3RhcnQgKyAxLCBlbmQgLSAxLCBuZXcgU2xpY2UoKGF0U3RhcnQgPyBGcmFnbWVudC5lbXB0eSA6IEZyYWdtZW50LmZyb20obGlzdC5jb3B5KEZyYWdtZW50LmVtcHR5KSkpXG4gICAgICAgIC5hcHBlbmQoYXRFbmQgPyBGcmFnbWVudC5lbXB0eSA6IEZyYWdtZW50LmZyb20obGlzdC5jb3B5KEZyYWdtZW50LmVtcHR5KSkpLCBhdFN0YXJ0ID8gMCA6IDEsIGF0RW5kID8gMCA6IDEpLCBhdFN0YXJ0ID8gMCA6IDEpKTtcbiAgICBkaXNwYXRjaCh0ci5zY3JvbGxJbnRvVmlldygpKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuQ3JlYXRlIGEgY29tbWFuZCB0byBzaW5rIHRoZSBsaXN0IGl0ZW0gYXJvdW5kIHRoZSBzZWxlY3Rpb24gZG93blxuaW50byBhbiBpbm5lciBsaXN0LlxuKi9cbmZ1bmN0aW9uIHNpbmtMaXN0SXRlbShpdGVtVHlwZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RhdGUsIGRpc3BhdGNoKSB7XG4gICAgICAgIGxldCB7ICRmcm9tLCAkdG8gfSA9IHN0YXRlLnNlbGVjdGlvbjtcbiAgICAgICAgbGV0IHJhbmdlID0gJGZyb20uYmxvY2tSYW5nZSgkdG8sIG5vZGUgPT4gbm9kZS5jaGlsZENvdW50ID4gMCAmJiBub2RlLmZpcnN0Q2hpbGQudHlwZSA9PSBpdGVtVHlwZSk7XG4gICAgICAgIGlmICghcmFuZ2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBzdGFydEluZGV4ID0gcmFuZ2Uuc3RhcnRJbmRleDtcbiAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT0gMClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHBhcmVudCA9IHJhbmdlLnBhcmVudCwgbm9kZUJlZm9yZSA9IHBhcmVudC5jaGlsZChzdGFydEluZGV4IC0gMSk7XG4gICAgICAgIGlmIChub2RlQmVmb3JlLnR5cGUgIT0gaXRlbVR5cGUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChkaXNwYXRjaCkge1xuICAgICAgICAgICAgbGV0IG5lc3RlZEJlZm9yZSA9IG5vZGVCZWZvcmUubGFzdENoaWxkICYmIG5vZGVCZWZvcmUubGFzdENoaWxkLnR5cGUgPT0gcGFyZW50LnR5cGU7XG4gICAgICAgICAgICBsZXQgaW5uZXIgPSBGcmFnbWVudC5mcm9tKG5lc3RlZEJlZm9yZSA/IGl0ZW1UeXBlLmNyZWF0ZSgpIDogbnVsbCk7XG4gICAgICAgICAgICBsZXQgc2xpY2UgPSBuZXcgU2xpY2UoRnJhZ21lbnQuZnJvbShpdGVtVHlwZS5jcmVhdGUobnVsbCwgRnJhZ21lbnQuZnJvbShwYXJlbnQudHlwZS5jcmVhdGUobnVsbCwgaW5uZXIpKSkpLCBuZXN0ZWRCZWZvcmUgPyAzIDogMSwgMCk7XG4gICAgICAgICAgICBsZXQgYmVmb3JlID0gcmFuZ2Uuc3RhcnQsIGFmdGVyID0gcmFuZ2UuZW5kO1xuICAgICAgICAgICAgZGlzcGF0Y2goc3RhdGUudHIuc3RlcChuZXcgUmVwbGFjZUFyb3VuZFN0ZXAoYmVmb3JlIC0gKG5lc3RlZEJlZm9yZSA/IDMgOiAxKSwgYWZ0ZXIsIGJlZm9yZSwgYWZ0ZXIsIHNsaWNlLCAxLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAuc2Nyb2xsSW50b1ZpZXcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgYWRkTGlzdE5vZGVzLCBidWxsZXRMaXN0LCBsaWZ0TGlzdEl0ZW0sIGxpc3RJdGVtLCBvcmRlcmVkTGlzdCwgc2lua0xpc3RJdGVtLCBzcGxpdExpc3RJdGVtLCBzcGxpdExpc3RJdGVtS2VlcE1hcmtzLCB3cmFwSW5MaXN0IH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7O0FBQUEsU0FBeUIsVUFBQUEsZUFBYztBQUN2QyxTQUFTLG1CQUFpRDs7O0FDRDFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLFNBQVMsY0FBYztBQUtoQixJQUFNLDBCQUEwQixPQUFPO0FBQUEsRUFDNUM7QUFBQSxFQUNBLENBQUM7QUFDSDtBQUtPLElBQU0sc0JBQXNCLE9BQU87QUFBQSxFQUN4QztBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0o7QUFBQSxNQUFFLElBQUk7QUFBQSxNQUFHLE1B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QU0sS0FBSyxJQUFJLFFBQVEsU0FBUyxLQUFLO0FBRXpDLFVBQU0sUUFBUSxRQUFRLFFBQVE7QUFBQSxNQUM1QixDQUFDLEVBQUUsS0FBSyxNQUFNLEtBQUssU0FBUyxRQUFRLEtBQUssT0FBTyxDQUFDO0FBQUEsSUFDbkQ7QUFFQSxlQUFXLFFBQVEsT0FBTztBQUd4QixZQUFNLEtBQUssTUFBTSxHQUFHLEVBQUU7QUFBQSxJQUN4QjtBQU9BLFVBQU0sVUFBVSxDQUFDLEdBQUcsTUFBTSxTQUFTLEdBQUcsUUFBUSxPQUFPO0FBRXJELFdBQU8sQ0FBQztBQUFBLEVBQ1Y7QUFBQSxFQUVBLE1BQU0sUUFDSixTQUNBLE9BQ0EsRUFBRSxhQUFhLEdBQzJCO0FBQzFDLFFBQUksZUFBZSxNQUFNLFFBQVEsUUFBUTtBQUN2QyxZQUFNLElBQUlBLFdBQVUsZUFBZSxJQUFJLGdCQUFnQixDQUFDO0FBQUEsSUFDMUQ7QUFFQSxXQUFPO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxTQUFTLE1BQU0sUUFBUSxNQUFNLFlBQVk7QUFBQSxJQUMzQztBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU0sYUFBYSxPQUFPLFlBQVk7QUFDcEMsUUFBTUEsV0FBVSxVQUFVLEVBQUUsSUFBSSxPQUFPLENBQUMsRUFBRSxhQUFhLEVBQUUsT0FBTyxPQUFPO0FBQ3pFO0FBRUEsSUFBSSxZQUFZLEVBQUUsV0FBVyxDQUFDRCxrQkFBaUIsR0FBRyxXQUFXLENBQUMsRUFBRSxJQUFJOyIsCiAgIm5hbWVzIjogWyJTdHJ1Y3QiLCAicHJvdG8zIiwgImNyeXB0byIsICJwcm90b2J1Zl9lcyIsICJwcm90bzMiLCAiU3RydWN0IiwgInByb3RvMyIsICJwcm90bzMiLCAiU3RhdHVzQ29kZSIsICJBYm9ydGVkIiwgIkF1dGhvcml0eSIsICJBYm9ydGVkIiwgIiNleHRlcm5hbCIsICJBdXRob3JpdHkiLCAiQWJvcnRlZCIsICIjb3B0aW9ucyIsICJqc29uIiwgIlNjaGVtYSIsICJub2RlcyIsICJTY2hlbWEiLCAiQXV0aG9yaXR5U2VydmljZXIiLCAiQXV0aG9yaXR5IiwgIlN0cnVjdCJdCn0K
