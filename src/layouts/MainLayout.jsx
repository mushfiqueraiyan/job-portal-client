import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
