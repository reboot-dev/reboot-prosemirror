// @generated by protoc-gen-es v1.3.2 with parameter "target=ts"
// @generated from file rbt/v1alpha1/options.proto (package rbt.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message rbt.v1alpha1.ReaderMethodOptions
 */
export class ReaderMethodOptions extends Message<ReaderMethodOptions> {
  /**
   * @generated from field: rbt.v1alpha1.ReaderMethodOptions.State state = 3;
   */
  state = ReaderMethodOptions_State.DEFAULT;

  constructor(data?: PartialMessage<ReaderMethodOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.v1alpha1.ReaderMethodOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 3, name: "state", kind: "enum", T: proto3.getEnumType(ReaderMethodOptions_State) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReaderMethodOptions {
    return new ReaderMethodOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReaderMethodOptions {
    return new ReaderMethodOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReaderMethodOptions {
    return new ReaderMethodOptions().fromJsonString(jsonString, options);
  }

  static equals(a: ReaderMethodOptions | PlainMessage<ReaderMethodOptions> | undefined, b: ReaderMethodOptions | PlainMessage<ReaderMethodOptions> | undefined): boolean {
    return proto3.util.equals(ReaderMethodOptions, a, b);
  }
}

/**
 * Option specifying how to pass the state to this method. By
 * default, unary methods get passed a unary state, but a method may
 * override that default (by setting this option to 'STREAMING') to
 * get streaming state. Likewise, by default, streaming methods get
 * streaming state, but a method may override that default (by
 * setting this option to 'UNARY') to get unary state.
 *
 * @generated from enum rbt.v1alpha1.ReaderMethodOptions.State
 */
export enum ReaderMethodOptions_State {
  /**
   * @generated from enum value: DEFAULT = 0;
   */
  DEFAULT = 0,

  /**
   * @generated from enum value: UNARY = 1;
   */
  UNARY = 1,

  /**
   * @generated from enum value: STREAMING = 2;
   */
  STREAMING = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ReaderMethodOptions_State)
proto3.util.setEnumType(ReaderMethodOptions_State, "rbt.v1alpha1.ReaderMethodOptions.State", [
  { no: 0, name: "DEFAULT" },
  { no: 1, name: "UNARY" },
  { no: 2, name: "STREAMING" },
]);

/**
 * @generated from message rbt.v1alpha1.WriterMethodOptions
 */
export class WriterMethodOptions extends Message<WriterMethodOptions> {
  /**
   * If set, indicates this writer can be used to construct a new actor,
   * and an actor can not be _implicitly_ constructed but instead
   * must be constructed via a constructor.
   *
   * @generated from field: optional rbt.v1alpha1.ConstructorMethodOptions constructor = 2;
   */
  constructor$?: ConstructorMethodOptions;

  constructor(data?: PartialMessage<WriterMethodOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.v1alpha1.WriterMethodOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "constructor", kind: "message", T: ConstructorMethodOptions, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WriterMethodOptions {
    return new WriterMethodOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WriterMethodOptions {
    return new WriterMethodOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WriterMethodOptions {
    return new WriterMethodOptions().fromJsonString(jsonString, options);
  }

  static equals(a: WriterMethodOptions | PlainMessage<WriterMethodOptions> | undefined, b: WriterMethodOptions | PlainMessage<WriterMethodOptions> | undefined): boolean {
    return proto3.util.equals(WriterMethodOptions, a, b);
  }
}

/**
 * @generated from message rbt.v1alpha1.TransactionMethodOptions
 */
export class TransactionMethodOptions extends Message<TransactionMethodOptions> {
  /**
   * If set, indicates this transaction can be used to construct a new actor,
   * and an actor can not be _implicitly_ constructed but instead
   * must be constructed via a constructor.
   *
   * @generated from field: optional rbt.v1alpha1.ConstructorMethodOptions constructor = 2;
   */
  constructor$?: ConstructorMethodOptions;

  constructor(data?: PartialMessage<TransactionMethodOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.v1alpha1.TransactionMethodOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 2, name: "constructor", kind: "message", T: ConstructorMethodOptions, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionMethodOptions {
    return new TransactionMethodOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionMethodOptions {
    return new TransactionMethodOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionMethodOptions {
    return new TransactionMethodOptions().fromJsonString(jsonString, options);
  }

  static equals(a: TransactionMethodOptions | PlainMessage<TransactionMethodOptions> | undefined, b: TransactionMethodOptions | PlainMessage<TransactionMethodOptions> | undefined): boolean {
    return proto3.util.equals(TransactionMethodOptions, a, b);
  }
}

/**
 * Nothing here yet, but is a placeholder for describing things.
 *
 * @generated from message rbt.v1alpha1.WorkflowMethodOptions
 */
export class WorkflowMethodOptions extends Message<WorkflowMethodOptions> {
  constructor(data?: PartialMessage<WorkflowMethodOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.v1alpha1.WorkflowMethodOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkflowMethodOptions {
    return new WorkflowMethodOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkflowMethodOptions {
    return new WorkflowMethodOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkflowMethodOptions {
    return new WorkflowMethodOptions().fromJsonString(jsonString, options);
  }

  static equals(a: WorkflowMethodOptions | PlainMessage<WorkflowMethodOptions> | undefined, b: WorkflowMethodOptions | PlainMessage<WorkflowMethodOptions> | undefined): boolean {
    return proto3.util.equals(WorkflowMethodOptions, a, b);
  }
}

/**
 * Nothing here yet, but is a placeholder for describing things like
 * "recallable" constructors, etc.
 *
 * @generated from message rbt.v1alpha1.ConstructorMethodOptions
 */
export class ConstructorMethodOptions extends Message<ConstructorMethodOptions> {
  constructor(data?: PartialMessage<ConstructorMethodOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.v1alpha1.ConstructorMethodOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConstructorMethodOptions {
    return new ConstructorMethodOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConstructorMethodOptions {
    return new ConstructorMethodOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConstructorMethodOptions {
    return new ConstructorMethodOptions().fromJsonString(jsonString, options);
  }

  static equals(a: ConstructorMethodOptions | PlainMessage<ConstructorMethodOptions> | undefined, b: ConstructorMethodOptions | PlainMessage<ConstructorMethodOptions> | undefined): boolean {
    return proto3.util.equals(ConstructorMethodOptions, a, b);
  }
}

/**
 * @generated from message rbt.v1alpha1.MethodOptions
 */
export class MethodOptions extends Message<MethodOptions> {
  /**
   * The `kind` field specifies what kind of reboot function the method is.
   * Method kind specific annotations are set in the nested object.
   *
   * @generated from oneof rbt.v1alpha1.MethodOptions.kind
   */
  kind: {
    /**
     * @generated from field: rbt.v1alpha1.ReaderMethodOptions reader = 1;
     */
    value: ReaderMethodOptions;
    case: "reader";
  } | {
    /**
     * @generated from field: rbt.v1alpha1.WriterMethodOptions writer = 2;
     */
    value: WriterMethodOptions;
    case: "writer";
  } | {
    /**
     * @generated from field: rbt.v1alpha1.TransactionMethodOptions transaction = 3;
     */
    value: TransactionMethodOptions;
    case: "transaction";
  } | {
    /**
     * TODO: SagaMethodOptions saga = 5;
     *
     * @generated from field: rbt.v1alpha1.WorkflowMethodOptions workflow = 4;
     */
    value: WorkflowMethodOptions;
    case: "workflow";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * Possible error message types that may be raised.
   *
   * Name resolution is done in accordance with proto3 definitions,
   * see comment in ServiceOptions for more details.
   *
   * @generated from field: repeated string errors = 7;
   */
  errors: string[] = [];

  constructor(data?: PartialMessage<MethodOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.v1alpha1.MethodOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "reader", kind: "message", T: ReaderMethodOptions, oneof: "kind" },
    { no: 2, name: "writer", kind: "message", T: WriterMethodOptions, oneof: "kind" },
    { no: 3, name: "transaction", kind: "message", T: TransactionMethodOptions, oneof: "kind" },
    { no: 4, name: "workflow", kind: "message", T: WorkflowMethodOptions, oneof: "kind" },
    { no: 7, name: "errors", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MethodOptions {
    return new MethodOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MethodOptions {
    return new MethodOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MethodOptions {
    return new MethodOptions().fromJsonString(jsonString, options);
  }

  static equals(a: MethodOptions | PlainMessage<MethodOptions> | undefined, b: MethodOptions | PlainMessage<MethodOptions> | undefined): boolean {
    return proto3.util.equals(MethodOptions, a, b);
  }
}

/**
 * @generated from message rbt.v1alpha1.ServiceOptions
 */
export class ServiceOptions extends Message<ServiceOptions> {
  /**
   * The name of the Reboot state `message` that this service supplies methods
   * for. May be omitted if the system's default naming convention is
   * acceptable. If supplied, the name is looked up using protobuf's normal
   * rules: relative names are resolved in the same package, while absolute
   * names may refer to any package.
   *
   * @generated from field: string state = 1;
   */
  state = "";

  /**
   * Whether or not this service can be default constructed via just
   * calling a writer even if some methods are specified as constructors.
   *
   * @generated from field: bool default_constructible = 2;
   */
  defaultConstructible = false;

  constructor(data?: PartialMessage<ServiceOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.v1alpha1.ServiceOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "state", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "default_constructible", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceOptions {
    return new ServiceOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceOptions {
    return new ServiceOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceOptions {
    return new ServiceOptions().fromJsonString(jsonString, options);
  }

  static equals(a: ServiceOptions | PlainMessage<ServiceOptions> | undefined, b: ServiceOptions | PlainMessage<ServiceOptions> | undefined): boolean {
    return proto3.util.equals(ServiceOptions, a, b);
  }
}

/**
 * @generated from message rbt.v1alpha1.StateOptions
 */
export class StateOptions extends Message<StateOptions> {
  /**
   * A list of names of Reboot method definition `service`s that provide this
   * state `message` with methods. May be omitted if the system's default naming
   * convention is acceptable. Each named service must, in turn, have their
   * `state` option set to point at this state.
   *
   * @generated from field: repeated string implements = 1;
   */
  implements: string[] = [];

  constructor(data?: PartialMessage<StateOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "rbt.v1alpha1.StateOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "implements", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StateOptions {
    return new StateOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StateOptions {
    return new StateOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StateOptions {
    return new StateOptions().fromJsonString(jsonString, options);
  }

  static equals(a: StateOptions | PlainMessage<StateOptions> | undefined, b: StateOptions | PlainMessage<StateOptions> | undefined): boolean {
    return proto3.util.equals(StateOptions, a, b);
  }
}

