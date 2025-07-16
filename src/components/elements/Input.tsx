import React from 'react'

interface InputProps {
    placeholder?: string
}

const Input = (props: InputProps) => {
    const { placeholder } = props
    return (
        <>
            <input type="text" placeholder={placeholder} className='px-[24px] py-[20px] bg-transparent rounded-[8px] border border-p600 leading-none w-full focus:outline-none placeholder:text-p600 focus:border-p950' />
        </>
    )
}

export default Input