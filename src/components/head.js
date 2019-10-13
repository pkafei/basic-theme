import React from "react"
import { Helmet } from "react-helmet"


const Head = ({  }) => {

  return (
    <Helmet>
        <html lang="en" />
        <meta name="docsearch:version" content="2.0" />
        <meta
            name="viewport"
            content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
    </Helmet>
  )
}

export default Head
