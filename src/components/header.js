import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import NavBar from './nav-bar'

const Logo = styled('h1')`
text-align: center;
margin: 0 0 5px;
padding: 0;
border-bottom: 2px solid #444;
@media (min-width: 770px) {
  text-align: left;
}
a {
  text-decoration: none;
  color: #444;
}
`

const Header = ({ siteTitle }) => (
  <div>
    <div>
      <Logo>
        <Link to="/">
          {siteTitle}
        </Link>
      </Logo>
    </div>
    <NavBar />
  </div>
)

export default Header
