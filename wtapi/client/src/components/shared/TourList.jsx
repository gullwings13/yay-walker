import React from 'react'
import { getAllTours } from '../../services/apiCalls'
import TourCardBig from './TourCardBig'

class TourList extends React.Component
{
    state = {
        tours: []
    }

    componentDidMount()
    {
        this.getTours()
    }

    getTours = async () =>
    {
        let response = await getAllTours()
        this.setState({
            tours: response.data
        })
    }

    mapTours = () =>
    {
        return (
            <div className="flex flex-wrap w-full justify-center">
                {this.state.tours.map((tour, index) => (
                    <TourCardBig tour={tour} key={index} />
                ))}
            </div>
        )
    }

    render()
    {
        return (
            <div>
                {this.mapTours()}
            </div>
        )
    }
}

export default TourList
