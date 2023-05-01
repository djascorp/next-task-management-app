import { Menu } from "@/types/menu";
import React from "react";

export const SidebarBtn = ({ menu, children }: { menu: Menu, children: React.ReactNode }) => {
    return (
        <li className="hover:bg-gray-100">
            <a
                href={menu.link}
                title={menu.title}
                className="h-16 px-6 flex flex justify-center items-center w-full
                focus:text-orange-500">
                {children}
            </a>
        </li>
    )
}