import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Project = () => {
  const data = useStaticQuery(graphql`
    query TestQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Layout>
      {/* Make this SEO title attribute dynamic */}
      <SEO title="Project" />
      <p>Project template - and the data is: {data.site.siteMetaData.title}</p>
    </Layout>
  )
}

export default Project
