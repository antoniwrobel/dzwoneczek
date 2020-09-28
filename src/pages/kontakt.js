import React from "react"

import SEO from "../components/Seo"
import Layout from "./layout"
import HeroIndex from "../components/HeroIndex"

import Contact from "../components/ContactUs"
import Footer from "../components/Footer"

import * as K from "../styled/Offer/styles"
import { wrapper, details, detail, desc as descClass } from "../styles/offer.module.css"
import HeaderSeparator from "../components/HeaderSeparator"

const createDesc = (desc) => ({ __html: desc })

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Dzwoneczek | kontakt" />
      <HeroIndex small />
      <HeaderSeparator value="kontakt" />

      <Contact />
      <Footer white />
    </Layout>
  )
}

export default ContactPage
