import React from "react";
import { Link } from "gatsby";

import * as styles from "./css/navigation.module.css";

const Navigation = ({ navigationLinks }) => (
	<nav role="navigation" className={styles.container} aria-label="Main">
		<Link to="/" className={styles.logoLink}>
			<span className={styles.navigationItem}>cassigs</span>
		</Link>
		<ul className={styles.navigation}>
			{navigationLinks?.map((link) => {
				return (
					<li className={styles.navigationItem}>
						<Link to={link.linkUrl} activeClassName="active">
							{link.linkName}
						</Link>
					</li>
				);
			})}
		</ul>
	</nav>
);

export default Navigation;
