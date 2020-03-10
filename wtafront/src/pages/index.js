import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import TourList from "../components/tourList"


class IndexPage extends React.Component
{
  // state = {
  //   currentUser: null
  // }

  // componentDidMount()
  // {
  //   this.setState({
  //     currentUser: isLoggedIn() ? getUser().name : "you are not logged in"
  //   })
  // }

  render()
  {
    return (
      <Layout>
        <SEO title="Home" />
        {/* <h1>Hello {isLoggedIn() ? getUser().name : "you are not logged in"}!</h1> */}
        {/* <p>
          {isLoggedIn() ? (
            <>
              You are logged in, so check your{" "}
              <Link to="/app/profile">profile</Link>
            </>
          ) : (
              <>
                You should <Link to="/login">log in</Link> to see restricted
                content
        </>
            )}
        </p> */}
        {/* <p>Welcome to Yay!Walk</p> */}
        <TourList/>
        {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
        {/* <div>
          <Image />
        </div> */}
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </Layout>
    )
  }
}

export default IndexPage
