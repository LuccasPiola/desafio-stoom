import React from 'react'

import monday from '../../assets/calabresa.png'
import tuesday from '../../assets/da-casa.png'
import wednesday from '../../assets/borda-recheada.png'
import thursday from '../../assets/margherita.png'
import friday from '../../assets/pizza-grande.png'
import saturday from '../../assets/pizza-2.png'
import sunday from '../../assets/borda-vulcao.png'

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
            <S.Option onClick={() => 1} isSelected>
              Tradicional
            </S.Option>
            <S.Option onClick={() => 1}>Grande</S.Option>
            <S.Option onClick={() => 1}>Família</S.Option>
          </div>
        </main>

        <article>
          <h2>
            &quot;Pizza tradicional com 8 pedaços. A famosinha!&quot; Chef Piola
          </h2>

          {/* <h2>
            &quot;Pizza grande com 10 sabores! Tá com fome né?&quot; Chef Piola
          </h2>

          <h2>
            &quot;12 pedaços. Eu nunca entendi por que uma pizza precisa se
            chamar tamanho família... E se eu quiser comer ela sozinho?!&quot;
            Chef Piola
          </h2> */}
        </article>

        <footer>
          <S.Back onClick={() => 1}>Voltar</S.Back>
          <S.Next onClick={() => 1}>Próximo</S.Next>
        </footer>
      </div>
    </S.Wrapper>
  )
}
