import React from "react"
import PropTypes from "prop-types"

// Components
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import CardList from "../components/cardList"
import headerStyles from "../components/header.module.scss"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    // <div>
    //   <h1>{tagHeader}</h1>
    //   <ul>
    //     {edges.map(({ node }) => {
    //       const { slug } = node.fields
    //       const { title } = node.frontmatter
    //       return (
    //         <li key={slug}>
    //           <Link to={slug}>{title}</Link>
    //         </li>
    //       )
    //     })}
    //   </ul>
    //   <Link to="/tags">All tags</Link>
    // </div>

    <Layout
      location={""}
      title={""}
    >
      <Link className={headerStyles.button} to={`/`}>
        {"Go Back"}
      </Link>
      <h2> {tagHeader} </h2>
      <CardList posts={edges} />
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          slug
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
