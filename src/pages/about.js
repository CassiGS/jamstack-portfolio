import React from "react"

import Seo from "../components/seo"
import Layout from "../components/layout"

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <main className="interior__wrapper">
        <h1>About</h1>
        <section className="interor__subhead">
          <p>
            Hey there, I'm Cassi. I'm a designer, web developer, and all around
            too-many-hobbies-ist. By day I work on the marketing team as a Web
            Engineer with the fine people at Submittable. I enjoy frontend web
            development, and am fascinated by the intersection of art, design,
            information design, data visualization. This is all to say, I enjoy
            CSS
          </p>
          <p>
            The rest of the time I hang out in Bellingham, WA painting, drawing,
            illustrating, knitting, crocheting, hanging out with dogs, or maybe
            exploring outside.
          </p>
        </section>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage
