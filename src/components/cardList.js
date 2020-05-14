import React from "react"
import styles from "./cardlist.module.scss"
import Card from "./card"



export default function CardList({ posts }) {
  return (
    <div className={styles.container}>
      {posts &&
        posts.map(({ node }) => {
          return (
            <>
              <Card
                avatar="https://picsum.photos/300/200"
                node={node}
              />
              <hr />
            </>
          )
        })}
    </div>
  )
}
