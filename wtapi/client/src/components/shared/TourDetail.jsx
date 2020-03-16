import React, { Component } from 'react'

export default class TourDetail extends Component
{

    displayDetails = () =>
        (
            <React.Fragment>
                {this.props.displayEdit && <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(e) =>
                    {
                        e.preventDefault()
                        this.props.history.push(`/tours/${this.props.tour.id}/edit`)
                    }}>Edit</button>}

                <div>
                    {this.props.displayImage && <img className=" rounded-tr-lg" src={this.props.tour.img_url} alt="Tour highlight" />}
                </div>

                <div>
                </div>
                <div className="font-serif">
                    {this.props.tour.name}
                </div>
                <div>
                    {this.props.tour.description}
                </div>
            </React.Fragment>
        )


    render()
    {
        return (
            this.props.tour && this.displayDetails()
        )
    }
}
