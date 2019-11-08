import React, { useState } from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.scss"

const Nav = () => {
  // js stuff here
  const [navIsOpen, setNavOpenState] = useState(false)

  function toggleNav() {
    // if nav is open, set navIsOpen to false (i.e. close the nav) OR if it's not open, set navIsOpen to true (i.e. open the nav)
    navIsOpen ? setNavOpenState(false) : setNavOpenState(true)
  }

  console.log(navIsOpen)

  return (
    <>
      <nav className={navStyles.nav}>
        <ul
          className={
            !navIsOpen
              ? `${navStyles.navItems} ${navStyles.navActive}`
              : `${navStyles.navItems} `
          }
        >
          <li className={navStyles.navItem}>
            <Link to="/" className={navStyles.navLink}>
              Home
            </Link>
          </li>
          <li className={navStyles.navItem}>
            <Link to="/portfolio" className={navStyles.navLink}>
              Portfolio
            </Link>
          </li>
          <li className={navStyles.navItem}>
            <Link to="/about" className={navStyles.navLink}>
              About
            </Link>
          </li>
          <li className={navStyles.navItem}>
            <Link to="/contact" className={navStyles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
        <div className={navStyles.burger} onClick={() => toggleNav()}>
          <div className={navStyles.line1}></div>
          <div className={navStyles.line2}></div>
          <div className={navStyles.line3}></div>
        </div>
      </nav>
    </>
  )
}

export default Nav
