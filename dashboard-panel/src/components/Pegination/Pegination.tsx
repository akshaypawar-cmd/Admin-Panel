import { ChevronsLeft, ChevronsRight } from "lucide-react";

import type { PaginationProps } from "./pegination.types";

const Pegination: React.FC<PaginationProps> = (props) => {
  const { table, totalPages, currentPage } = props;
  
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

export default Pegination ;
