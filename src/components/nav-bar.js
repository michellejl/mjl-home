import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const NavList = styled('ul')`
  display: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  background: white;
  width: 100%;
  @media (min-width: 770px) {
    position: initial;
    display: flexbox;
    justify-content: space-between;
    width: 80%;
  }
  li {
    font-size: 18px;
    text-align: center;
    a {
      text-decoration: none;
    }
  }
`

const Nav = styled('nav')`
  .icon {
    cursor: pointer;
    margin: 0 45%;
    width: 10%;
  }
  @media (min-width: 770px) {
  display: flexbox;
  justify-content: space-between;
    .icon {
      width: 0;
      height: 0;
    }
  }
`

function handleMenuClick() {
 alert('navigation toggled')
}

const NavBar = () => (
  <Nav>
    <FontAwesomeIcon className='icon' icon={['fal', 'bars']} onClick={handleMenuClick}/>
    <NavList className='navList'>
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
  </Nav>
)

export default NavBar
