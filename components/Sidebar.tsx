"use client";
import { cn, sidebarLists } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface listProps {
  title: string;
  route: string;
  icon: string;
}

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="min-h-screen bg-dark-1 pt-[112px] px-2 w-fit lg:w-[264px] max-sm:hidden">
      <div className="flex flex-1 flex-col gap-5">
        {sidebarLists.map((list: listProps) => {
          const isActive =
            // list.route === pathname || pathname.startsWith(list.route);
            list.route === pathname;
          return (
            <Link
              href={list.route}
              key={list.title}
              className={cn("p-4 flex gap-6 rounded-lg text-blue-1", {
                "bg-blue-2": isActive,
              })}
            >
              <Image src={list.icon} alt="icons" width={24} height={24} />
              <p className="text-lg font-semibold max-lg:hidden">{list.title}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
