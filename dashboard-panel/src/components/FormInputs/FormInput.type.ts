import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type props = {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  autocomplete ? :string
}
