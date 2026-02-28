import type { ProductsResponse } from "@api";

export interface AddProductProps {
  onClose: () => void;
  isPending: boolean;
};

export type FieldNames = keyof ProductsResponse;

export type ProductField = {
  name: FieldNames;
  label: string;
  type: string;
};
