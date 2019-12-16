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
      Latest projects on GitHub demonstrating HTML, CSS/Sass, JavaScript, React,
      Gatsby, WordPress:
    </p>

    <ul>
      <li>
        <a
          href="https://github.com/robwakeman/book-reading-list"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>robwakeman-03 (TO AMEND LINK)</b>
        </a>
        <p>Rob Wakeman personal site built in Gatsby</p>
      </li>
      <li>
        <a
          href="https://github.com/robwakeman/book-reading-list"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>book-reading-list</b>
        </a>
        <p>Book reading list app</p>
      </li>
      <li>
        <a
          href="https://github.com/robwakeman/short-jokes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>short-jokes</b>
        </a>
        <p>React app that displays short jokes</p>
      </li>
      <li>
        <a
          href="https://github.com/robwakeman/npm-scripts-igloo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>npm-scripts-igloo</b>
        </a>
        <p>
          Student and teacher list generator, CSS animations, npm scripts build
          process with Sass and Babel
        </p>
      </li>
      <li>
        <a
          href="https://github.com/robwakeman/rwajaxform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>rwajaxform</b>
        </a>
        <p>
          Custom WordPress contact form plugin integrated with Bootstrap 4
          validation
        </p>
      </li>
    </ul>

    <h2>Earlier client work</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum
      dicta rem, quibusdam veniam corrupti eos? Sed fuga reprehenderit, facere
      deleniti id fugit voluptate facilis dolorem eligendi voluptates, veniam
      minus optio dolorum qui ducimus.
    </p>
  </Layout>
)

export default WorkPage
