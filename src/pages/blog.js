import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = () => (
  <Layout>
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">Writing</p>
        <h1 className="page-hero__title">Notes from building</h1>
        <p className="page-hero__lede">
          Notes on product decisions, systems, and lessons from building
          IsGoBite and FleetFav.
        </p>
      </div>
    </section>
    <section className="section section--flush-top">
      <div className="container">
        <div className="empty-state">
          <p>
            Nothing published yet. In the meantime, the case studies cover how
            each product works.
          </p>
          <Link to="/work/" className="text-link">
            Read the case studies <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Writing" />

export default BlogPage
