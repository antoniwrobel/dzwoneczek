import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo"
import Layout from "./layout"
import Hero from "../components/Hero"

import Contact from "../components/ContactUs"
import Footer from "../components/Footer"

const MenuPage = ({
  data: {
    allDatoCmsMenu: { nodes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Dzwoneczek | karda" />
      Kadra
      <Contact title="Formularz kontaktowy" fromMenuPage />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  {
    allDatoCmsMenu(sort: { fields: pos, order: ASC }) {
      nodes {
        breakfast
        date(formatString: "DD-MM-YYYY")
        day
        dinner
        tea
        pos
      }
    }
  }
`

export default MenuPage
