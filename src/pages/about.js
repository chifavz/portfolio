import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { site } from "../data/site"
import { capabilities } from "../data/approach"

const work = [
  {
    title: `Product thinking`,
    text: `What's the real problem? Who has it? What should the product do, and what should it leave out?`,
  },
  {
    title: `Design`,
    text: `Workflows, roles, and screens that fit how people already work.`,
  },
  {
    title: `Development`,
    text: `Web and mobile apps, APIs, and the data model underneath them.`,
  },
  {
    title: `Architecture & integrations`,
    text: `How the pieces connect: payments, third-party APIs, and other products.`,
  },
  {
    title: `Deployment`,
    text: `Getting it into production, testing it, and keeping it running.`,
  },
]

const AboutPage = () => (
  <Layout>
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">About</p>
        <h1 className="page-hero__title">I build products, not just code.</h1>
      </div>
    </section>

    <section className="section section--flush-top">
      <div className="container split">
        <div className="about-aside">
          <dl className="fact-list">
            <div>
              <dt>Based in</dt>
              <dd>{site.location}</dd>
            </div>
            <div>
              <dt>Building</dt>
              <dd>
                <Link to="/work/isgobite/">IsGoBite</Link>,{` `}
                <Link to="/work/fleetfav/">FleetFav</Link>
              </dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Software for real business operations</dd>
            </div>
          </dl>
        </div>
        <div className="prose prose--large">
          <p>
            I'm {site.person}. I started out building websites and web apps. Now
            I build products of my own.
          </p>
          <p>
            I work across the whole thing. I figure out the problem, decide what
            the product should be, design how it works, write the code, connect
            the integrations, and put it in production. I don't hand off between
            those stages because they aren't really separate. A decision about
            scope shapes the data model. A billing model shapes the workflow.
          </p>
          <p>
            Right now that's two products.{" "}
            <Link to="/work/isgobite/">IsGoBite</Link>
            {` `}helps small businesses turn what they know about their business
            into a professional online presence.{` `}
            <Link to="/work/fleetfav/">FleetFav</Link> helps trucking companies
            run loads, pay drivers, and see their real profit per load.
          </p>
          <p>
            They're different industries with the same approach. Understand the
            business first. Then build the system that solves the problem, and
            keep improving it.
          </p>
        </div>
      </div>
    </section>

    <section className="section section--tinted" aria-labelledby="how-title">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__label">How I work</p>
          <h2 id="how-title">From the problem through to production</h2>
        </div>
        <ul className="work-list">
          {work.map(w => (
            <li key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="section" aria-labelledby="tools-title">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__label">Tools</p>
          <h2 id="tools-title">What I build with</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map(group => (
            <div key={group.title} className="capability-group">
              <h3>{group.title}</h3>
              <ul className="tag-list">
                {group.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section cta" aria-labelledby="about-cta">
      <div className="container">
        <h2 id="about-cta" className="cta__title">
          Let's talk products.
        </h2>
        <p className="cta__lede">
          I enjoy conversations about useful software, problems worth solving,
          and what it takes to turn a product into a business. Or just about
          what I'm building with IsGoBite and FleetFav.
        </p>
        <div className="button-row">
          <Link to="/contact/" className="button button--primary">
            Contact
          </Link>
          <Link to="/work/" className="button button--secondary">
            See the work
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => (
  <Seo
    title="About"
    description="Chike is a founder and product builder in Dallas, TX, building IsGoBite and FleetFav."
  />
)

export default AboutPage
