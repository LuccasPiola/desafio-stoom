import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStackFluxContext } from '../../../context/flux.context'

import * as S from './styles'

export default function Conclusion(): JSX.Element {
  const { reset } = useStackFluxContext()
  const history = useHistory()
  return (
    <S.Wrapper>
      <h1>Tudo pronto!</h1>
      <h2>Agora é só esperar a pizza chegar até você!</h2>

      <S.Next
        onClick={() => {
          reset()
          history.push('/')
        }}
      >
        Finalizar
      </S.Next>
    </S.Wrapper>
  )
}
