import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "./app/profile"
import Login from "./login"
import PrivateRoute from "../components/privateRoute"

const App = () => (
    <Layout>
        <Router>
            <PrivateRoute path="/app/profile" component={Profile} />
            <Login path="/login" />
        </Router>
    </Layout>
)
export default App