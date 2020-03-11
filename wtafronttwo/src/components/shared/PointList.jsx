import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PointList extends Component
{
    render()
    {
        return (
            <div>
                Points of interest
                {this.props.points.map((point, index) => (
                    <div>
                        <Link key={index} to={`/tours/${this.props.tourId}/points/${point.id}/edit`}>Point{index}</Link>
                    </div>
                ))}
            </div>
        )
    }
}
