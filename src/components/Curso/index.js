import React from 'react';
import PropTypes from 'prop-types';
import { useFetchPlaylist } from '../../utils/api';
import ClaseCard from '../ClaseCard';
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

const Curso = ({ react = false }) => {
  const { loading, clases, error } = useFetchPlaylist(react);
  const classes = useStyles();

  if(error) {
    return (
      <Typography variant="h2" component="h1" className={classes.title}>
        Uh oh! hubo un error
      </Typography>
    )
  }

  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h1" className={classes.title}>
        {react ? 'Clases de React' : 'Curso de Javascript'}
      </Typography>
      {react && (
        <>
          <Typography variant="subtitle1">
            Estas clases son para aquellos a quienes les interese aprender React, un framework de
            Javascript para crear interfaces de usuario.
          </Typography>
          <Typography variant="subtitle1" className={classes.title}>
            Antes de ver estas clases, se recomienda tener una base de Javascript. Con haber visto
            hasta la clase 10 del curso de Javascript deberían tener esa base.
          </Typography>
        </>
      )}
      {loading || !clases ? (
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

Curso.propTypes = {
  react: PropTypes.bool,
};

export default Curso;

