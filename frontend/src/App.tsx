import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import GlobalStyle from './styles/global'

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
    </>
  )
}
