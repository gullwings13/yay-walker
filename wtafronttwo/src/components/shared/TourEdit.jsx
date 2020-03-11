import React, { Component } from 'react'
import SideBarLayout from './SideBarLayout'
import { Link } from 'react-router-dom'
import TourForm from './TourForm'
import { getTour } from '../../services/apiCalls'

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
        console.log(response.data)
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
        // let response = await editTour(this.state)
        // console.log(response)
        // this.props.history.push(`/tours/${response.data.tour.id}/edit`)
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
                    <Link to={`/tours/${this.state.id}/newpoint`}>Add points of interest</Link> :
                    <Link to={`/tours/${this.state.id}/points/`}>Edit points of interest</Link>}
            </SideBarLayout>
        )
    }
}
