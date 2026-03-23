import type { ColumnDef } from "@tanstack/react-table";

import type { ProductsResponse } from "@api";

export interface ProductTableProps {
  // Array of product data used to populate the table rows
  data: ProductsResponse[];
  // Column configuration for TanStack Table
  columns: ColumnDef<ProductsResponse>[];
}
