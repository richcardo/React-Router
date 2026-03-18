import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "../Layout/Layout";
import Info from "../Components/Info";
import Details from "../Components/Details";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { loadInfo, loadInfoById } from "./loaders";

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
      }
    ],
  },
]);

export default router;
