import React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <main className="interior__wrapper">
        <h1>Journal</h1>
        <section className="interor__subhead">
          <p>
            Learnings, musings, internet (and non-internet) projects I’m working
            on.
          </p>
        </section>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="Journal" />

export default AboutPage
