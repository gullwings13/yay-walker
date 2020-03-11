import React, { Component } from 'react'
import { newTour } from '../../services/apiCalls'
import TourForm from './TourForm'
import SideBarLayout from './SideBarLayout'

export default class TourNew extends Component
{

    state = {
        name: ``,
        description: ``,
        img_url: ``
    }

    handleChange = event =>
    {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = async (event) =>
    {
        event.preventDefault()
        let response = await newTour(this.state)
        console.log(response)
        this.props.history.push(`/tours/${response.data.tour.id}/edit`)
    }

    render()
    {
        return (
            <SideBarLayout>
                <TourForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    formData={this.state}
                    formType={"New Tour"}
                    formButtonText={"Submit New Tour"}
                />
            </SideBarLayout>
        )
    }
}
