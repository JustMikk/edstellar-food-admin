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
  StoreIcon,
  User2Icon,
  UserCircleIcon,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWindowSize, useWindowWidth } from "@react-hook/window-size";

type Props = {};

export default function SideBar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobilewidth = onlyWidth < 768;
  useEffect(() => {
    setIsClient(true); // Ensures the component is mounted on the client
  }, []);
  if (!isClient) {
    return null; // Prevent rendering on the server
  }

  return (
    <div className="relative min-w-[80px] border-r pl-3 pr-9 xl:px-3 pb-10 pt-20 bg-slate-300">
      {!mobilewidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            className="rounded-full p-4  bg-slate-400/90 hover:bg-slate-400 text-black"
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}
      <div className="mb-72">
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
              title: "Orders",
              icon: ListOrdered,
              variant: "ghost",
              href: "/orders",
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
