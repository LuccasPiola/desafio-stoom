import React from 'react'

import { useHistory } from 'react-router-dom'
import monday from '../../assets/calabresa.png'
import tuesday from '../../assets/da-casa.png'
import wednesday from '../../assets/borda-recheada.png'
import thursday from '../../assets/margherita.png'
import friday from '../../assets/pizza-grande.png'
import saturday from '../../assets/pizza-2.png'
import sunday from '../../assets/borda-vulcao.png'

import { SIZE_COMMENTS } from '../../constants'
import { Steps } from '../Steps/types'

import { useStackFluxContext } from '../../context/flux.context'

import * as S from './styles'

export default function Suggestion(): JSX.Element {
  const todayAsDayOfWeek = new Date().getDay()
  const pizzas = [
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  ]

  const [selectedButton, setSelectedButton] = React.useState(1)
  const history = useHistory()
  const { instantiate } = useStackFluxContext()

  return (
    <S.Wrapper>
      <aside>
        <h1>Sugestão do dia</h1>
        <img
          src={pizzas[todayAsDayOfWeek]}
          alt="tamanho"
          width={450}
          height={450}
        />
      </aside>

      <div>
        <main>
          <h1>Qual tamanho você deseja?</h1>

          <div>
            <S.Option
              onClick={() => setSelectedButton(1)}
              isSelected={selectedButton === 1}
            >
              Tradicional
            </S.Option>
            <S.Option
              onClick={() => setSelectedButton(2)}
              isSelected={selectedButton === 2}
            >
              Grande
            </S.Option>
            <S.Option
              onClick={() => setSelectedButton(3)}
              isSelected={selectedButton === 3}
            >
              Família
            </S.Option>
          </div>
        </main>

        <article>
          <h2 key={selectedButton}>
            &quot;
            {SIZE_COMMENTS[selectedButton - 1]}
            &quot; Chef Piola
          </h2>
        </article>

        <footer>
          <S.Back onClick={() => history.push('/')}>Voltar</S.Back>
          <S.Next onClick={() => instantiate(Steps.conclusion)}>Próximo</S.Next>
        </footer>
      </div>
    </S.Wrapper>
  )
}
