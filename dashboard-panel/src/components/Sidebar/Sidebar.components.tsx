import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { LogOut, Menu } from "lucide-react";

import { sidebarLinks } from "@mockdata";
import { useLogout } from "@common functionality";
import { UserProfile } from "../User Profile";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const linkClass = (path: string) =>
    `flex items-center px-4 py-2 rounded-lg transition-all duration-300
     ${
       location.pathname === path
         ? "bg-indigo-600 text-white shadow-lg"
         : "text-gray-300 hover:bg-indigo-500 hover:text-white mt-2"
     }`;

  const handleLogout = () => {
    useLogout();
    navigate("/");
  };

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-800 p-4 flex justify-between items-center z-50">
        <h2 className="text-white font-semibold">Admin Panel</h2>
        <button onClick={() => setIsOpen(true)}>
          <Menu className="text-white size-6" />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed md:static top-0 left-0 min-h-screen bg-gray-700 text-white p-5 shadow-xl
        transition-all duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        w-72`}
      >
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </div>
         <UserProfile/>
        <ul className="space-y-2">
          {sidebarLinks.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`${linkClass(item.path)} gap-6`}
                >
                  <Icon className="size-6 min-w-8" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={handleLogout}
          className={`flex items-center w-full gap-6 text-gray-500 ${linkClass}`}
        >
          <LogOut className="size-5" />
          Logout
        </button>
      </div>
    </>
  );
}

export default Sidebar;
