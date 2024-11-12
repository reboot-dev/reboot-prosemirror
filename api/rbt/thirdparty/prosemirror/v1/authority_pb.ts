// @generated by protoc-gen-es v1.3.2 with parameter "target=ts"
// @generated from file rbt/thirdparty/prosemirror/v1/authority.proto (package rbt.thirdparty.prosemirror.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct } from "@bufbuild/protobuf";

/**
 * @generated from message rbt.thirdparty.prosemirror.v1.Authority
 */
export class Authority extends Message<Authority> {
  /**
   * @generated from field: repeated rbt.thirdparty.prosemirror.v1.Change changes = 1;
   */
  changes: Change[] = [];

  constructor(data?: PartialMessage<Authority>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.thirdparty.prosemirror.v1.Authority";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "changes", kind: "message", T: Change, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Authority {
    return new Authority().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Authority {
    return new Authority().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Authority {
    return new Authority().fromJsonString(jsonString, options);
  }

  static equals(a: Authority | PlainMessage<Authority> | undefined, b: Authority | PlainMessage<Authority> | undefined): boolean {
    return proto3.util.equals(Authority, a, b);
  }
}

/**
 * A `Change` is a prosemirror `step` from a specific `client`.
 *
 * @generated from message rbt.thirdparty.prosemirror.v1.Change
 */
export class Change extends Message<Change> {
  /**
   * See prosemirror `Step` type.
   *
   * @generated from field: google.protobuf.Struct step = 1;
   */
  step?: Struct;

  /**
   * The client that authored this change.
   *
   * @generated from field: string client = 2;
   */
  client = "";

  constructor(data?: PartialMessage<Change>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.thirdparty.prosemirror.v1.Change";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "step", kind: "message", T: Struct },
    { no: 2, name: "client", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Change {
    return new Change().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Change {
    return new Change().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Change {
    return new Change().fromJsonString(jsonString, options);
  }

  static equals(a: Change | PlainMessage<Change> | undefined, b: Change | PlainMessage<Change> | undefined): boolean {
    return proto3.util.equals(Change, a, b);
  }
}

/**
 * @generated from message rbt.thirdparty.prosemirror.v1.CreateRequest
 */
export class CreateRequest extends Message<CreateRequest> {
  constructor(data?: PartialMessage<CreateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.thirdparty.prosemirror.v1.CreateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateRequest {
    return new CreateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateRequest {
    return new CreateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateRequest {
    return new CreateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateRequest | PlainMessage<CreateRequest> | undefined, b: CreateRequest | PlainMessage<CreateRequest> | undefined): boolean {
    return proto3.util.equals(CreateRequest, a, b);
  }
}

/**
 * @generated from message rbt.thirdparty.prosemirror.v1.CreateResponse
 */
export class CreateResponse extends Message<CreateResponse> {
  /**
   * See prosemirror `Node` type which is used to represent a "doc".
   *
   * @generated from field: google.protobuf.Struct doc = 1;
   */
  doc?: Struct;

  /**
   * @generated from field: uint32 version = 2;
   */
  version = 0;

  constructor(data?: PartialMessage<CreateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.thirdparty.prosemirror.v1.CreateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "doc", kind: "message", T: Struct },
    { no: 2, name: "version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateResponse {
    return new CreateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateResponse {
    return new CreateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateResponse {
    return new CreateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateResponse | PlainMessage<CreateResponse> | undefined, b: CreateResponse | PlainMessage<CreateResponse> | undefined): boolean {
    return proto3.util.equals(CreateResponse, a, b);
  }
}

/**
 * @generated from message rbt.thirdparty.prosemirror.v1.ApplyRequest
 */
export class ApplyRequest extends Message<ApplyRequest> {
  /**
   * @generated from field: uint32 version = 1;
   */
  version = 0;

  /**
   * @generated from field: repeated rbt.thirdparty.prosemirror.v1.Change changes = 2;
   */
  changes: Change[] = [];

  constructor(data?: PartialMessage<ApplyRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.thirdparty.prosemirror.v1.ApplyRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "changes", kind: "message", T: Change, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ApplyRequest {
    return new ApplyRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ApplyRequest {
    return new ApplyRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ApplyRequest {
    return new ApplyRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ApplyRequest | PlainMessage<ApplyRequest> | undefined, b: ApplyRequest | PlainMessage<ApplyRequest> | undefined): boolean {
    return proto3.util.equals(ApplyRequest, a, b);
  }
}

/**
 * @generated from message rbt.thirdparty.prosemirror.v1.ApplyResponse
 */
export class ApplyResponse extends Message<ApplyResponse> {
  constructor(data?: PartialMessage<ApplyResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.thirdparty.prosemirror.v1.ApplyResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ApplyResponse {
    return new ApplyResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ApplyResponse {
    return new ApplyResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ApplyResponse {
    return new ApplyResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ApplyResponse | PlainMessage<ApplyResponse> | undefined, b: ApplyResponse | PlainMessage<ApplyResponse> | undefined): boolean {
    return proto3.util.equals(ApplyResponse, a, b);
  }
}

/**
 * @generated from message rbt.thirdparty.prosemirror.v1.ChangesRequest
 */
export class ChangesRequest extends Message<ChangesRequest> {
  /**
   * @generated from field: uint32 sinceVersion = 1;
   */
  sinceVersion = 0;

  constructor(data?: PartialMessage<ChangesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.thirdparty.prosemirror.v1.ChangesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sinceVersion", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChangesRequest {
    return new ChangesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChangesRequest {
    return new ChangesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChangesRequest {
    return new ChangesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ChangesRequest | PlainMessage<ChangesRequest> | undefined, b: ChangesRequest | PlainMessage<ChangesRequest> | undefined): boolean {
    return proto3.util.equals(ChangesRequest, a, b);
  }
}

/**
 * @generated from message rbt.thirdparty.prosemirror.v1.ChangesResponse
 */
export class ChangesResponse extends Message<ChangesResponse> {
  /**
   * @generated from field: uint32 version = 1;
   */
  version = 0;

  /**
   * @generated from field: repeated rbt.thirdparty.prosemirror.v1.Change changes = 2;
   */
  changes: Change[] = [];

  constructor(data?: PartialMessage<ChangesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.thirdparty.prosemirror.v1.ChangesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "changes", kind: "message", T: Change, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChangesResponse {
    return new ChangesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChangesResponse {
    return new ChangesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChangesResponse {
    return new ChangesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ChangesResponse | PlainMessage<ChangesResponse> | undefined, b: ChangesResponse | PlainMessage<ChangesResponse> | undefined): boolean {
    return proto3.util.equals(ChangesResponse, a, b);
  }
}

