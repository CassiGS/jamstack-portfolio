import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  let headlink

  if (isRootPath) {
    headlink = <span classnName="nav__home-title">CassiGS</span>
  } else {
    headlink = (
      <Link className="nav__link" to="/">
        <span>CassiGS</span>
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <div>{headlink}</div>
        <div>
          <Link className="nav__link" to="/about">
            About
          </Link>
          <Link className="nav__link" to="/journal">
            Journal
          </Link>
          <Link className="nav__link" to="/now">
            Now
          </Link>
        </div>
      </header>

      <main>{children}</main>
      <footer className="global-footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>. Version 1.0
      </footer>
    </div>
  )
}

export default Layout
