import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <section className="page-hero page-hero--center">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="page-hero__title">This page doesn't exist.</h1>
        <p className="page-hero__lede">
          The link may be old, or the page may have moved.
        </p>
        <div className="button-row">
          <Link to="/" className="button button--primary">
            Go home
          </Link>
          <Link to="/work/" className="button button--secondary">
            View work
          </Link>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
