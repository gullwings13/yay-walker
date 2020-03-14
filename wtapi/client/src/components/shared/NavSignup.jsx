import React from "react"
import { handleSignup, isLoggedIn } from "../../services/auth"
import { Redirect } from "react-router-dom"
import NavForm from "./NavForm"

class NavSignup extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    state = {
        email: ``,
        password: ``,
    }

    handleUpdate = event =>
    {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = async (event, callback) =>
    {
        event.preventDefault()
        await handleSignup(this.state, callback)
    }

    render()
    {
        if (isLoggedIn())
        {
            return <Redirect to="/" />
        }
        else
        {
            return (
                <React.Fragment>
                    <NavForm handleSubmit={this.handleSubmit} handleUpdate={this.handleUpdate} submitButtonText="Sign up" />
                </React.Fragment>
            )
        }
    }
}

export default NavSignup
