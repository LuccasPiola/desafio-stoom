import React from 'react'

import logo from '../../assets/icon.png'

import * as S from './styles'

export default function Loading(): JSX.Element {
  return (
    <S.Wrapper>
      <S.AnimatedImage src={logo} alt="logo" effect="blur" />
    </S.Wrapper>
  )
}
