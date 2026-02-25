import { createColumnHelper } from "@tanstack/react-table";
import { useState } from "react";

import { useDeleteProduct, useGetProducts, type ProductsResponse } from "@api";
import { AddProducts, EditProduct, ProductsTable, Sidebar } from "@container";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductsResponse | null>(null);
  const [openForm, setOpenForm] = useState(false);

  const { data = [], isLoading, isError , isPending } = useGetProducts();
  const { mutate: deleteProduct } = useDeleteProduct();

  const handleDelete = (id: number) => {
    deleteProduct(id);
  };

  const columnHelper = createColumnHelper<ProductsResponse>();

  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("title", {
      header: "Title",
      cell: (info) => {
        const fullText = info.getValue() 
        const shortText = fullText.split(" ").slice(0, 3).join(" ");

        return (
          <div className="relative group">
            <span> {shortText}.... </span>

            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-gray-800 text-white text-xs p-3 rounded-lg shadow-lg w-72 z-50">
              {fullText}
            </div>
          </div>
        );
      },
    }),
    columnHelper.accessor("description", {
      header: "Descriptions",
      cell: (info) => {
        const fullText = info.getValue() 
        const shortText = fullText.split(" ").slice(0, 3).join(" ");

        return (
          <div className="relative group">
            <span> {shortText}.... </span>

            <div className="absolute left-15 top-full mt-2 hidden group-hover:block bg-gray-800 text-white text-xs p-3 rounded-lg w-72 z-50">
              {fullText}
            </div>
          </div>
        );
      },
    }),
    columnHelper.accessor("price", {
      header: "Price",
      cell: (info) => (
        <span className="text-green-500 font-bold"> ${info.getValue()}</span>
      ),
    }),
    columnHelper.accessor("category", {
      header: "Category",
      cell: (info) => info.getValue(),
    }),

    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: (info) => {
        const rowData = info.row.original;

        return (
          <div className="flex gap-6">
            <button
              onClick={() => handleDelete(rowData.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-xs cursor-pointer"
            >
              Delete
            </button>

            <button
              onClick={() => setSelectedProduct(rowData)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-1 rounded-lg text-xs"
            >
              Edit
            </button>
          </div>
        );
      },
    }),
  ];

  if (isLoading) return <div> Loading Data...</div>;
  if (isError) return <div> Error Loading </div>;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-x-hidden">
        <div className="p-2 text-xl font-bold flex justify-between items-center">
          Products
          <button
            onClick={() => setOpenForm(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-3 rounded-lg text-sm"
          >
            Add Product
          </button>
        </div>

        <ProductsTable data={data} columns={columns} />
      </div>

      {selectedProduct && (
        <EditProduct
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      {openForm && <AddProducts isPending={isPending} onClose={() => setOpenForm(false)} />}
    </div>
  );
};

export default Products;
