import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { navigate } from "gatsby-link"
import Recaptcha from "react-recaptcha"

import * as C from "../styled/ContactUs/styles"
import {
  wrapper,
  header,
  container,
  form,
  inputWrap,
  textareaWrap,
  textarea,
  inputs,
  hidden,
  button,
} from "../styles/contactUs.module.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactUs = ({ title, fromContactPage, fromMenuPage }) => {
  const fromSpecialPage = fromMenuPage || fromContactPage
  const [state, setState] = useState({})
  const [valid, setValid] = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(window.innerWidth <= 1019)
  }, [])

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    if (!valid) {
      return alert("Zaakceptuj reCaptcha.")
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  const verifyCallback = response => {
    if (response) {
      setValid(true)
    }
  }

  const onloadCallback = () => {}

  const data = useStaticQuery(query)

  const fontSize = fromSpecialPage
    ? mobile
      ? "35"
      : "48"
    : mobile
    ? "50"
    : "62"

  return (
    <C.Wrapper
      className={wrapper}
      bg={!fromSpecialPage && data.file.childImageSharp.fluid.src}
    >
      <C.Container className={container}>
        <C.Header className={header} fontSize={fontSize}>
          {title || "Skontaktuj się z nami"}
        </C.Header>
        <C.Form
          name="contact"
          data-netlify="true"
          method="POST"
          netlify
          action="/dziekujemy/"
          netlify-honeypot="bot-field"
          className={form}
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>

          <C.Inputs className={inputs}>
            <C.InputWrap className={inputWrap}>
              <label htmlFor="name">Imię i nazwisko:</label>
              <input type="text" name="name" required onChange={handleChange} />
            </C.InputWrap>
            <C.InputWrap className={inputWrap}>
              <label htmlFor="company">Nazwa firmy:</label>
              <input
                type="input"
                name="company"
                required
                onChange={handleChange}
              />
            </C.InputWrap>
            <C.InputWrap className={inputWrap}>
              <label htmlFor="email">Adres email:</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
              />
            </C.InputWrap>
          </C.Inputs>
          <C.InputWrap className={`${inputWrap} ${textareaWrap}`}>
            <label htmlFor="message">Treść zapytania:</label>
            <textarea
              type="text"
              name="message"
              required
              className={textarea}
              onChange={handleChange}
            />
          </C.InputWrap>
          <input data-netlify-recaptcha="true" className={hidden} hidden />

          <Recaptcha
            sitekey="6LfpRcUZAAAAAIausgzTD112UykaV-htRb4ZGrcA"
            render="explicit"
            verifyCallback={verifyCallback}
            onloadCallback={onloadCallback}
          />

          <C.Button type="submit" className={button}>
            Wyślij
          </C.Button>
        </C.Form>
      </C.Container>
    </C.Wrapper>
  )
}

const query = graphql`
  {
    file(relativePath: { regex: "/bg_pattern_kontakt/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContactUs
