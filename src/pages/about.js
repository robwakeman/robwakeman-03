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
      communication throughout the project lifecycle. And I offer ongoing
      support and guidance after sign off.
    </p>

    <blockquote cite="Client: Central Saint Martins – UAL">
      <p>
        Rob has fantastic attention to detail and thoroughness in his approach,
        which I greatly appreciate. His technical knowledge and problem-solving
        abilities have been invaluable in meeting any request or challenge I
        have put to him, and in delivering a site that meets our needs.
      </p>
      <p>
        <cite>Client: Central Saint Martins – UAL</cite>
      </p>
    </blockquote>

    <Link to="/contact/" className={layoutStyles.cta}>
      Get in touch
    </Link>
    <section
      className={`${layoutStyles.section} ${layoutStyles.otherRelatedWork}`}
    >
      <h2>Other Related Work</h2>

      <h3>Analytics/GTM/Content for Frances King</h3>
      <p>
        Various web-related work for Frances King (English language school).
        This included Google Analytics goals, Google Tag Manager implementation,
        content edits, report on website technology and functionality,
        competition research and report.
      </p>

      <h3>User research and functional specification for Tate</h3>
      <p>
        Produced and presented user research report and functional specification
        to key stakeholders for turbinegeneration, an international Tate project
        connecting schools, artists and galleries (freelance contract).
        Partnered with Unilever.
      </p>

      <h3>Teaching at Central Saint Martins – University of the Arts London</h3>
      <p>
        Writing and delivering adult short courses on web design and
        development.
      </p>

      <h3>Teaching coding to children</h3>
      <p>One-to-one private tuition and group teaching in schools.</p>

      <h3>Co-founder and Technical Director of BoreMe.com</h3>
      <p>
        At its peak, BoreMe was a major UK entertainment/meme website,
        partnering with Channel 4 <i>Ideas Factory</i> on various projects. The
        business model was principally video advertising.
      </p>
      <p>
        My responsibilities ranged from web development and project management
        through to content and community management.
      </p>
    </section>
  </Layout>
)

export default AboutPage
