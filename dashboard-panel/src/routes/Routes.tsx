import { createBrowserRouter } from "react-router-dom";

import { Login } from "@container";
import Protected from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import User from "../pages/User";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <Protected />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/users",
        element: <User />,
      },
     
    ],
  },
]);

export default Routes;
