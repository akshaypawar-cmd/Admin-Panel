export type ProductsResponse = {
  /** Product title or name */
  title: string;
  /** Product price */
  price: number;
  /** Product description */
  description: string;
  /** Product category */
  category: string;
  /** Unique product ID */
  id: number;
};

/**
 * Product payload without ID
 * Used when creating a new product
 */
export type RemoveIdProduct = Omit<ProductsResponse, "id">;
