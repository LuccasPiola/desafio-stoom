import React from 'react'
import { useHistory } from 'react-router-dom'
import Loading from '../../../components/Loading'
import { useStackFluxContext } from '../../../context/flux.context'
import api from '../../../services/api'

import * as S from './styles'

export default function Conclusion(): JSX.Element {
  const { reset, getLength } = useStackFluxContext()
  const length = getLength()
  const [chefMessage, setChefMessage] = React.useState('')
  const history = useHistory()

  const handleAPI = React.useCallback(async () => {
    try {
      const response = await api.post('/suggestion/aceitar')
      setChefMessage(response.data.chefMessage)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }, [])

  React.useEffect(() => {
    if (length === 3) handleAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return length === 3 && !chefMessage ? (
    <Loading />
  ) : (
    <S.Wrapper>
      <h1>Tudo pronto!</h1>
      <h2>Agora é só esperar a pizza chegar até você!</h2>
      <h3>{chefMessage}</h3>

      <S.Next
        onClick={() => {
          reset()
          history.push('/')
        }}
      >
        Finalizar
      </S.Next>
    </S.Wrapper>
  )
}
