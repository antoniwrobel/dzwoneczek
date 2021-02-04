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
  descLast,
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
    description: `
    `,
  },
]

const lastArticle = `<strong>ZAPRASZAMY WSZYSTKIE DZIECI W WIEKU 2,5- 6 lat </strong> <br><br>
      <h3>
      Przedszkole Dzwoneczek jesteśmy dla dzieci.
      </h3>
      <br>
      Prywatne Przedszkole Terapeutyczne „Dzwoneczek”  to miejsce w którym dzieci są zadbane i bezpieczne. Wysoko wykwalifikowana kadra zapewnia genialne przygotowanie do dalszej edukacji twojego dziecka. 
      <br><br>
      Naszym celem jest dbanie o wszechstronny rozwój. Do każdego dziecka podchodzimy indywidualnie.  
      <br><br>
      W naszym przedszkolu twoje dziecko na pewno nauczy się co to jest tolerancja, pasja, szacunek, wrażliwość oraz kreatywność. Oferujemy pełną gamę zajęć - od zabawy, poprzez zajęcia teatralne, plastyczne, rytmiczno- muzyczne, naukę języka angielskiego, gimnastykę korekcyjną.
      <br><br> 
      Każde dziecko znajdzie u nas zrozumienie, pomoc oraz wsparcie, a także kompleksową opiekę, i terapię specjalistów. 
      Jeśli pojawi się jakikolwiek problem, jesteśmy. 
      <br><br> 
      Nasza palcówka specjalizuje się również w terapii i edukacji dzieci z zaburzeniami ze spektrum autyzmu, zespołem Aspergera, zespołem Downa i innymi dysfunkcjami rozwojowymi. Oferujemy wachlarz terapii, indywidualnie dostosowany do potrzeb każdego dziecka. W terapii dzieci naszym priorytetem jest zbudowanie jak najlepszej relacji i zapewnienie im poczucia bezpieczeństwa. Ważnym aspektem jest integracja dzieci autystycznych z rówieśnikami. 
      <br><br> 
      W SOBOTY przeprowadzamy dodatkowe zajęcia edukacyjne dla wszystkich przedszkolaków.
`

const createDesc = (desc) => ({ __html: desc })

const AboutUs = ({ second }) => {
  const data = useStaticQuery(query)
  const {
    allFile: { nodes },
  } = data

  return (
    <A.Wrapper className={wrapper} id={second ? "terapie" : "o-nas"}>
      <A.Articles>
        {articles.map(({ id, title, description, alt }, index) => {
          if (!second && index === 1) return
          if (second && index === 0) return
          return (
            <A.Article key={id} className={article}>
              <A.Content className={`${content} ${second ? lastContent : null}`}>
                <A.Description dangerouslySetInnerHTML={createDesc(description)} className={desc} />
                <Image fluid={nodes[index].childImageSharp.fluid} alt={alt} className={image} />
              </A.Content>
            </A.Article>
          )
        })}
      </A.Articles>
      <A.Articles>
        <A.Article className={article}>
          <A.Content className={lastContent}>
            <A.Description dangerouslySetInnerHTML={createDesc(lastArticle)} className={descLast} />
          </A.Content>
        </A.Article>
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
