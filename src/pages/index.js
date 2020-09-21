import React from "react"
import Layout from "./layout"

import SEO from "../components/Seo"

import Hero from "../components/HeroIndex"
import AboutUs from "../components/AboutUs"

import Recomendations from "../components/Recomendations"
import Gallery from "../components/Gallery"

import Footer from "../components/Footer"

import HeaderSeparator from "../components/HeaderSeparator"

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Dzwoneczek | przedszkole terapeutyczne" swiper captcha />
      <Hero />
      <HeaderSeparator value="o nas" />
      <AboutUs />
      {/* <Recomendations /> */}
      {/* <AboutUs /> */}
      {/* <Gallery /> */}
      {/* <Footer /> */}
    </Layout>
  )
}

export default HomePage
