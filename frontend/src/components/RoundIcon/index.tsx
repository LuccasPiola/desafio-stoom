import React from 'react'

import IRoundIconProps from './types'
import * as S from './styles'

export default function RoundIcon({
  icon: Icon,
}: IRoundIconProps): JSX.Element {
  return (
    <S.RoundContainer>
      <Icon size={50} color="#2e2e2e" />
    </S.RoundContainer>
  )
}
