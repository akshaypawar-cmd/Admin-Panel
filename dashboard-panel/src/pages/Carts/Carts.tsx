import { Sidebar } from "@container";

const Carts = () => {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="p-2 text-xl font-bold">This is Carts page </div>
      </div>
    </div>
  );
};

export default Carts;
