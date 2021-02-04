import React from 'react'
import { useLocation } from 'react-router-dom'

import logo from '../../assets/logo.png'

import { useStackFluxContext } from '../../context/flux.context'

import * as S from './styles'

export default function Navbar(): JSX.Element {
  const location = useLocation()
  const { getLength } = useStackFluxContext()
  const length = getLength()
  const inStep = location.pathname === '/pizza'
  const inSuggestion = location.pathname === '/sugestao'

  return (
    <S.Wrapper>
      <div>
        <img src={logo} alt="logo" />
        <h1>Pizza Time!</h1>
      </div>
      <ul>
        <S.NavbarItem isActive={!inStep && !inSuggestion} isVisible>
          Início
        </S.NavbarItem>
        <S.NavbarItem isVisible={inStep} isActive={length === 1}>
          A massa
        </S.NavbarItem>
        <S.NavbarItem isVisible={inStep && length >= 2} isActive={length === 2}>
          O recheio
        </S.NavbarItem>
        <S.NavbarItem isVisible={inStep && length >= 3} isActive={length === 3}>
          A borda
        </S.NavbarItem>
        <S.NavbarItem isVisible={inStep && length >= 4} isActive={length === 4}>
          O tamanho
        </S.NavbarItem>
        <S.NavbarItem isVisible={inSuggestion} isActive={inSuggestion}>
          Sugestão
        </S.NavbarItem>
      </ul>
    </S.Wrapper>
  )
}
