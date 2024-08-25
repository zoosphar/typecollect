import type { Response } from "./types1";
import type { User } from "./types3";

export type PartialUser = {
  [P in keyof User]?: User[P];
};

// Recursive Type Alias
export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONArray
  | JSONObject;
export interface JSONObject {
  [key: string]: JSONValue;
}
export type JSONArray = JSONValue[];

// Interface extending a Type
export interface ExtendedResponse extends Response<User> {
  timestamp: Date;
}

// Namespace Example
export namespace MathUtil {
  export type Vector = {
    x: number;
    y: number;
  };

  export function add(v1: Vector, v2: Vector): Vector {
    return { x: v1.x + v2.x, y: v1.y + v2.y };
  }
}
