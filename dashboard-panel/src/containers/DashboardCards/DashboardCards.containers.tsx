import { Package, ShoppingCart, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useGetCarts, useGetProducts, useUserProfile } from "@api";

const DashboardCards = () => {
  const { data: users } = useUserProfile();
  const { data: products } = useGetProducts();
  const { data: carts } = useGetCarts();
  const  navigate = useNavigate()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div className="bg-blue-400 rounded-2xl shadow-md p-6 flex justify-between cursor-pointer items-start hover:shadow-xl transition duration-300" onClick={() => navigate("/users")}>
        <div className="space-y-3">
          <p className="text-sm text-white font-medium">Total Users</p>

          <h2 className="text-3xl font-bold text-white">
            {users?.length ?? 0}
          </h2>

          <p className="text-xs text-white mt-4">Registered users in the system</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="bg-blue-100 text-blue-600 p-2 rounded-xl">
            <Users className="size-7" />
          </div>

          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            Active Accounts
          </span>
        </div>
      </div>

      <div className="bg-green-400 rounded-2xl shadow-md p-6 flex justify-between cursor-pointer items-start hover:shadow-xl transition duration-300" onClick={()=> navigate("/products")}>
        <div className="space-y-3">
          <p className="text-sm text-white font-medium">Total Products</p>
          <h2 className="text-3xl font-bold text-white">
            {products?.length ?? 0}
          </h2>

          <p className="text-xs text-white mt-4">Available products in inventory</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="bg-green-100 text-green-600 p-2 rounded-xl">
            <Package className="size-7" />
          </div>

          <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
            In Stock
          </span>
        </div>
      </div>

      <div className="bg-orange-400 rounded-2xl shadow-md p-6 flex cursor-pointer justify-between items-start hover:shadow-xl transition duration-300">
        <div className="space-y-3">
          <p className="text-sm text-white font-medium">Total Carts</p>

          <h2 className="text-3xl font-bold text-white">
            {carts?.length ?? 0}
          </h2>

          <p className="text-xs text-white mt-4">User carts created</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="bg-orange-100 text-orange-600 p-2 rounded-xl">
            <ShoppingCart className="size-7" />
          </div>

          <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
            Pending Orders
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
