import React, { FC } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-container w-full min-h-screen flex flex-col items-center bg-white overflow-auto">
      <Navbar />
      <div className="w-full min-h-screen overflow-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
