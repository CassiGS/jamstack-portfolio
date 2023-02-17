import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";

import Layout from "../components/layout";
import Hero from "../components/hero";
import ArticlePreview from "../components/article-preview";

class RootIndex extends React.Component {
	render() {
		// const posts = get(this, "props.data.allContentfulBlogPost.nodes");
		// const [author] = get(this, "props.data.allContentfulPerson.nodes");

		return (
			<Layout>
				{/* <Hero image={author.heroImage.gatsbyImage} title={author.name} content={author.shortBio} />
				<ArticlePreview posts={posts} /> */}
				<div>
					<h1>Hi, I'm Cassi</h1>
					<h2>
						I'm a front end developer currently at{" "}
						<a href="https://www.submittable.com/">Submittable</a>
					</h2>
				</div>
				<div>👋</div>
			</Layout>
		);
	}
}

export default RootIndex;

// export const pageQuery = graphql`
//   query HomeQuery {
//     allContentfulBlogPost(sort: { publishDate: DESC }) {
//       nodes {
//         title
//         slug
//         publishDate(formatString: "MMMM Do, YYYY")
//         tags
//         heroImage {
//           gatsbyImage(
//             layout: FULL_WIDTH
//             placeholder: BLURRED
//             width: 424
//             height: 212
//           )
//         }
//         description {
//           raw
//         }
//       }
//     }
//     allContentfulPerson(
//       filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
//     ) {
//       nodes {
//         name
//         shortBio {
//           raw
//         }
//         title
//         heroImage: image {
//           gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
//         }
//       }
//     }
//   }
// `
