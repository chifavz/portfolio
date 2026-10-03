import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ProjectCard from "../../components/project-card"
import { projects } from "../../data/projects"

const WorkPage = () => (
  <Layout>
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Work</p>
        <h1 className="page-hero__title">Products I'm building</h1>
        <p className="page-hero__lede">
          Each one started with a business problem. Each case study covers the
          problem, the product, what I built, and where it stands today.
        </p>
      </div>
    </section>
    <section className="section section--flush-top">
      <div className="container project-list">
        {projects.map(p => (
          <ProjectCard key={p.slug} project={p} headingLevel="h2" />
        ))}
      </div>
    </section>
  </Layout>
)

export const Head = () => (
  <Seo
    title="Work"
    description="Case studies for IsGoBite and FleetFav, two products built by Chike."
  />
)

export default WorkPage
