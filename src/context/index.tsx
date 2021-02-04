import React from 'react'
import { CommentProvider } from './comments.context'
import { StackFluxProvider } from './flux.context'
import { FormFluxProvider } from './form.context'

export default function AppProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <CommentProvider>
      <StackFluxProvider>
        <FormFluxProvider>{children}</FormFluxProvider>
      </StackFluxProvider>
    </CommentProvider>
  )
}
