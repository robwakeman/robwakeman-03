import React, { useState } from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.scss"

const Nav = () => {
  const [navIsOpen, setNavOpenState] = useState(false)

  function toggleNav() {
    // If nav is open, set navIsOpen to false (i.e. close the nav) OR if it's not open, set navIsOpen to true (i.e. open the nav). Default state: navIsOpen false.
    // navIsOpen ? setNavOpenState(false) : setNavOpenState(true)
    setNavOpenState(!navIsOpen)
  }

  console.log("navIsOpen is", navIsOpen)

  return (
    <>
      <nav
        className={
          navIsOpen
            ? `${navStyles.nav} ${navStyles.navActive}`
            : `${navStyles.nav} `
        }
      >
        <ul className={navStyles.navItems}>
          <li className={navStyles.navItem}>
            <Link
              activeClassName={navStyles.navLinkActive}
              to="/"
              className={navStyles.navLink}
            >
              Home
            </Link>
          </li>
          <li className={navStyles.navItem}>
            <Link
              activeClassName={navStyles.navLinkActive}
              to="/work/"
              className={navStyles.navLink}
            >
              Work
            </Link>
          </li>
          <li className={navStyles.navItem}>
            <Link
              activeClassName={navStyles.navLinkActive}
              to="/about/"
              className={navStyles.navLink}
            >
              About
            </Link>
          </li>
          <li className={navStyles.navItem}>
            <Link
              activeClassName={navStyles.navLinkActive}
              to="/contact/"
              className={navStyles.navLink}
            >
              Contact
            </Link>
          </li>
          <li className={navStyles.navItem}>
            <a
              href="https://github.com/robwakeman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../images/github-logo.svg" alt="GitHub logo" />
            </a>
          </li>
        </ul>
        <div className={navStyles.burger} onClick={() => toggleNav()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  )
}

export default Nav
