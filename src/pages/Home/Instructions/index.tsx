import React from 'react'

import { GiDoughRoller, GiCheeseWedge, GiFullPizza } from 'react-icons/gi'
import { GoDashboard } from 'react-icons/go'
import { BsArrowRight } from 'react-icons/bs'

import RoundIcon from '../../../components/RoundIcon'

import * as S from './styles'

export default function Instructions(): JSX.Element {
  return (
    <S.Wrapper>
      <S.IconArea>
        <div>
          <RoundIcon icon={GiDoughRoller} size={50} color="#2e2e2e" />
          <p>Escolha a massa</p>
        </div>

        <BsArrowRight size={60} color="#2e2e2e" />

        <div>
          <RoundIcon icon={GiCheeseWedge} size={50} color="#2e2e2e" />
          <p>Escolha o recheio</p>
        </div>

        <BsArrowRight size={60} color="#2e2e2e" />

        <div>
          <RoundIcon icon={GoDashboard} size={50} color="#2e2e2e" />
          <p>Escolha uma borda</p>
        </div>

        <BsArrowRight size={60} color="#2e2e2e" />

        <div>
          <RoundIcon icon={GiFullPizza} size={50} color="#2e2e2e" />
          <p>O tamanho por último</p>
        </div>
      </S.IconArea>
    </S.Wrapper>
  )
}
