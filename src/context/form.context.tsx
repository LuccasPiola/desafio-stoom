import React from 'react'
import { FormState } from './types'

const FormContext = React.createContext<FormState>({} as FormState)

export default function FormFluxProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [form, setForm] = React.useState({})

  const updateForm = React.useCallback(
    (updatedKeys: Record<string, unknown>) => {
      setForm({ ...form, ...updatedKeys })
    },
    [form],
  )

  const resetForm = React.useCallback(() => {
    setForm({})
  }, [])

  return (
    <FormContext.Provider value={{ updateForm, form, resetForm }}>
      {children}
    </FormContext.Provider>
  )
}

const useFormContext = (): FormState => {
  const context = React.useContext(FormContext)

  if (!context) {
    throw new Error('useFormContext must be used within a FormFluxProvider')
  }

  return context
}

export { FormFluxProvider, useFormContext }
