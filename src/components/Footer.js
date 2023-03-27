import { Box, Container, Link, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import '@fontsource/roboto/300.css'

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: '100%',
    backgroundColor: '#282828',
    display: 'flex !important',
    justifyContent: 'center',
    padding: '20px 0',
    fontWeight: '300',
    fontSize: '13px',
  },
  navFooter: {
    minWidth: '65%',
    margin: 'auto',
  },
  link: {
    padding: '3px 0',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  separator: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a8a8a8',
    width: '100%',
    height: 1,
    margin: '15px 0'
  }
}))

function Footer() {
  const classes = useStyles()

  return (
    <Container className={classes.container} maxWidth="lg">
      <Box className={classes.navFooter}>
        <Box display="flex" flexDirection="column">
          <Link className={classes.link} href="https://www.hollow.pt/trabalhe-connosco" underline="none" color="white">Carreiras</Link>
          <Link className={classes.link} href="https://www.hollow.pt/politica-privacidade" underline="none" color="white">Política de privacidade</Link>
          <Link className={classes.link} href="https://www.hollow.pt/termos-condicoes" underline="none" color="white">Termos & condições</Link>
        </Box>
        <Box className={classes.separator} />
        <Box display="flex" justifyContent={"space-between"}>
          <Typography color="white">© 2023 Todos os direitos reservados pertencem à Hollow</Typography>
          <Link href="https://www.hollow.pt/politica-privacidade" underline="none">
            <Typography className={classes.link} color="white">Política de privacidade</Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  )
}

export default Footer
