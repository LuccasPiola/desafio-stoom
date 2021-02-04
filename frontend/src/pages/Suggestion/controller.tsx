import React from 'react'
import Suggestion from '.'
import { useStackFluxContext } from '../../context/flux.context'

export default function StepController(): JSX.Element {
  const { getLast, instantiate } = useStackFluxContext()

  React.useEffect(() => {
    instantiate(Suggestion)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{getLast()}</>
}
