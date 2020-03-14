import React, { Component } from 'react'
import PointForm from './PointForm'
import SideBarLayout from './SideBarLayout'
import PointList from './PointList'
import { getTour, newPoint } from '../../services/apiCalls'
import TourDetail from './TourDetail'

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
        tour: null
    }

    handleChange = event =>
    {
        this.setState({
            newpoint: {
                ...this.state.newpoint,
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
        this.setState({
            points: response.data.points,
            tour: response.data
        })
    }

    handleSubmit = async (event) =>
    {
        event.preventDefault()
        let tourId = this.props.match.params.id
        let response = await newPoint(tourId, this.state.newpoint)
        this.getTourAndPoints()
    }

    render()
    {
        return (
            <div>
                <SideBarLayout>
                    <TourDetail tour={this.state.tour} displayImage={true} />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Save tour and points</button>
                    <PointList points={this.state.points} tourId={this.state.tour && this.state.tour.id} />
                    <PointForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        formData={this.state.newpoint}
                        formType="New Point"
                        formButtonText={"Save point"}
                    />
                </SideBarLayout>
            </div >
        )
    }
}
