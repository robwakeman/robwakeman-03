import React from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.scss"

// const Nav = () => (
//   <nav className={navStyles.nav}>
//     <ul className={navStyles.nav__list}>
//       <li className={navStyles.navItem}>
//         <Link to="/">Home</Link>
//       </li>
//       <li className={navStyles.nav__item}>
//         <Link to="/portfolio">Portfolio</Link>
//       </li>
//       <li className={navStyles.nav__item}>
//         <Link to="/about">About</Link>
//       </li>
//       <li className={navStyles.nav__item}>
//         <Link to="/contact">Contact</Link>
//       </li>
//     </ul>
//   </nav>
// )

const Nav = () => (
  <>
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" for="menu-btn">
      <span className="nav-icon"></span>
    </label>
    <ul className="menu">
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
  </>
)

export default Nav
