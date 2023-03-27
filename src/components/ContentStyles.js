import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  
  content: {
    backgroundColor: theme.palette.primary.main,
    minWidth: '100%',
    height: '80vh',
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bouncyDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: '0',
  },
  boxCircle: {
    backgroundColor: theme.palette.secondary.main,
    width: '410px',
    height: '410px',
    borderRadius: '50%',
    position: 'absolute',
  },
  contentDisplay: {
    position: 'relative',
    minWidth: '65%',
    height: '75%',
    padding: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textBox: {
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  text: {
    color: 'white',
    width: '350px',
  },
  button: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  card: {
    width: '500px',
    zIndex: '1',
  },
  dogsCard: {
    paddingTop: '25px',
    zIndex: '1',
  },
  cardMedia: {
    width: '600px',
    paddingTop: '90%',
    backgroundSize: 'contain !important',
  },
  cardContent: {
    height: '150px'
  },
}))

export default useStyles  