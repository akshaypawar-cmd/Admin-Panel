import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import type { FC } from "react";

import type { ProductTableProps } from "./productTable.types";
import { ProductPegination } from "../ProductPegination";

const ProductsTable: FC<ProductTableProps> = ({ data, columns }) => {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  const table = useReactTable({
    data,
    columns,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const currentPage = table.getState().pagination.pageIndex;
  const totalPages = table.getPageCount();

  const generatePages = () => {
    const pages: (number | string)[] = [];

    for (let i = 0; i < totalPages; i++) {
      if (
        i === 0 ||
        i === 1 ||
        i === totalPages - 1 ||
        i === totalPages - 2 ||
        Math.abs(i - currentPage) <= 1
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="p-4">
      <div className="shadow-lg rounded-2xl overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-3">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <ProductPegination
          table={table}
          pages={pages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ProductsTable;
