import React from "react"
import PropTypes from "prop-types"
import footerStyles from "./footer.module.scss"

const Footer = ({ siteTitle }) => (
  <footer className={footerStyles.footer}>
    <div>
      © {siteTitle} {new Date().getFullYear()}
    </div>
  </footer>
)
Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
