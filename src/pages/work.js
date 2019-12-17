import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import layoutStyles from "../components/layout.module.scss"

const WorkPage = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              description
            }
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Work</h1>
      <p>
        Latest projects on GitHub demonstrating HTML, CSS/Sass, JavaScript,
        React, Gatsby, WordPress:
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
            Student and teacher list generator, CSS animations, npm scripts
            build process with Sass and Babel
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

      <ul className="clientWorkList">
        {data.allMarkdownRemark.edges.map(project => {
          return (
            <li key={project.node.id}>
              <Link to={project.node.frontmatter.path}>
                <b>{project.node.frontmatter.title}</b>
              </Link>
              <p>{project.node.frontmatter.description}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default WorkPage
