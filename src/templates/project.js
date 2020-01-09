import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const Project = ({ data }) => {
  const { markdownRemark: project } = data

  return (
    <Layout>
      {/* Make this SEO title attribute dynamic */}
      <SEO title="Project" />
      <h1>{project.frontmatter.title}</h1>
      <p>{project.frontmatter.description}</p>
      <p>{project.frontmatter.client}</p>
      <Img fluid={project.frontmatter.workImageLarge.childImageSharp.fluid} />
      <Img fluid={project.frontmatter.workImageSmall.childImageSharp.fluid} />
      <Img fluid={project.frontmatter.workImageMedium.childImageSharp.fluid} />
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
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        workImageSmall {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Project
