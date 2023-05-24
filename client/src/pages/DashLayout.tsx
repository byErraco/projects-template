import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";

const DashLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans text-gray-900">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="h-full  bg-slate-200 px-12  overflow-y-scroll ">
          <div className="my-12 p-12 bg-white">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashLayout;
