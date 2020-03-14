import React from 'react'

export default function NavForm(props)
{
    return (
        <form className="flex items-end" method="post" onSubmit={props.handleSubmit}>
            <label>
                Email
                <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    placeholder="Email"
                    type="text" name="email" onChange={props.handleUpdate} />
            </label>
            <label className=" ml-3 mr-3">
                Password
                            <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    placeholder="Password"
                    type="password" name="password" onChange={props.handleUpdate} />
            </label>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10 rounded mr-3" type="submit">{props.submitButtonText}</button>
        </form>
    )
}