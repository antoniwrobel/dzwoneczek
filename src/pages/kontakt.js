import React from "react"

import SEO from "../components/Seo"
import Layout from "./layout"
import Hero from "../components/Hero"

import Contact from "../components/ContactUs"
import Footer from "../components/Footer"

import * as K from "../styled/Offer/styles"
import { wrapper, details, detail, desc as descClass } from "../styles/offer.module.css"

const createDesc = (desc) => ({ __html: desc })

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Fitkids | kontakt" />
      <Hero />
      <K.Wrapper className={wrapper}>
        <h2>Skontaktuj się z nami</h2>
        konakt form
      </K.Wrapper>

      <Contact title="Formularz kontaktowy" fromContactPage />
      <Footer />
    </Layout>
  )
}

export default ContactPage
