import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default Layout;
