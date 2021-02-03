import React from 'react'

import pizza from '../../assets/pizza.png'

import Button from '../../components/Button'

import * as S from './styles'

export default function Home(): JSX.Element {
  return (
    <S.Wrapper>
      <img src={pizza} alt="pizza" />

      <aside>
        <h1>Chegou a hora da pizza!</h1>
        <h2>Você monta do jeitinho que você quiser.</h2>
        <hr />

        <h3>Com os ingredientes direto do coração:</h3>
        <S.ButtonArea>
          <S.YellowButton
            onClick={() => {
              console.log('a')
            }}
          >
            Monte a sua
          </S.YellowButton>
          <span>ou</span>
          <S.OutlineButton
            onClick={() => {
              console.log('a')
            }}
          >
            Peça uma sugestão
          </S.OutlineButton>
        </S.ButtonArea>
      </aside>
    </S.Wrapper>
  )
}
