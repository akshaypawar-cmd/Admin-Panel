import { ChevronsLeft, ChevronsRight } from "lucide-react";

import type { ProductPaginationProps } from "./pegination.types";

const ProductPegination: React.FC<ProductPaginationProps<any>> = (props) => {
  const { table, pages, currentPage } = props;
  
  return (
    <div className="flex justify-center items-center gap-2 py-6">
      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        className="px-3 text-lg disabled:opacity-40"
      >
        <ChevronsLeft className="size-7 cursor-pointer" />
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => table.setPageIndex(page as number)}
            className={`w-10 h-10 flex items-center justify-center rounded text-sm
            ${
              currentPage === page
                ? "bg-teal-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {(page as number) + 1}
          </button>
        ),
      )}

      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        className="px-3 text-lg disabled:opacity-40"
      >
        <ChevronsRight className="size-7 cursor-pointer"/>
      </button>
    </div>
  );
};

export default ProductPegination;
