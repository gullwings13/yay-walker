import React from 'react'

export default function SideBarLayout(props)
{
    return (
        <div className="absolute  shadow h-auto bg-gray-100  w-1/1 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-r-lg">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={(e) =>
                {
                    e.preventDefault()
                    props.history.push(`/`)
                }}>X</button>
            {props.children}
        </div>
    )
}
