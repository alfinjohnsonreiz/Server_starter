import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* main content */}
        <Navbar />

        <main className="flex-1 p-8 overflow-y-auto">
          {/* outlet */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
