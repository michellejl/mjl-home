import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import NavBar from './nav-bar'
import Social from './social-links'
import ExtraLinks from './extra-links'

const SiteFooter = styled('footer')`
border-top: 2px solid #444;
margin: 25px 0 0;
padding: 10px 5px 0;
font-size: 0.8em;
text-align: center;
`

const Copy = styled('div')`
  margin: 10px 0 5px;
  text-align: center;
`

const Footer = ({ siteTitle }) => (
  <SiteFooter>
    <NavBar />
    <Copy>
      &copy; Michelle JL 2018
    </Copy>
    <Social />
    <ExtraLinks />
  </SiteFooter>
)

export default Footer
