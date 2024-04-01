import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex flex-1 min-h-screen px-6 pb-6 pt-28">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
