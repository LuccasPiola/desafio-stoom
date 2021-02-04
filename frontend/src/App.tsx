import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BorderStep from './pages/Steps/Border'
import DoughStep from './pages/Steps/Dough'
import FillingStep from './pages/Steps/Filling'
import SizeStep from './pages/Steps/Size'
import GlobalStyle from './styles/global'

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <SizeStep />
    </>
  )
}
