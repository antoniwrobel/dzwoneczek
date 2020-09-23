import React from "react"

import { separator, separatorWrapper } from "../styles/heroIndex.module.css"

const HeaderSeparator = ({ value, bg, top }) => {
  console.log(top)
  return (
    <div className={separatorWrapper} style={{ top: top || "20px" }}>
      <span className={separator} style={{ background: bg || "#fff" }}>
        {value}
      </span>
    </div>
  )
}

export default HeaderSeparator
