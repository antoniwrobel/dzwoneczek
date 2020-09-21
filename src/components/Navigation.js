import React from "react"

import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Navigation = ({ styles }) => {
  return (
    <nav className={styles}>
      <ul>
        <li>
          <AnchorLink to="/#o-nas">o nas</AnchorLink>
        </li>
        <li>
          <AnchorLink to="/#terapie">terapie</AnchorLink>
        </li>
        <li>
          <Link to="/kadra">kadra</Link>
        </li>
        <li>
          <AnchorLink to="/#galeria">galeria</AnchorLink>
        </li>
        <li>
          <Link to="/kontakt">kontakt</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
