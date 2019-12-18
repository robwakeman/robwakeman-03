import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
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
      }
    }
  }
`

export default Project
