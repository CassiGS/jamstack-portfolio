import React from "react";

import "./variables.css";
import "./global.css";
import Seo from "./seo";
import Navigation from "./navigation";
import Footer from "./footer";

import * as styles from "./css/layout.module.css";

class Template extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<>
				<Seo />
				<Navigation />
				<main className={styles.container}>{children}</main>
				<Footer />
			</>
		);
	}
}

export default Template;
