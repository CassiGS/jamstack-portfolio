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
            Hey there, I'm Cassi. I'm a web developer, designer, and all around
            too-many-hobbies-ist. By day I work on the marketing team as a Web
            Engineer with the fine people at{" "}
            <a href="https://www.submittable.com/">Submittable</a>. I enjoy
            frontend web development, and am interested in the intersection of
            the web, graphic design, information design, and UX. This is all to
            say, I enjoy CSS.
          </p>
          <p>
            The rest of the time I hang out in Bellingham, WA, drawing, playing
            with yarn, hanging out with dogs, video gaming inside or maybe
            exploring outside.
          </p>
        </section>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default AboutPage
