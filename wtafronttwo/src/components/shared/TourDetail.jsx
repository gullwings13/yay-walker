import React, { Component } from 'react'

export default class TourDetail extends Component
{

    displayDetails = () =>
        (
            <React.Fragment>
                <div>
                    {this.props.displayImage && <img className=" rounded-tr-lg" src={this.props.tour.img_url} />}
                </div>
                <div>
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
