import React from "react"

export default function HelloLayout({children}: {children: React.ReactNode}){
    return (
        <div className="h-full w-full flex items-center justify-center p-5">
            {children}
        </div>
    )
}