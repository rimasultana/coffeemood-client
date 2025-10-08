import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";

import NotFound from "../share/NotFound";
import Recommendation from "../pages/Recommendation Page/Recommendation ";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import BlogSection from "../pages/Blog/Blog";
import Favorites from "../pages/favorites -page/favorites ";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/recommend",
        element: <Recommendation />,
      },
      {
        path: "/blog",
        element: <BlogSection />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

export default route;
