import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="p-4 w-full flex-between bg-dark-1 fixed top-0 left-0">
      <Link href="/" className="flex gap-1 items-center">
        <Image
          className="max-sm:size-10"
          src="./icons/logo.svg"
          alt="logo"
          width={40}
          height={40}
        />
        <p className="text-white text-[26px] font-extrabold ">ZOOM</p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
