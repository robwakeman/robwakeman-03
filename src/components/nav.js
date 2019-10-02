import React from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.scss"

const Nav = () => (
  <nav className={navStyles.navMenu}>
    <ul className={navStyles.navList}>
      <li className={navStyles.navItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={navStyles.navItem}>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className={navStyles.navItem}>
        <Link to="/about">About</Link>
      </li>
      <li className={navStyles.navItem}>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
