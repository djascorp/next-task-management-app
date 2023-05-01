import { Sidebar } from "@/components/sidebar/Sidebar"
import { MENUS } from "@/constants/menus"
import React from "react"
export const WithSidebarLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Sidebar menus={MENUS} >
            <div className="bg-white h-full w-full">
                {children}
            </div>
        </Sidebar>
    )
}