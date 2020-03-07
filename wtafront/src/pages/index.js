import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../services/auth"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
    <p>
      {isLoggedIn() ? (
        <>
          You are logged in, so check your{" "}
          <Link to="/profile">profile</Link>
        </>
      ) : (
          <>
            You should <Link to="/login">log in</Link> to see restricted
            content
        </>
        )}
    </p>
    <p>Welcome to Yay!Walk</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
