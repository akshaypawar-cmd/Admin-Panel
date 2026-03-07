import { LayoutDashboard, Package, Users } from "lucide-react";

export const sidebarLinks = [ 
    {
        name : "Dashboard",
        path: "/dashboard",
        icon : LayoutDashboard
    },
    {
        name :"Products",
        path :"/products",
        icon: Package
    },
    {
        name : "Users",
        path:"/users",
        icon : Users
    },
]
