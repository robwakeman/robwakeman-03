import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import layoutStyles from "../components/layout.module.scss"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>I'm Rob, a front-end developer based in London</p>
    <p>
      From a background in the music industry, including a few years as a
      professional musician, I transitioned into front-end web development
      through self-learning.
    </p>
    <p>
      With over 10 years commercial experience, I have created websites for
      clients such as Tate, Central Saint Martins – UAL and Norwich University
      of the Arts.
    </p>
    <p>
      On some projects I work alongside a designer - whatever it takes to solve
      problems that meet both business and user needs.
    </p>
    <p>
      For clients I deliver high quality work on time with excellent
      communication throughout the project lifecycle.
    </p>
    <p>And I offer ongoing support and guidance after sign off.</p>
    <Link to="/contact/" className={layoutStyles.cta}>
      Get in touch
    </Link>
  </Layout>
)

export default AboutPage
