import type { DetailedError, ID, Status, User } from "./types3";

// Extended Interface
export interface Admin extends User {
  role: "admin";
  permissions: string[];
}

// Extended Interface with Intersection
export interface SuperAdmin extends Admin, DetailedError {
  level: number;
}

// Type Alias with Generic
export type Response<T> = {
  data: T;
  status: Status;
  message: string;
};

// Interface with Optional Properties and Method
export interface Product {
  id: ID;
  name: string;
  description?: string;
  price: number;
  inStock: boolean;
  getCategory(): string;
}

// Type Alias with Tuple
export type Coordinate = [number, number];

// Interface with Index Signature
export interface Dictionary {
  [key: string]: string;
}

// Type with Conditional Type
export type ExtractArrayElementType<T> = T extends (infer U)[] ? U : never;
