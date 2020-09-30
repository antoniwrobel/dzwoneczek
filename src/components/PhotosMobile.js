import React from "react"

import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { mobilePhotos, swiperImg, slogan } from "../styles/home.module.css"

import SwiperCore, { Thumbs, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Navigation, Pagination])

const slogans = [
  { id: 0, name: "Profesjonalizm", color: "rgb(255, 252, 164)" },
  { id: 1, name: "Nauka i zabawa", color: "rgb(196, 249, 254)" },
  { id: 2, name: "Terapeutyka", color: "rgb(243, 255, 216)" },
]

const Slogan = styled.div`
  color: ${({ color }) => color};
`

const PhotosMobile = () => {
  const {
    allFile: { nodes },
  } = useStaticQuery(query)

  return (
    <Swiper id="main" loop className={mobilePhotos} spaceBetween={50} slidesPerView={1}>
      {nodes.map(({ childImageSharp: { fluid }, id }, index) => {
        return (
          <SwiperSlide key={id} className={swiperImg}>
            <Image fluid={fluid} key={id} />
            <Slogan className={slogan} color={slogans[index].color}>
              {slogans[index].name}
            </Slogan>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

const query = graphql`
  {
    allFile(filter: { dir: { regex: "/ourValues/" } }, sort: { fields: relativePath }) {
      nodes {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
        id
      }
    }
  }
`

export default PhotosMobile
