import React from "react"

import * as P from "../styled/PackageOptions/styles"
import {
  wrapper,
  option,
  header,
  listItems,
  item,
  description,
  button,
} from "../styles/packageOptions.module.css"

const options = [
  {
    id: 1,
    list: ["obiady", "podwieczorki", "napoje"],
    color: "#08abff",
    desc: [
      {
        id: 1,
        content:
          "Pakiet przygotowany dla placówek, które serwują swoim podopiecznym sniadania we własnym zakresie. W skład pakietu wchodzą obiady, kolacje oraz napoje.",
      },
      {
        id: 2,
        content:
          "Jadłospis oraz harmonogram dostaw ustalany jest indywidualnie z kierownictwem palcówki.",
      },
      {
        id: 3,
        content:
          "Skontaktuj się z nami i przekaż nam szczegółowe inforamcję - my w odpowiedzi przygotujemy skrojoną na miarę ofertę, dopasowaną do twoch wymagań.",
      },
    ],
  },
  {
    id: 2,
    list: ["śniadania", "obiady", "podwieczorki", "napoje"],
    color: "#70ebdb",
    desc: [
      {
        id: 1,
        content:
          "Pakiet obejmuje całodzienne wyżywienie dziecka podczas pobytu w placówce.<strong> W ramach tego pakietu, wszystkie napoje dołączane są do zestawów za darmo!</strong>",
      },
      {
        id: 2,
        content:
          "Jadłospis oraz harmonogram dostaw ustalany jest indywidualnie z kierownictwem palcówki.",
      },
      {
        id: 3,
        content:
          "Skontaktuj się z nami i przekaż nam szczegółowe inforamcję - my w odpowiedzi przygotujemy skrojoną na miarę ofertę, dopasowaną do twoch wymagań.",
      },
    ],
  },
]

const handleDesc = content => ({ __html: content })

const PackageOptions = () => {
  return (
    <P.Wrapper className={wrapper}>
      {options.map(({ id, list, color, desc }) => {
        return (
          <P.Option key={id} className={option} color={color}>
            <P.Header className={header} bg={color}>
              Pakiet {id}
              <P.ListItems className={listItems}>
                {list.map((elem, id) => {
                  return (
                    <P.List key={elem} className={item}>
                      {elem}
                      {id !== list.length - 1 && "+"}
                    </P.List>
                  )
                })}
              </P.ListItems>
            </P.Header>
            <P.ListItems className={description}>
              {desc.map(({ id, content }) => {
                return (
                  <P.List
                    key={id}
                    dangerouslySetInnerHTML={handleDesc(content)}
                  />
                )
              })}
            </P.ListItems>
            <P.Button to="/kontakt" className={button}>
              Zapytaj o ofertę
            </P.Button>
          </P.Option>
        )
      })}
    </P.Wrapper>
  )
}

export default PackageOptions
