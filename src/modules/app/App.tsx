import './App.css'
import { RoutesComponent } from './routes/Routes'
import { ThemeProvider } from 'styled-components'
import { getTheme, Themes } from '../../styles/theme'
import { GlobalStyle } from '../../styles/globalStyle'

export const App = () => {
  const currentTheme = { ...getTheme(Themes.BASIC), selected: Themes.BASIC }
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <RoutesComponent />
    </ThemeProvider>
  )
}
