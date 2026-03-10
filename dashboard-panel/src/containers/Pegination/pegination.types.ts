import type { ProductsResponse } from "@api"
import type { Table } from "@tanstack/react-table"

export interface PaginationProps<> {
table:Table<ProductsResponse>
totalPages:number
 currentPage:number
}
