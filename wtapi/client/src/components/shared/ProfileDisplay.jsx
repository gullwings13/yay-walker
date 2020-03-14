import React, { Component } from 'react'
import { getUser, getProfile } from '../../services/apiCalls'
import { getLoggedInUser } from '../../services/auth'

export default class ProfileDisplay extends Component
{

    state = {
        profile: null
    }

    async componentDidMount()
    {
        let response
        if (this.props.match.path === "/profile")
        {
            response = await getProfile()
        }
        else
        {
            response = await getUser(this.props.match.params.id)
        }
        this.setState({
            profile: response.data
        })
    }

    displayProfile = () =>
        (
            <div>
                <img src={this.state.profile.avatar_url} alt="Avatar" />
                <div>{this.state.profile.name}</div>
                <div>{this.state.profile.bio}</div>
            </div>
        )

    render()
    {
        return (
            <div className="absolute h-64 bg-gray-300 w-1/4 rounded-r-lg">
                {this.state.profile && this.displayProfile()}
            </div>
        )
    }
}