import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import Layout from "./layout"
import HeroIndex from "../components/HeroIndex"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"
import HeaderSeparator from "../components/HeaderSeparator"
import Recomendations from "../components/Recomendations"

import { recomendationWrapper, crewWrapper } from "../styles/home.module.css"
import AboutUsTwo from "../components/AboutUsTwo"

const createDesc = (desc) => {
  return {
    __html: desc
      .split("\n")

      .map((line) => line + "<br/>"),
  }
}

const CrewPage = ({ data }) => {
  const {
    allDatoCmsCrew: { nodes },
  } = data

  return (
    <Layout>
      <SEO title="Dzwoneczek | karda" />
      <HeroIndex small />
      <HeaderSeparator value="kadra" />
      <div className={crewWrapper}>
        <ul>
          {nodes &&
            nodes.map((elem) => {
              return (
                <li key={elem.id}>
                  <strong>{elem.titleAndFullName}</strong>
                  <span>{elem.role}</span>
                  {elem.achivements && <p dangerouslySetInnerHTML={createDesc(elem.achivements)} />}
                </li>
              )
            })}
        </ul>
      </div>
      <div className={recomendationWrapper}>
        <HeaderSeparator value="rekomendacje" bg="#fff498" top="-50px" />
        <Recomendations />
      </div>

      <HeaderSeparator value="terapie" top="30px" />
      <AboutUsTwo />

      <Footer white />
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsCrew(sort: { fields: positionNumber, order: ASC }) {
      nodes {
        achivements
        id
        role
        titleAndFullName
        positionNumber
      }
    }
  }
`

export default CrewPage
