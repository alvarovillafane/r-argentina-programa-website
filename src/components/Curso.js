import React from 'react';
import { useFetchJavascriptClases } from '../utils/api';
import ClaseCard from './ClaseCard';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center'
  },
  circularProgress: {

  },
  title: {
    marginBottom: 32
  },
  grid: {
    flexGrow: 1,
  },
}));

const Curso = () => {
  const {loading, clases, error} = useFetchJavascriptClases();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1" className={classes.title}>
        Curso de Javascript
      </Typography>      
        {loading ? (
          <div className={classes.circularProgress}>
            <CircularProgress size={68}/>
          </div>
        ) : (
          <Grid container className={classes.grid} spacing={3}>
            {clases.map((clase) => <ClaseCard key={clase.id} clase={clase}/>)}
          </Grid>
        )}
    </div>
  )
}

export default Curso;

