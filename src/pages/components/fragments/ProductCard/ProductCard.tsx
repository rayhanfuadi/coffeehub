import Image from 'next/image'
import React from 'react'

interface ProductCardProps {
    tittle: string,
    desc: string,
    img: string,
    price: string,
    scale: React.ReactNode
}

const ProductCard = (props: ProductCardProps) => {
    const { tittle, desc, img, price, scale } = props
    return (
        <div className={`grid gap-[24px] h-full p-4 bg-white hover:bg-p50 rounded-[24px] border border-p600 transition duration-150 ease-in-out ${scale}`}>
            <div className="relative group overflow-hidden rounded-[16px] cursor-pointer">
                <Image className='w-full h-full rounded-[16px] scale-105 object-cover transition-transform duration-150 group-hover:scale-100' src={img} alt="logo" width={1000} height={1000} />
            </div>

            <div className="flex justify-between">
                <div className="grid gap-2 px-2 pb-[16px]">
                    <h3 className='text-[20px] font-semibold text-p950'>{tittle}</h3>
                    <p className='text-[12px] text-p950/[0.66]'>{desc}</p>
                </div>
                {/* price */}
                <div className="px-[12px] py-[8px] h-fit leading-none font-bold text-white bg-p800 rounded-[24px]">
                    {price}
                </div>
            </div>
        </div>
    )
}

export default ProductCard