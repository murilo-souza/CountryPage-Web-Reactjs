import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/defaultTheme'
import { Home } from './page/Home'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}
