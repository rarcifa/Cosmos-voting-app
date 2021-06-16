/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "username.voter.voter";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreatePoll {
  creator: string;
  title: string;
  options: string;
}

export interface MsgCreatePollResponse {
  id: number;
}

export interface MsgUpdatePoll {
  creator: string;
  id: number;
  title: string;
  options: string;
}

export interface MsgUpdatePollResponse {}

export interface MsgDeletePoll {
  creator: string;
  id: number;
}

export interface MsgDeletePollResponse {}

const baseMsgCreatePoll: object = { creator: "", title: "", options: "" };

export const MsgCreatePoll = {
  encode(message: MsgCreatePoll, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.options !== "") {
      writer.uint32(26).string(message.options);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePoll {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePoll } as MsgCreatePoll;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.options = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePoll {
    const message = { ...baseMsgCreatePoll } as MsgCreatePoll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = String(object.options);
    } else {
      message.options = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePoll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.options !== undefined && (obj.options = message.options);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePoll>): MsgCreatePoll {
    const message = { ...baseMsgCreatePoll } as MsgCreatePoll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = object.options;
    } else {
      message.options = "";
    }
    return message;
  },
};

const baseMsgCreatePollResponse: object = { id: 0 };

export const MsgCreatePollResponse = {
  encode(
    message: MsgCreatePollResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePollResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePollResponse } as MsgCreatePollResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePollResponse {
    const message = { ...baseMsgCreatePollResponse } as MsgCreatePollResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePollResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePollResponse>
  ): MsgCreatePollResponse {
    const message = { ...baseMsgCreatePollResponse } as MsgCreatePollResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePoll: object = {
  creator: "",
  id: 0,
  title: "",
  options: "",
};

export const MsgUpdatePoll = {
  encode(message: MsgUpdatePoll, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.options !== "") {
      writer.uint32(34).string(message.options);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePoll {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePoll } as MsgUpdatePoll;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.options = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePoll {
    const message = { ...baseMsgUpdatePoll } as MsgUpdatePoll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = String(object.options);
    } else {
      message.options = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePoll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.options !== undefined && (obj.options = message.options);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePoll>): MsgUpdatePoll {
    const message = { ...baseMsgUpdatePoll } as MsgUpdatePoll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = object.options;
    } else {
      message.options = "";
    }
    return message;
  },
};

const baseMsgUpdatePollResponse: object = {};

export const MsgUpdatePollResponse = {
  encode(_: MsgUpdatePollResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePollResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePollResponse } as MsgUpdatePollResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdatePollResponse {
    const message = { ...baseMsgUpdatePollResponse } as MsgUpdatePollResponse;
    return message;
  },

  toJSON(_: MsgUpdatePollResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdatePollResponse>): MsgUpdatePollResponse {
    const message = { ...baseMsgUpdatePollResponse } as MsgUpdatePollResponse;
    return message;
  },
};

const baseMsgDeletePoll: object = { creator: "", id: 0 };

export const MsgDeletePoll = {
  encode(message: MsgDeletePoll, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePoll {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePoll } as MsgDeletePoll;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePoll {
    const message = { ...baseMsgDeletePoll } as MsgDeletePoll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeletePoll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePoll>): MsgDeletePoll {
    const message = { ...baseMsgDeletePoll } as MsgDeletePoll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeletePollResponse: object = {};

export const MsgDeletePollResponse = {
  encode(_: MsgDeletePollResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePollResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePollResponse } as MsgDeletePollResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeletePollResponse {
    const message = { ...baseMsgDeletePollResponse } as MsgDeletePollResponse;
    return message;
  },

  toJSON(_: MsgDeletePollResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeletePollResponse>): MsgDeletePollResponse {
    const message = { ...baseMsgDeletePollResponse } as MsgDeletePollResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreatePoll(request: MsgCreatePoll): Promise<MsgCreatePollResponse>;
  UpdatePoll(request: MsgUpdatePoll): Promise<MsgUpdatePollResponse>;
  DeletePoll(request: MsgDeletePoll): Promise<MsgDeletePollResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreatePoll(request: MsgCreatePoll): Promise<MsgCreatePollResponse> {
    const data = MsgCreatePoll.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Msg",
      "CreatePoll",
      data
    );
    return promise.then((data) =>
      MsgCreatePollResponse.decode(new Reader(data))
    );
  }

  UpdatePoll(request: MsgUpdatePoll): Promise<MsgUpdatePollResponse> {
    const data = MsgUpdatePoll.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Msg",
      "UpdatePoll",
      data
    );
    return promise.then((data) =>
      MsgUpdatePollResponse.decode(new Reader(data))
    );
  }

  DeletePoll(request: MsgDeletePoll): Promise<MsgDeletePollResponse> {
    const data = MsgDeletePoll.encode(request).finish();
    const promise = this.rpc.request(
      "username.voter.voter.Msg",
      "DeletePoll",
      data
    );
    return promise.then((data) =>
      MsgDeletePollResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
