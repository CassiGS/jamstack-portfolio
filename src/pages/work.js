import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"

const WorkPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout location={location}>
      <main className="interior__wrapper">
        <h1>Work</h1>
        <section className="interor__subhead">
          <p>
            Learnings, musings, internet (and non-internet) projects I’m working
            on.
          </p>
          <section className="blog__list">
            {posts.map(post => {
              console.log(post)
              const postListItem = post.frontmatter
              return (
                <>
                  <p>{postListItem.title} </p> <p>{postListItem.topic} </p>
                </>
              )
            })}
          </section>
        </section>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="Work" />

export default WorkPage

export const workPQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/work/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          topic
          featureImage
          technology
          blogPost
          liveLink
        }
      }
    }
  }
`
