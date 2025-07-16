import React from 'react'

interface TagLineProps {
    children: React.ReactNode
}

const TagLine = (proops: TagLineProps) => {
    const { children } = proops
    return (
        <div className="p-[1px] bg-gr7095  rounded-full w-fit">
            <div className="bg-white px-[24px] py-[14px] rounded-full leading-none">
                <span className="bg-gr7095 bg-clip-text text-transparent leading-none">
                    {children}
                </span>
            </div>
        </div>


    )
}

export default TagLine