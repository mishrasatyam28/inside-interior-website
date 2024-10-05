import React from "react";

import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Navbar = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
      <ScrollToTop />
      <Toaster />
    </>
  );
};

export default Navbar;
