import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/project-card"
import SectionHeading from "../components/section-heading"
import { projects } from "../data/projects"
import { site } from "../data/site"
import { approach, capabilities } from "../data/approach"

const IndexPage = () => (
  <Layout>
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <p className="hero__intro">
          {site.name} · {site.role}
        </p>
        <h1 id="hero-title" className="hero__title">
          I build products that solve real business problems.
        </h1>
        <p className="hero__lede">
          I build digital products from the problem up, understanding how the
          work actually happens, then turning that into software people can use.
        </p>
        <div className="button-row">
          <Link to="/#work" className="button button--primary">
            View My Work
          </Link>
          <Link to="/about/" className="button button--secondary">
            About Me
          </Link>
        </div>
        <p className="hero__building">
          <span className="hero__building-label">Currently building</span>
          {projects.map((p, i) => (
            <React.Fragment key={p.slug}>
              {i > 0 && <span aria-hidden="true"> · </span>}
              <Link to={`/work/${p.slug}/`}>{p.name}</Link>
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>

    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading
          id="work-title"
          index="01"
          label="Selected work"
          title="What I'm building"
        >
          Two products across different industries, built from real business and
          operational problems.
        </SectionHeading>
        <div className="project-list">
          {projects.map(p => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>

    <section
      className="section section--tinted"
      aria-labelledby="approach-title"
    >
      <div className="container">
        <SectionHeading
          id="approach-title"
          index="02"
          label="Approach"
          title="From problem to working system"
        />
        <ol className="approach-grid">
          {approach.map((step, i) => (
            <li key={step.title}>
              <span className="approach-grid__num">
                {String(i + 1).padStart(2, `0`)}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="section" aria-labelledby="about-title">
      <div className="container split">
        <SectionHeading
          id="about-title"
          index="03"
          label="About"
          title="I build my own products, end to end."
        />
        <div className="prose">
          <p>
            I'm {site.name}, a founder and product builder based in{` `}
            {site.location}. I find problems worth solving, understand how the
            work actually happens, and build products around those problems.
            That means product thinking, design, development, architecture,
            integrations, and deployment.
          </p>
          <p>
            The code matters, but it isn't the goal. The goal is a product that
            solves something real for the people using it.
          </p>
          <Link to="/about/" className="text-link">
            More about me <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>

    <section
      className="section section--tinted"
      aria-labelledby="capabilities-title"
    >
      <div className="container">
        <SectionHeading
          id="capabilities-title"
          index="04"
          label="Capabilities"
          title="How I build"
        >
          The product, technical, and operational capabilities behind the
          products I build.
        </SectionHeading>
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

    <section className="section cta" aria-labelledby="contact-title">
      <div className="container">
        <p className="section-heading__label">
          <span className="section-heading__index">05</span>Contact
        </p>
        <h2 id="contact-title" className="cta__title">
          Interested in what I'm building?
        </h2>
        <p className="cta__lede">
          I'm always interested in talking with people who care about building
          useful products and solving real problems.
        </p>
        <div className="button-row">
          <Link to="/contact/" className="button button--primary">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo />

export default IndexPage
