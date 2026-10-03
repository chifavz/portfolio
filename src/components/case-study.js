import * as React from "react"
import { Link } from "gatsby"

import ProductDiagram from "./product-diagram"
import StatusBadge from "./status-badge"
import { projects } from "../data/projects"

const Block = ({ id, label, title, children }) => (
  <section className="cs-block" aria-labelledby={id}>
    <p className="cs-block__label">{label}</p>
    <div className="cs-block__content">
      <h2 id={id}>{title}</h2>
      {children}
    </div>
  </section>
)

const CaseStudy = ({ project }) => {
  const index = projects.findIndex(p => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]
  const id = s => `${project.slug}-${s}`

  return (
    <article className="case-study">
      <header className="cs-hero">
        <div className="container">
          <Link to="/work/" className="back-link">
            <span className="arrow arrow--back">←</span> All work
          </Link>
          <div className="cs-hero__top">
            <p className="eyebrow">{project.kicker}</p>
            <StatusBadge tone={project.statusTone}>
              {project.status}
            </StatusBadge>
          </div>
          <h1 className="cs-hero__title">{project.name}</h1>
          <p className="cs-hero__tagline">{project.tagline}</p>

          <dl className="cs-meta">
            {project.meta.map(m => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
            <div>
              <dt>Links</dt>
              <dd className="cs-meta__links">
                {project.links.map(l => (
                  <a key={l.href} href={l.href}>
                    {l.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </dd>
            </div>
          </dl>

          <div className="cs-hero__visual">
            <ProductDiagram type={project.diagram} />
          </div>
        </div>
      </header>

      <div className="container cs-body">
        <Block id={id(`problem`)} label="01" title="The problem">
          {project.problem.map(p => (
            <p key={p}>{p}</p>
          ))}
        </Block>

        <Block id={id(`product`)} label="02" title="The product">
          <p>{project.product.intro}</p>
          <ul className="feature-grid">
            {project.product.features.map(f => (
              <li key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block id={id(`role`)} label="03" title="My role">
          <p>{project.role.intro}</p>
          <ul className="check-list">
            {project.role.items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>

        <Block id={id(`how`)} label="04" title="How it works">
          <ol className="decision-list">
            {project.howItWorks.map(d => (
              <li key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </li>
            ))}
          </ol>
        </Block>

        <Block id={id(`result`)} label="05" title="The result">
          <p>{project.result.intro}</p>
          <div className="result-cols">
            <div>
              <h3>Built and working</h3>
              <ul className="check-list">
                {project.result.shipped.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Next</h3>
              <ul className="check-list check-list--next">
                {project.result.next.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <h3 className="stack-title">Built with</h3>
          <ul className="tag-list">
            {project.stack.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Block>
      </div>

      {next && next.slug !== project.slug && (
        <nav className="container next-project" aria-label="Next project">
          <Link to={`/work/${next.slug}/`} className="next-project__link">
            <span className="eyebrow">Next project</span>
            <span className="next-project__name">
              {next.name} <span className="arrow">→</span>
            </span>
            <span className="next-project__tagline">{next.tagline}</span>
          </Link>
        </nav>
      )}
    </article>
  )
}

export default CaseStudy
