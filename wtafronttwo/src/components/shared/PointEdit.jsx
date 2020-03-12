import React, { Component } from 'react'
import PointForm from './PointForm'
import SideBarLayout from './SideBarLayout'
import PointList from './PointList'
import { getTour, getPoint, updatePoint } from '../../services/apiCalls'
import TourDetail from './TourDetail'

export default class PointEdit extends Component
{
    state = {
        editpoint: {
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
                [event.target.name]: event.target.value,
            }
        })
    }

    componentDidMount()
    {
        this.getTourAndPoints()
        this.unlisten = this.props.history.listen(() =>
        {
            this.getTourAndPoints()
        })
    }

    componentWillUnmount()
    {
        this.unlisten()
    }

    getTourAndPoints = async () =>
    {
        let tourId = this.props.match.params.id
        let pointId = this.props.match.params.pointId
        let response = await getTour(tourId)
        let pointResponse = await getPoint(pointId)
        console.log(response)
        console.log(pointResponse)
        this.setState({
            editpoint: {
                lat: pointResponse.data.lat,
                long: pointResponse.data.long,
                text: pointResponse.data.text,
                picture_url: pointResponse.data.picture_url
            },
            points: response.data.points,
            tour: response.data
        })
    }

    handleSubmit = async (event) =>
    {
        event.preventDefault()
        let tourId = this.props.match.params.id
        console.log(this.state)
        let response = await updatePoint(tourId, this.state.newpoint)
        console.log(response)
        this.getTourAndPoints()
    }

    render()
    {
        return (
            <div>
                <SideBarLayout>
                    <TourDetail tour={this.state.tour} displayImage={true} />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) =>
                        {
                            e.preventDefault()
                            this.props.history.push("/")
                        }}>
                        Save tour and points
                        </button>
                    <PointList points={this.state.points} tourId={this.state.tour && this.state.tour.id} />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={(e) =>
                        {
                            e.preventDefault()
                            this.props.history.push(`/tours/${this.state.tour.id}/newpoint`)
                        }}>
                        New Point
                        </button>
                    <PointForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        formData={this.state.editpoint}
                        formType="Edit Point"
                        formButtonText={"Save point"}
                    />
                </SideBarLayout>
            </div >
        )
    }
}
