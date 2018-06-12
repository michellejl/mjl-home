import React from 'react'
import styled from 'react-emotion'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const IconBar = styled('div')`
min-height: 30px;
text-align: center;
display: flex;
justify-content: center;
`

const IconContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    position: relative;
    margin: 0;
    padding: 0;
    &:after {
      content: "";
      width: 38px;
      height: 38px;
      border: solid 2px white;
      transform: scale(0.8);
      position: absolute;
      top: 9px;
      left: 9px;
      border-radius: 50%;
      transition: all 0.5s ease;
    }
    &:hover:after {
        transform: scale(1.2);
        border-color: #444;
      }
    .icon {
      background: #444;
      margin: 10px;
      width: 40px;
      height: 40px;
      padding: 10px;
      border-radius: 100%;
    }
  }
`

const SocialIcons =  () => (
  <IconBar>
    <IconContainer>
      <a href="https://github.com/michellejl" target="_blank">
        <FontAwesomeIcon className='icon' icon={['fab', 'github']} />
      </a>
    </IconContainer>
    <IconContainer>
      <a href="https://twitter.com/michellejlevine" target="_blank">
        <FontAwesomeIcon className='icon' icon={['fab', 'twitter']} />
      </a>
    </IconContainer>
    <IconContainer>
      <a href="https://instagram.com/spacecadetmj" target="_blank">
        <FontAwesomeIcon className='icon' icon={['fab', 'instagram']} />
      </a>
    </IconContainer>
    <IconContainer>
      <a href="https://linkedin.com/in/michellejl" target="_blank">
        <FontAwesomeIcon className='icon' icon={['fab', 'linkedin']} />
      </a>
    </IconContainer>
  </IconBar>
)

export default SocialIcons
