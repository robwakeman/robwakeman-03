import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Nav from "./nav"
import headerStyles from "./header.module.scss"

// const Header = ({ siteTitle, siteDescription }) => (
//   <header className={headerStyles.header}>
//     <div className={headerStyles.header__inner}>
//       <h1 className={headerStyles.header__title}>
//         <Link to="/">
//           {siteTitle} | {siteDescription}
//         </Link>
//       </h1>
//       <Nav />
//     </div>
//   </header>
// )

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
