import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import heroImg from '../assets/img/unsplash-computer-screen.jpeg'

const Card = styled('div')`
  margin: 0 2%;
`

const Category = styled('p')`
  margin: 0;
  text-align: right;
`

const Title = styled('p')`
  margin: 0;
  a {
    color: #444;
    font-weight: bold;
    font-size: 1.1em;
  }
`
const Img = styled('img')`
  width: 100%;
  max-width: 300px;
`

const ProjectCardSimple =  () => (
  <Card>
    <Img src={heroImg} />
    <Title>
      <Link to='#'>
        Project Title
      </Link>
    </Title>
    <Category>
      <Link to='/code'>
        /coding
      </Link>
    </Category>
  </Card>
)

export default ProjectCardSimple
