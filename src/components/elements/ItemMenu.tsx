import React from 'react'

interface itemMenuProps {
    children: React.ReactNode
    onClick?: () => void
}

const itemMenu = (props: itemMenuProps) => {
    const { children, onClick } = props

    return (
        <>
            <a
                className='text-[16px] text-p800 cursor-pointer hover:underline hover:underline-offset-[8px] hover:text-p950 '
                onClick={onClick}
            >{children}</a>
        </>
    )
}

export default itemMenu