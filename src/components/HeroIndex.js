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
} from "../styles/heroIndex.module.css"

import header from "../images/main/header.jpg"
import headerShort from "../images/main/header_short.jpg"
import headerMobile from "../images/main/mobile_top.jpg"

function debounce(fn, ms) {
  let timer
  return (_) => {
    clearTimeout(timer)
    timer = setTimeout((_) => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

const Hero = ({ small }) => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }, 1000)

    window.addEventListener("resize", debouncedHandleResize)

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  }, [])

  return (
    <>
      <div className={`${dimensions.width > 1019 && headerImage} ${small && shortVersion} `}>
        <img src={small ? headerShort : header} className={image} />
        {dimensions.width <= 1019 && <img src={headerMobile} className={imageMobile} />}
      </div>

      <div className={barImage}>
        <Navigation styles={navbar} />
        {!small && <OurValues />}
      </div>
    </>
  )
}

export default Hero
