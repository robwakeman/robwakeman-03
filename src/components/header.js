import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Nav from "./nav"
import layoutStyles from "./layout.module.scss"

const Header = ({ siteTitle, siteDescription }) => (
  <header className={layoutStyles.header}>
    <div className={layoutStyles.headerInner}>
      <h1 className={layoutStyles.title}>
        <Link to="/">
          {siteTitle} | {siteDescription}
        </Link>
      </h1>
      <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
