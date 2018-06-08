import React from 'react'
import Link from 'gatsby-link'

import NavBar from './nav-bar'

const Header = ({ siteTitle }) => (
  <div>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <NavBar />
  </div>
)

export default Header
