import React from "react"
import styles from "./cardlist.module.scss"
import { Link } from "gatsby"
import Bio from "./bio"

// Utilities
import kebabCase from "lodash/kebabCase"

const Card = ({ avatar, node }) => {
  const tag  = node.frontmatter.tags;
  return (
    <div className={styles.user}>
      <img src={avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <header>
          <h3>
            <Link className={styles.title} to={node.fields.slug}>
              {node.frontmatter.title || node.fields.slug}
            </Link>
          </h3>
          <Bio date={node.frontmatter.date} />
        </header>
        <section>
          <p
            className={styles.descriptionText}
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </section>
        <div className={styles.tag}>
          <Link to={`/tags/${kebabCase(tag)}/`}> {tag} </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
