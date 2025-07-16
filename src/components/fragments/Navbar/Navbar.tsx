/* eslint-disable react/no-children-prop */
"use client"

import * as React from "react"
import Image from 'next/image'
import ItemMenu from '../../elements/ItemMenu'
import { menuList } from "./constant"
import Humburger from "../dropdownMenu/DropdownMenu"

const Navbar = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="relative container min-w-full">
            <div className='flex justify-between items-center xl:px-[42px] lg:px-[24px] px-[24px] xl:py-[28px] lg:py-[12px] py-[10px] bg-white rounded-full mt-[16px] drop-shadow-[0_4px_14px_rgba(226,114,0,0.2)]'>
                <Image className='xl:w-[140px] lg:w-[140px] w-[120px]' src="/assets/Logo.svg" alt="logo" width={100} height={100} />
                <div className="xl:flex hidden gap-[42px]">
                    {menuList.map((item, index) => (
                        <ItemMenu key={index} children={item.tittle} onClick={() => handleScroll(`${item.href}`)} />
                    ))}
                </div>

                <Humburger />
            </div>
        </div>
    )
}

export default Navbar