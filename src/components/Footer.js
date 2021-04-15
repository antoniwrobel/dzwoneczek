import React from "react"

import footerGreen from "../images/main/main.jpg"
import footerWhite from "../images/main/main1.jpg"

import footerGreenMobile from "../images/main/main_mobile.jpg"
import footerWhiteMobile from "../images/main/main_mobile1.jpg"

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
