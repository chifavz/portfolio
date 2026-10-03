import * as React from "react"

const SectionHeading = ({ index, label, title, children, id }) => (
  <div className="section-heading">
    <p className="section-heading__label">
      {index && <span className="section-heading__index">{index}</span>}
      {label}
    </p>
    <h2 id={id}>{title}</h2>
    {children && <p className="section-heading__lede">{children}</p>}
  </div>
)

export default SectionHeading
