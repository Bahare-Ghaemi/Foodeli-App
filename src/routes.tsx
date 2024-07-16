import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/Default";
import HomePage from "./modules/Home/page";
import ShopPage from "./modules/Shop/page";
import ShopLayout from "./modules/Shop/layout";
import SingleProductPage from "./modules/SingleProduct/page";

export const router = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/shop/:name",
        element: <SingleProductPage />,
      },
    ],
  },
  {
    path: "/shop",
    element: <ShopLayout />,
    children: [{ path: "", element: <ShopPage /> }],
  },
];
