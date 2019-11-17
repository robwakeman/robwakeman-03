import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Nav from "./nav"
import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerInner}>
      <Link to="/" className={headerStyles.brand}>
        {siteTitle}
      </Link>
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
