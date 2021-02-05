import React from 'react'

import Loading from '../../../components/Loading'

import { BORDER_TYPES } from '../../../constants'

import { useStackFluxContext } from '../../../context/flux.context'
import { useCommentContext } from '../../../context/comments.context'
import { useFormContext } from '../../../context/form.context'

import margherita from '../../../assets/margherita.png'
import vulcan from '../../../assets/borda-vulcao.png'
import filled from '../../../assets/borda-recheada.png'

import { Steps } from '../types'
import * as S from '../styles'

export default function BorderStep(): JSX.Element {
  const borders = [margherita, filled, vulcan]
  const [selectedButton, setSelectedButton] = React.useState(1)
  const { instantiate, removeLast } = useStackFluxContext()
  const { comments, isLoading } = useCommentContext()
  const { updateForm } = useFormContext()

  return isLoading ? (
    <Loading />
  ) : (
    <S.Wrapper>
      <aside>
        <h1>A borda</h1>
        <S.AnimatedImage
          src={borders[selectedButton - 1]}
          alt="borda"
          width={450}
          height={450}
          key={selectedButton}
          effect="blur"
        />
      </aside>

      <div>
        <main>
          <h1>Agora a borda!</h1>

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
              Recheada
            </S.Option>
            <S.Option
              onClick={() => setSelectedButton(3)}
              isSelected={selectedButton === 3}
            >
              Vulcão
            </S.Option>
          </div>
        </main>

        <article>
          <h2 key={selectedButton}>
            &quot;
            {comments.border[selectedButton - 1]}
            &quot; Chef Piola
          </h2>
        </article>

        <footer>
          <S.Back onClick={() => removeLast()}>Voltar</S.Back>
          <S.Next
            onClick={() => {
              updateForm({ border: BORDER_TYPES[selectedButton - 1] })
              instantiate(Steps.size)
            }}
          >
            Próximo
          </S.Next>
        </footer>
      </div>
    </S.Wrapper>
  )
}
