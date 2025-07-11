import Image from 'next/image'
import React, { useState } from 'react'

interface BentoPortfolioProps {
    img: string,
    openIcon: string,
    closeIcon: string,
    desc: string,
}

const BentoPortfolio = (props: BentoPortfolioProps) => {
    const { img, openIcon, closeIcon, desc } = props

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='relative group overflow-hidden rounded-[24px]'>
            <Image className='w-full h-full object-cover scale-100 group-hover:scale-105 transition ease-in duration-300 rounded-[24px]' src={img} alt="logo" width={250} height={48} />
            {!isOpen && (
                <button type="button" onClick={() => setIsOpen(true)} className="absolute bottom-6 right-6">
                    <Image className='invisible group-hover:visible transition ease-in duration-300 cursor-pointer' src={openIcon} alt="logo" width={40} height={40} />
                </button>
            )}

            {isOpen && (
                <div className="w-full h-full p-5 text-white absolute top-0 left-0 z-10 bg-gradient-to-b from-p950 to-#000000/0">
                    {desc}
                    <button type="button" onClick={() => setIsOpen(false)} className="absolute bottom-6 right-6">
                        <Image className='transition ease-in duration-300 cursor-pointer' src={closeIcon} alt="logo" width={40} height={40} />
                    </button>
                </div>
            )}
        </div>
    )
}

export default BentoPortfolio