import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Nav from "./nav"

const Header = ({ siteTitle, siteDescription }) => (
  <header className="header">
    <div className="header-inner">
      <h1 className="title">
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
