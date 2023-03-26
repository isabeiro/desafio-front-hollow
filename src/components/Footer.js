import { Box, Container, Link, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
  container: {
    minWidth: '100%',
    backgroundColor: '#282828',
    display: 'flex !important',
    justifyContent: 'center',
    padding: '20px 0'
  },

  navFooter: {
    minWidth: '65%',
    margin: 'auto',
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
          <Link href="#" underline="none" color="white">Carreiras</Link>
          <Link href="#" underline="none" color="white">Política de privacidade</Link>
          <Link href="#" underline="none" color="white">Termos & condições</Link>
        </Box>
        <Box className={classes.separator} />
        <Box display="flex" justifyContent={"space-between"}>
          <Typography color="white">© 2023 Todos os direitos reservados pertencem à Hollow</Typography>
          <Typography color="white">Política de privacidade</Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Footer
