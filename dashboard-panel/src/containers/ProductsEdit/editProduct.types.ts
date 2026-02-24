import type { ProductsResponse } from "@api";

export interface Props {
  product: ProductsResponse;
  onClose: () => void;
}
export type FormValues = {
  title: string;
  category: string;
  description: string;
  price: number;
  id : number
}
