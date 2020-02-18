import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import layoutStyles from "../components/layout.module.scss"
import workStyles from "./work.module.scss"

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

  return (
    <Layout>
      <SEO title="Work" />
      <h1>Work</h1>
      <section
        className={`${layoutStyles.section} ${layoutStyles.work} ${workStyles.nonClientWork}`}
      >
        <p>
          Latest projects on GitHub demonstrating HTML, CSS/Sass, JavaScript,
          React, Gatsby, WordPress:
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/robwakeman/robwakeman-03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>robwakeman-03 (this site)</h3>
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
        className={`${layoutStyles.section} ${layoutStyles.work} ${workStyles.clientWork}`}
      >
        <ul>
          {data.allMarkdownRemark.edges.map(project => {
            return (
              <li className={workStyles.clientWork__item} key={project.node.id}>
                <div className={workStyles.clientWork__image}>
                  <Link to={project.node.frontmatter.path}>
                    <Img
                      fluid={
                        project.node.frontmatter.workImageLarge.childImageSharp
                          .fluid
                      }
                      alt={`${project.node.frontmatter.title} website - small screen`}
                    />
                  </Link>
                </div>
                <div className={workStyles.clientWork__text}>
                  <Link to={project.node.frontmatter.path}>
                    <h3>{project.node.frontmatter.title}</h3>
                  </Link>
                  <p>{project.node.frontmatter.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default WorkPage
