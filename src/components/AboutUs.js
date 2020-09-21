import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import * as A from "../styled/AboutUs/styles"
import {
  wrapper,
  header,
  headerSmall,
  description as desc,
  content,
  image,
  lastContent,
  article,
} from "../styles/aboutUs.module.css"

const PINK = "#f67685"
const GREEN = "#83a840"
const YELLOW = "#dea542"
const BLUE = "#496dbe"

const articles = [
  {
    id: 1,
    title: "",
    alt: "kids having fun",
    description: `<strong>Prywatne Przedszkole Terapeutyczne „Dzwoneczek”</strong> 
    powstało w 2015 roku. Nasza palcówka specjalizuje
    się w terapii i edukacji dzieci z zaburzeniami
    ze spektrum autyzmu. Oferujemy wachlarz terapii,
    indywidualnie dostosowany do potrzeb każdego 
    dziecka. W terapii dzieci naszym priorytetem jest
    zbudowanie jak najlepszej relacji i zapewnienie im
    poczucia bezpieczeństwa. Ważnym asektem jest
    integracja dzieci autystycznych z rówieśnikami.
    <br/>
    <br/>
    Absolwenci naszego przedszkola często trafiają do
    szkół masowych bez orzeczenia o potrzebie
    kształcenia specjalnego. <strong style="color: ${GREEN};">Kompleksowa terapia 
    obejmuje: </strong>psychologa, pedagogów specjalnych, 
    terapeutę integracji sensorycznej, logopedę, 
    terapeutów behawioralnych oraz fizjoterapeutę. 
    <br/>
    <br/>
    Wśród zajęć dodatkowych <strong style="color :${BLUE}">wspomagającytch 
    rozwój dzieci</strong> oferujemy: dogoterapię, język angielski
    zajęcia sportowe z cyklu „Przedszkoliada”, 
    logorytmikę, zajęcia korekcyjne. 
  `,
  },
  // {
  //   id: 2,
  //   title: "Nasza oferta",
  //   alt: "kids having fun",
  //   description: `Nasza oferta obejmuje dwa pakiety żywienia dostarczane
  //   codziennie do placówek oświatowych. Naszym klientom dajemy
  //   do wyboru pakiet dwu lub trzy posiłkowy. <span style="color:${YELLOW};">W przypadku pakietu
  //   3-posiłkowego dodajemy do zamówień gratisowe napoje dla
  //   każdego dziecka.</span>
  //   <br/>
  // <br/>
  //   Szczegółowe warunki oferty, takie jak preferowane jadłospsy,
  //   harmonogramy dostaw, wykluczenia produktów oraz listę
  //   alergenów - uzgadniami indywidualnie z kierownictwem
  //   danej placówki. <span style="color:${BLUE};">Jesteśmy elastyczni i otwarci na propozycję,
  //   staramy się ograniczyć liczbę mogących pojawić się podczas
  //   współpracy problemów do minimum.</span> Zapoznaj się z naszą ofertą
  //   lub skontaktuj się z nami aby poznać szczegóły.`,
  // },
]

const createDesc = (desc) => ({ __html: desc })

const AboutUs = () => {
  const data = useStaticQuery(query)
  const {
    allFile: { nodes },
  } = data

  return (
    <A.Wrapper className={wrapper} id="o-nas">
      <A.Articles>
        {articles.map(({ id, title, description, alt }, index) => {
          return (
            <A.Article key={id} className={article}>
              {title && <A.HeaderSmall className={headerSmall}>{title}</A.HeaderSmall>}
              <A.Content className={`${content} ${index === 1 ? lastContent : null}`}>
                <A.Description dangerouslySetInnerHTML={createDesc(description)} className={desc} />
                <Image fluid={nodes[index].childImageSharp.fluid} alt={alt} className={image} />
              </A.Content>
            </A.Article>
          )
        })}
      </A.Articles>
    </A.Wrapper>
  )
}

const query = graphql`
  {
    allFile(filter: { dir: { regex: "/aboutUs/" } }, sort: { fields: name }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        id
      }
    }
  }
`

export default AboutUs
