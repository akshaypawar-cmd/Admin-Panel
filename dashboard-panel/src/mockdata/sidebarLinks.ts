import { LayoutDashboard, Package, ShoppingCart, Users } from "lucide-react";

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
    {
        name : "Carts",
        path : "/carts",
        icon : ShoppingCart
    }
]
