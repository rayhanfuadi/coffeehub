import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const itemMenu = (props: any) => {
    const { children } = props

    return (
        <>
            <a
                className='text-[16px] text-p800 cursor-pointer hover:underline hover:underline-offset-[8px] hover:text-p950 '
            >{children}</a>
        </>
    )
}

export default itemMenu