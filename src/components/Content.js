import {
  Box,
  Container,
  List,
  ListItemButton,
  Typography 
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import React, { useState } from "react"

import '@fontsource/roboto/500.css'

const useStyles = makeStyles(() => ({
  
  content: {
    position: 'relative',
    backgroundColor: '#ffd400',
    minWidth: '100%',
    height: '80vh',
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    minWidth: '65%',
    padding: '10px 0',
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
  }
}))

function Content() {
  const classes = useStyles()

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
      <Container className={classes.content}>
        <Box className={classes.display}>
          <Typography component="h1" variant="h4" className={classes.productName}>Precisa de uma pausa?</Typography>
          <Typography component="h2" variant="h5" className={classes.productName} padding="15px 0">Que tal descansar por 5 minutos antes de continuar os estudos?</Typography>
        
          <List>
            <ListItemButton>
              Escolha uma atividade
              
            </ListItemButton>
            <ListItemButton>Atividade 1</ListItemButton>
            <ListItemButton>Atividade 2</ListItemButton>
            <ListItemButton>Atividade 3</ListItemButton>
          </List>
        </Box>
        
      </Container>
  )
}
export default Content