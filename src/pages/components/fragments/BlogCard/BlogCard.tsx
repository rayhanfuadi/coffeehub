import Image from 'next/image'
import React from 'react'

interface BlogCardProps {
    img: string,
    tittle: string,
}

const BlogCard = (props: BlogCardProps) => {
    const { img, tittle } = props
    return (
        <div className='grid h-full rounded-[24px] bg-white overflow-hidden drop-shadow-[0_2px_16px_rgba(124,49,11,0.2)] cursor-pointer hover:border-[2px] hover:border-p600'>
            <Image className='w-full' src={img} alt="logo" width={1000} height={1000} />
            <div className="grid content-between h-full px-5 pt-[14px] pb-[20px]">
                <h3 className='xl:text-[18px] lg:text-[18px] text-[12px] text-p950 mb-6'>{tittle}</h3>
                <div className="flex xl:text-[14px] lg:text-[14px] text-[10px] justify-between">
                    <p className='text-p950'>10-07-2025</p>
                    <div className="flex gap-2 cursor-pointer hover:font-semibold">
                        more
                        <Image className='w-[24px]' src="/assets/rightArrow2.svg" alt="logo" width={1000} height={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard