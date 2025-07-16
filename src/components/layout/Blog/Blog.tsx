/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-children-prop */
import React from 'react'
import TagLine from '../../elements/TagLine'
import Image from 'next/image'
import BlogCard from '../../fragments/BlogCard/BlogCard'
import BigBlogCard from '../../fragments/BlogCard/BigBlogCard'

const Blog = () => {
    const blog1 = [
        {
            img: '/assets/blog1.png',
            tittle: 'How to Stay Focused When Working from a Coffee Shop'
        },
        {
            img: '/assets/blog2.png',
            tittle: 'The Art of Brewing: Manual Coffee Techniques for Beginners'
        },
    ]

    const blog2 = [
        {
            img: '/assets/blog3.png',
            tittle: 'From Bean to Brain: How Coffee Impacts Your Productivity'
        },
        {
            img: '/assets/blog4.png',
            tittle: 'How to Stay Focused When Working from a Coffee Shop'
        },
    ]

    return (
        <div id='blog' className="grid xl:gap-[32px] lg:gap-[24px] gap-[16px] xl:scroll-mt-[140px] lg:scroll-mt-[120px] scroll-mt-[90px]">
            <div className="grid xl:grid-cols-12 lg:grid-cols-8 grid-cols-4 xl:gap-5 lg:gap-4 gap-4">
                <div className='grid gap-y-4 xl:col-span-10 lg:col-span-5 col-span-3 place-content-start'>
                    <div className="">
                        <TagLine children="Blog" />
                    </div>
                    <h3 className='xl:text-[52px] lg:text-[52px] text-[28px] font-medium text-p800 '>Fresh Thoughts Brewed Daily</h3>
                </div>
                <div className="flex xl:col-span-2 lg:col-span-3 col-span-1 xl:gap-5 lg:gap-4 gap-2 justify-end items-end">
                    <Image className='xl:w-[40px] lg:w-[40px] w-[28px] rounded-[24px]' src="/assets/leftArrow.svg" alt="logo" width={1000} height={100} />
                    <Image className='xl:w-[40px] lg:w-[40px] w-[28px] rounded-[24px]' src="/assets/rightArrow.svg" alt="logo" width={1000} height={100} />
                </div>
            </div>

            {/* Blog contetn 1 */}
            <div className="grid xl:grid-cols-12 lg:grid-cols-8 grid-cols-4 xl:gap-5 lg:gap-4 gap-3">
                {/* {blog1.map((item, index) => (
                    <div key={index} className={`xl:col-span-3 lg:col-span-3 col-span-2 $`}>
                        <BlogCard
                            img={item.img}
                            tittle={item.tittle}
                        />
                    </div>
                ))} */}
                <div className="xl:col-span-3 lg:col-span-3 col-span-2">
                    <BlogCard
                        img="/assets/blog1.png"
                        tittle='How to Stay Focused When Working from a Coffee Shop'
                    />
                </div>

                <div className="xl:col-span-3 xl:block lg:hidden col-span-2">
                    <BlogCard
                        img="/assets/blog2.png"
                        tittle='The Art of Brewing: Manual Coffee Techniques for Beginners'
                    />
                </div>

                <div className="xl:col-span-6 lg:col-span-5 col-span-4">
                    <BigBlogCard
                        img='/assets/bigblog1.png'
                        tittle='7 Signs You’ve Found the Right Place to Work Remotely'
                        desc='Not every coffee shop or coworking space fits. These subtle signs show you’ve found a space — like Kopihub — that supports your work and mindset.'
                    />
                </div>
            </div>

            {/* Blog contetn 2 */}
            <div className="grid xl:grid-cols-12 lg:grid-cols-8 grid-cols-4 xl:gap-5 lg:gap-4 gap-3">
                <div className="xl:col-span-6 lg:col-span-5 col-span-4">
                    <BigBlogCard
                        img='/assets/bigblog2.png'
                        tittle='Why Coworking Spaces Work Better Than Home Offices'
                        desc='Feeling stuck or lonely working from home? Explore how shared workspaces like Kopihub improve motivation, networking, and work-life balance.'
                    />
                </div>

                {/* {blog2.map((item, index) => (
                    <div key={index} className="xl:col-span-3 lg:col-span-3 col-span-2">
                        <BlogCard
                            img={item.img}
                            tittle={item.tittle}
                        />
                    </div>
                ))} */}
                <div className="xl:col-span-3 lg:col-span-3 col-span-2">
                    <BlogCard
                        img="/assets/blog3.png"
                        tittle='From Bean to Brain: How Coffee Impacts Your Productivity'
                    />
                </div>

                <div className="xl:col-span-3 xl:block lg:hidden col-span-2">
                    <BlogCard
                        img="/assets/blog4.png"
                        tittle='How to Stay Focused When Working from a Coffee Shop'
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog