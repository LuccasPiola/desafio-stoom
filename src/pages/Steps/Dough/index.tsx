import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import dough from '../../../assets/dough.png'
import { DOUGH_TYPES } from '../../../constants'

import Loading from '../../../components/Loading'

import { useStackFluxContext } from '../../../context/flux.context'
import { useCommentContext } from '../../../context/comments.context'
import { useFormContext } from '../../../context/form.context'

import { Steps } from '../types'
import * as S from '../styles'

export default function DoughStep(): JSX.Element {
  const [selectedButton, setSelectedButton] = React.useState(1)
  const { instantiate } = useStackFluxContext()
  const { updateForm } = useFormContext()
  const { comments, isLoading } = useCommentContext()

  return isLoading ? (
    <Loading />
  ) : (
    <S.Wrapper>
      <aside>
        <h1>A massa</h1>
        <LazyLoadImage
          src={dough}
          alt="massa"
          width={450}
          height={450}
          effect="blur"
        />
      </aside>

      <div>
        <main>
          <h1>Escolha um tipo de massa</h1>

          <div>
            <S.Option
              onClick={() => setSelectedButton(1)}
              isSelected={selectedButton === 1}
            >
              Massa fina
            </S.Option>
            <S.Option
              onClick={() => setSelectedButton(2)}
              isSelected={selectedButton === 2}
            >
              Massa média
            </S.Option>
            <S.Option
              onClick={() => setSelectedButton(3)}
              isSelected={selectedButton === 3}
            >
              Massa grossa
            </S.Option>
          </div>
        </main>

        <article>
          <h2 key={selectedButton}>
            &quot;
            {comments.dough[selectedButton - 1]}
            &quot; Chef Piola
          </h2>
        </article>

        <footer>
          <S.Next
            onClick={() => {
              updateForm({ dough: DOUGH_TYPES[selectedButton - 1] })
              instantiate(Steps.filling)
            }}
          >
            Próximo
          </S.Next>
        </footer>
      </div>
    </S.Wrapper>
  )
}
