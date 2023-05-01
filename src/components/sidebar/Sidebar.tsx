import { Menu } from "@/types/menu"
import { SidebarBtn } from "./SidebarBtn"
import { DownloadCloud } from "@geist-ui/icons"
import Image from "next/image"
import React from "react"

export const Sidebar = ({
    menus, children
}: { menus: Array<Menu> , children : React.ReactNode}) => {
    return (
        <div className="h-screen w-screen flex bg-gray-200">
            <div
                className="flex flex-col items-center bg-white text-gray-700 shadow h-full">

                <div className="h-16 flex items-center w-full">

                    <a className="h-6 w-6 mx-auto" href="http://svelte.dev/">
                        <img
                            className="h-6 w-6 mx-auto"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
                            alt="svelte logo" />
                    </a>
                </div>

                <ul>
                    {menus?.map(menu => (
                        <SidebarBtn menu={menu} key={menu.name}>
                            <menu.Icon />
                        </SidebarBtn>
                    ))}



                </ul>

                <div className="mt-auto h-16 flex items-center w-full">

                    <button
                    title="Sign-out"
                        className="h-16 w-10 mx-auto flex flex justify-center items-center w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none">
                       <DownloadCloud />
                    </button>
                </div>
            </div>
            <div className="flex-1  pl-[1px]">
                {children}
            </div>
        </div>
    )
}
