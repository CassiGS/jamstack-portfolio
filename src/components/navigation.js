import React from "react";
import { Link } from "gatsby";

import * as styles from "./css/navigation.module.css";

const Navigation = () => (
	<nav role="navigation" className={styles.container} aria-label="Main">
		<Link to="/" className={styles.logoLink}>
			<span className={styles.navigationItem}>cassigs</span>
		</Link>
		<ul className={styles.navigation}>
			<li className={styles.navigationItem}>
				<Link to="/about/" activeClassName="active">
					about
				</Link>
			</li>
			<li className={styles.navigationItem}>
				<Link to="/blog/" activeClassName="active">
					journal
				</Link>
			</li>
		</ul>
	</nav>
);

export default Navigation;
