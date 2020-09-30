import React from "react"

import SEO from "../components/Seo"
import Layout from "./layout"
import Hero from "../components/HeroIndex"

import * as D from "../styled/Home/styles"
import { container } from "../styles/thanks.module.css"

const OfferPage = () => {
  return (
    <Layout>
      <SEO title="Dzwoneczek | wiadomość wysłana" />
      <Hero small />
      <D.Container className={container}>
        <h2>Dziękujemy za wysłanie wiadomości!</h2>
      </D.Container>
    </Layout>
  )
}

export default OfferPage
