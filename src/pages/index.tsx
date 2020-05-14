// Gatsby supports TypeScript natively!
import { graphql, PageProps } from "gatsby"
import React from "react"
import Card from "../components/card"
import CardList from "../components/cardList"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TagMenu from "../components/tagMenu"


type Data = {
  siteSearchIndex: any
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
    group: {
      tag: string
      totalCount: number
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  console.log(data.siteSearchIndex)
  return (
    <>
      <Layout location={location} title={siteTitle}>
        <TagMenu
          list={data.allMarkdownRemark.group}
          searchIndex={data.siteSearchIndex.index}
        />
        <SEO title="All posts" />
        {posts && (
          <Card avatar="https://picsum.photos/300/200" node={posts[0].node} />
        )}
        <h2 style={{ margin: "1em 0" }}> All Engineering articles </h2>
        <CardList posts={posts} />
      </Layout>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    siteSearchIndex {
      index
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
