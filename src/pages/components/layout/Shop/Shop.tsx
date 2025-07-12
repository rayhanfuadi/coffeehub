/* eslint-disable react/no-children-prop */
import React from 'react'
import TagLine from '../../elements/TagLine'
import ProductCard from '../../fragments/ProductCard/ProductCard'
import { bestProduct, product } from './constant'
import Image from 'next/image'

const Shop = () => {
    return (
        <div id='shop' className='flex flex-col gap-y-[32px] scroll-mt-[140px]'>
            <div className="flex flex-col h-fit items-center gap-[16px]">
                <div className="">
                    <TagLine children="Shop" />
                </div>
                <p className='text-[36px] font-medium text-p900'>Best Product</p>
            </div>
            <div className="grid xl:gap-[64px] lg:gap-[32px]">
                <div className="grid grid-cols-12 gap-5">
                    {bestProduct.map((item, index) => (
                        <div key={index} className="xl:col-span-4 lg:col-span-6">
                            <ProductCard
                                img={item.img}
                                tittle={item.tittle}
                                desc={item.desc}
                                price={item.price}
                                scale={item.scale} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Image className='w-fit h-fit' src="/assets/pagination.svg" alt="logo" width={1000} height={1000} />
                </div>
            </div>


            {/* Menu */}
            <div className="grid gap-[64px]">
                <div className="grid gap-[24px]">
                    <div className="flex w-fit h-fit justify-center items-center gap-[16px]">
                        <Image className='w-[250px]' src="/assets/logo.svg" alt="logo" width={250} height={48} />
                        <p className='text-[36px] font-medium text-p900'>Menu</p>
                    </div>

                    <div className="grid grid-cols-12 gap-x-5 gap-y-[40px]">
                        {product.map((item, index) => (
                            <div key={index} className="xl:col-span-3 lg:col-span-6">
                                <ProductCard
                                    img={item.img}
                                    tittle={item.tittle}
                                    desc={item.desc}
                                    price={item.price}
                                    scale={''}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image className='w-fit h-fit' src="/assets/pagination.svg" alt="logo" width={1000} height={1000} />
                </div>
            </div>
        </div>
    )
}

export default Shop