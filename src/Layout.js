import React from "react";
import Header from "./Header";
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import { Outlet } from "react-router-dom";

const Layout = ({ search, setSearch }) => {
  return (
    <div className="App">
      <Header title="React Blog App" />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
