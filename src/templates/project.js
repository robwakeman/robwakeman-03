import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import projectStyles from "./project.module.scss"

const Project = ({ data }) => {
  const { markdownRemark: project } = data

  return (
    <Layout>
      {/* Make this SEO title attribute dynamic */}
      <SEO title={`${project.frontmatter.title} project`} />
      <h1>{project.frontmatter.title}</h1>
      <p>{project.frontmatter.description}</p>
      <p>Client: {project.frontmatter.client}</p>
      <div className={projectStyles.projectImages}>
        <Img
          className={projectStyles.projectImage}
          fluid={project.frontmatter.workImageLarge.childImageSharp.fluid}
          alt={`${project.frontmatter.title} website - large screen`}
        />
        <Img
          className={projectStyles.projectImage}
          fluid={project.frontmatter.workImageSmall.childImageSharp.fluid}
          alt={`${project.frontmatter.title} website - small screen`}
        />
        <Img
          className={projectStyles.projectImage}
          fluid={project.frontmatter.workImageMedium.childImageSharp.fluid}
          alt={`${project.frontmatter.title} website - medium screen`}
        />
      </div>

      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </Layout>
  )
}

export const data = graphql`
  query ProjectByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
        client
        workImageLarge {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        workImageMedium {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        workImageSmall {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Project
