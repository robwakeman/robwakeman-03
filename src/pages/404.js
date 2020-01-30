import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page Not Found</h1>
    <p>
      Maybe try the <Link to="/">home page</Link>
    </p>
  </Layout>
)

export default NotFoundPage
