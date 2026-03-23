import { type ColumnDef } from "@tanstack/react-table";
import { UserRoundPlus } from "lucide-react";
import { useState } from "react";

import { useUserProfile, type UserResponse } from "@api";
import { CreateUser, Sidebar, UserTable } from "@container";

const User = () => {
  const [openForm, setOpenForm] = useState(false);
  const { data = [] } = useUserProfile();
  
  const columns: ColumnDef<UserResponse>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "name.firstname",
      header: "First Name",
      cell: (info) => (
        <span className="font-semibold">{info.getValue() as string}</span>
      ),
    },
    {
      accessorKey: "name.lastname",
      header: "Last Name",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: (info) => "+91 " + info.getValue(),
    },
    {
      accessorKey: "address.city",
      header: "Address",
      cell: (info) => info.getValue(),
    },
  ];
  
  return (
    <div className="flex">
      <Sidebar />

      <div className="p-4 flex-1 overflow-x-hidden">
        <div className="flex justify-between items-center mb-4 mt-12 md:mt-2">
          <div className="text-sm text-gray-500">
            Total Users :
            <span className="text-black ml-2 font-semibold">
              {data?.length ?? 0}
            </span>
          </div>

          <button
            onClick={() => setOpenForm((prev) => !prev)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-green-600 transition"
          >
            <UserRoundPlus className="size-5" />
            <span className="text-sm font-normal">Create new user</span>
          </button>
        </div>

        <div
          className={`transition-all duration-200 ${openForm ? "blur-sm" : ""}`}
        >
          <UserTable data={data} columns={columns} />
        </div>

        {openForm && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={() => setOpenForm(false)}
          >
            <div onClick={(e) => e.stopPropagation()} className="md:w-sm">
              <CreateUser onClose={() => setOpenForm(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
