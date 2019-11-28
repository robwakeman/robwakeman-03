import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import layoutStyles from "../components/layout.module.scss"

const WorkPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Work</h1>
    <p>
      Work page. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Exercitationem, ratione ex at atque perspiciatis blanditiis quaerat sequi.
      Beatae, a eos.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum
      dicta rem, quibusdam veniam corrupti eos? Sed fuga reprehenderit, facere
      deleniti id fugit voluptate facilis dolorem eligendi voluptates, veniam
      minus optio dolorum qui ducimus.
    </p>
  </Layout>
)

export default WorkPage
