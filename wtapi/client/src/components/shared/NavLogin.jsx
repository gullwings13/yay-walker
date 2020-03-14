import React from "react"
import { handleLogin, isLoggedIn } from "../../services/auth"
import { Redirect } from "react-router-dom"
import NavForm from "./NavForm"

class NavLogin extends React.Component
{
    // constructor(props)
    // {
    //     super(props)
    // }

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

    handleSubmit = async (event) =>
    {
        event.preventDefault()
        await handleLogin(this.state, () => { this.props.history.push("/") })
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
                    <NavForm handleSubmit={this.handleSubmit} handleUpdate={this.handleUpdate} submitButtonText="Login" />
                </React.Fragment>
            )
        }
    }
}
export default NavLogin