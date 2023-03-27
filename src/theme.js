import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffd400',
    },
    secondary: {
      main: '#282828',
      contrastText: '#ffff'
    }
  }
})

export default theme