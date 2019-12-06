import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import layoutStyles from "../components/layout.module.scss"

const WorkPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Work</h1>
    <p>
      Latest projects on GitHub demonstrating HTML, CSS/Sass, JavaScript,
      WordPress/PHP:
    </p>

    <ul>
      <li>
        <a
          href="https://github.com/robwakeman/book-reading-list"
          target="_blank"
        >
          book-reading-list
        </a>
      </li>
      <li>
        <a href="https://github.com/robwakeman/short-jokes" target="_blank">
          short-jokes
        </a>
      </li>
      <li>
        <a
          href="https://github.com/robwakeman/npm-scripts-igloo"
          target="_blank"
        >
          npm-scripts-igloo
        </a>
      </li>
      <li>
        <a href="https://github.com/robwakeman/rwajaxform" target="_blank">
          rwajaxform
        </a>
      </li>
    </ul>

    <h2>Client work</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum
      dicta rem, quibusdam veniam corrupti eos? Sed fuga reprehenderit, facere
      deleniti id fugit voluptate facilis dolorem eligendi voluptates, veniam
      minus optio dolorum qui ducimus.
    </p>
  </Layout>
)

export default WorkPage
