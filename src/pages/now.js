import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Now = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout location={location}>
      <main className="interior__wrapper">
        <h1>Now</h1>
        <section className="interor__subhead">
          <p>
            A monthly update of what I’m working on, learning, and doing.
            Inspired by the pages at{" "}
            <a href="https://nownownow.com/about">nownownow.com</a>.
          </p>
          <section className="blog__list">
            {/* {posts.map(post => {
              console.log(post)
              const postListItem = post.frontmatter
              return (
                <ul>
                  <li className="blog__list-item--pill-group">
                    <span className="blog__list-item--pill">
                      {postListItem.topic}
                    </span>
                    <span className="blog__list-item--pill">
                      {postListItem.type}
                    </span>
                  </li>
                  <li className="blog__list-item--date">
                    Last Updated: {postListItem.date}
                  </li>
                  <li>
                    <a href={post.fields.slug}>{postListItem.title}</a>
                  </li>
                </ul>
              )
            })} */}
          </section>
        </section>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="Now page" />

export default Now

export const nowPageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
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
          description
          topic
          type
        }
      }
    }
  }
`
