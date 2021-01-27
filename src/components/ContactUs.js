import React, { useState, useEffect } from "react"

import { navigate } from "gatsby-link"
import Recaptcha from "react-recaptcha"

import * as C from "../styled/ContactUs/styles"
import {
  wrapper,
  container,
  form,
  inputWrap,
  textareaWrap,
  textarea,
  details,
  hidden,
  button,
  color,
} from "../styles/contactUs.module.css"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactUs = ({ title, fromContactPage, fromMenuPage }) => {
  const [state, setState] = useState({})
  const [valid, setValid] = useState(false)

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
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
      .catch((error) => alert(error))
  }

  const verifyCallback = (response) => {
    if (response) {
      setValid(true)
    }
  }

  const onloadCallback = () => {}

  return (
    <C.Wrapper className={wrapper}>
      <C.Container className={container}>
        <div className={details}>
          <strong>
            Prywatne Przedszkole <br />
            Terapeutyczne „Dzwoneczek”
          </strong>
          <div>
            <span>Łazy 42e</span>
            <span>21-400 Łuków</span>
          </div>
          <div className={color}>
            <span>Telefon: 505 469 748</span> <span>Mail: terapia61@onet.pl</span>
          </div>
          <ul>
            Godziny otwarcia:
            <li>Pn- Pt: 6:30 - 17:00</li>
            <li>Sb - N: Nieczynne</li>
          </ul>
        </div>
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

          <C.InputWrap className={inputWrap}>
            <label htmlFor="name">Imię i nazwisko:</label>
            <input type="text" name="name" required onChange={handleChange} />
          </C.InputWrap>

          <C.InputWrap className={inputWrap}>
            <label htmlFor="email">Adres email:</label>
            <input type="email" name="email" required onChange={handleChange} />
          </C.InputWrap>
          <C.InputWrap className={inputWrap}>
            <label htmlFor="phone">Numer telefonu:</label>
            <input type="number" name="phone" required onChange={handleChange} />
          </C.InputWrap>

          <C.InputWrap className={`${inputWrap} ${textareaWrap}`}>
            <label htmlFor="message">Treść zapytania:</label>
            <textarea type="text" name="message" required className={textarea} onChange={handleChange} />
          </C.InputWrap>
          <input data-netlify-recaptcha="true" className={hidden} hidden />

          <Recaptcha
            sitekey="6LexS88ZAAAAAOOCIg4u_1b6xAkZKN3NKTV3yiu3"
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

export default ContactUs
