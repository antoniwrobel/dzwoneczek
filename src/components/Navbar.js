import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Image from "gatsby-image"

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

import logoImg from "../images/fitkids-logo.svg"

const styles = {
  margin: "0 auto",
  maxWidth: "1250px",
  zIndex: 1,
  width: "100%",
  position: "absolute",
  left: 0,
  right: 0,
}

const handleNavPages = ({ anchorLink, name, slug, logo }) => {
  const Element = anchorLink ? AnchorLink : Link

  return (
    <li key={slug} className={listItem}>
      {logo && <img src={logoImg} alt="company logo" />}
      <Element to={slug} className={listHref}>
        {name}
      </Element>
    </li>
  )
}

const pages = [
  { name: "", slug: "/", logo: true },
  { name: "oferta", slug: "/oferta" },
  { name: "o firmie", slug: "/#o-firmie", anchorLink: true },
  { name: "jadłospis", slug: "/jadlospis" },
  { name: "kontakt", slug: "/kontakt" },
]

const Navbar = () => {
  const data = useStaticQuery(query)
  const [active, setActive] = useState(false)
  return (
    <>
      <Image
        className={image}
        fluid={data.belka.childImageSharp.fluid}
        style={styles}
        alt="company logo"
        fadeIn={false}
      />

      <Link to="/" className={mobileLink}>
        <img src={logoImg} alt="company logo" className={mobileImg} />
      </Link>

      <div
        className={`${icon} ${active ? activeClass : ""}`}
        onClick={() => setActive(!active)}
      >
        <div className={menu} />
      </div>

      <nav className={navbar}>
        <ul className={list}>{pages.map(handleNavPages)}</ul>
      </nav>

      <div
        className={`${mobileMenu} ${active ? visible : ""}`}
        onClick={() => setActive(false)}
      >
        <nav className={navbarMobile}>
          <ul className={listMobile}>{pages.map(handleNavPages)}</ul>
        </nav>
      </div>
    </>
  )
}

const query = graphql`
  {
    belka: file(relativePath: { eq: "belka-menu.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Navbar
