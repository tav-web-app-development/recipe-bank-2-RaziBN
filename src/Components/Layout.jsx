// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const bottomRef = useRef(null);
  return (
    <div>
      <Navbar bottomRef={bottomRef} />
      <Outlet />
      <Footer bottomRef={bottomRef} />
    </div>
  );
}

export default Layout;
