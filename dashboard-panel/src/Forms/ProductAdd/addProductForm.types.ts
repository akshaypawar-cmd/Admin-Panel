import type { ProductsResponse } from "@api";

export interface AddProductProps {
  // Callback function to close the add product modal or form
  onClose: () => void;
  // Indicates whether the add product request is in progress
  isPending: boolean;
}
// Represents all valid field names from the ProductsResponse type
export type FieldNames = keyof ProductsResponse;
