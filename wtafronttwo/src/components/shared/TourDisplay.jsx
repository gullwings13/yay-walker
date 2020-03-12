import React, { Component } from 'react'
import SideBarLayout from './SideBarLayout'
import TourDetail from './TourDetail'
import { getTour } from '../../services/apiCalls'
import { getUser } from '../../services/auth'

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
        console.log(getUser().id)
        console.log(response.data.user_id)
        let owner = getUser().id == response.data.user_id
        console.log(response.data)
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
