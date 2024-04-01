"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
  icons: string;
  title: string;
  className?: string;
  text: string;
  handleClick?: () => void;
}

const HomeCard: React.FC<HomeCardProps> = ({
  className,
  icons,
  text,
  title,
  handleClick,
}) => {
  return (
    <section
      className={cn(
        "bg-orange-1 px-4 py-6 tex-white flex-col  flex justify-between w-full min-h-[260px] items-start rounded-[14px] cursor-pointer",
        className
      )}
      onClick={handleClick}
    >
      <div className="p-4 glassmorphism rounded-[10px] size-12">
        <Image src={icons} alt="icons" width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{text}</p>
      </div>
    </section>
  );
};

export default HomeCard;
