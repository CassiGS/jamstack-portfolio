import React from "react";
import { graphql } from "gatsby";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ArticlePreview from "../components/article-preview";

const AboutPage = ({ data, location }) => {
	const content = data.mainContent;

	return (
		<Layout location={location}>
			<h1>{content.headerTitle}</h1>
			<p className="subheader">{content.headerSubtitle.headerSubtitle}</p>
		</Layout>
	);
};

export default AboutPage;

export const pageQuery = graphql`
	query aboutQuery {
		mainContent: contentfulHeaderBlock(contentful_id: { eq: "443FGVng7MWe1BRZL9Lgnr" }) {
			headerTitle
			headerSubtitle {
				headerSubtitle
			}
		}
	}
`;
