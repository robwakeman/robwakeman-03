import React from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.scss"

const Nav = () => {
  // js stuff here
  // const [count, setCount] = useState(0);
  const foo = true

  return (
    <>
      <nav className={navStyles.nav}>
        {/* <input className={navStyles.menuBtn} type="checkbox" id="menu-btn" /> */}
        {/* <label className={navStyles.menuIcon} htmlFor="menu-btn">
          <span className={navStyles.navIcon}></span>
        </label> */}
        <ul className={navStyles.navItems}>
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
        <div className={navStyles.burger}>
          <div className={navStyles.line1}></div>
          <div className={navStyles.line2}></div>
          <div className={navStyles.line3}></div>
        </div>
      </nav>
    </>
  )
}

export default Nav
