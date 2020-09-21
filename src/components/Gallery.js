import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import SwiperCore, { EffectCoverflow } from "swiper"

import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"

import { wrapper, header, container } from "../styles/gallery.module.css"
import * as G from "../styled/Gallery/styles"

SwiperCore.use([EffectCoverflow])

const Gallery = () => {
  const [mobile, setMobile] = useState(false)
  const [params, setParams] = useState({})

  useEffect(() => {
    setParams({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      effect: "coverflow",
      containerClass: "gallery-swiper",
      centeredSlides: true,
      slidesPerView: mobile ? 1 : 3,
    })
  }, [mobile])

  const {
    allFile: { nodes },
  } = useStaticQuery(query)

  useEffect(() => {
    setMobile(window.innerWidth <= 1019)
  }, [])

  if (!Object.keys(params).length) {
    return "loading..."
  }

  return (
    <G.Wrapper className={wrapper} id="gallery">
      <G.Container className={container}>
        <G.Header className={header}>Galeria naszych posiłków</G.Header>
        <SimpleReactLightbox>
          <SRLWrapper>
            <G.SwiperElement {...params}>
              {nodes.map(({ childImageSharp: { fluid }, id }) => {
                return <Image fluid={fluid} key={id} />
              })}
            </G.SwiperElement>
          </SRLWrapper>
        </SimpleReactLightbox>
      </G.Container>
    </G.Wrapper>
  )
}

const query = graphql`
  {
    allFile(filter: { dir: { regex: "/gallery/" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 270) {
            ...GatsbyImageSharpFluid
          }
        }
        id
      }
    }
  }
`

export default Gallery
