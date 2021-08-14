import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header
    className="header-container"
  >
    <div
    className="container"
    >
        <h1 className="title">
          <Link
            to="/"
            className="link"
          >
            {siteTitle}
          </Link>
        </h1>
      <div className="inner _sp-hidden">
          <div className="menu">
            <Link
              to="/category"
              className="link"
            >
              category
            </Link>
            <Link
              to="/category"
              className="link"
            >
              books
            </Link>
            <Link
              to="/category"
              className="link"
            >
              bookmarks
            </Link>
          </div>
      </div>
    </div>
    <div className="_pc-hidden">
    <Menu right width={300} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
