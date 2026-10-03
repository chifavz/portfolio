import * as React from "react"

// Simple, honest visuals of how each product works. These are diagrams of
// the product model, not screenshots.

const Presence = () => (
  <div
    className="diagram diagram--presence"
    role="img"
    aria-label="One Business Profile feeds a website, content, publishing, and local guides."
  >
    <div className="diagram__source">
      <span className="diagram__label">Business Profile</span>
      <dl className="diagram__fields">
        <div>
          <dt>Name</dt>
          <dd />
        </div>
        <div>
          <dt>Industry</dt>
          <dd />
        </div>
        <div>
          <dt>Audience</dt>
          <dd />
        </div>
        <div>
          <dt>Offer</dt>
          <dd />
        </div>
      </dl>
    </div>
    <div className="diagram__connector" aria-hidden="true" />
    <ul className="diagram__outputs">
      <li>Website</li>
      <li>Content</li>
      <li>Publishing</li>
      <li>Local guides</li>
    </ul>
  </div>
)

const loadSteps = [
  `Load entered`,
  `Driver pay set`,
  `Driver accepts`,
  `Delivered + proof`,
  `Profit rolled up`,
]

const Loads = () => (
  <div
    className="diagram diagram--loads"
    role="img"
    aria-label={`A load moves through: ${loadSteps.join(`, `)}.`}
  >
    <span className="diagram__label">One load, end to end</span>
    <ol className="diagram__steps">
      {loadSteps.map((step, i) => (
        <li key={step} className={i === loadSteps.length - 1 ? `is-final` : ``}>
          <span className="diagram__dot" aria-hidden="true" />
          {step}
        </li>
      ))}
    </ol>
  </div>
)

const ProductDiagram = ({ type }) =>
  type === `presence` ? <Presence /> : type === `loads` ? <Loads /> : null

export default ProductDiagram
