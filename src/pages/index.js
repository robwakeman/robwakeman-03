import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import layoutStyles from "../components/layout.module.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>I'm Rob, a front-end developer</h1>
    <p>
      Based in London, I work with designers and clients to produce websites
      that work for users and meet business goals.
    </p>
    <Link to="/contact/" className={layoutStyles.cta}>
      Get in touch
    </Link>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe veritatis
      rem itaque corrupti quia molestiae cumque. Facilis voluptate at.{" "}
      <a href="https://www.robwakeman.com">Here is a link</a> laudantium earum
      ipsum, fugiat, suscipit dolorum nostrum quisquam accusamus, ipsam culpa
      fugit veritatis. Odio, soluta nihil exercitationem.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia at
      nobis aliquid officia blanditiis provident vero enim repellat, inventore.
      Excepturi quod reiciendis soluta voluptatem odit harum sunt eveniet cum,
      doloribus quia rem maxime corrupti neque cupiditate, perferendis modi,
      quis temporibus iusto alias?
    </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
