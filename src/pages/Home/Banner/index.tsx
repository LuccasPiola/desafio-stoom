import React from 'react'
import { useHistory } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import pizza from '../../../assets/pizza-2.png'

import * as S from './styles'

export default function Banner(): JSX.Element {
  const history = useHistory()
  return (
    <S.Wrapper>
      <LazyLoadImage src={pizza} alt="pizza" width={440} />

      <aside>
        <h1>Chegou a hora da pizza!</h1>
        <h2>Você monta do jeitinho que você quiser.</h2>
        <hr />

        <h3>Com os ingredientes direto do coração:</h3>
        <S.ButtonArea>
          <S.YellowButton onClick={() => history.push('/pizza')}>
            Monte a sua
          </S.YellowButton>
          <span>ou</span>
          <S.OutlineButton onClick={() => history.push('/sugestao')}>
            Peça uma sugestão
          </S.OutlineButton>
        </S.ButtonArea>
      </aside>
    </S.Wrapper>
  )
}
