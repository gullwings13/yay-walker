import React from "react"
import { handleSignup, isLoggedIn } from "../../services/auth"
import { Redirect } from "react-router-dom"

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
                    <form method="post" onSubmit={event => { this.handleSubmit(event, () => { this.props.history.push("/") }) }}>
                        <label>
                            Email
                            <input type="text" name="email" onChange={this.handleUpdate} />
                        </label>
                        <label>
                            Password
                            <input type="password" name="password" onChange={this.handleUpdate} />
                        </label>
                        <input type="submit" value="SignUp" />
                    </form>
                </React.Fragment>
            )
        }
    }
}

export default NavSignup
