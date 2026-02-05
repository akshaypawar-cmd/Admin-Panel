import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface FormInputProps {
  // Text displayed above the input field (e.g. Username, Password)
  label: string;

  // HTML input type (text, password, email, etc.)
  type?: string;

  // Placeholder text shown inside the input
  placeholder?: string;

  // react-hook-form register object (contains onChange, onBlur, ref, etc.)
  register: UseFormRegisterReturn;

  // Validation error object used to display error messages
  error?: FieldError;

  // Controls browser autocomplete behavior (e.g. username, current-password)
  autoComplete?: string;

  // Unique id used to link label with input for accessibility
  id: string;
}
