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
@media (min-width: 700px) {
  font-size: 1em;
}
`

const Copy = styled('div')`
  margin: 10px 0 5px;
  text-align: center;
  flex-basis: 1;
  font-size: 1.1em;
`

const FlexContainer = styled('div')`
  @media (min-width: 500px) {
  display: flex;
  justify-content: space-between;
  }
`

const Footer = ({ siteTitle }) => (
  <SiteFooter>
    <NavBar />
    <Copy>
      &copy; Michelle JL 2018
    </Copy>
    <FlexContainer>
      <Social />
      <ExtraLinks />
    </FlexContainer>
  </SiteFooter>
)

export default Footer
