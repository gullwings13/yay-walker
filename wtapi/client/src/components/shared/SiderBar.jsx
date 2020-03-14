import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import TourNew from './TourNew'
import Profile from './ProfileDisplay'
import TourEdit from './TourEdit'
import PointNew from './PointNew'
import PointEdit from './PointEdit'
import TourDisplay from './TourDisplay'

export default class SiderBar extends Component
{
    render()
    {
        return (
            <React.Fragment>
                <Switch></Switch>
                <Route exact path="/newtour" render={(props) => (<TourNew {...props} />)} />
                <Route exact path="/profile" render={(props) => (<Profile {...props} />)} />
                <Route exact path="/users/:id" render={(props) => (<Profile {...props} />)} />
                <Route exact path="/tours/:id" render={(props) => (<TourDisplay {...props} />)} />
                <Route exact path="/tours/:id/edit" render={(props) => (<TourEdit {...props} />)} />
                <Route exact path="/tours/:id/newpoint" render={(props) => (<PointNew {...props} />)} />
                <Route exact path="/tours/:id/points/:pointId" render={(props) => (<PointNew {...props} />)} />
                <Route exact path="/tours/:id/points/:pointId/edit" render={(props) => (<PointEdit {...props} />)} />
            </React.Fragment>

        )
    }
}
