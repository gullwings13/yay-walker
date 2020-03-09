import React from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import { getUser, isLoggedIn, logout } from "../services/auth"

const NavBar = ({ siteTitle }) =>
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
            <nav>
                <div>
                    <h1>
                        <Link to="/">
                            {siteTitle}
                        </Link>
                    </h1>
                </div>
                <Link to="/">Home</Link>
                <Link to="/app/profile">Profile</Link>
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

NavBar.propTypes = {
    siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
    siteTitle: ``,
}

export default NavBar