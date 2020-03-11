import React, { Component } from 'react'
import PointForm from './PointForm'

export default class PointNew extends Component
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

    handleSubmit = async (event) =>
    {
        event.preventDefault()
        // let response = await editTour(this.state)
        // console.log(response)
        // this.props.history.push(`/tours/${response.data.tour.id}/edit`)
    }

    render()
    {
        return (
            <div>
                <SideBarLayout>
                    <PointForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        formButtonText={"Submit Tour Changes"}
                    />
                    <Link to="">Submit Point</Link>
                </SideBarLayout>

            </div >
        )
    }
}
