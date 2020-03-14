import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import SiderBar from './SiderBar'

const Layout = (props) =>
{
    return (
        <React.Fragment>
            <Nav {...props} />
            <div className="flex flex-row">
                <SiderBar />
                <main>
                    {props.children}
                </main>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
