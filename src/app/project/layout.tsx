import { WithSidebarLayout } from "@/layouts/WithSidebar"
import React from "react"

export default function ProjectLayout ({ children }: {children:React.ReactNode})  {
    return (
        <WithSidebarLayout>
            {children}
        </WithSidebarLayout>
    )
}