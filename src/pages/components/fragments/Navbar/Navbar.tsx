/* eslint-disable react/no-children-prop */
import Image from 'next/image'
import React from 'react'
import ItemMenu from '../../elements/ItemMenu'

const Navbar = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const menu = [
        {
            tittle: "Home",
            href: "home",
        },
        {
            tittle: "About",
            href: "about",
        },
        {
            tittle: "Services",
            href: "services",
        },
        {
            tittle: "Shop",
            href: "shop",
        },
        {
            tittle: "Portolio",
            href: "portfolio",
        },
        {
            tittle: "Blog",
            href: "blog",
        },
        {
            tittle: "Contact",
            href: "contact",
        },
    ]
    return (
        <div className="relative container">
            <div className='flex justify-between items-center px-[42px] py-[28px] bg-white rounded-full mt-[16px] drop-shadow-[0_4px_14px_rgba(226,114,0,0.2)]'>
                <Image className='w-[140px]' src="/assets/logo.svg" alt="logo" width={100} height={100} />
                <div className="flex gap-[42px]">

                    {menu.map((item, index) => (
                        <ItemMenu key={index} children={item.tittle} onClick={() => handleScroll(item.href)} />
                    ))}
                    {/* <ItemMenu children="Home" />
                    <ItemMenu children="About Us" />
                    <ItemMenu children="Services" />
                    <ItemMenu children="Shop" />
                    <ItemMenu children="Portfolio" />
                    <ItemMenu children="Blog" />
                    <ItemMenu children="Contact" /> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar