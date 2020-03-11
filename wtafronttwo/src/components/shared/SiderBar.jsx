import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NewTour from './NewTour'
import Profile from './Profile'
import TourDetail from './TourDetail'

export default class SiderBar extends Component
{
    render()
    {
        return (
            <React.Fragment>
                <Route path="/newtour" render={(props) => (<NewTour {...props} />)} />
                <Route path="/profile" render={(props) => (<Profile {...props} />)} />
                <Route path="/tours/:id" render={(props) => (<TourDetail {...props} />)} />
            </React.Fragment>
        )
    }
}
