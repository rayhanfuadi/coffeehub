/* eslint-disable react/no-children-prop */
import React from 'react'
import TagLine from '../../elements/TagLine'
import ProductCard from '../../fragments/ProductCard/ProductCard'
import Image from 'next/image'

const Shop = () => {
    const product = [
        {
            img: '/assets/product1.png',
            tittle: 'V60 – Slow Clarity',
            desc: 'Ready-to-drink, Bright acidity, crisp finish.',
            price: '27K'
        },
        {
            img: '/assets/product2.png',
            tittle: 'Americano – Pure Focus',
            desc: 'Ready-to-drink, Bold and clean, no distractions.',
            price: '24K'
        },
        {
            img: '/assets/product3.png',
            tittle: 'Japanese V60 – Chill & Bright',
            desc: 'Ready-to-drink, Cold-dripped, fruity, and refreshing.',
            price: '29K'
        },
        {
            img: '/assets/product4.png',
            tittle: 'Espresso Shot – Double Dose',
            desc: 'Ready-to-drink, Intense, strong, short punch.',
            price: '19K'
        },
        {
            img: '/assets/product5.png',
            tittle: 'Cold Brew – Creamy Vanilla',
            desc: 'Ready-to-drink, Sweet vanilla hint, mellow body.',
            price: '25K'
        },
        {
            img: '/assets/product6.png',
            tittle: 'Cold Brew – Mocha Blend',
            desc: 'Ready-to-drink, Chocolatey notes, bold and rich.',
            price: '23K'
        },
        {
            img: '/assets/product7.png',
            tittle: 'Cold Brew – Black Series',
            desc: 'Ready-to-drink,Low acidity, smooth finish.',
            price: '23K'
        },
        {
            img: '/assets/product8.png',
            tittle: 'Iced Latte – Classic Cream',
            desc: 'Ready-to-drink, Mild roast, smooth milk balance.',
            price: '29K'
        },
    ]

    const bestProduct = [
        {
            img: '/assets/product1.png',
            tittle: 'V60 – Slow Clarity',
            desc: 'Ready-to-drink, Bright acidity, crisp finish.',
            price: '27K'
        },
        {
            img: '/assets/product3.png',
            tittle: 'Japanese V60 – Chill & Bright',
            desc: 'Ready-to-drink, Cold-dripped, fruity, and refreshing.',
            price: '29K',
            scale: 'scale-105 bg-p50'
        },
        {
            img: '/assets/product8.png',
            tittle: 'Iced Latte – Classic Cream',
            desc: 'Ready-to-drink, Mild roast, smooth milk balance.',
            price: '29K'
        },
    ]
    return (
        <div id='shop' className='flex flex-col gap-y-[32px] scroll-mt-[140px]'>
            <div className="flex flex-col h-fit items-center gap-[16px]">
                <div className="">
                    <TagLine children="Shop" />
                </div>
                <p className='text-[36px] font-medium text-p900'>Best Product</p>
            </div>
            <div className="grid xl:gap-[64px] lg:gap-[32px] gap-[32px]">
                <div className="grid xl:grid-cols-12 xl:gap-5 lg:grid-cols-8 lg:gap-5 gap-5">
                    {bestProduct.map((item, index) => (
                        <div key={index} className="xl:col-span-4 lg:col-span-4">
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
                    <div className="flex w-fit h-fit justify-center items-center xl:gap-[16px] lg:gap-[16px] gap-[8px]">
                        <Image className='xl:w-[250px] lg:w-[250px] w-[185px]' src="/assets/Logo.svg" alt="logo" width={250} height={48} />
                        <p className='xl:text-[36px] lg:text-[36px] text-[28px] font-medium text-p900'>Menu</p>
                    </div>

                    <div className="grid xl:grid-cols-12 xl:gap-x-5 xl:gap-y-[40px] lg:grid-cols-12 lg:gap-x-5 lg:gap-y-[40px] grid-cols-4 gap-4">
                        {product.map((item, index) => (
                            <div key={index} className="xl:col-span-3 lg:col-span-6 col-span-2">
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