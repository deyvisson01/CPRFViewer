import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/globals'
import RouterApp from './Routes'
import CPRFProvider from './store/context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CPRFProvider>
        <RouterApp />
        <GlobalStyles />
      </CPRFProvider>
    </ThemeProvider>
  </React.StrictMode>
)
