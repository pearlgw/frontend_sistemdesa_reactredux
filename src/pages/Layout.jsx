import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <div className="p-4 sm:ml-64 mt-[70px]">
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
