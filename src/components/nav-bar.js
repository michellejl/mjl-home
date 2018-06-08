import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

const NavList = styled('ul')`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flexbox;
  justify-content: flex-end;
  li {
    padding: 0 0 0 40px;
    font-size: 18px;
    a {
      text-decoration: none;
      :hover {
        font-weight: bold;
      }
    }
  }
`

const NavBar = () => (
  <nav>
    <NavList>
      <li>
        <Link to='/about'>/about</Link>
      </li>
      <li>
        <Link to='/code'>/coding</Link>
      </li>
      <li>
        <Link to='/blog'>/tech blog</Link>
      </li>
      <li>
        <Link to='/talk'>/speaking</Link>
      </li>
      <li>
        <Link to='/photo'>/photography</Link>
      </li>
    </NavList>
  </nav>
)

export default NavBar
