import React from 'react'

import calabresa from '../../../assets/calabresa.png'
import margherita from '../../../assets/margherita.png'
import daCasa from '../../../assets/da-casa.png'

import * as S from '../styles'

export default function FillingStep(): JSX.Element {
  return (
    <S.Wrapper>
      <aside>
        <h1>O recheio</h1>
        <img src={calabresa} alt="recheio" width={450} height={450} />
      </aside>

      <div>
        <main>
          <h1>Escolha um tipo de recheio</h1>

          <div>
            <S.Option onClick={() => 1} isSelected>
              Calabresa
            </S.Option>
            <S.Option onClick={() => 1}>Margherita</S.Option>
            <S.Option onClick={() => 1}>Da casa</S.Option>
          </div>
        </main>

        <article>
          <h2>
            &quot;A tradicional pizza de calabresa, com um toque de pimenta do
            chef. Peça essa recheio de você ama sabores fortes e experiências
            intensas&quot; Chef Piola
          </h2>
          {/*
          <h2>
            &quot;A tão amada pizza de Margherita são para os tradicionais
            amantes da massa italiana. Simplesmente impossível não gostar da
            nossa queridinha&quot; Chef Piola
          </h2>

          <h2>
            &quot;A pizza da casa é a melhor pizza que temos. Recheada com
            frango desfiado, cebolas roxas, azeitonas pretas e um molho de
            tomate especial, você não vai querer pedir outra nunca mais!&quot;
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
