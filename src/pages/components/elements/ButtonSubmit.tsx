import Image from 'next/image'
import React from 'react'

const ButtonSubmit = () => {
    return (
        <>
            <button type="submit" className="flex gap-3 px-[28px] py-[16px] rounded-[8px] w-fit text-[16px] text-white focus:outline-none transition-transform duration-500 ease-in-out bg-gr6080 text-p900 hover:bg-gr9060">
                Submit
                <Image className='w-[20px]' src="/assets/submit.svg" alt="logo" width={1000} height={100} />
            </button>
        </>
    )
}

export default ButtonSubmit