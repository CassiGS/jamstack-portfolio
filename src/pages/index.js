import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Posts from "../components/posts"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  //   const posts = data.allMarkdownRemark.nodes
  //   const shortPosts = posts.slice(0, 3)
  //   if (posts.length === 0) {
  //     return (
  //       <Layout location={location} title={siteTitle}>
  //         <p>
  //           No blog posts found. Add markdown posts to "content/blog" (or the
  //           directory you specified for the "gatsby-source-filesystem" plugin in
  //           gatsby-config.js).
  //         </p>
  //       </Layout>
  //     )
  //   }
  return (
    <Layout location={location} title={siteTitle}>
      <main className="home__wrapper">
        <div className="home__content">
          <h1>Hi, I'm Cassi.</h1>
          <p className="home__content-subhead">
            Maker of (mostly) fine (sometimes) internet goods.
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default HomePage

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
