import React from 'react'

import Container from './container'
import * as styles from './css/footer.module.css'

const Footer = () => (
    <div className={styles.container}>
      Built with <a href="https://contentful.com/">Contentful</a> and <a href="https://gatsbyjs.com">Gatsby</a>. Version 1.0
    </div>
)

export default Footer
