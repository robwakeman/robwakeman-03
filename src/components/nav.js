import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.scss"

const Nav = () => (
  <nav className={layoutStyles.navMenu}>
    <ul className={layoutStyles.navList}>
      <li className={layoutStyles.navItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={layoutStyles.navItem}>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li className={layoutStyles.navItem}>
        <Link to="/about">About</Link>
      </li>
      <li className={layoutStyles.navItem}>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
