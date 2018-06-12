import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const NavList = styled('ul')`
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.49);
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: absolute;
  background: white;
  width: 100%;
  &.open {
    display: block;
  }
  &.close {
    display: none;
  }
  @media (min-width: 770px) {
    box-shadow: initial;
    position: initial;
    display: flexbox !important;
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

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      mobile: false,
    }
  }
  render() {
    let mobileClass = 'close'
    this.state.mobile ? mobileClass = 'open' : mobileClass = 'close'
    return (
      <Nav>
    <FontAwesomeIcon className='icon' icon={['fal', 'bars']} onClick={() => this.setState(this.state.mobile ? {mobile: false} : {mobile: true}) }/>
    <NavList className={`navList ${mobileClass}`}>
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
  }
}

export default NavBar
