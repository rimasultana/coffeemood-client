import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import route from "./routes/route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}>
      <MainLayout />
    </RouterProvider>
  </StrictMode>
);
