import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sidebarLists = [
  {
    title: "Home",
    icon: "/icons/Home.svg",
    route: "/",
  },
  {
    title: "Upcoming",
    icon: "/icons/upcoming.svg",
    route: "/upcoming",
  },
  {
    title: "Previous",
    icon: "/icons/previous.svg",
    route: "/previous",
  },
  {
    title: "Recordings",
    icon: "/icons/recordings.svg",
    route: "/recordings",
  },
  {
    title: "Personal Room",
    icon: "/icons/add-personal.svg",
    route: "/personal-room",
  },
];
