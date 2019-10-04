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

// from Brad Traversy https://codepen.io/bradtraversy/pen/vMGBjQ?editors=1100

const Nav = () => (
  <div class="menu-wrap">
    <input type="checkbox" class="toggler" />
    <div class="hamburger">
      <div></div>
    </div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Nav
