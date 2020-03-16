import React, { Component } from 'react'
import SideBarLayout from './SideBarLayout'
import TourForm from './TourForm'
import { getTour, updateTour } from '../../services/apiCalls'

export default class TourEdit extends Component
{
    state = {
        name: ``,
        description: ``,
        img_url: ``,
        id: ``,
        points: []
    }

    componentDidMount()
    {
        this.getTour()
    }

    getTour = async () =>
    {
        let response = await getTour(this.props.match.params.id)
        const tour = response.data
        this.setState({
            name: tour.name,
            description: tour.description,
            img_url: tour.img_url,
            id: tour.id,
            points: tour.points
        })
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
        let tourId = this.props.match.params.id
        await updateTour(tourId, this.state)
        this.props.history.push(`/tours/${tourId}`)
    }

    render()
    {
        return (
            <SideBarLayout>
                <TourForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    formData={this.state}
                    formType={"Edit Tour"}
                    formButtonText={"Submit Tour Changes"}
                />
                {this.state.points.length < 1 ?
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) =>
                        {
                            e.preventDefault()
                            this.props.history.push(`/tours/${this.state.id}/newpoint`)
                        }}>Add points of interest</button> :
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) =>
                        {
                            e.preventDefault()
                            this.props.history.push(`/tours/${this.state.id}/points/${this.state.points[0].id}/edit`)
                        }}>
                        Edit points of interest</button>}
            </SideBarLayout>
        )
    }
}