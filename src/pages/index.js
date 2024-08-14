import React from "react";
import { graphql } from "gatsby";

import MainLayout from "../components/layout";

import * as styles from "../components/css/home.module.css";

import Hero from "../components/hero";
import ArticlePreview from "../components/article-preview";

const HomePage = ({ data }) => {
	const content = data.mainContent;

	return (
		<MainLayout>
			{/* <Hero image={author.heroImage.gatsbyImage} title={author.name} content={author.shortBio} />
				<ArticlePreview posts={posts} /> */}
			<div className={styles.heroHeader}>
				<h1>Hi I'm Cassi</h1>
				<p className="subheader">I enjoy making (mostly) fine (somtimes) internet goods</p>
			</div>
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
