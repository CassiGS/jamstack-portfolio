import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../components/layout";
import Hero from "../components/hero";
import ArticlePreview from "../components/article-preview";

const HomePage = ({ data }) => {
	const content = data.mainContent;

	return (
		<MainLayout>
			{/* <Hero image={author.heroImage.gatsbyImage} title={author.name} content={author.shortBio} />
				<ArticlePreview posts={posts} /> */}
			<div>
				<h1>{content.headerTitle}</h1>
				<p className="subheader">{content.headerSubtitle.headerSubtitle}</p>
			</div>
			<div>👋</div>
		</MainLayout>
	);
};

export default HomePage;

export const pageQuery = graphql`
	query HomeQuery {
		mainContent: contentfulHeaderBlock(contentful_id: { eq: "38zvhXG8JKZHPDa3jyz2fW" }) {
			headerTitle
			headerSubtitle {
				headerSubtitle
			}
		}
	}
`;
