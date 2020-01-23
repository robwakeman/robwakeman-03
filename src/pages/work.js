import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import layoutStyles from "../components/layout.module.scss"

const WorkPage = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(sort: { order: ASC, fields: frontmatter___sortOrder }) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              description
              sortOrder
              workImageLarge {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // console.log(data)

  return (
    <Layout>
      <SEO title="Work" />
      <h1>Work</h1>
      <section
        className={`${layoutStyles.section} ${layoutStyles.work} ${layoutStyles.nonClientWork}`}
      >
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
              <h3>robwakeman-03 (TO AMEND LINK)</h3>
            </a>
            <p>Rob Wakeman personal site built in Gatsby</p>
          </li>

          <li>
            <a
              href="https://github.com/robwakeman/book-reading-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>book-reading-list</h3>
            </a>
            <p>Book reading list app</p>
          </li>

          <li>
            <a
              href="https://github.com/robwakeman/short-jokes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>short-jokes</h3>
            </a>
            <p>React app that displays short jokes</p>
          </li>

          <li>
            <a
              href="https://github.com/robwakeman/npm-scripts-igloo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>npm-scripts-igloo</h3>
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
              <h3>rwajaxform</h3>
            </a>
            <p>
              Custom WordPress contact form plugin integrated with Bootstrap 4
              validation
            </p>
          </li>
        </ul>
      </section>

      <h2>Earlier client work</h2>
      <section
        className={`${layoutStyles.section} ${layoutStyles.work} ${layoutStyles.clientWork}`}
      >
        <ul>
          {data.allMarkdownRemark.edges.map(project => {
            return (
              <li key={project.node.id}>
                <Link to={project.node.frontmatter.path}>
                  <h3>{project.node.frontmatter.title}</h3>
                  <Img
                    style={{ maxWidth: `500px`, border: `1px solid gray` }}
                    fluid={
                      project.node.frontmatter.workImageLarge.childImageSharp
                        .fluid
                    }
                    alt={`${project.node.frontmatter.title} website - small screen`}
                  />
                </Link>
                <p>{project.node.frontmatter.description}</p>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default WorkPage
