export interface StackFluxState {
  getLength: () => number
  getLast: () => React.ReactElement
  instantiate: (element: React.FC) => void
  removeLast: () => void
  reset: () => void
}

export interface FormState {
  updateForm: (updatedKeys: Record<string, unknown>) => void
  form: Record<string, unknown>
}

export interface CommentsState {
  comments: Comments
  isLoading: boolean
}

export interface Comments {
  dough: Array<string> | []
  filling: Array<string> | []
  border: Array<string> | []
  size: Array<string> | []
}
