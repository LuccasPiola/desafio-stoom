import React from 'react'

import IButtonProps from './types'
import * as S from './styles'

export default function Button({
  onClick,
  children,
  ...rest
}: IButtonProps): JSX.Element {
  return (
    <S.Wrapper {...rest}>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </S.Wrapper>
  )
}
