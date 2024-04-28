import { Calendar, Home } from "lucide-react";
import { type NavItem } from "@/types";

export const NavItems: NavItem[] = [
  {
    title: "Home",
    icon: Home,
    href: "/",
    color: "text-sky-500",
  },
  {
    title: "Events",
    icon: Calendar,
    href: "/acara/tambah-acara",
    color: "text-orange-500",
  },
];
