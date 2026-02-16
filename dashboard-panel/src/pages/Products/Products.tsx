import { Sidebar } from "@container";

const Products = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="p-2 text-xl font-bold">This is Product page </div>
      </div>
    </div>
  );
};

export default Products;
