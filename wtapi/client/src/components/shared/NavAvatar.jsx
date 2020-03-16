import React from 'react'
import { getLoggedInUser, isLoggedIn, logout } from "../../services/auth"
import { Link } from 'react-router-dom'

const NavAvatar = props =>
{
    return (
        <React.Fragment>
            {isLoggedIn() ? (
                <React.Fragment>
                    <Link className="hover:text-teal-400 hover:underline hover:bg-gray-700 bg-red-500 rounded-full" to="/profile">
                        <div className="flex items-center">

                            <img className="bg-red-600 rounded-full w-16"
                                src={getLoggedInUser().avatarUrl} alt="avatar" />
                            <div>
                                {getLoggedInUser().name}
                            </div>

                        </div>
                    </Link>
                    <div>
                        <Link className="hover:text-purple-400 hover:underline" to="/newtour">New Tour</Link>
                    </div>
                    <Link className="mr-3 hover:text-purple-400 hover:underline" to="/" onClick={event =>
                    {
                        event.preventDefault()
                        logout(() => props.history.push(`/`))
                    }}>
                        Logout
                    </Link>
                </React.Fragment>) : (
                    <React.Fragment>
                        <Link className="mr-3 hover:text-purple-400 hover:underline" to="/login">Login</Link>
                        <Link className="mr-3 hover:text-purple-400 hover:underline" to="/signup">Signup</Link>
                    </React.Fragment>
                )}
        </React.Fragment>
    )
}

export default NavAvatar
