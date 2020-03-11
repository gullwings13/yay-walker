import React, { Component } from 'react'
import PointForm from './PointForm'
import SideBarLayout from './SideBarLayout'
import PointList from './PointList'
import { getTour, newPoint } from '../../services/apiCalls'

export default class PointNew extends Component
{
    state = {
        newpoint: {
            lat: ``,
            long: ``,
            text: ``,
            picture_url: ``
        },
        points: [],
        tourId: null
    }

    handleChange = event =>
    {
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            newpoint: {
                [event.target.name]: event.target.value,
            }
        })
    }

    componentDidMount()
    {
        this.getTourAndPoints()
    }

    getTourAndPoints = async () =>
    {
        let tourId = this.props.match.params.id
        let response = await getTour(tourId)
        console.log(response)
        this.setState({
            points: response.data.points,
            tourId: response.data.id
        })
    }

    handleSubmit = async (event) =>
    {
        event.preventDefault()
        let tourId = this.props.match.params.id
        console.log(this.state)
        let response = await newPoint(tourId, this.state.newpoint)
        console.log(response)
        this.getTourAndPoints()
    }

    render()
    {
        return (
            <div>
                <SideBarLayout>
                    <PointList points={this.state.points} tourId={this.state.tourId} />
                    <PointForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        formData={this.state.newpoint}
                        formType="New Point"
                        formButtonText={"Submit"}
                    />
                </SideBarLayout>
            </div >
        )
    }
}
