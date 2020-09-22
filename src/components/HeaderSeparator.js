import React from "react"

import { separator, separatorWrapper } from "../styles/heroIndex.module.css"

const HeaderSeparator = ({ value, bg }) => {
  return (
    <div className={separatorWrapper}>
      <span className={separator} style={{ background: bg || "#fff" }}>
        {value}
      </span>
    </div>
  )
}

export default HeaderSeparator
