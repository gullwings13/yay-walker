import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PointList extends Component
{
    render()
    {
        return (
            <div className="border-black border">
                Points of interest
                <div className=" h-16 overflow-auto border-black border">
                    {this.props.points.map((point, index) => (
                        <div key={index}>
                            <Link to={`/tours/${this.props.tourId}/points/${point.id}/edit`}
                                onClick={() => { this.props.setCurrentPointId(point.id) }}
                            >Edit Point {index}</Link>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
