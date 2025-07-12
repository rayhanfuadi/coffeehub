/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
import Image from 'next/image'
import React from 'react'
import TagLine from '../../elements/TagLine'

const About = () => {
    return (
        <div id='about' className='grid xl:grid-cols-12 lg:grid-cols-8 xl:gap-4 lg:gap-[40px] gap-[40px] justify-center content-center h-screen scroll-mt-[60px]'>
            <div className="xl:hidden lg:block lg:col-span-1 hidden"></div>
            <div className="xl:col-span-6 grid lg:col-span-6 gap-4 place-content-center items-center">
                <Image className='xl:w-[538px] lg:min-w-full rounded-[24px]' src="/assets/fotoAbout.png" alt="logo" width={1000} height={1000} />
            </div>
            <div className="xl:hidden lg:block lg:col-span-1 hidden"></div>
            <div className="xl:hidden lg:block lg:col-span-1 hidden"></div>
            <div className="xl:col-span-5 lg:col-span-6 grid gap-4 place-content-center">
                <div className="">
                    <TagLine children="About Us" />
                </div>
                <div className="grid gap-y-[16px]">
                    <div className='text-[36px] font-medium text-p900'>
                        <h2>More Than Coffee,</h2>
                        <h2>A Creative Movement</h2>
                    </div>
                    <p className='text-[16px] text-p950/[0.66]'>
                        "Coffeehub isn’t just a place to sip espresso — it’s a creative hub for remote workers and freelancers to focus, grow, and connect. From morning grind to late-night ideas, we’re here to fuel your journey."
                    </p>
                </div>

                <div className="flex gap-5">
                    <div className="grid leading-none">
                        <a href='http://ehanportfolio.vercel.app/' target='_blank' className='text-[14px] font-bold text-p950/[0.66]'>Rayhan fuadi</a>
                        <p className='text-[14px] text-p950/[0.66]'>Co-Founder</p>
                    </div>
                    <Image className='w-[140px]' src="/assets/Logo.svg" alt="logo" width={100} height={100} />
                </div>
            </div>
            <div className="xl:hidden lg:block lg:col-span-1 hidden"></div>
            <div className="col-span-1"></div>
        </div>
    )
}

export default About