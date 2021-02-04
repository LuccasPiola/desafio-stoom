import React from 'react'

import margherita from '../../../assets/margherita.png'
import vulcan from '../../../assets/borda-vulcao.png'
import filled from '../../../assets/borda-recheada.png'

import * as S from '../styles'

export default function BorderStep(): JSX.Element {
  return (
    <S.Wrapper>
      <aside>
        <h1>A borda</h1>
        <img src={vulcan} alt="borda" width={450} height={450} />
      </aside>

      <div>
        <main>
          <h1>Agora a borda!</h1>

          <div>
            <S.Option onClick={() => 1} isSelected>
              Tradicional
            </S.Option>
            <S.Option onClick={() => 1}>Recheada</S.Option>
            <S.Option onClick={() => 1}>Vulcão</S.Option>
          </div>
        </main>

        <article>
          {/* <h2>
            &quot;Pizza tradicional é com borda tradicional! Macia, quentinha e
            feita com muito amor, nossa borda tradicional é muito mais do que
            normal!&quot; Chef Piola
          </h2>

          <h2>
            &quot;Recheadíssima com o catupiry de mais pura qualidade, a nossa
            borda é tão recheada que parece até uma segunda pizza! Vamos
            comer?&quot; Chef Piola
          </h2> */}

          <h2>
            &quot;Nossa especialidade, a borda vulcão é recheada com um molho
            especial do chef, com especiarias selecionadas pros paladares mais
            requintados!&quot; Chef Piola
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
