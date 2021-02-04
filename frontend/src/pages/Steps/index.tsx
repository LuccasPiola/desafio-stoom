import React from 'react'
import { useStackFluxContext } from '../../context/flux.context'

export default function StepController(): JSX.Element {
  const { getLast } = useStackFluxContext()

  return <>{getLast()}</>
}
