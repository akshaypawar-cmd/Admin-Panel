import type { ColumnDef } from "@tanstack/react-table";

import type { ProductsResponse } from "@api";

export interface ProductTableProps {
  data: ProductsResponse[];
  columns: ColumnDef<ProductsResponse, any>[];
}
