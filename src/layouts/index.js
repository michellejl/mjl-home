import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

import Header from '../components/header'
import './index.css'

const Container = styled('div')`
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Container>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children()}
    </Container>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
