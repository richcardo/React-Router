import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "../Layout/Layout";
import Info from "../Pages/Info";
import Details from "../Pages/Details";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { loadInfo, loadInfoById } from "./loaders";
import Data from "../Pages/Data";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/info",
        Component: Info,
        loader: loadInfo,
      },
      {
        path : "/info/details/:id", 
        Component: Details,
        loader: loadInfoById,
      }, 
      {
        path : "/login",
        Component : Login,
      }, 
      {
        path : "/register",
        Component : Register,
      },
      {
        path : "/data",
        Component : Data,
      }
    ],
  },
]);

export default router;
