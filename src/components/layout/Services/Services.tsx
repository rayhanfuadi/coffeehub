
/* eslint-disable react/no-children-prop */
import React from 'react'
import TagLine from '../../elements/TagLine'
import Image from 'next/image'
import { content } from './constant'

const Services = () => {

    return (
        <div id='services' className='flex flex-col gap-y-[32px] xl:scroll-mt-[140px] lg:scroll-mt-[120px] scroll-mt-[90px]'>
            <div className="flex flex-col h-fit items-center gap-[16px]">
                <div className="">
                    <TagLine children="Services" />
                </div>
                <div className="flex w-fit h-fit justify-center items-center gap-[16px]">
                    <Image className='w-[250px]' src="/assets/Logo.svg" alt="logo" width={250} height={48} />
                    <p className='text-[36px] font-medium text-p900'>Journey</p>
                </div>
            </div>

            <div className="grid xl:grid-cols-12 lg:grid-cols-8 grid-cols-4 xl:gap-5 lg:gap-4 gap-x-4 gap-y-[30px]">
                {content.map((item, index) => (
                    <div key={index} className="xl:col-span-3 lg:col-span-4 col-span-2 grid gap-4 place-content-start">
                        <div className="relative  group overflow-hidden rounded-[24px] cursor-pointer">
                            <Image className='rounded-[24px] w-full h-full scale-105 object-cover transition-transform duration-300 group-hover:scale-100' src={item.img} alt="logo" width={1000} height={397} />
                        </div>
                        <div className="grid gap-y-[12px] px-2">
                            <h3 className='text-[24px] text-p950'>{item.tittle}</h3>
                            <p className='text-[16px] text-p950/[0.66]'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services