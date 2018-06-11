import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'react-emotion'

// Setting up Font Awesome Icons
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import light from '@fortawesome/fontawesome-pro-light'

fontawesome.library.add(brands, light)

import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'

const FullPageContainer = styled('div')`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  @media (min-width: 770px) {
    width: 80%;
  }
`

const ContentContainer = styled('main')`
  margin: 0 10px;
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

    <FullPageContainer>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentContainer>
        {children()}
      </ContentContainer>
      <Footer />
    </FullPageContainer>
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
