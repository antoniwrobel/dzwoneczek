import React from "react" // , { useEffect, useState }
// import { graphql, useStaticQuery } from "gatsby"
// import Image from "gatsby-image"

import fb from "../images/main/fb.png"

import {
  wrapper,
  // card,
  // swiper,
  // name,
  // small,
  // image,
  // hearts,
  // desc,
  // img,
  // upper,
  // userDetails,
} from "../styles/recomendations.module.css"

import * as R from "../styled/Recomendations/styles"

// const defParams = {
//   spaceBetween: 55,
//   loop: true,
// }

const Recomendations = () => {
  // const [mobile, setMobile] = useState(false)
  // const [params, setParams] = useState({})
  // const [done, setDone] = useState(false)

  // useEffect(() => {
  //   setMobile(window.innerWidth <= 1019)
  //   setParams({ ...defParams })
  //   setDone(true)
  // }, [])

  // useEffect(() => {
  //   if (!done) return
  //   setParams({
  //     ...defParams,
  //     slidesPerView: mobile ? 1 : 3,
  //   })
  // }, [mobile])

  // const {
  //   allDatoCmsReview: { nodes },
  //   file: heartImg,
  // } = useStaticQuery(query)

  // if (nodes.length === 0) {
  //   return <R.Empty />
  // }

  // if (!Object.keys(params).length) return <></>

  return (
    <R.Wrapper className={wrapper}>
      <a href="https://www.facebook.com/przedszkoledzwoneczek.lazy" target="_blank">
        <img src={fb} alt="facebook page" style={{ maxWidth: "110px" }} />
      </a>
    </R.Wrapper>
    // <R.Wrapper className={wrapper}>
    //   <R.SwiperEl {...params} className={swiper}>
    //     {nodes.map(({ originalId, fullName, role, rating, description }, index) => {
    //       const heartQ = [...Array(rating)]

    //       return (
    //         <R.Card className={card} key={originalId}>
    //           <R.Upper className={upper}>
    //             <R.Img className={img} src={nodes[index].picture.fixed.src} alt="user photo" />
    //             <R.UserDetails className={userDetails}>
    //               <R.Name className={name}>{fullName}</R.Name>
    //               <R.Small className={small}>{role}</R.Small>
    //               <R.Hearts className={hearts}>
    //                 {heartQ.map((_, idx) => (
    //                   <Image key={idx} className={image} fixed={heartImg.childImageSharp.fixed} alt="heart image" />
    //                 ))}
    //               </R.Hearts>
    //             </R.UserDetails>
    //           </R.Upper>
    //           <R.Desc className={desc}>{description}</R.Desc>
    //         </R.Card>
    //       )
    //     })}
    //   </R.SwiperEl>
    // </R.Wrapper>
  )
}

// const query = graphql`
//   {
//     allDatoCmsReview {
//       nodes {
//         originalId
//         picture {
//           fixed(width: 95, height: 95) {
//             src
//           }
//         }
//         fullName
//         description
//         rating
//         role
//       }
//     }
//     file(relativePath: { regex: "/heart/" }) {
//       id
//       childImageSharp {
//         fixed(width: 20) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `

export default Recomendations
