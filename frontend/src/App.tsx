import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BorderStep from './pages/Steps/Border'
import Conclusion from './pages/Steps/Conclusion'
import DoughStep from './pages/Steps/Dough'
import FillingStep from './pages/Steps/Filling'
import SizeStep from './pages/Steps/Size'
import Suggestion from './pages/Suggestion'
import GlobalStyle from './styles/global'

export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Suggestion />
    </>
  )
}
