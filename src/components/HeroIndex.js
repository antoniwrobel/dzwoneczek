import React, { useEffect, useState } from "react"

import Image from "gatsby-image"

import Navigation from "../components/Navigation"
import OurValues from "../components/OurValues"
import {
  navbar,
  image,
  barImage,
  headerImage,
  shortVersion,
  imageMobile,
  headerImageMobile,
  floater,
} from "../styles/heroIndex.module.css"

import header from "../images/main/header.jpg"
import headerShort from "../images/main/header_short.jpg"
import headerMobile from "../images/main/mobile_top.jpg"

const Hero = ({ small }) => {
  return (
    <>
      <a href="tel:+48505 469 748" className={floater}>
        <strong>505 469 748</strong>
        <span>Jeżeli masz jakiekolwiek pytania</span>
        <strong>ZADZWOŃ TERAZ</strong>
      </a>
      <div className={`${headerImage} ${headerImageMobile} ${small && shortVersion} `}>
        <img src={small ? headerShort : header} className={image} alt="background" />
        <img src={headerMobile} className={imageMobile} alt="background" />
      </div>

      <div className={barImage}>
        <Navigation styles={navbar} />
        {!small && <OurValues />}
      </div>
    </>
  )
}

export default Hero
