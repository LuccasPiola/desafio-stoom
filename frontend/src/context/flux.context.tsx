import React from 'react'
import { StackFluxState } from './types'

import DoughStep from '../pages/Steps/Dough'

const StackFluxContext = React.createContext<StackFluxState>(
  {} as StackFluxState,
)

export default function StackFluxProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [stack, setStack] = React.useState<React.ReactElement[]>([
    React.createElement(DoughStep),
  ])

  const getLength = React.useCallback(() => {
    return stack.length
  }, [stack.length])

  const getLast = React.useCallback(() => {
    return stack[getLength() - 1]
  }, [stack, getLength])

  const instantiate = React.useCallback(
    (element: React.FC) => {
      const jsxElement = React.createElement(element) as React.ReactElement
      setStack([...stack, jsxElement])
    },
    [stack],
  )

  const removeLast = React.useCallback(() => {
    const newStack = stack.splice(0, stack.length - 1)
    setStack(newStack)
  }, [stack])

  const reset = React.useCallback(() => {
    setStack([React.createElement(DoughStep)])
  }, [])

  return (
    <StackFluxContext.Provider
      value={{ getLength, getLast, instantiate, removeLast, reset }}
    >
      {children}
    </StackFluxContext.Provider>
  )
}

const useStackFluxContext = (): StackFluxState => {
  const context = React.useContext(StackFluxContext)

  if (!context) {
    throw new Error(
      'useStackFluxContext must be used within a StackFluxProvider',
    )
  }

  return context
}

export { StackFluxProvider, useStackFluxContext }
