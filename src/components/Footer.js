import React from "react"
import { Link } from "gatsby"

import { AnchorLink } from "gatsby-plugin-anchor-links"

import * as F from "../styled/Footer/styles"
import {
  wrapper,
  container,
  columnsWrapper,
  column,
} from "../styles/footer.module.css"

const Footer = () => {
  return (
    <F.Wrapper className={wrapper}>
      <F.Container className={container}>
        <F.ColumnsWrapper className={columnsWrapper}>
          <F.Column className={column}>
            <h4>KidsFit.pl</h4>
            <div>
              <p>Fit Perfect Patryk Knap</p>
              <p>Warszawska 20</p>
              <p>21-400 Łuków</p>
            </div>

            <div>
              <p>NIP: 825-218-14-07</p>
              <p>REGON: 368952592</p>
            </div>
          </F.Column>
          <F.Column className={column}>
            <h4>Informacje</h4>
            <div>
              <a href="/">Regulamin</a>
              <a href="/">Polityka prywatności</a>
            </div>
          </F.Column>
          <F.Column className={column}>
            <h4>Nawigacja</h4>
            <div>
              <Link to="/oferta">Oferta</Link>
              <AnchorLink to="/#o-firmie">O firmie</AnchorLink>
              <AnchorLink to="/#area">Obszar działania</AnchorLink>
              <AnchorLink to="/#gallery">Galeria</AnchorLink>
              <Link to="/kontakt">Kontakt</Link>
            </div>
          </F.Column>
          <F.Column className={column}>
            <h4>Kontakt</h4>
            <div>
              <p>
                Telefon: <span>570 498 498</span>
              </p>
              <p>
                E-mail: <span>kontakt@kidsfit.pl</span>
              </p>
            </div>

            <div>
              <a
                href="mailto:admin@fitkids.pl"
                target="_blank"
                rel="noreferrer"
              >
                Zgłoś problem
              </a>
            </div>
          </F.Column>
        </F.ColumnsWrapper>
      </F.Container>
    </F.Wrapper>
  )
}

export default Footer
