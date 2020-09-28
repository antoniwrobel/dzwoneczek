import React from "react"

import footerWhite from "../images/main/footer_white.jpg"
import footerGreen from "../images/main/footer_green.jpg"

import { footerWrapper, img } from "../styles/footer.module.css"

const Footer = (props) => {
  const footerVersion = props.white ? footerWhite : footerGreen

  return (
    <div className={footerWrapper}>
      <img src={footerVersion} className={img} alt="footer" />
    </div>
  )
}

export default Footer
