/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

const FallText = (props: any) => {
    const { children } = props

    return (
        <div className='px-[24px] py-[16px] rounded-full border-[1px] border-p950 w-fit hover:font-medium text-p800 hover:text-p950'>
            <p>{children}</p>
        </div>
    )
}

export default FallText