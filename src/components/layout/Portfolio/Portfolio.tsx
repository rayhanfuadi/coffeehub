import dynamic from 'next/dynamic'
import React from 'react'
import BentoPortfolio from '../../elements/BentoPortfolio';

const Portfolio = () => {

    const ScrollVelocity = dynamic(() => import("@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity"), { ssr: false });

    return (
        <div id='portfolio' className='px-[16px] py-[40px] grid gap-[40px] bg-gr105 rounded-[48px] items-start xl:scroll-mt-[140px] lg:scroll-mt-[120px] scroll-mt-[90px]'>
            {/* Bento 1 */}
            <div className="grid xl:grid-cols-8 lg:grid-cols-5 grid-cols-4 xl:grid-rows-2 lg:grid-rows-2 gap-4">

                <div className="xl:col-span-5 xl:row-span-1 lg:col-span-3 lg:row-span-1 col-span-4 row-start-1 grid gap-4 rounded-[24px] px-4 place-content-start content-center">
                    <div className="w-fit bg-transparent border border-p900 text-p900 px-[24px] py-[14px] rounded-full leading-none">
                        Portfolio
                    </div>
                    <div className="grid gap-2">
                        <h3 className='text-[52px] font-semibold text-p800 '>Sip Worth Sharing</h3>
                        <p className='text-[24px] text-p800 leading-[32px]'>Because great coffee isn&apos;t just a <br /> drink - it&apos;s a shared experience</p>
                    </div>
                </div>

                <div className="xl:col-span-3 xl:row-span-2 lg:col-span-2 lg:row-span-1 grid col-span-4 w-full xl:h-fit lg:h-full bg-slate-100 rounded-[24px]">
                    <BentoPortfolio
                        img="/assets/portfolio2.png"
                        openIcon="/assets/show-eye.svg"
                        closeIcon="/assets/hide-eye.svg"
                        desc="See how our space brings ideas, people, and coffee together in one inspiring flow."
                    />
                </div>

                <div className="xl:col-span-5 lg:col-span-5 col-span-4 row-span-1 w-full bg-slate-100 h-full rounded-[24px]">
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
            <div className="grid xl:grid-cols-9 lg:grid-cols-9 grid-cols-4 h-fit gap-4">
                <div className="xl:col-span-2 lg:col-span-2 col-span-2 rounded-[24px]">
                    <BentoPortfolio
                        img="/assets/portfolio3.png"
                        openIcon="/assets/show-eye.svg"
                        closeIcon="/assets/hide-eye.svg"
                        desc="Work, chill, connect. Here's what Coffeehub looks like from the inside."
                        defaultOpen={true}
                    />
                </div>
                <div className="xl:col-span-3 lg:col-span-3 col-span-2 rounded-[24px]">
                    <BentoPortfolio
                        img="/assets/portfolio4.png"
                        openIcon="/assets/show-eye.svg"
                        closeIcon="/assets/hide-eye.svg"
                        desc="Behind the brews: moments of focus, creativity, and shared growth at Coffeehub."
                        defaultOpen={true}
                    />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 col-span-2 rounded-[24px]">
                    <BentoPortfolio
                        img="/assets/portfolio5.png"
                        openIcon="/assets/show-eye.svg"
                        closeIcon="/assets/hide-eye.svg"
                        desc="Where great coffee meets greater minds — captured through our everyday scenes."
                        defaultOpen={true}
                    />
                </div>
                <div className="xl:col-span-3 lg:col-span-3 col-span-2 rounded-[24px]">
                    <BentoPortfolio
                        img="/assets/portfolio6.png"
                        openIcon="/assets/show-eye.svg"
                        closeIcon="/assets/hide-eye.svg"
                        desc="Explore moments that make Coffeehub more than just a coffee shop."
                        defaultOpen={true}
                    />
                </div>
                <div className="xl:col-span-6 lg:col-span-6 col-span-4 rounded-[24px]">
                    <BentoPortfolio
                        img="/assets/portfolio7.png"
                        openIcon="/assets/show-eye.svg"
                        closeIcon="/assets/hide-eye.svg"
                        desc="A glimpse into our daily grind: coffee, connection, and community in motion."
                        defaultOpen={true}
                    />
                </div>
            </div>
        </div >
    )
}

export default Portfolio