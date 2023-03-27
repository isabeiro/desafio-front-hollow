import React from 'react'

import theme from './theme'

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { ThemeProvider } from '@mui/styles'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
    
  )
}

export default App
