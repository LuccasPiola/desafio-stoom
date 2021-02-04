import React from 'react'

import * as S from './styles'

export default function Conclusion(): JSX.Element {
  return (
    <S.Wrapper>
      <h1>Tudo pronto!</h1>
      <h2>Agora é só esperar a pizza chegar até você!</h2>

      <S.Next onClick={() => 1}>Finalizar</S.Next>
    </S.Wrapper>
  )
}
