
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
        <div id='home' className='flex justify-center items-center mt-[140px] scroll-mt-[140px]'>
            <div className="w-full grid xl:grid-cols-12  lg:grid-cols-8 xl:auto-rows-auto lg:auto-rows-auto grid-rows-1 gap-3 items-start">
                {/* Grid 3 Tablet */}
                <div className="relative xl:hidden lg:hidden lg:col-span-4 lg:row-span-2 block bg-slate-100 rounded-[20px] w-full lg:h-full">
                    <Image className='h-full object-cover rounded-[20px]' src="/assets/personHero.png" alt="logo" width={1244.44} height={700} />
                    <div className="bg-p600/[0.07] absolute bottom-0 w-full h-full "></div>
                </div>
                {/* Grid 1 */}
                <div className="xl:col-span-5 xl:row-span-1 lg:col-span-5 lg:row-span-1 row-span-1 bg-gradient-to-b from-p100 to-p50 rounded-[20px] xl:h-full lg:h-full min-h-full">
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
                <div className="xl:col-span-3 xl:row-span-1 lg:col-span-3 lg:row-span-1 bg-slate-100 rounded-[20px] justify-items-center bg-gr6080 h-full">
                    <Image className='h-full object-cover rounded-[20px]' src="/assets/kopiHero.png" alt="logo" width={1000} height={1000} />
                </div>
                {/* Grid 3 */}
                <div className="relative xl:block xl:col-span-4 xl:row-span-2 lg:hidden hidden  bg-slate-100 rounded-[20px] w-full xl:h-full">
                    <Image className='h-full object-cover rounded-[20px]' src="/assets/personHero.png" alt="logo" width={1244.44} height={700} />
                    <div className="bg-p600/[0.07] absolute bottom-0 w-full h-full "></div>
                </div>
                {/* Grid 4 */}
                <div className="xl:col-span-2 xl:row-span-1 lg:col-span-4 lg:row-span-1 flex rounded-[20px] xl:grid lg:flex lg:p-5 p-4 justify-center items-center xl:h-full lg:h-full h-full">
                    <span className='bg-gr9060 bg-clip-text text-transparent'>
                        <div className="leading-none">
                            <p className='xl:text-[52px] lg:text-[36px] text-[36px] font-bold leading-none'>
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
                            <p className='xl:text-[52px] lg:text-[36px] text-[36px] font-bold leading-none'>
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
                            <p className='xl:text-[52px] lg:text-[36px] text-[36px] font-bold leading-none'>
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

                {/* Grid 3 Tablet */}
                <div className="relative xl:hidden lg:block lg:col-span-4 lg:row-span-2 hidden bg-slate-100 rounded-[20px] w-full lg:h-full">
                    <Image className='h-full object-cover rounded-[20px]' src="/assets/personHero.png" alt="logo" width={1244.44} height={700} />
                    <div className="bg-p600/[0.07] absolute bottom-0 w-full h-full "></div>
                </div>

                {/* Grid 5 */}
                <div className="xl:col-span-6 xl:row-span-1 lg:col-span-4 lg:row-span-1 lg:row-start-3 flex flex-col justify-between bg-slate-100 rounded-[20px] bg-gr9570 px-[40px] py-[32px] xl:h-full">
                    <div className="grid gap-y-[20px]">
                        <div className="text-[48px] text-white leading-[60px]">
                            Brew Coffee, Build Great Things Together
                        </div>
                        <div className="text-[16px] text-white font-light">
                            Tired of noisy cafés or uninspiring work corners? At Kopihub, we blend the aroma of fresh coffee with the energy of a creative, focused community.
                        </div>
                    </div>
                    <div className="xl:flex lg:grid grid gap-5">
                        <ButtonCTA variant="primary">Work With Us</ButtonCTA>
                        <ButtonCTA variant="ghost">Visit Coffehub</ButtonCTA>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection