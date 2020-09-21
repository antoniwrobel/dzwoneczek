import styled from "styled-components"

export const Wrapper = styled.div`
  &::after {
    background: ${({ bg }) => `url(${bg})`};
    background-size: cover;
  }
`
export const Header = styled.h2`
  font-size: ${({ fontSize }) => fontSize}px;
`

export const Container = styled.div``

export const Form = styled.form``

export const InputWrap = styled.div``

export const Button = styled.button``

export const Inputs = styled.div``

export const Hidden = styled.div``
