import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import route from "./routes/route.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={route}>
        <MainLayout />
        <Toaster position="top-right" reverseOrder={false} gutter={8} />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>
);
