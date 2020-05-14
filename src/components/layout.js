import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Header from "./header"

import layoutStyles from "./layout.module.css"
import FreeTrial from "./freeTrail"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div className={layoutStyles.container}>
      {/* <header>{header}</header> */}
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                menuLinks {
                  name
                  slug
                }
                footerLinks {
                  name
                  slug
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Header menuLinks={data.site.siteMetadata.menuLinks} />
            <main>{children}</main>
            <FreeTrial />
            <Footer menuLinks={data.site.siteMetadata.footerLinks} />
          </>
        )}
      />

      {/* <Menu
        title="LoginRadius Engineering"
        sections={[
          { name: "People", link: "/people" },
          { name: "Event", link: "/event" },
          { name: "Talk", link: "/talk" },
          { name: "Hackathon", link: "/hackathon" },
          { name: "Open Source", link: "/opensource" },
        ]}
      /> */}
      {/* <main>{children}</main>
      <FreeTrial /> */}
    </div>
  )
}

export default Layout
