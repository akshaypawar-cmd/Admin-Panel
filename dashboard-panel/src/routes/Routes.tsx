import { createBrowserRouter } from "react-router-dom";

import { Carts, Dashboard, Products, User } from "@pages";
import { Login } from "@container";
import Protected from "./Protected";

const routes = createBrowserRouter([
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
      {
        path: "/carts",
        element: <Carts />,
      },
    ],
  },
]);

export default routes;
