import React from "react"
import { Link } from "gatsby"

import styles from "./footer.module.scss"

import twitter from "../../static/twitter.svg"
import linkedin from "../../static/linkedin.svg"
import youtube from "../../static/youtube.svg"

const Footer = ({ menuLinks }) => {
  return (
    <div className={styles.header}>
      <nav className={styles.social}>
        <ul>
          <li>
            <Link to={"/"}>
              <img src={twitter} width="50px" height="50px" alt="twitter" />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <img src={linkedin} width="50px" height="50px" alt="linkedin" />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <img src={youtube} width="50px" height="50px" alt="youtube" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.copyright}>
        © Copyright {new Date().getFullYear()}
        {`, `}
        <Link style={{ boxShadow: "none" }} to={"https://www.loginradius.com"}>
          LoginRadius Inc.
        </Link>
      </div>
      <nav className={styles.menuLinks}>
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

export default Footer
