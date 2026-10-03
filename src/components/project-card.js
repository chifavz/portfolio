import * as React from "react"
import { Link } from "gatsby"

import ProductDiagram from "./product-diagram"
import StatusBadge from "./status-badge"

const ProjectCard = ({ project, headingLevel = `h3` }) => {
  const Heading = headingLevel
  const href = `/work/${project.slug}/`

  return (
    <article className="project-card">
      <div className="project-card__body">
        <div className="project-card__top">
          <p className="eyebrow">{project.kicker}</p>
          <StatusBadge tone={project.statusTone}>{project.status}</StatusBadge>
        </div>
        <Heading className="project-card__title">
          <Link to={href} className="project-card__link">
            {project.name}
          </Link>
        </Heading>
        <p className="project-card__tagline">{project.tagline}</p>
        <p className="project-card__summary">{project.summary}</p>
        <span className="text-link" aria-hidden="true">
          Read the case study <span className="arrow">→</span>
        </span>
      </div>
      <div className="project-card__visual">
        <ProductDiagram type={project.diagram} />
      </div>
    </article>
  )
}

export default ProjectCard
