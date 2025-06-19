import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Now = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  console.log(posts)
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
          <section className="now__list">
            {posts.map(post => {
              return (
                <>
                  <header>
                    <h2 itemProp="headline">{post.frontmatter.title}</h2>
                  </header>
                  <article
                    className="now-post"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <section
                      dangerouslySetInnerHTML={{ __html: post.html }}
                      itemProp="articleBody"
                    />
                    <hr />
                  </article>
                </>
              )
            })}
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
      filter: { fileAbsolutePath: { regex: "/content/now/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        html
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
