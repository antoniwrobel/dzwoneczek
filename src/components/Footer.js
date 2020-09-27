import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { wrapper, container, columnsWrapper, column } from "../styles/footer.module.css"

const Footer = (props) => {
  const data = useStaticQuery(query)
  const {
    allFile: { nodes },
  } = data

  const [white, index] = nodes
  const footerVersion = props.white ? white : index
  return <Image fluid={footerVersion.childImageSharp.fluid} alt="footer" />
}

const query = graphql`
  {
    allFile(filter: { dir: { regex: "/footer/" } }) {
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

export default Footer
