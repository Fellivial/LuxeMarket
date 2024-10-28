import React, { FC } from "react";
import Sidebar from "../Navbar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutAdmin: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container w-full min-h-screen flex flex-row items-center bg-white overflow-auto px-2 ">
      <Sidebar />
      <div className="w-full min-h-screen overflow-auto">{children}</div>
    </div>
  );
};

export default LayoutAdmin;
