import React, { Component } from 'react'
import { newTour } from '../../services/apiCalls'

export default class NewTour extends Component
{

    state = {
        name: ``,
        description: ``,
        img_url: ``
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
        await newTour(this.state)
        callback()
    }

    render()
    {
        return (
            <div className="absolute h-64 bg-gray-300 w-1/4 rounded-r-lg">
                <div>New Tour</div>
                <form method="post" onSubmit={event => { this.handleSubmit(event, () => { this.props.history.push("/") }) }}>
                    <label>
                        Name
                            <input type="text" name="name" onChange={this.handleUpdate} />
                    </label>
                    <label>
                        Description
                            <input type="text" name="description" onChange={this.handleUpdate} />
                    </label>
                    <label>
                        Image_URL
                            <input type="text" name="img_url" onChange={this.handleUpdate} />
                    </label>
                    <input type="submit" value="Submit New Tour" />
                </form>

            </div>
        )
    }
}
