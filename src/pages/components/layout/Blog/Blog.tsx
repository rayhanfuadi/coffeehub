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
        <div id='blog' className="grid gap-[32px] scroll-mt-[140px]">
            <div className="flex justify-between">
                <div className='grid gap-y-4 place-content-start'>
                    <div className="">
                        <TagLine children="Blog" />
                    </div>
                    <h3 className='text-[52px] font-medium text-p800 '>Fresh Thoughts Brewed Daily</h3>
                </div>
                <div className="flex gap-5 items-end">
                    <Image className='w-[40px] rounded-[24px]' src="/assets/leftArrow.svg" alt="logo" width={1000} height={100} />
                    <Image className='w-[40px] rounded-[24px]' src="/assets/rightArrow.svg" alt="logo" width={1000} height={100} />
                </div>
            </div>

            {/* Blog contetn 1 */}
            <div className="grid grid-cols-12 gap-5">
                {blog1.map((item, index) => (
                    <div key={index} className="col-span-3">
                        <BlogCard
                            img={item.img}
                            tittle={item.tittle}
                        />
                    </div>
                ))}

                <div className="col-span-6">
                    <BigBlogCard
                        img='/assets/bigblog1.png'
                        tittle='7 Signs You’ve Found the Right Place to Work Remotely'
                        desc='Not every coffee shop or coworking space fits. These subtle signs show you’ve found a space — like Kopihub — that supports your work and mindset.'
                    />
                </div>
            </div>

            {/* Blog contetn 2 */}
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6">
                    <BigBlogCard
                        img='/assets/bigblog2.png'
                        tittle='Why Coworking Spaces Work Better Than Home Offices'
                        desc='Feeling stuck or lonely working from home? Explore how shared workspaces like Kopihub improve motivation, networking, and work-life balance.'
                    />
                </div>

                {blog2.map((item, index) => (
                    <div key={index} className="col-span-3">
                        <BlogCard
                            img={item.img}
                            tittle={item.tittle}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog