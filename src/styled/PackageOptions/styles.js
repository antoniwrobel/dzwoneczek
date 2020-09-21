import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div``

export const Option = styled.div`
  border: 5px solid ${({ color }) => color};
  border-top: none;
`

export const Header = styled.div`
  background: ${({ bg }) => bg};
`

export const ListItems = styled.ul``

export const List = styled.li``

export const Desc = styled.p``

export const Button = styled(Link)``
