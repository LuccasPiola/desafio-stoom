import React from 'react'

import { Steps } from '../types'
import { useStackFluxContext } from '../../../context/flux.context'
import { useCommentContext } from '../../../context/comments.context'

import Loading from '../../../components/Loading'

import calabresa from '../../../assets/calabresa.png'
import margherita from '../../../assets/margherita.png'
import daCasa from '../../../assets/da-casa.png'

import * as S from '../styles'

export default function FillingStep(): JSX.Element {
  const [selectedButton, setSelectedButton] = React.useState(1)
  const pizzas = [calabresa, margherita, daCasa]
  const { removeLast, instantiate } = useStackFluxContext()
  const { comments, isLoading } = useCommentContext()

  return isLoading ? (
    <Loading />
  ) : (
    <S.Wrapper>
      <aside>
        <h1>O recheio</h1>
        <S.AnimatedImage
          src={pizzas[selectedButton - 1]}
          alt="recheio"
          width={450}
          height={450}
          key={selectedButton}
        />
      </aside>

      <div>
        <main>
          <h1>Escolha um tipo de recheio</h1>

          <div>
            <S.Option
              onClick={() => setSelectedButton(1)}
              isSelected={selectedButton === 1}
            >
              Calabresa
            </S.Option>
            <S.Option
              onClick={() => setSelectedButton(2)}
              isSelected={selectedButton === 2}
            >
              Margherita
            </S.Option>
            <S.Option
              onClick={() => setSelectedButton(3)}
              isSelected={selectedButton === 3}
            >
              Da casa
            </S.Option>
          </div>
        </main>

        <article>
          <h2 key={selectedButton}>
            &quot;
            {comments.filling[selectedButton - 1]}
            &quot; Chef Piola
          </h2>
        </article>

        <footer>
          <S.Back onClick={() => removeLast()}>Voltar</S.Back>
          <S.Next onClick={() => instantiate(Steps.border)}>Próximo</S.Next>
        </footer>
      </div>
    </S.Wrapper>
  )
}
