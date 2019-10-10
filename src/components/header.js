import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Nav from "./nav"
import headerStyles from "./header.module.scss"

const Header = ({ siteTitle, siteDescription }) => (
  <header className={headerStyles.header}>
    <Link to="/" className={headerStyles.logo}>
      {siteTitle} | {siteDescription}
    </Link>
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
