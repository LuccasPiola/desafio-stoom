import React from 'react'

import logo from '../../assets/logo.png'

import * as S from './styles'

export default function Navbar(): JSX.Element {
  return (
    <S.Wrapper>
      <div>
        <img src={logo} alt="logo" />
        <h1>Pizza Time!</h1>
      </div>
      <ul>
        <S.NavbarItem isActive isVisible>
          Início
        </S.NavbarItem>
        <S.NavbarItem isVisible>A massa</S.NavbarItem>
        <S.NavbarItem isVisible>O recheio</S.NavbarItem>
        <S.NavbarItem isVisible>A borda</S.NavbarItem>
        <S.NavbarItem isVisible>O tamanho</S.NavbarItem>
        <S.NavbarItem isVisible>Os acompanhamentos</S.NavbarItem>
      </ul>
    </S.Wrapper>
  )
}
