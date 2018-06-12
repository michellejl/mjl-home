import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import UserCard from '../components/user-card'

const SideBar = styled('aside')`
  display: none;
  @media (min-width: 1000px) {
    display: block;
  }
`

const IndexPage = () => (
  <div>
    <SideBar>
      <UserCard />
    </SideBar>
  </div>
)

export default IndexPage
