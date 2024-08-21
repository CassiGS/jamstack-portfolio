import React from "react"
import { Link } from "gatsby"

const Posts = ({ posts }) => {
  return (
    <ol style={{ listStyle: `none` }}>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <li key={post.fields.slug}>
            <article
              className="post-list-item"
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h3>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h3>
                <small>{post.frontmatter.date}</small>
              </header>
            </article>
          </li>
        )
      })}
    </ol>
  )
}

export default Posts
