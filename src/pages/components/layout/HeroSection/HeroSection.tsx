
import Image from 'next/image'
import React from 'react'
import ButtonCTA from '../../elements/ButtonCTA'
import FallingText from '@/blocks/TextAnimations/FallingText/FallingText'
import dynamic from 'next/dynamic'

const HeroSection = () => {
    const CountUp = dynamic(() => import("@/blocks/TextAnimations/CountUp/CountUp"), {
        ssr: false,
    });

    return (
        <div id='home' className='flex justify-center items-center mt-[140px] scroll-mt-[60px]'>
            <div className="w-full grid grid-cols-12 grid-rows-2 gap-3">
                {/* Grid 1 */}
                <div className="col-span-5 row-span-1 bg-gradient-to-b from-p100 to-p50 rounded-[20px]">
                    <FallingText
                        text={`Amaricano Macchiato Cappucino Espresso V&nbsp60 Iced&nbspCoffee Flat&nbspWhite Cold&nbspBrew Affogato Bulletproof&nbspCoffee Black&nbspCoffee Latte Long&nbspBlack Japanese&nbspV&nbsp60`}
                        // highlightWords={["Amaricano", "Macchiato", "Cappucino", "Espresso", "V&nbsp60", "Iced&nbspCoffee", "Flat&nbspWhite", "Cold&nbspBrew", "Affogato", "Bulletproof&nbspCoffee", "Black&nbspCoffee", "Latte", "Long&nbspBlack", "Japanese&nbspV&nbsp60"]}
                        trigger="hover"
                        backgroundColor="transparent"
                        wireframes={false}
                        gravity={0.56}
                        fontSize="2rem"
                        mouseConstraintStiffness={0.9}
                    />
                </div>
                {/* Grid 2 */}
                <div className="col-span-3 row-span-1 bg-slate-100 rounded-[20px] justify-items-center bg-gr6080">
                    <Image className='h-full object-cover rounded-[20px]' src="/assets/kopiHero.png" alt="logo" width={1000} height={1000} />
                </div>
                {/* Grid 3 */}
                <div className="relative col-span-4 row-span-2 bg-slate-100 rounded-[20px] w-full h-[700px]">
                    <Image className='h-full object-cover rounded-[20px]' src="/assets/personHero.png" alt="logo" width={1244.44} height={700} />
                    <div className="bg-p600/[0.07] absolute bottom-0 w-full h-full "></div>
                </div>
                {/* Grid 4 */}
                <div className="col-span-2 row-span-1 rounded-[20px] grid justify-center items-center">
                    <span className='bg-gr9060 bg-clip-text text-transparent'>
                        <div className="leading-none">
                            <p className='text-[52px] font-bold leading-none'>
                                <CountUp
                                    from={0}
                                    to={10}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />K+
                            </p>
                            Happy Costumer
                        </div>
                    </span>

                    <span className='bg-gr9060 bg-clip-text text-transparent'>
                        <div className="leading-none">
                            <p className='text-[52px] font-bold leading-none'>
                                <CountUp
                                    from={0}
                                    to={5}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />+
                            </p>
                            Years of Standing
                        </div>
                    </span>
                    <span className='bg-gr9060 bg-clip-text text-transparent'>
                        <div className="leading-none">
                            <p className='text-[52px] font-bold leading-none'>
                                <CountUp
                                    from={0}
                                    to={20}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />+
                            </p>
                            Beans of Coffee
                        </div>
                    </span>
                </div>
                {/* Grid 5 */}
                <div className="col-span-6 row-span-1 flex flex-col justify-between bg-slate-100 rounded-[20px] bg-gr9570 px-[40px] py-[32px]">
                    <div className="grid gap-y-[20px]">
                        <div className="text-[48px] text-white leading-[60px]">
                            Brew Coffee, Build Great Things Together
                        </div>
                        <div className="text-[16px] text-white font-light">
                            Tired of noisy cafés or uninspiring work corners? At Kopihub, we blend the aroma of fresh coffee with the energy of a creative, focused community.
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <ButtonCTA variant="primary">Work With Us</ButtonCTA>
                        <ButtonCTA variant="ghost">Visit Coffehub</ButtonCTA>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection