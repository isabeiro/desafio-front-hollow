
import { Box, Container, Link, ThemeProvider } from "@mui/material"
import { makeStyles } from "@mui/styles"

import theme from "../theme"

import '@fontsource/roboto/500.css'

const useStyles = makeStyles(() => ({
  
  container: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    height: '120px',
    minWidth: '97%',
    borderRadius: '23px',
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px 25px',
  },
  link: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 'auto',
    minWidth: '100%',
  },
  img: {
    width: '280px',
    padding: '0 0 0 200px',
    alignSelf: 'center',
  },
  navMenuContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  navMenu: {
    display: 'flex',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    font: '18px Roboto',
    paddingLeft: '150px',
  },
  login: {
    backgroundColor: 'black',
    padding: '15px 50px',
    borderRadius: '50px',
    '&:hover': {
      color: theme.palette.secondary.contrastText,
    },
  },
  language: {
    display: 'flex',
  }
}))

function Header() {
  const classes = useStyles()

  return (
      <Container fixed className={classes.container} maxWidth="lg">
        <ThemeProvider theme={theme}>
          <Box className={classes.navBar}>
            <Link href="https://www.hollow.pt/" underline="none">
              <img id='logo' className={classes.img} alt="" src="hollow_horizontal.svg" />
            </Link>
            <Container className={classes.navMenuContainer}>
              <navMenu className={classes.navMenu}>
                <Link className={classes.link} href="https://www.hollow.pt/como-funciona" underline="none" color="#282828" >Como Funciona</Link>
                <Link className={classes.link}  href="https://www.hollow.pt/cursos" underline="none" color="#282828">Cursos</Link>
                <Link className={classes.link}  href="https://www.hollow.pt/sobre-nos" underline="none" color="#282828">Sobre nós</Link>
                <Link className={classes.link}  href="https://www.hollow.pt/planos" underline="none" color="#282828">Planos</Link>
                <Link className={classes.link}  href="https://blog.hollow.pt/" underline="none" color="#282828">Blog</Link>
                <Link href="#" underline="none" color="#ffd400" className={classes.login}>Login</Link>
                <Box className={classes.language}>
                  <img alt="" src="globe.svg" height='40px'/>
                  <Link className={classes.link} href="#" underline="none" color="#282828" alignSelf='center'>PT</Link>
                </Box>
              </navMenu>
            </Container>
          </Box>
        </ThemeProvider>
      </Container>
  )
}
export default Header
