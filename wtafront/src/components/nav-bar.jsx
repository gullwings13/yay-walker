import React from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import { getUser, isLoggedIn, logout } from "../services/auth"

const NavBar = ({ siteTitle }) =>
{
    const content = { message: "", login: true }
    // if (isLoggedIn())
    // {
    //     content.message = `Hello, ${getUser().name}`
    // }
    // else
    // {
    //     content.message = "Hello, you are not logged in"
    // }
    return (
        <div>
            <nav>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h1>
                        <Link to="/">
                            {siteTitle}
                        </Link>
                    </h1>
                    {isLoggedIn() ? (
                        <>
                            <div>
                                <img style={{
                                    width: "50px", height: "50px"
                                }}
                                    src={getUser().avatarUrl} alt="avatar" />
                            </div>
                            <div>
                                {getUser().name}
                            </div>
                            <div>
                                <Link to="/app/profile">Profile</Link>
                            </div>
                            <a href="/" onClick={event =>
                            {
                                event.preventDefault()
                                logout(() => navigate(`/`))
                            }}>
                                Logout
                    </a>
                        </>
                    ) : (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Signup</Link>
                            </>
                        )}
                </div>
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