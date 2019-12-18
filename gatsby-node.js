/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/project.js")
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            html
            frontmatter {
              path
              title
              description
              client
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const projectPages = result.data.allMarkdownRemark.edges

  projectPages.forEach(edge => {
    createPage({
      path: edge.node.frontmatter.path,
      component: projectTemplate,
    })
  })
}
