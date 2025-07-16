"use client"

import * as React from "react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { menuList } from "../Navbar/constant"


const Humburger = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="relative xl:hidden flex px-[16px] py-[8px] gap-2 text-white xl:text-[16px] lg:text-[16px] text-[14px] font-light items-center rounded-full bg-gr6080 leading-none">
                    Menu
                    <Image className='w-[18px]' src="/assets/logomobile.svg" alt="logo" width={100} height={100} />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[200px] lg:mt-[16px] lg:mr-[30px] mt-[12px] mr-[16px] border border-p600 rounded-xl grid gap-1 py-3 px-2">
                {/* <DropdownMenuLabel>Coffehub Menu</DropdownMenuLabel> */}
                {/* <DropdownMenuSeparator /> */}

                {/* <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                >
                    Status Bar
                </DropdownMenuCheckboxItem> */}


                {menuList.map((item, index) => (
                    <div key={index} className="grid gap-2 px-4 py-2 text-p900 cursor-pointer leading-none hover:bg-p100 hover:rounded-sm w-full hover:text-p900 hover:font-medium"
                        onClick={() => handleScroll(`${item.href}`)}>
                        {item.tittle}
                    </div>
                ))}


            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Humburger