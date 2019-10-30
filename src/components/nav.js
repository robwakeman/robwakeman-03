import React from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.scss"

const Nav = () => (
  <>
    <nav className={navStyles.mainMenu}>
      <input className={navStyles.menuBtn} type="checkbox" id="menu-btn" />
      <label className={navStyles.menuIcon} htmlFor="menu-btn">
        <span className={navStyles.navIcon}></span>
      </label>
      <ul className={navStyles.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </>
)

export default Nav
