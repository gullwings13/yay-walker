import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import TourNew from './TourNew'
import Profile from './Profile'
import TourDetail from './TourDetail'
import TourEdit from './TourEdit'

export default class SiderBar extends Component
{
    render()
    {
        return (
            <React.Fragment>
                <Switch></Switch>
                <Route exact path="/newtour" render={(props) => (<TourNew {...props} />)} />
                <Route exact path="/profile" render={(props) => (<Profile {...props} />)} />
                <Route exact path="/tours/:id" render={(props) => (<TourDetail {...props} />)} />
                <Route exact path="/tours/:id/edit" render={(props) => (<TourEdit {...props} />)} />
            </React.Fragment>
        )
    }
}
