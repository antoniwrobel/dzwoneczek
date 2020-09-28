import React, { useState } from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import {
  navbar,
  list,
  listItem,
  listHref,
  image,
  mobileImg,
  menu,
  icon,
  active as activeClass,
  mobileMenu,
  visible,
  navbarMobile,
  listMobile,
  mobileLink,
} from "../styles/navbar.module.css"

import "../../src/styles/reset.css"

const handleNavPages = ({ anchorLink, name, slug }) => {
  const Element = anchorLink ? AnchorLink : Link

  return (
    <li key={slug} className={listItem}>
      <Element to={slug} className={listHref}>
        {name}
      </Element>
    </li>
  )
}

const pages = [
  { name: "strona główna", slug: "/" },
  { name: "o nas", slug: "/#o-nas", anchorLink: true },
  { name: "terapie", slug: "/#terapie", anchorLink: true },
  { name: "kadra", slug: "/kadra" },
  { name: "galeria", slug: "/#galeria", anchorLink: true },
  { name: "kontakt", slug: "/kontakt" },
]

const Layout = ({ children }) => {
  const [active, setActive] = useState(false)
  return (
    <>
      <div className={`${icon} ${active ? activeClass : ""}`} onClick={() => setActive(!active)}>
        <div className={menu} />
      </div>
      <div className={`${mobileMenu} ${active ? visible : ""}`} onClick={() => setActive(false)}>
        <nav className={navbarMobile}>
          <ul className={listMobile}>{pages.map(handleNavPages)}</ul>
        </nav>
      </div>
      <main>{children}</main>
    </>
  )
}

export default Layout
