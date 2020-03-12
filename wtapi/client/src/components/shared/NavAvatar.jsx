import React from 'react'
import { getUser, isLoggedIn, logout } from "../../services/auth"
import { Link } from 'react-router-dom'

const NavAvatar = props =>
{
    return (
        <React.Fragment>
            {isLoggedIn() ? (
                <React.Fragment>
                    <Link to="/profile">
                        <div className="flex items-center">

                            <img style={{
                                width: "50px", height: "50px"
                            }}
                                src={getUser().avatarUrl} alt="avatar" />
                            <div>
                                {getUser().name}
                            </div>

                        </div>
                    </Link>
                    <div>
                        <Link to="/newtour">New Tour</Link>
                    </div>
                    <a href="/" onClick={event =>
                    {
                        event.preventDefault()
                        logout(() => props.history.push(`/`))
                    }}>
                        Logout
                    </a>
                </React.Fragment>) : (
                    <React.Fragment>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </React.Fragment>
                )}
        </React.Fragment>
    )
}

export default NavAvatar
