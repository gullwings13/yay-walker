import React, { Component } from 'react'
import SideBarLayout from './SideBarLayout'
import TourDetail from './TourDetail'
import { getTour } from '../../services/apiCalls'
import { getLoggedInUser } from '../../services/auth'

export default class TourDisplay extends Component
{

    state = {
        tour: null,
        owner: false
    }

    componentDidMount()
    {
        this.getTour()
    }

    getTour = async () =>
    {
        let response = await getTour(this.props.match.params.id)
        let owner = getLoggedInUser().id == response.data.user_id
        this.setState({
            tour: response.data,
            owner: owner
        })
    }


    render()
    {
        return (
            <SideBarLayout {...this.props}>
                <TourDetail {...this.props} tour={this.state.tour} displayImage={false} displayEdit={this.state.owner} />
            </SideBarLayout>
        )
    }
}
