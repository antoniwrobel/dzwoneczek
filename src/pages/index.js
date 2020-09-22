import React from "react"
import Layout from "./layout"

import SEO from "../components/Seo"

import Hero from "../components/HeroIndex"
import AboutUs from "../components/AboutUs"

import Recomendations from "../components/Recomendations"
import Gallery from "../components/Gallery"

import Footer from "../components/Footer"

import HeaderSeparator from "../components/HeaderSeparator"

import { recomendationWrapper } from "../styles/home.module.css"

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Dzwoneczek | przedszkole terapeutyczne" swiper captcha />
      <Hero />
      <HeaderSeparator value="o nas" />
      <AboutUs />
      <HeaderSeparator value="rekomendacje" bg="#fff498" />
      <div className={recomendationWrapper}>
        <Recomendations />
      </div>
      {/* <AboutUs /> */}
      {/* <Gallery /> */}
      {/* <Footer /> */}
    </Layout>
  )
}

export default HomePage
