import React from "react";
import { Menu } from "../types/menu";
import {Sliders, Folder} from "@geist-ui/icons"


export const MENUS: Array<Menu> = [
    {
        name: "Dashboard",
        link: "/home",
        title: "Dashboard",
        Icon: Sliders 
    },
    {
        name : "Projects",
        link: "/project",
        title: "Projects List",
        Icon: Folder 
    }
]