import React from "react";
import Heder from "./components/Heder";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Heder />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
