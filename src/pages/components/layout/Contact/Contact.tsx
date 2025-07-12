/* eslint-disable react/no-children-prop */
import React from 'react'
import TagLine from '../../elements/TagLine'
import Input from '../../elements/Input'
import ButtonSubmit from '../../elements/ButtonSubmit'

const Contact = () => {
    return (
        <div id='contact' className='grid gap-[32px] mb-[280px] scroll-mt-[140px]'>
            <div className="">
                <TagLine children="Contact" />
            </div>

            <div className="grid xl:grid-cols-12 lg:grid-cols-8 gap-5">
                <div className="xl:col-span-5 lg:col-span-3 grid gap-4 place-content-start">
                    <h3 className='text-[52px] font-medium text-p800 leading-[70px]'>Let’s Get in Touch</h3>
                    <p className='text-[16px] text-p950/[0.66]'>Whether you want to book a spot, ask a question, or collaborate with us — we’re here for it. Drop us a message and we’ll get back to you as soon as possible.</p>
                </div>
                <div className="xl:col-span-1 xl:block lg:hidden hidden"></div>
                <div className="xl:col-span-6 lg:col-span-5 grid gap-4">
                    <Input placeholder="Your Name *" />
                    <Input placeholder="Your Email *" />
                    <Input placeholder="Your Subject *" />
                    <Input placeholder="Your Message *" />
                    <div className="flex w-full justify-end">
                        <ButtonSubmit />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact