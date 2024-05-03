import React, { FC } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container w-full min-h-screen flex flex-col items-center bg-white overflow-auto">
      <Navbar />
      <div className="w-full min-h-screen overflow-auto p-3">{children}</div>
    </div>
  );
};

export default Layout;
