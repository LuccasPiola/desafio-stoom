import React from 'react'

import IRoundIconProps from './types'
import * as S from './styles'

export default function RoundIcon({
  icon: Icon,
  size,
  color,
}: IRoundIconProps): JSX.Element {
  return (
    <S.RoundContainer>
      <Icon size={size} color={color} />
    </S.RoundContainer>
  )
}
