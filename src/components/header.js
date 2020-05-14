import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

import logo from "../../static/engineering-blog.svg"

const Header = ({ menuLinks }) => {
  return (
    <div className={headerStyles.header}>
      <img src={logo} height="100px" width="200px" />
      <nav className={headerStyles.menuLinks}>
        <ul>
          {menuLinks.map((link, index) => (
            <li>
              <Link to={link.slug} key={index}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
