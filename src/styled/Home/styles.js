import styled from "styled-components"
import Image from "gatsby-image"

export const Wrapper = styled.div`
  width: 100%;
`

export const Container = styled.div``

export const BackgroundImage = styled(Image)`
  height: ${({ indexPage }) => (indexPage ? "782px" : "450px")};
`

export const HeroSlider = styled.div``

export const Headers = styled.div``

export const Header = styled.div`
  color: ${({ color }) => color || "#fff"};
`

export const BackgroundImageCustom = styled(Image)``

export const Content = styled.div``

export const Paragraph = styled.p``
