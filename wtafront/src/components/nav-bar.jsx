import React from "react"
import { Link, navigate } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"

export default () =>
{
    const content = { message: "", login: true }
    if (isLoggedIn())
    {
        content.message = `Hello, ${getUser().name}`
    }
    else
    {
        content.message = "Hello, you are not logged in"
    }
    return (
        <div>
            <span>{content.message}</span>
            <nav>
                <Link to="/">Home</Link>
                {` `}
                <Link to="/profile">Profile</Link>
                {` `}
                {isLoggedIn() ? (
                    <a href="/" onClick={event =>
                    {
                        event.preventDefault()
                        logout(() => navigate(`/`))
                    }}>
                        Logout
                    </a>
                ) : null}
            </nav>
        </div>
    )
}