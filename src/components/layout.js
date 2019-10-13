import React from "react"
import PropTypes from "prop-types"

import Body from "./body"
import Head from "./head"
import Header from "./header"


const Layout = ({ }) => {
    return (
        <>  
            <Head />
            <Header />
            <Body />
        </>

    )
}

export default Layout