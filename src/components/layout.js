import * as React from "react"
import { Link } from "gatsby"

import "@fontsource-variable/inter"
import "../styles/global.css"

import Header from "./header"
import { site } from "../data/site"

const Layout = ({ children }) => (
  <>
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <Header />
    <main id="main">{children}</main>
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__name">{site.company}</p>
          <p className="site-footer__note">
            {site.person} · {site.role} · {site.location}
          </p>
        </div>
        <nav className="site-footer__links" aria-label="Footer">
          <Link to="/work/">Work</Link>
          <Link to="/about/">About</Link>
          <Link to="/blog/">Writing</Link>
          <Link to="/contact/">Contact</Link>
        </nav>
      </div>
      <div className="container site-footer__base">
        © {new Date().getFullYear()} {site.company} · Built with{` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    </footer>
  </>
)

export default Layout
