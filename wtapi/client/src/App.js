import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './components/routes/Home'
import Layout from './components/shared/Layout'
import "./css/tailwinds.css"
import Tour from './components/routes/Tour'
import NewTourMap from './components/routes/NewTourMap'



class App extends React.Component
{

  render()
  {
    return (
      <div className="bg-gray-200 font-sans text-gray-800">
        <Layout {...this.props}>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/login" render={(props) => <Home {...props} />} />
            <Route exact path="/signup" render={(props) => <Home {...props} />} />
            <Route exact path="/users/:id" render={(props) => (<Home {...props} />)} />
            <Route exact path="/profile" render={(props) => <Home {...props} />} />
            <Route exact path="/tours/:id" render={(props) => <Tour {...props} />} />
            <Route exact path="/newtour/" component={NewTourMap} />
            <Route exact path="/tours/:id/edit" component={NewTourMap} />
            <Route exact path="/tours/:id/newpoint" component={NewTourMap} />
            <Route exact path="/tours/:id/editpoints" component={NewTourMap} />
          </Switch>
        </Layout>
      </div>
    )
  }
}

export default withRouter(App)
