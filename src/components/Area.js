import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import {
  wrapper,
  container,
  header,
  section,
  paragraph,
  paragraphHeader,
  list,
  listItem,
  buttonSection,
  button,
} from "../styles/area.module.css"

import * as A from "../styled/Area/styles"

const paragraphs = [
  {
    id: 1,
    title: null,
    desc:
      "Siedziba naszej firmy mieści się w Łukowie i to właśnie stąd dostarczamy catering do placówek naszych klientów ulokowanych w pobliskich miastach i miejscowościach",
    data: [],
  },
  {
    id: 2,
    title: "Obsługiwane miasta",
    desc: "",
    data: ["Międzyrzec Podlaski", "Łuków", "Radzyń Podlaski", "Siedlce"],
  },
  {
    id: 3,
    title: "Nasze priorytety",
    desc: "",
    data: [
      "najwyższa jakość i świeżość posiłków",
      "terminowe dostawy",
      "zgodność dostaw z zamówieniem",
      "profesjonalna obsługa klienta",
    ],
  },
  {
    id: 4,
    title: null,
    desc:
      "Oprócz wymienionych wyżej miast, obłsugujemy również mniejsze miejscowości, znajdujące się pomiędzy nimi. Istnieje również możliwość dostarczania cateringu poza prezentowanym obszarem - do każdego klienta podchodzimy indywidualnie, dlatego zawsze warto skontaktować się z nami aby zasięgnąć szczegółowych informacji.",
    data: [],
  },
]

const Area = ({ fromOffer }) => {
  const data = useStaticQuery(query)
  const { file } = data

  return (
    <A.Wrapper className={wrapper} id="area">
      {!fromOffer && (
        <A.ButtonSection className={buttonSection}>
          <span>Sprawdz naszą ofertę:</span>
          <div>
            <A.Button to="/oferta" className={button}>
              Oferta
            </A.Button>
          </div>
        </A.ButtonSection>
      )}

      <A.Container className={container}>
        <A.Section className={section}>
          <A.Header className={header}>Obszar działania</A.Header>
          {paragraphs.map(({ title, desc, id, data }) => (
            <Fragment key={id}>
              {title && (
                <A.Paragraph className={paragraphHeader}>{title}: </A.Paragraph>
              )}
              {desc && <A.Paragraph className={paragraph}>{desc}</A.Paragraph>}
              {!!data.length && (
                <A.List className={list}>
                  {data.map((value, index) => {
                    return (
                      <A.ListItem key={index} className={listItem}>
                        - {value}
                      </A.ListItem>
                    )
                  })}
                </A.List>
              )}
            </Fragment>
          ))}
        </A.Section>

        <A.Section className={section}>
          <Image fluid={file.childImageSharp.fluid} alt="delivery map" />
        </A.Section>
      </A.Container>
    </A.Wrapper>
  )
}

const query = graphql`
  {
    file(relativePath: { regex: "/mapka_miasta/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Area
