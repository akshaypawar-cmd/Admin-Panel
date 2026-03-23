import type { ProductsResponse } from "@api";

export interface Props {
  // Product data to be displayed or edited
  product: ProductsResponse;
  // Callback function to close the component
  onClose: () => void;
}
