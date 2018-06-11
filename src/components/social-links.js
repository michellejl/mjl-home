import React from 'react'
import styled from 'react-emotion'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Title = styled('p')`
  font-size: 1.1em;
  margin: 5px 0 0;
  font-weight: bold;
`

const SocialList = styled('ul')`
margin: 0;
padding: 0;
list-style-type: none;
  .icon {
    margin-right: 5px;
    width: 12px;
    height: 12px;
  }
`

const FlexItem = styled('div')`
  @media (min-width: 500px) {
    text-align: left;
  }
`

const Social =  () => (
  <FlexItem>
    <Title>Around the Interwebs</Title>
    <SocialList>
      <li>
        <a href="https://github.com/michellejl" target="_blank">
          <FontAwesomeIcon className='icon' icon={['fab', 'github']} />
          github: @michellejl
        </a>
      </li>
      <li>
      <a href="https://twitter.com/michellejlevine" target="_blank">
          <FontAwesomeIcon className='icon' icon={['fab', 'twitter']} />
          twitter: @michellejlevine
        </a>
      </li>
      <li>
      <a href="https://instagram.com/spacecadetmj" target="_blank">
          <FontAwesomeIcon className='icon' icon={['fab', 'instagram']} />
          instagram: @spacecadetmj
        </a>
      </li>
      <li>
      <a href="https://linkedin.com/in/michellejl" target="_blank">
          <FontAwesomeIcon className='icon' icon={['fab', 'linkedin']} />
          linkedin: /michellejl
        </a>
      </li>
    </SocialList>
  </FlexItem>
)

export default Social
