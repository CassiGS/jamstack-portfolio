import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";

import MainLayout from "../components/layout";
import Hero from "../components/hero";
import ArticlePreview from "../components/article-preview";

const HomePage = ({ data }) => {
	const layoutLinks = data.contentfulLinkGroup;
	// const posts = get(this, "props.data.allContentfulBlogPost.nodes");
	// const [author] = get(this, "props.data.allContentfulPerson.nodes");

	return (
		<MainLayout>
			{/* <Hero image={author.heroImage.gatsbyImage} title={author.name} content={author.shortBio} />
				<ArticlePreview posts={posts} /> */}
			<div>
				<h1>Hi, I'm Cassi</h1>
				<p className="subheader">I enjoy making (mostly) fine (sometimes) internet goods.</p>
			</div>
			<div>👋</div>
		</MainLayout>
	);
};

export default HomePage;

export const pageQuery = graphql`
	query HomeQuery {
		mainNav: contentfulLinkGroup(contentful_id: { eq: "46p7FQeAx7qw9hY6pndBCf" }) {
			linkGroup {
				linkName
				linkUrl
			}
		}
	}
`;
