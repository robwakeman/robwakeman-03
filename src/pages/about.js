import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import layoutStyles from "../components/layout.module.scss"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>This is the About page</p>
  </Layout>
)

export default AboutPage
