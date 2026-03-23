import type { FieldNames } from "../ProductAdd";

export type ProductField = {
  // Field name used to identify the product property
  name: FieldNames;
  // Label displayed for the input field
  label: string;
  // HTML input type (text, number, etc.)
  type: string;
};

export interface EditProductProps {
  // Callback function to close the edit product modal or form
  onClose: () => void;
  // Indicates whether the update request is in progress
  isPending: boolean;
}
