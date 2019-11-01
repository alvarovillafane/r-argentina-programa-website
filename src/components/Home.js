import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';
import logo from '../img/logo.jpg';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: '100%',
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    avatar: {
      display: 'inline-block',
      height: 100,
      textAlign: 'center',
      width: 100,
    },
    titulo: {
      margin: '16px 0',
    }
});

function Home(props) {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <Grid container wrap={'wrap'} spacing={3}>
        <Grid item  md={8} >
            <Paper className={classes.paper}>
              <Avatar alt="Argentina Programa logo" src={logo} className={classes.avatar} />
              <Typography variant="h4" component="h1" className={classes.titulo}>
                Bienvenido a r/argentina programa!
              </Typography>
              <p>Gracias por interesarte en aprender a programar.</p>
              <p>Este es un curso para aprender JavaScript desde 0, es gratis y en español!!!</p>
            </Paper>
        </Grid>
        <Grid item  md={4}>
          <Paper className={classes.paper}>
            <p>Proxima clase: Sin fecha</p>
            <p>Ver en twitch:(link a twitch)</p>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h1">Para quien es el curso ?</Typography>
              <p>El curso especialmente esta diseñado para gente que nunca escribió una línea de código en su vida.
                Los ejercicios que hay son de MusesCodeJS que es una meetup de Australia principalmente para mujeres que quieren empezar a programar.
                Para informacion ms dettalla podes leer el overview(link to overview)</p>
            <Typography variant="h5" component="h1">Quien creo el curso?</Typography>
            <p>Esta es una iniciativa de Fabricio Sodano(link to github) a traves de reddit(link reddit)
              Para contactarte con Fabricio, otros mentores y alumnos la mejor forma es a traves de slack(link a slack)
              Los cursos en vivo se dan a traves de twitch(link a twitch), y mas tarde son subidos a youtube(link a youtube)
              Tambien podes ver mas información en el github del curso(link to github)</p>
            <Typography variant="h5" component="h1">Por donde empiezo?</Typography>
            <p>Arranca mirando la primer clase (link a primera clase), si tenes alguna duda no olvides que te podemos ayudar en slack</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Home);
