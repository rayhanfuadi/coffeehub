import dynamic from 'next/dynamic'
import React from 'react'
import BentoPortfolio from '../../elements/BentoPortfolio';

const Portfolio = () => {

    const ScrollVelocity = dynamic(() => import("@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity"), { ssr: false });

    return (
        <div className='px-[16px] py-[40px] grid gap-[40px] bg-gr105 rounded-[48px]'>
            {/* Bento 1 */}
            <div className="grid grid-cols-8 grid-rows-2 gap-4">
                <div className="col-span-5 row-span-1 grid gap-4 rounded-[24px] px-4 place-content-start content-center">
                    <div className="w-fit bg-transparent border border-p900 text-p900 px-[24px] py-[14px] rounded-full leading-none">
                        Portfolio
                    </div>
                    <div className="grid gap-2">
                        <h3 className='text-[52px] font-semibold text-p800 '>Sip Worth Sharing</h3>
                        <p className='text-[24px] text-p800 leading-[32px]'>Because great coffee isn&apos;t just a <br /> drink - it&apos;s a shared experience</p>
                    </div>
                </div>
                <div className="col-span-3 row-span-2 w-full h-fit bg-slate-100 rounded-[24px]">
                    <BentoPortfolio
                        img="/assets/portfolio2.png"
                        openIcon="/assets/show-eye.svg"
                        closeIcon="/assets/hide-eye.svg"
                        desc="See how our space brings ideas, people, and coffee together in one inspiring flow."
                    />
                </div>
                <div className="col-span-5 row-span-1 w-full h-fit bg-slate-100 rounded-[24px]">
                    <BentoPortfolio
                        img="/assets/portfolio1.png"
                        openIcon="/assets/show-eye.svg"
                        closeIcon="/assets/hide-eye.svg"
                        desc="See how our space brings ideas, people, and coffee together in one inspiring flow."
                    />
                </div>
            </div>

            {/* Running Text */}
            <div className="overflow-hidden py-2 bg-p600 text-white text-[36px] font-regular uppercase ">
                {/* BREW. PAIR. ENJOY. */}
                <ScrollVelocity
                    texts={['Brew. Pair. Enjoy.']}
                    velocity={120}
                    className="custom-scroll-text"
                />
            </div>

            {/* Bento 2 */}
            <div className="grid grid-cols-9 h-fit gap-4">
                <div className="col-span-2 rounded-[24px]">
                    <BentoPortfolio
                        img="/assets/portfolio3.png"
                        openIcon="/assets/show-eye.svg"
                        closeIcon="/assets/hide-eye.svg"
                        desc="See how our space brings ideas, people, and coffee together in one inspiring flow."
                    />
                </div>
                <div className="col-span-3 rounded-[24px]">
                    <BentoPortfolio
                        img="/assets/portfolio4.png"
                        openIcon="/assets/show-eye.svg"
                        closeIcon="/assets/hide-eye.svg"
                        desc="See how our space brings ideas, people, and coffee together in one inspiring flow."
                    />
                </div>
                <div className="col-span-4 rounded-[24px]">
                    <BentoPortfolio
                        img="/assets/portfolio5.png"
                        openIcon="/assets/show-eye.svg"
                        closeIcon="/assets/hide-eye.svg"
                        desc="See how our space brings ideas, people, and coffee together in one inspiring flow."
                    />
                </div>
                <div className="col-span-3  rounded-[24px]">
                    <BentoPortfolio
                        img="/assets/portfolio6.png"
                        openIcon="/assets/show-eye.svg"
                        closeIcon="/assets/hide-eye.svg"
                        desc="See how our space brings ideas, people, and coffee together in one inspiring flow."
                    />
                </div>
                <div className="col-span-6 rounded-[24px]">
                    <BentoPortfolio
                        img="/assets/portfolio7.png"
                        openIcon="/assets/show-eye.svg"
                        closeIcon="/assets/hide-eye.svg"
                        desc="See how our space brings ideas, people, and coffee together in one inspiring flow."
                    />
                </div>
            </div>
        </div >
    )
}

export default Portfolio