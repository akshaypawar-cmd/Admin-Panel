import type { Table } from "@tanstack/react-table"

import type { ProductsResponse } from "@api"

export interface PaginationProps {
  // Table instance from TanStack Table used to control pagination
  table: Table<ProductsResponse>;
  // Total number of pages available for pagination
  totalPages: number;
  // Current active page number
  currentPage: number;
}
