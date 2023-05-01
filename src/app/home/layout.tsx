"use client"
import React from "react"
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { WithSidebarLayout } from "@/layouts/WithSidebar"

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <GeistProvider>
            {/* <CssBaseline /> */}
            <WithSidebarLayout>
                {children}
            </WithSidebarLayout>
        </GeistProvider>
    )
}