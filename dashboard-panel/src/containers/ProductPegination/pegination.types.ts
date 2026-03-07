import type { Table } from "@tanstack/react-table";

export type  PageItem = number | string ;

export interface ProductPaginationProps<T> {
 table: Table<T>
 pages: PageItem[];
 currentPage:number
}
