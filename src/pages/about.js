import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import layoutStyles from "../components/layout.module.scss"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About</h1>
    <p>This is the About page</p>
  </Layout>
)

export default AboutPage
