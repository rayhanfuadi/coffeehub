import Image from 'next/image'
import React from 'react'

interface BlogCardProps {
    img: string
    tittle: string
    desc: string
}

const BigBlogCard = (props: BlogCardProps) => {
    const { img, tittle, desc } = props
    return (
        <div className='relative group h-full overflow-hidden rounded-[24px] cursor-pointer hover:border  hover:border-[2px] hover:border-p600'>
            <Image className='w-full' src={img} alt="logo" width={1000} height={1000} />
            <div className="grid gap-1 px-4 pt-4 pb-5 w-full h-fit p-5 text-white absolute bottom-0 left-0 z-10 bg-gradient-to-t from-black to-#000000/0 ">
                <span className='text-[12px] font-semibold text-white/[0.76]'>10-07-2025</span>
                <h3 className='text-[24px]'>{tittle}</h3>
                <div className="flex justify-between gap-2">
                    <p className='text-[12px] w-[80%] font-semibold text-white/[0.76]'>{desc}</p>
                    <div className="flex items-center gap-2 cursor-pointer hover:font-semibold text-[14px] text-white/[0.76] hover:text-white">
                        more
                        <Image className='w-[24px] mr-4' src="/assets/rightArrow3.svg" alt="logo" width={1000} height={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigBlogCard