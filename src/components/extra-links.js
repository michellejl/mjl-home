import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Title = styled('p')`
  font-size: 01.1em;
  margin: 5px 0 0;
  font-weight: bold;
`

const LinksList = styled('ul')`
  list-style-type: none;
  margin: 0;
  padding: 0;
  .icon {
    margin-right: 5px;
    width: 12px;
    height: 12px;
  }
`
const FlexItem = styled('div')`
  @media (min-width: 500px) {
    text-align: right;
  }
`

const ExtraLinks =  () => (
  <FlexItem>
    <Title>More Links</Title>
    <LinksList>
      <li>
        <Link to='/uses'>
        <FontAwesomeIcon className='icon' icon={['fal', 'toolbox']} />
          /uses
        </Link>
      </li>
      <li>
        <Link to='/now'>
          <FontAwesomeIcon className='icon' icon={['fal', 'clock']} />
          /now
        </Link>
      </li>
      <li>
        <Link to='/resume'>
          <FontAwesomeIcon className='icon' icon={['fal', 'file-alt']} />
          /resume
        </Link>
      </li>
      <li>
        <Link to='/community'>
          <FontAwesomeIcon className='icon' icon={['fal', 'users']} />       
          /community
        </Link>
      </li>
    </LinksList>
  </FlexItem>
)

export default ExtraLinks
