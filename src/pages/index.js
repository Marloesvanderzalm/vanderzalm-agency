import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
      <Layout pageTitle="Welcome to van der Zalm Agency!">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="Cookies"
        src="../images/cookies.jpeg"
      />
      </Layout>
  )
}

export default IndexPage
