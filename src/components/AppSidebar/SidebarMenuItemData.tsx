"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

interface SidebarMenuItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
}

export const SidebarMenuItemData = ({
  icon,
  title,
  description,
  path,
}: SidebarMenuItemProps) => {
  const currentPath = usePathname();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild tooltip={description}>
        <Link
          href={path}
          className={`transition duration-150 ease-linear ${
            currentPath === path ? "bg-primary" : ""
          }`}
        >
          {icon}
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
