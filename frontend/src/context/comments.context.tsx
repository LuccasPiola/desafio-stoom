import React from 'react'
import api from '../services/api'
import { CommentsState, Comments } from './types'

const CommentContext = React.createContext<CommentsState>({} as CommentsState)

export default function CommentProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [comments, setComments] = React.useState({} as Comments)
  const [isLoading, setIsLoading] = React.useState(true)

  const getComments = React.useCallback(async () => {
    const response = await api.get<Comments>('/comments')
    setComments(response.data)
    setIsLoading(false)
  }, [])

  React.useEffect(() => {
    getComments()
  })

  return (
    <CommentContext.Provider value={{ comments, isLoading }}>
      {children}
    </CommentContext.Provider>
  )
}

const useCommentContext = (): CommentsState => {
  const context = React.useContext(CommentContext)

  if (!context) {
    throw new Error('useCommentContext must be used within a CommentProvider')
  }

  return context
}

export { CommentProvider, useCommentContext }
