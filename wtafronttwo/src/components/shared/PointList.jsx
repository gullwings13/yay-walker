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
                    <div key={index}>
                        <Link to={`/tours/${this.props.tourId}/points/${point.id}/edit`}>Edit Point {index}</Link>
                    </div>
                ))}
            </div>
        )
    }
}
