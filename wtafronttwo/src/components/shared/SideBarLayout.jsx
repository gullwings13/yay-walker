import React from 'react'

export default function SideBarLayout(props)
{
    return (
        <div className="absolute h-64 bg-gray-300 w-1/4 rounded-r-lg">
            {props.children}
        </div>
    )
}
