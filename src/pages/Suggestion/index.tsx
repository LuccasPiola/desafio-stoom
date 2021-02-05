import React from 'react'

import { useHistory } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import Loading from '../../components/Loading'

import monday from '../../assets/calabresa.png'
import tuesday from '../../assets/da-casa.png'
import wednesday from '../../assets/borda-recheada.png'
import thursday from '../../assets/margherita.png'
import friday from '../../assets/pizza-grande.png'
import saturday from '../../assets/pizza-2.png'
import sunday from '../../assets/borda-vulcao.png'

import { useStackFluxContext } from '../../context/flux.context'
import { useCommentContext } from '../../context/comments.context'

import api from '../../services/api'

import { Steps } from '../Steps/types'
import * as S from './styles'

export default function Suggestion(): JSX.Element {
  const suggestionsByDay = [
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  ]
  const [selectedButton, setSelectedButton] = React.useState(1)
  const [isLoading, setIsLoading] = React.useState(true)
  const [dayOfWeek, setDayOfWeek] = React.useState(0)
  const history = useHistory()
  const { instantiate, reset } = useStackFluxContext()
  const { comments } = useCommentContext()

  const handleAPI = React.useCallback(async () => {
    try {
      const response = await api.get('/suggestion')
      setDayOfWeek(response.data.dayOfTheWeek)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }, [])

  React.useEffect(() => {
    handleAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isLoading ? (
    <Loading />
  ) : (
    <S.Wrapper>
      <aside>
        <h1>Sugestão do dia</h1>
        <LazyLoadImage
          src={suggestionsByDay[dayOfWeek]}
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
          <S.Back
            onClick={() => {
              reset()
              history.push('/')
            }}
          >
            Voltar
          </S.Back>
          <S.Next onClick={() => instantiate(Steps.conclusion)}>Próximo</S.Next>
        </footer>
      </div>
    </S.Wrapper>
  )
}
