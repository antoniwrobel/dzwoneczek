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
  descLastCustom,
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
    <br>
    <br>
    Absolwenci naszego przedszkola często trafiają do
    szkół masowych bez orzeczenia o potrzebie
    kształcenia specjalnego. <strong style="color: ${GREEN};">Kompleksowa terapia 
    obejmuje: </strong>psychologa, pedagogów specjalnych, 
    terapeutę integracji sensorycznej, logopedę, 
    terapeutów behawioralnych oraz fizjoterapeutę. 
    <br>
    <br>
    Wśród zajęć dodatkowych <strong style="color :${BLUE}">wspomagającytch 
    rozwój dzieci</strong> oferujemy: dogoterapię, język angielski
    zajęcia sportowe z cyklu „Przedszkoliada”, 
    logorytmikę, zajęcia korekcyjne. 
  `,
  },
  {
    id: 2,
    title: "Nasza oferta",
    alt: "kids having fun",
    description: ``,
  },
]

const AboutUsTwo = () => {
  const data = useStaticQuery(query)
  const {
    allFile: { nodes },
  } = data

  return (
    <A.Wrapper className={wrapper} id="terapie">
      <A.Articles>
        <A.Article className={article}>
          <A.Content className={`${content} ${lastContent}`}>
            <A.Description className={desc}>
              <strong>Prywatne Przedszkole Terapeutyczne „Dzwoneczek” </strong>
              oferuje dzieciom niepełnosprawnym szereg terapii prowadzonych przez wykfalifikowany personel.
              <br />
              <br />
              <strong>Lista prowadzonych przez nas terapii:</strong>
              <ul>
                <li>• Terapia psychologiczna</li>
                <li>• Terapia logopedyczna</li>
                <li>• Terapia integracji sensorycznej</li>
                <li>• Fizjoterapia</li>
                <li>• Terapia pedagogiczna</li>
                <li>• Terapia behawioralna</li>
                <li>• Terapia ręki</li>
                <li>• Dogoterapia</li>
                <li>• Trening umiejętności społecznych</li>
                <li>• Sensoplastyka</li>
                <li>• Bajkoterapia</li>
                <li>• Muzykoterapia</li>
              </ul>
            </A.Description>
            <Image fluid={nodes[1].childImageSharp.fluid} alt={"background kids"} className={image} />
          </A.Content>
        </A.Article>
        <A.Content>
          <A.Description className={descLastCustom}>
            <h3>
              Najważniejsze jest dobro dziecka, dlatego dzieci posiądajace orzeczenie o kształceniu specjalnym{" "}
              <strong>NIE PŁACĄ CZESNEGO</strong> oraz <strong>WSZYSTKIE </strong>teriapie są <strong>BEZPŁATNE</strong>
            </h3>
          </A.Description>
        </A.Content>
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

export default AboutUsTwo
