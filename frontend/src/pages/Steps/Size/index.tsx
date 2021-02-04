import React from 'react'

import bigPizza from '../../../assets/pizza-grande.png'

import * as S from '../styles'

export default function SizeStep(): JSX.Element {
  return (
    <S.Wrapper>
      <aside>
        <h1>O tamanho</h1>
        <img src={bigPizza} alt="tamanho" width={450} height={450} />
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
          {/* <h2>
            &quot;Pizza tradicional com 8 pedaços. A famosinha!&quot; Chef Piola
          </h2>
          <h2>
            &quot;Pizza grande com 10 sabores! Tá com fome né?&quot; Chef Piola
          </h2> */}

          <h2>
            &quot;12 pedaços. Eu nunca entendi por que uma pizza precisa se
            chamar tamanho família... E se eu quiser comer ela sozinho?!&quot;
            Chef Piola
          </h2>
        </article>

        <footer>
          <S.Back onClick={() => 1}>Voltar</S.Back>
          <S.Next onClick={() => 1}>Próximo</S.Next>
        </footer>
      </div>
    </S.Wrapper>
  )
}
