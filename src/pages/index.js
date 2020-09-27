import React from "react"
import Layout from "./layout"

import SEO from "../components/Seo"

import Hero from "../components/HeroIndex"
import AboutUs from "../components/AboutUs"

import Recomendations from "../components/Recomendations"
import Gallery from "../components/Gallery"

import Footer from "../components/Footer"

import HeaderSeparator from "../components/HeaderSeparator"

import { recomendationWrapper, galleryWrapper } from "../styles/home.module.css"

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Dzwoneczek | przedszkole terapeutyczne" swiper captcha />
      <Hero />
      <HeaderSeparator value="o nas" />
      <AboutUs />
      <div className={recomendationWrapper}>
        <HeaderSeparator value="rekomendacje" bg="#fff498" top="-50px" />
        <Recomendations />
      </div>
      <HeaderSeparator value="terapie" top="30px" />
      <AboutUs second />
      <div className={galleryWrapper}>
        <HeaderSeparator value="galeria" bg="#e1fe8a" top="-50px" />
        <Gallery />
      </div>

      <Footer />
    </Layout>
  )
}

export default HomePage
