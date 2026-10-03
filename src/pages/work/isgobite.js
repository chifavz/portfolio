import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import CaseStudy from "../../components/case-study"
import { getProject } from "../../data/projects"

const project = getProject(`isgobite`)

const IsGoBitePage = () => (
  <Layout>
    <CaseStudy project={project} />
  </Layout>
)

export const Head = () => (
  <Seo title={project.name} description={project.summary} />
)

export default IsGoBitePage
