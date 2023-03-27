import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  ThemeProvider,
  Typography 
} from "@mui/material"

import '@fontsource/roboto/500.css'
import theme from "../theme"
import { useState } from "react"

import styled, { keyframes } from 'styled-components';
import { bounce, fadeIn, fadeInLeft, bounceInRight } from 'react-animations';

import useStyles from './ContentStyles'

const bounceInRightAnimation = keyframes`${bounceInRight}`
const BouncyInRightDiv = styled.div`
  animation: 2s ${bounceInRightAnimation};
`

const bounceAnimation = keyframes`${bounce}`
const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`

const fadeInAnimation = keyframes`${fadeIn}`
const FadeInyDiv = styled.div`
  animation: 2s ${fadeInAnimation};
`

const FadeInLeftAnimation = keyframes`${fadeInLeft}`;
const FadeInLeftDiv = styled.div`
  animation: 1s ${FadeInLeftAnimation};
`

function Content() {
  const classes = useStyles()
  
  const [url, setUrl] = useState('')
  const [contentDisplay, setcontentDisplay] = useState(true)
  const [dogsCardDisplay, setDogsCardDisplay] = useState(false)
  const [catsCardDisplay, setcatsCardDisplay] = useState(false)  
  const [jokesCardDisplay, setJokesCardDisplay] = useState(false)
  const [answer, setAnswer] = useState(false)
  const [punchline, setPunchline] = useState('')  

  function putOnScreen(dados) {
    setUrl(dados.message)
    setDogsCardDisplay(true)
    setcontentDisplay(false)
  }

  function putCatsOnScreen(dados) {
    setUrl(dados.fact)
    setcatsCardDisplay(true)
    setcontentDisplay(false)
  }

  function putJokesOnScreen(dados) {
    setUrl(dados.setup)
    setPunchline(dados.punchline)
    setJokesCardDisplay(true)
    setAnswer(false)
    setcontentDisplay(false)
  }

  function putError(dados) {
    console.log('Erro!', dados)
  }

  const handleDogClick = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(data => data.json())
    .then(putOnScreen)
    .catch(putError)
  }
  
  const handleCatClick = () => {
    fetch('https://catfact.ninja/fact')
    .then(data => data.json())
    .then(putCatsOnScreen)
    .catch(putError)
  }

  const handleJokeClick = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(data => data.json())
    .then(putJokesOnScreen)
    .catch(putError)
  }

  const handleAnswerClick = (dados) => {
    setAnswer(true)
  }

  const handleCloseClick = () => {
    setDogsCardDisplay(false)
    setcatsCardDisplay(false)
    setJokesCardDisplay(false)
    setcontentDisplay(true)
  }
  
  return (
      <Container className={classes.content}>
        <ThemeProvider theme={theme}>
          <BouncyInRightDiv className={classes.bouncyDiv}>
            <div className={classes.boxCircle}/>
          </BouncyInRightDiv>
          {
            contentDisplay === true
            ? (
                <Box className={classes.contentDisplay}>
                  <Box className={classes.textBox}>
                    <Typography component="h1" variant="h4" padding="15px 0">Precisa de uma pausa?</Typography>
                    <Typography alignSelf="center" component="h2" variant="h5" className={classes.text} padding="15px 0">Que tal descansar antes de continuar os estudos?</Typography>
                    <Typography component="h2" variant="h6" className={classes.text} padding="15px 0">Escolha uma das opções abaixo:</Typography>
                  </Box>

                  <Box display="flex" justifyContent="space-around" width="30%">
                    <Button color="secondary" variant="contained" onClick={handleDogClick} className={classes.button}>Dogs</Button>
                    <Button color="secondary" variant="contained" onClick={handleCatClick} className={classes.button}>Cats</Button>
                    <Button color="secondary" variant="contained" onClick={handleJokeClick} className={classes.button}>Jokes</Button>
                  </Box>
                
                </Box>
            ) : ( null )
          }

          {
            dogsCardDisplay === true
            ? (
              <BouncyDiv className={classes.dogsCard}>
                <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image={url}
                  />
                  <CardContent>
                    <Typography variant="h5">Some dog pictures to brighten up your day!</Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="secondary" variant="contained" onClick={handleDogClick}>
                      Próximo
                    </Button>
                    <Button color="secondary" variant="contained" onClick={handleCloseClick}>
                      Fechar
                    </Button>
                  </CardActions>
                </Card>            
              </BouncyDiv>
            ) : ( null )
          }

          {
            catsCardDisplay === true
            ? (
              <FadeInyDiv className={classes.card}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle1" padding="15px 0" fontSize="20px">Interesting fact about cats:</Typography>
                    <Typography variant="subtitle1" fontSize="18px">{url}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button color="secondary" variant="contained" onClick={handleCatClick}>
                      Next
                    </Button>
                    <Button color="secondary" variant="contained" onClick={handleCloseClick}>
                      Close
                    </Button>
                  </CardActions>
                </Card>            
              </FadeInyDiv>
            ) : ( null )
          }
          {
            jokesCardDisplay === true
            ? (
              <FadeInLeftDiv className={classes.card}>
                <Card>
                  <CardContent>
                    <Typography variant="h5">Here's a joke:</Typography>
                    <Typography variant="body1" padding="15px 0" fontSize="18px">{url}</Typography>
                    {
                      answer === true 
                      ? (
                        <Typography variant="body1" padding="15px 0" fontSize="18px">{punchline}</Typography>
                      ) : ( null )
                    }
                  </CardContent>
                  <CardActions>
                    <Button color="secondary" variant="contained" onClick={handleAnswerClick}>
                      Answer
                    </Button>
                    <Button color="secondary" variant="contained" onClick={handleJokeClick}>
                      Next
                    </Button>
                    <Button color="secondary" variant="contained" onClick={handleCloseClick}>
                      Close
                    </Button>
                  </CardActions>
                </Card>            
              </FadeInLeftDiv>
            ) : ( null )
          }
        </ThemeProvider>  
      </Container>
  )
}
export default Content