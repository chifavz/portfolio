import * as React from "react"
import { Link } from "gatsby"

import { site } from "../data/site"

const navItems = [
  { to: `/`, label: `Home` },
  { to: `/work/`, label: `Work`, partiallyActive: true },
  { to: `/about/`, label: `About` },
  { to: `/contact/`, label: `Contact` },
]

const Header = () => {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) return
    const onKey = e => e.key === `Escape` && setOpen(false)
    window.addEventListener(`keydown`, onKey)
    return () => window.removeEventListener(`keydown`, onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="wordmark" onClick={() => setOpen(false)}>
          <span className="wordmark__mark" aria-hidden="true" />
          {site.company}
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(o => !o)}
        >
          <span className="visually-hidden">
            {open ? `Close` : `Open`} menu
          </span>
          <span className="nav-toggle__bars" aria-hidden="true" />
        </button>

        <nav
          id="site-nav"
          className={`site-nav${open ? ` is-open` : ``}`}
          aria-label="Main"
        >
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className="site-nav__link"
              activeClassName="is-active"
              partiallyActive={item.partiallyActive}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
