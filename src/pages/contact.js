import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { site } from "../data/site"
import { projects } from "../data/projects"

const ContactPage = () => {
  const channels = [
    site.email && {
      label: `Email`,
      value: site.email,
      href: `mailto:${site.email}`,
    },
    ...projects.map(p => ({
      label: p.name,
      value: p.links[0].label,
      href: p.links[0].href,
    })),
  ].filter(Boolean)

  return (
    <Layout>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="page-hero__title">Get in touch</h1>
          <p className="page-hero__lede">
            I'm always glad to talk about products, ideas, problems worth
            solving, and how software gets built. Or about what I'm building
            with IsGoBite and FleetFav.
          </p>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <ul className="contact-list">
            {channels.map(c => (
              <li key={c.href}>
                <a href={c.href} className="contact-list__link">
                  <span className="contact-list__label">{c.label}</span>
                  <span className="contact-list__value">
                    {c.value} <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="contact-note">
            Want to see the work first?{" "}
            <Link to="/work/">Read the case studies</Link>.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Contact"
    description="Get in touch with Chike, founder of Chykey Solutions."
  />
)

export default ContactPage
