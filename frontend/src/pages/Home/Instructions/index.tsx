import React from 'react'

import { GiDoughRoller, GiCheeseWedge, GiFullPizza } from 'react-icons/gi'
import { GoDashboard } from 'react-icons/go'
import { BsArrowRight } from 'react-icons/bs'
import { IoFastFood } from 'react-icons/io5'

import RoundIcon from '../../../components/RoundIcon'

import * as S from './styles'

export default function Instructions(): JSX.Element {
  return (
    <S.Wrapper>
      <h1>Veja só como é fácil:</h1>
      <S.IconArea>
        <div>
          <RoundIcon icon={GiDoughRoller} />
          <p>Escolha a massa</p>
        </div>

        <BsArrowRight size={60} color="#2e2e2e" />

        <div>
          <RoundIcon icon={GiCheeseWedge} />
          <p>Escolha o recheio</p>
        </div>

        <BsArrowRight size={60} color="#2e2e2e" />

        <div>
          <RoundIcon icon={GoDashboard} />
          <p>Escolha uma borda</p>
        </div>

        <BsArrowRight size={60} color="#2e2e2e" />

        <div>
          <RoundIcon icon={GiFullPizza} />
          <p>O tamanho também</p>
        </div>

        <BsArrowRight size={60} color="#2e2e2e" />

        <div>
          <RoundIcon icon={IoFastFood} />
          <p>Aquela bebidinha</p>
        </div>
      </S.IconArea>
    </S.Wrapper>
  )
}
