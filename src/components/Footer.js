import React from "react"

import footerWhite from "../images/main/main.jpg"
import footerGreen from "../images/main/main.jpg"

import footerWhiteMobile from "../images/main/main.jpg"
import footerGreenMobile from "../images/main/main.jpg"

import { footerWrapper, img, imgMobile } from "../styles/footer.module.css"

const Footer = (props) => {
  const footerVersion = props.white ? footerWhite : footerGreen
  const footerVersionMobile = props.white ? footerWhiteMobile : footerGreenMobile

  return (
    <div className={footerWrapper}>
      <img src={footerVersion} className={img} alt="footer" />
      <img src={footerVersionMobile} className={imgMobile} alt="footer" />
    </div>
  )
}

export default Footer
