"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarMenuItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
}

export const SidebarMenuItem = ({ icon, title, description, path }: SidebarMenuItemProps) => {
  const currentPath = usePathname();

  return (
    <Link
      href={path}
      className={`transition duration-150 ease-linear rounded-lg py-3 px-2 ${currentPath === path ? 'bg-primary' : 'hover:bg-secondary'}`}
    >
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
        {icon}
        <div>
          <p className="text-lg font-semibold">
            {title}
          </p>
          <p className="text-sm">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
