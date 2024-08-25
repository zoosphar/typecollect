// Random TypeScript Definition File

// Enum
export enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
  Suspended = "SUSPENDED",
}

// Basic Type Alias
export type ID = string | number;

// Union Type
export type Result = true | false;

// Intersection Type
export type DetailedError = Error & {
  code: number;
  details: string;
};

// Interface
export interface User {
  id: ID;
  name: string;
  email: string;
  status: Status;
}
