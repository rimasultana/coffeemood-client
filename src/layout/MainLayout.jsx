import React from "react";
import { Outlet } from "react-router";
import Navbar from "../share/Navbar";
import Footer from "../share/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
