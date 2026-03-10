import type { FieldNames } from "../ProductAdd";

export type ProductField = {
  name: FieldNames;
  label: string;
  type: string;
};

export interface EditProductProps {
  onClose: () => void;
  isPending: boolean;
};