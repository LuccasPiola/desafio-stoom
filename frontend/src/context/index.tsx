import React from 'react'
import { StackFluxProvider } from './flux.context'
import { FormFluxProvider } from './form.context'

export default function AppProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <StackFluxProvider>
      <FormFluxProvider>{children}</FormFluxProvider>
    </StackFluxProvider>
  )
}
