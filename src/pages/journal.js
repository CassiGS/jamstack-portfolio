import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";

import Seo from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ArticlePreview from "../components/article-preview";

const JournalPage = ({ data, location }) => {
	const content = data.mainContent;

	return (
		<Layout location={location}>
			<h1>{content.headerTitle}</h1>
			<p className="subheader">{content.headerSubtitle.headerSubtitle}</p>
		</Layout>
	);
};

export default JournalPage;

export const pageQuery = graphql`
	query aboutQuery {
		mainContent: contentfulHeaderBlock(contentful_id: { eq: "2BJnszQksJ4lNAFvfWoZKt" }) {
			headerTitle
			headerSubtitle {
				headerSubtitle
			}
		}
	}
`;
