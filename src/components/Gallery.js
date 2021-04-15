import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import SwiperCore, { Thumbs, Navigation } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

import { wrapper, header, container } from "../styles/gallery.module.css"
import * as G from "../styled/Gallery/styles"

import "swiper/swiper-bundle.css"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/scrollbar/scrollbar.scss"

SwiperCore.use([Thumbs, Navigation])

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const {
    allFile: { nodes },
  } = useStaticQuery(query)

  return (
    <G.Wrapper className={wrapper} id="galeria">
      <G.Container className={container}>
        <Swiper id="main" navigation thumbs={{ swiper: thumbsSwiper }}>
          {nodes.map(({ childImageSharp: { fluid }, id }, index) => {
            return (
              <SwiperSlide key={id}>
                <div style={{ maxHeight: "100%", height: "600px" }}>
                  <Image fluid={fluid} key={id} style={{ maxHeight: "100%" }} imgStyle={{ objectFit: "contain" }} />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <Swiper id="thumbs" onSwiper={setThumbsSwiper} spaceBetween={30} slidesPerView={3}>
          {nodes.map(({ childImageSharp: { fluid }, id }) => {
            return (
              <SwiperSlide key={id}>
                <div style={{ maxHeight: "100%", height: "200px", display: "flex" }}>
                  <Image
                    fluid={fluid}
                    key={id}
                    style={{ maxHeight: "100%", width: "100%" }}
                    imgStyle={{ objectFit: "contain" }}
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </G.Container>
    </G.Wrapper>
  )
}

const query = graphql`
  {
    allFile(filter: { dir: { regex: "/gallery/" } }) {
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

export default Gallery
