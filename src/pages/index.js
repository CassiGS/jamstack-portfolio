import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Posts from "../components/posts"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const shortPosts = posts.slice(0, 3)

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div className="bio">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.jpg"
          width={200}
          height={200}
          quality={95}
          alt="Profile picture"
        />
        <p>
          Hi, I'm Cassi. I'm a frontend web developer with an interest in CMS
          development, UI/UX, and design and everything in-between. Currently
          based out of Bellingham, WA - I'm working on keeping the marketing
          website afloat over at{" "}
          <a href="https://www.submittable.com">Submittable</a>. When I'm not
          sitting at my computer, you'll probably find me hiting up one of my
          local breweries, hanging out with my dogs, crocheting cozy cowls, or
          attempting to learn yet another new hobby (it's probably fiber based.)
        </p>
      </div>

      <h2>Journal</h2>
      <div className="home__posts">
        <Posts posts={shortPosts} />
      </div>
      <h2>Projects</h2>
      <div className="home__posts">
        <Posts posts={shortPosts} />
      </div>
    </Layout>
  )
}

export default BlogIndex

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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
