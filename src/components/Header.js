
import { Box, Container, Link } from "@mui/material"
import { makeStyles } from "@mui/styles"
import '@fontsource/roboto/500.css'

const useStyles = makeStyles(() => ({
  
  container: {
    height: '120px',
    minWidth: '97%',
    borderRadius: '23px',
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px 25px',
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 'auto',
    minWidth: '65%',
  },
  img: {
    width: '280px',
    padding: '0 0 0 0px'
  },
  navMenu: {
    display: 'flex',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-around',
    font: '18px Roboto',
  },
  login: {
    backgroundColor: 'black',
    padding: '15px 50px',
    borderRadius: '50px',
  },
  language: {
    display: 'flex'
  }
}))

function Header() {
  const classes = useStyles()

  return (
      <Container fixed className={classes.container} maxWidth="lg">
        <Box className={classes.navBar}>
          <img id='logo' className={classes.img} alt="" src="hollow_horizontal.svg" />
          <navMenu className={classes.navMenu}>
            <Link href="#" underline="none" color="#282828">Como Funciona</Link>
            <Link href="#" underline="none" color="#282828">Cursos</Link>
            <Link href="#" underline="none" color="#282828">Sobre nós</Link>
            <Link href="#" underline="none" color="#282828">Planos</Link>
            <Link href="#" underline="none" color="#282828">Blog</Link>
            <Link href="#" underline="none" color="#ffd400" className={classes.login}>Login</Link>
            <Box className={classes.language}>
              <img alt="" src="globe.svg" />
              <Link href="#" underline="none" color="#282828">PT</Link>
            </Box>
          </navMenu>
        </Box>
      </Container>
  )
}
export default Header
