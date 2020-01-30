import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import layoutStyles from "../components/layout.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className={`${layoutStyles.section} ${layoutStyles.intro}`}>
      <h1>I'm Rob, a front-end developer</h1>
      <p>
        Based in London, I work with designers and clients to create websites
        that work for users and meet business goals.
      </p>
      <Link to="/contact/" className={layoutStyles.cta}>
        Get in touch
      </Link>
      <p>I really do care about user experience.</p>
      <p>
        Clients I've helped include: Tate and Central Saint Martins (University
        of the Arts London)
      </p>
    </section>

    <section className={`${layoutStyles.section} ${layoutStyles.skills}`}>
      <h2>Commercial experience:</h2>
      <ul>
        <li>HTML</li>
        <li>CSS/Sass</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>WordPress</li>
        <li>Bootstrap</li>
        <li>Task runners</li>
        <li>Git</li>
      </ul>

      <h2>Other technologies used:</h2>
      <ul>
        <li>React</li>
        <li>Gatsby</li>
        <li>Angular</li>
        <li>PHP</li>
      </ul>
    </section>

    <section className={`${layoutStyles.section} ${layoutStyles.skillsDemo}`}>
      <p>HTML, CSS, JavaScript skills demonstrated by these GitHub projects:</p>
      <ul>
        <li>
          <a
            href="https://github.com/robwakeman/robwakeman-03"
            target="_blank"
            rel="noopener noreferrer"
          >
            robwakeman-03 (this site)
          </a>
        </li>
        <li>
          <a
            href="https://github.com/robwakeman/book-reading-list"
            target="_blank"
            rel="noopener noreferrer"
          >
            book-reading-list
          </a>
        </li>
        <li>
          <a
            href="https://github.com/robwakeman/npm-scripts-igloo"
            target="_blank"
            rel="noopener noreferrer"
          >
            npm-scripts-igloo
          </a>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
