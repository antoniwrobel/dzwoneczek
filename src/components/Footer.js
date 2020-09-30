import React from "react"

import footerWhite from "../images/main/footer_white.jpg"
import footerGreen from "../images/main/footer_green.jpg"

import footerWhiteMobile from "../images/main/footer_mobile_white.jpg"
import footerGreenMobile from "../images/main/footer_mobile_green.jpg"

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
