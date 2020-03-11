import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/routes/Home'
import Layout from './components/shared/Layout'
import "./css/tailwinds.css"
import Tour from './components/routes/Tour'

class App extends React.Component
{
  // constructor(props)
  // {
  //   super(props)
  //   this.state = {
  //     email: ``,
  //     password: ``,
  //   }
  // }



  render()
  {
    return (
      <div className="bg-gray-800">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />} />
              <Route exact path="/login" render={(props) => <Home {...props} />} />
              <Route exact path="/signup" render={(props) => <Home {...props} />} />
              <Route exact path="/profile" render={(props) => <Home {...props} />} />
              <Route exact path="/tours/:id" render={(props) => <Tour {...props} />} />
              {/* <Route exact path="/user/:id" component={Home} /> */}
              <Route exact path="/newtour/" component={Home} />
              {/* <Route exact path="/tour/:id" component={Home} /> */}
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
