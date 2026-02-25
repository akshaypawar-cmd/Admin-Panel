import type { ProductsResponse } from "@api";

export interface Props {
  product: ProductsResponse;
  onClose: () => void;
}
