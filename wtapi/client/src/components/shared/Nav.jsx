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
            <div className="flex items-center ml-3 font-sans text-gray-600 font-semibold">
                <div className="w-1/3">
                    <Link to="/">
                        <h1 className="font-serif text-gray-200 text-4xl hover:text-teal-400 hover:underline">Yay!Walker</h1>
                    </Link>
                    <h2 className="">User submitted walking tours</h2>
                </div>
                <div className={
                    (props.match.path !== "/login" ||
                        props.match.path !== "/signup") ?
                        "flex w-2/3 justify-end items-center" :
                        "flex w-2/3 justify-end items-center"}>
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
