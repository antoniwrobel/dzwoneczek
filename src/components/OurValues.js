import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as O from "../styled/OurValues/styles"
import { wrapper, card, titleHeader } from "../styles/ourValues.module.css"

const cards = [
  {
    title: "Profesjonalizm",
    color: "#fffca4",
  },
  {
    title: "Nauka i zabawa",
    color: "#c4f9fe",
  },
  {
    title: "Terapeutyka",
    color: "#f3ffd8",
  },
]

const OurValues = () => {
  return <>test</>

  const data = useStaticQuery(query)

  const {
    allFile: { nodes },
  } = data

  return (
    <O.Wrapper className={wrapper}>
      {cards.map(({ title, color }, index) => {
        return (
          <O.Card key={nodes[index].id} className={card}>
            <O.BackgroundImage fluid={nodes[index].childImageSharp.fluid} alt={title} />
            <O.Title className={titleHeader} color={color}>
              {title}
            </O.Title>
          </O.Card>
        )
      })}
    </O.Wrapper>
  )
}

const query = graphql`
  {
    allFile(filter: { dir: { regex: "/ourValues/" } }, sort: { fields: name }) {
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

export default OurValues
