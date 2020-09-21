import React from "react"

import { separator, separatorWrapper } from "../styles/heroIndex.module.css"

const HeaderSeparator = ({ value }) => {
  return (
    <div className={separatorWrapper}>
      <span className={separator}>{value}</span>
    </div>
  )
}

export default HeaderSeparator
