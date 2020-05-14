import React from "react"
import { Link } from "gatsby"
import styles from "./cardlist.module.scss"

// Utilities
import kebabCase from "lodash/kebabCase"
import Search from "./search"

const TagMenu = ({ list, searchIndex }) => {
  return (
    <>
      <div className={styles.tagMenu}>
        {list.map(item => (
          <Link to={`/tags/${kebabCase(item.tag)}/`}> {item.tag} </Link>
        ))}
        {/* <Search searchIndex={searchIndex} /> */}
      </div>
      <hr />
    </>
  )
}

export default TagMenu
