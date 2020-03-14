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
        console.log("profile loaded")
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
                <img className=" bg-red-600 rounded-full w-32" src={this.state.profile.avatar_url} alt="Avatar" />
                <div>@{this.state.profile.name}</div>
                <div>{this.state.profile.bio}</div>
            </div>
        )

    render()
    {
        return (
            <div className="absolute h-64 bg-gray-300 w-1/4 rounded-r-lg">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => (this.props.history.push("/"))}
                >X</button>
                {this.state.profile && this.displayProfile()}
            </div>
        )
    }
}