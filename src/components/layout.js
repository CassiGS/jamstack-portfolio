import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "./variables.css";
import "./global.css";
import Seo from "./seo";
import Navigation from "./navigation";
import Footer from "./footer";

import * as styles from "./css/layout.module.css";

const MainLayout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query MainLayoutQuery {
			contentfulLinkGroup(contentful_id: { eq: "46p7FQeAx7qw9hY6pndBCf" }) {
				linkGroup {
					linkName
					linkUrl
				}
			}
		}
	`);

	const navigationLinks = data.contentfulLinkGroup.linkGroup;

	return (
		<>
			<Seo />
			<Navigation navigationLinks={navigationLinks} />
			<main className={styles.container}>{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;
