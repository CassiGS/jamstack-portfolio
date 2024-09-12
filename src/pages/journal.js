import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"

const JournalPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout location={location}>
      <main className="interior__wrapper">
        <h1>Journal</h1>
        <section className="interor__subhead">
          <p>
            Learnings, musings, internet (and non-internet) projects I’m working
            on.
          </p>
          <section className="blog__list">
            {posts.map(post => {
              console.log(post)
              return <p>POST!</p>
            })}
          </section>
        </section>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="Journal" />

export default JournalPage

export const journalPQuery = graphql`
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
