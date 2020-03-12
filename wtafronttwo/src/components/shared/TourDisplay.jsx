import React, { Component } from 'react'
import SideBarLayout from './SideBarLayout'
import TourDetail from './TourDetail'
import { getTour } from '../../services/apiCalls'

export default class TourDisplay extends Component
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
        console.log(response.data)
        this.setState({
            tour: response.data
        })
    }


    render()
    {
        return (
            <SideBarLayout>
                <TourDetail tour={this.state.tour} displayImage={false}/>
            </SideBarLayout>
        )
    }
}
