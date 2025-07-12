import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='xl:flex lg:grid gap-[60px] justify-between xl:px-[60px] xl:py-[100px] lg:px-[30px] lg:py-[60px] bg-p50'>
            <div className="grid lg:grid-cols-8 xl:gap-[32px] lg:gap-[24px]">
                <Image className='lg:col-span-8 w-fit' src="/assets/Logo.svg" alt="logo" width={1000} height={100} />
                <p className='lg:col-span-6 xl:text-[14px] lg:text-[12px] text-p900'>Whether you’re planning to book a spot, ask something about our services, explore a potential collaboration, or simply want to say hi — we’d love to hear from you. Drop us a message through the form below, and our team will get back to you as soon as possible. </p>
                <Image className='w-fit lg:col-span-8' src="/assets/social.svg" alt="logo" width={1000} height={100} />
            </div>
            <div className="grid gap-[32px]">
                <h4 className='font-semibold text-p900'>Information</h4>
                <div className="flex gap-[80px] text-[14px] text-p900">
                    <div className="grid gap-[16px] w-[100px]">
                        <p className='hover:underline hover:underline-offset-4'>Home</p>
                        <p className='hover:underline hover:underline-offset-4'>About Us</p>
                        <p className='hover:underline hover:underline-offset-4'>Services</p>
                    </div>
                    <div className="grid gap-[16px] w-[100px]">
                        <p className='hover:underline hover:underline-offset-4'>Shop</p>
                        <p className='hover:underline hover:underline-offset-4'>Portfolio</p>
                        <p className='hover:underline hover:underline-offset-4'>Blog</p>
                    </div>
                    <div className="grid gap-[16px] w-[100px]">
                        <p className='hover:underline hover:underline-offset-4'>Contact</p>
                    </div>
                </div>
                <span>© 2025 Muhammad Rayhan Fuadi. All Right Reserved</span>
            </div>
        </div>
    )
}

export default Footer