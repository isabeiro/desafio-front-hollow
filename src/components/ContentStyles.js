import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  
  content: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    minWidth: '100%',
    height: '80vh',
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentDisplay: {
    position: 'absolute',
    minWidth: '65%',
    height: '90%',
    padding: '10px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  teste: {
    backgroundColor: 'blue',
  },
  card: {
    width: '500px'
  },
  dogsCard: {
    paddingTop: '25px',
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