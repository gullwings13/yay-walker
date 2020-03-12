import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import NavLoggedOut from './NavAvatar'
import NavSignup from './NavSignup'
import NavLogin from './NavLogin'
import NavAvatar from './NavAvatar'

const Nav = (props) =>
{
    return (
        <nav>
            {/* <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}> */}
            <div className="flex items-center justify-evenly">
                <div className="w-1/4">
                    <Link to="/">
                        <h1 className="text-4xl">Yay!Walker</h1>
                    </Link>
                </div>
                <div className="flex w-3/4 justify-evenly items-center">
                    <Switch>
                        <Route path="/login" render={(props) => (<NavLogin {...props} />)} />
                        <Route path="/signup" render={(props) => (<NavSignup {...props} />)} />
                        <Route path="/" render={(props) => (<NavAvatar {...props} />)} />
                    </Switch>
                </div>
            </div>
        </nav>
    )
}

export default Nav
