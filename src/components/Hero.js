import React, { useEffect, useState } from "react"

import { graphql, useStaticQuery } from "gatsby"

import * as H from "../styled/Home/styles"
import { backgroundImg } from "../styles/home.module.css"

const Hero = () => {
  const [mobile, setMobile] = useState()
  useEffect(() => {
    setMobile(window.innerWidth <= 1019)
  }, [])

  const data = useStaticQuery(query)

  return (
    <H.BackgroundImage
      className={backgroundImg}
      fluid={
        mobile
          ? data.mobile.childImageSharp.fluid
          : data.desktop.childImageSharp.fluid
      }
      alt="background image"
    />
  )
}

const query = graphql`
  {
    desktop: file(relativePath: { eq: "happy-kid.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobile: file(relativePath: { eq: "happy-kid.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Hero
