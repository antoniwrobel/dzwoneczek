import styled from "styled-components"
import BackgroundImg from "gatsby-image"

export const Wrapper = styled.div``

export const BackgroundImage = styled(BackgroundImg)`
  width: 100%;
`

export const Card = styled.div``

export const CardHearder = styled.h3`
  color: ${({ color }) => color};
`

export const CardDesc = styled.p``

export const Title = styled.span`
  color: ${({ color }) => color};
`
