import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import SocialIcons from './social-icons'

import heroImg from '../assets/img/unsplash-computer-screen.jpeg'
import selfieImg from '../assets/img/selfie.jpg'

const CardContainer = styled('div')`
  margin: 10px 0;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`

const HeaderImage = styled('div')`
  background: url(${heroImg});
  background-size: cover;
  height: 150px;
  width: 100%;
`

const AboutSummary = styled('div')`
  overflow: hidden;
  margin-top: -75px;
  padding: 3px;
  text-align: justify;
  h2 {
    text-align: center;
    margin: 0;
  }
  p {
    margin: 0;
  }

`

const Selfie = styled('img')`
  padding: 0;
  margin: 0 auto;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  display: block;
  z-index: 999;
`

const UserCard = () => (
  <CardContainer>
    <HeaderImage />
    <AboutSummary>
      <Selfie src={selfieImg} />
      <h2>
        <Link to='/about'>
          Michelle JL
        </Link>
      </h2>
      <p>I’m Michelle, a creative front end developer currently working as a contractor at Nike. Nothing excites me more than immersing myself in a good challenge or a great book. For me, coding is the perfect mix of logical problem solving, and creative artistic expression. When not coding, I am spending my time creating something new, getting involved in the local tech community, or exploring the world around me with my trusty Nikon camera.</p>
      <hr />
      <SocialIcons />
    </AboutSummary>
  </CardContainer>
)

export default UserCard
