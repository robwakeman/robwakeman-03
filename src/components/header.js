import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Nav from "./nav"
import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <Link to="/" className={headerStyles.logo}>
      {siteTitle}
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
