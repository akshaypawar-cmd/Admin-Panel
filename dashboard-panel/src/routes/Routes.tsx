import { createBrowserRouter } from "react-router-dom";

import { Dashboard, Products, User } from "@pages";
import { Login } from "@container";
import Protected from "./ProtectedRoute";

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
