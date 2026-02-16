import { Package, ShoppingCart, Users } from "lucide-react";

import {  useGetCarts, useGetProducts, useUserProfile } from "@api";

const DashboardCards = () => { 
  const { data: users } = useUserProfile();
  const { data: products } = useGetProducts();
  const { data: carts } = useGetCarts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <div className="bg-blue-500 text-white rounded-xl shadow-lg p-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">{users?.length ?? 0}</h2>
          <p className="text-sm mt-1">Total Users</p>
        </div>
        <Users className="size-9" />
      </div>

      <div className="bg-green-500 text-white rounded-2xl shadow-lg p-6 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">{products?.length ?? 0}</h2>
          <p className="text-sm mt-1">Total Products</p>
        </div>
        <Package className="size-9" />
      </div>

      <div className="bg-orange-500 text-white rounded-2xl shadow-lg p-6 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">{carts?.length ?? 0}</h2>
          <p className="text-sm mt-1">Total Carts</p>
        </div>
        <ShoppingCart className="size-9" />
      </div>
    </div>
  );
};

export default DashboardCards;
