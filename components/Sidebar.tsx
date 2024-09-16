"use client";
import React, { useEffect, useState } from "react";
import { Nav } from "./ui/Nav";
import {
  BellIcon,
  BookAIcon,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  FolderCog,
  LayoutDashboard,
  ListOrdered,
  LogOut,
  Settings,
  ShoppingBasket,
  StoreIcon,
  User2Icon,
  UserCircleIcon,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

export default function SideBar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isclient, setIsclient] = useState(false);

  useEffect(() => {
    setIsclient(true);
  }, []);
  useEffect(() => {
    if (isCollapsed) {
      document.body.classList.remove("sidebar-expanded");
    } else {
      document.body.classList.add("sidebar-expanded");
    }
  }, [isCollapsed]);
  const onlyWidth = useWindowWidth();
  const mobilewidth = onlyWidth < 768;

  if (!isclient) {
    return null;
  }

  return (
    <div
      className={`fixed flex flex-col top-16 left-auto h-full border-r bg-slate-300 transition-all duration-300 ease-in-out z-40 ${
        isCollapsed ? "w-20" : "w-80"
      } ${mobilewidth ? "w-full" : ""}`}
    >
      {!mobilewidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            className="rounded-full p-4 bg-slate-400/90 hover:bg-slate-400 text-black"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}
      <div className="pt-20 pb-10">
        <Nav
          isCollapsed={mobilewidth ? true : isCollapsed}
          links={[
            {
              title: "Dashboard",
              icon: LayoutDashboard,
              variant: "default",
              href: "/",
            },
            {
              title: "Inventory",
              icon: StoreIcon,
              variant: "ghost",
              href: "/inventory",
            },
            {
              title: "Reports",
              icon: ClipboardCheck,
              variant: "ghost",
              href: "/reports",
            },
            {
              title: "Suppliers",
              icon: UserCircleIcon,
              variant: "ghost",
              href: "/suppliers",
            },
            {
              title: "Products",
              icon: ShoppingBasket,
              variant: "ghost",
              href: "/products",
            },
            {
              title: "Manage Store",
              icon: FolderCog,
              variant: "ghost",
              href: "/manage-store",
            },
          ]}
        />
      </div>
      <Nav
        isCollapsed={mobilewidth ? true : isCollapsed}
        links={[
          {
            title: "Settings",
            icon: Settings,
            variant: "default",
            href: "/settings",
          },
          {
            title: "Logout",
            icon: LogOut,
            variant: "ghost",
            href: "/logout",
          },
        ]}
      />
    </div>
  );
}
