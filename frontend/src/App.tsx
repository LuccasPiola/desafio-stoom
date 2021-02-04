import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppProvider from './context'
import Routes from './routes'

import GlobalStyle from './styles/global'

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </AppProvider>
    </>
  )
}
