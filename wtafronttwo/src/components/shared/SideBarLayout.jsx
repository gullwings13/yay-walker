import React from 'react'

export default function SideBarLayout(props)
{
    return (
        <div className="absolute shadow h-auto bg-gray-100 w-1/4 rounded-r-lg">
            {props.children}
        </div>
    )
}
