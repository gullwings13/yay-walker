import React, { Component } from 'react'
import { getTour } from '../../services/apiCalls'
export default class Tour extends Component
{
    state = {
        tour: null
    }

    componentDidMount()
    {
        this.getTour()
    }

    getTour = async () =>
    {
        let response = await getTour(this.props.match.params.id)
        this.setState({
            tour: response.data
        })
    }

    tourDetails = () =>
        (
            <React.Fragment>
                <img className=" bg-cover content-center h-screen object-cover object-center" src={this.state.tour.img_url} />
            </React.Fragment>
        )

    render()
    {
        return (
            <div>
                {this.state.tour && this.tourDetails()}
            </div >
        )
    }
}
