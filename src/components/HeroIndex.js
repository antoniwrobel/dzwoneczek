import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Image from "gatsby-image"

import Navigation from "../components/Navigation"
import OurValues from "../components/OurValues"
import { navbar, barImage, headerImage } from "../styles/heroIndex.module.css"

const Hero = () => {
  const data = useStaticQuery(query)

  const {
    allFile: { nodes },
  } = data

  const [bar, header] = nodes

  return (
    <>
      <div className={headerImage}>
        <Image fluid={header.childImageSharp.fluid} alt="background" />
      </div>
      <div className={barImage}>
        <Image fluid={bar.childImageSharp.fluid} alt="navigation" />
        <Navigation styles={navbar} />
        <OurValues />
      </div>
    </>
  )
}

const query = graphql`
  {
    allFile(filter: { dir: { regex: "/main/" } }) {
      nodes {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        id
      }
    }
  }
`

export default Hero
