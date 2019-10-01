import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>I'm Rob and I make things for the web</h1>
    <p>I’m a front-end developer based in London.</p>
    <p>
      Working with designers and clients, I produce websites that work for users
      and meet business goals.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe veritatis
      rem itaque corrupti quia molestiae cumque. Facilis voluptate at
      consequuntur officiis laudantium earum ipsum, fugiat, suscipit dolorum
      nostrum quisquam accusamus, ipsam culpa fugit veritatis. Odio, soluta
      nihil exercitationem nostrum quis consequuntur quo. Esse autem tempore
      architecto impedit sequi porro sed veritatis dignissimos laudantium natus
      sapiente dolorum voluptatibus voluptas vitae beatae perferendis rem
      laboriosam iste, similique optio.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quia at
      nobis aliquid officia blanditiis provident vero enim repellat, inventore
      animi dolorem esse sunt quam. Excepturi quod reiciendis soluta voluptatem
      odit harum sunt eveniet cum, doloribus quia rem maxime corrupti neque
      cupiditate, perferendis modi, quis temporibus iusto alias?
    </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
