import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { SIZE_TYPES } from '../../../constants'

import { useFormContext } from '../../../context/form.context'
import { useStackFluxContext } from '../../../context/flux.context'
import { useCommentContext } from '../../../context/comments.context'

import Loading from '../../../components/Loading'

import bigPizza from '../../../assets/pizza-grande.png'

import { Steps } from '../types'
import * as S from '../styles'

export default function SizeStep(): JSX.Element {
  const [selectedButton, setSelectedButton] = React.useState(1)
  const { removeLast, instantiate } = useStackFluxContext()
  const { comments, isLoading } = useCommentContext()
  const { updateForm } = useFormContext()

  return isLoading ? (
    <Loading />
  ) : (
    <S.Wrapper>
      <aside>
        <h1>O tamanho</h1>
        <LazyLoadImage
          src={bigPizza}
          alt="tamanho"
          width={450}
          height={450}
          effect="blur"
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
            {comments.size[selectedButton - 1]}
            &quot; Chef Piola
          </h2>
        </article>

        <footer>
          <S.Back onClick={() => removeLast()}>Voltar</S.Back>
          <S.Next
            onClick={() => {
              updateForm({ size: SIZE_TYPES[selectedButton - 1] })
              instantiate(Steps.conclusion)
            }}
          >
            Próximo
          </S.Next>
        </footer>
      </div>
    </S.Wrapper>
  )
}
