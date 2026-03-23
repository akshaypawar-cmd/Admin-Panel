import type { Path } from "react-hook-form";

import type { UserResponse } from "@api";

export type UserFieldType = {
  // Field name mapped to UserResponse type (used with react-hook-form)
  name: Path<UserResponse>;
  // Label displayed for the form field
  label: string;
  // HTML input type (text, email, number, etc.)
  type: string;
};