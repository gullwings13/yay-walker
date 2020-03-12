import React from 'react'

export default function SideBarLayout(props)
{
    return (
        <div className="absolute  shadow h-auto bg-gray-100  w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-r-lg">
            {props.children}
        </div>
    )
}
