import React from "react"
import styles from "./freeTrial.module.scss"
import { Link } from "gatsby"
const FreeTrial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2> Authenticate Your App</h2>
        <p>
          {" "}
          <span className={styles.number}>$0</span>/ month{" "}
        </p>
        <a
          className={styles.button}
          href={`https://accounts.loginradius.com/auth.aspx?return_url=https://adminconsole.loginradius.com/login`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Free Sign Up"}
        </a>
      </div>
      <div className={styles.lists}>
        <ul>
          <li> 5,000 MAU </li>
          <li>1 Web or mobile app </li>
          <li>Standard login </li>
          <li>3 Social Login Providers </li>
          <li>Transactional Email Template </li>
          <li>Customizable Login Interfaces </li>
        </ul>
      </div>
    </div>
  )
}

export default FreeTrial
