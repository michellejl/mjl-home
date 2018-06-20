import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'

import UserCard from '../components/user-card'
import SingleTweet from '../components/twitter-single';

const PageContainer = styled('div')`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`

const SideBar = styled('aside')`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    margin-right: 25px;
  }
`

const Intro = styled('p')`
  font-size: 1.3em;
  text-align: justify;
  padding: 0;
  margin: 0;
`

const SlashSection = styled('section')`
  margin: 10px 0;
  h3 {
    margin: 0;
    .subTitle {
      color: #888;
      font-weight: normal;
    }
  }
`

const IndexPage = () => (
  <PageContainer>
    <SideBar>
      <UserCard />
    </SideBar>
    <main>
      <Intro>
        Hello World! I’m Michelle. I’m a front-end developer and prototyper currently contracting in Portland, Oregon. I’m also an artist, designer, <Link to="/photo">photographer</Link>, <Link to="/about">blogger</Link>, mentor, <Link to="/community">community leader</Link>, volunteer, and dog lover.
      </Intro>
      <SlashSection>
        <h3>/now : <span className="subTitle">Currently I’m working on a few different projects including </span></h3>
      </SlashSection>
      <SlashSection>
        <h3>/twitter : <span className="subTitle">Recently I shared on Twitter </span></h3>
        <SingleTweet />
      </SlashSection>
    </main>
  </PageContainer>
)

export default IndexPage
