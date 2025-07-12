/* eslint-disable react/no-children-prop */
import Image from 'next/image'
import React from 'react'
import ItemMenu from '../../elements/ItemMenu'
import { menu } from './constant';

const Navbar = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="relative container min-w-full">
            <div className='flex justify-between items-center px-[42px] py-[28px] bg-white rounded-full mt-[16px] drop-shadow-[0_4px_14px_rgba(226,114,0,0.2)]'>
                <Image className='w-[140px]' src="/assets/logo.svg" alt="logo" width={100} height={100} />
                <div className="xl:flex hidden gap-[42px]">
                    {menu.map((item, index) => (
                        <ItemMenu key={index} children={item.tittle} onClick={() => handleScroll(`${item.href}`)} />
                    ))}
                </div>
                <div className="xl:hidden flex px-[24px] py-[12px] gap-3 text-white rounded-full bg-gr6080 leading-none">
                    Menu
                    <Image className='w-[20px]' src="/assets/logomobile.svg" alt="logo" width={100} height={100} />
                </div>
            </div>
        </div>
    )
}

export default Navbar