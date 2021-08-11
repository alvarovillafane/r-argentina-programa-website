import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Avatar, Typography, Grid, Paper, Button } from '@material-ui/core';
import { red, blue, teal } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg';
import slackData from '../../data/slack.json';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: '100%',
    padding: theme.spacing(2),
    textAlign: 'center',
    '& a': {
      color: teal[900],
      fontWeight: 700,
    },
  },
  avatar: {
    display: 'inline-block',
    height: 100,
    textAlign: 'center',
    width: 100,
  },
  tituloBienvenida: {
    margin: '16px 0',
    fontWeight: 700,
  },
  subtitulo: {
    margin: '16px 0',
    fontWeight: 400,
    [theme.breakpoints.up('sm')]: {
      margin: '16px 64px',
    },
  },
  tituloInfo: {
    color: blue[700],
    fontWeight: 'bold',
    marginBottom: 24,
  },
  tituloWarning: {
    color: red[700],
    fontWeight: 'bold',
    marginBottom: 24,
  },
  warningText: {
    color: red[700],
    fontWeight: 'bold',
  },
  proximaTitulo: {
    marginBottom: 0,
  },
  fechaProximaClase: {
    margin: '0 0 8px',
  },
  twitchLink: {
    color: teal[900],
    '& svg': {
      width: '5em',
      height: '5em',
    },
  },
  twitchAyuda: {
    marginTop: 8,
  },
  flecha: {
    color: teal[900],
    '& svg': {
      width: '5em',
      height: '5em',
    },
    '&:hover': {
      color: teal[500],
      backgroundColor: 'inherit',
    },
  },
  primeraClase: {
    fontSize: '2.5em',
  },
});

function Home(props) {
  const { classes } = props;
  const slackLink = slackData.slack.link;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Avatar
              alt="Argentina Programa logo"
              src={logo}
              className={classes.avatar}
            />
            <Typography
              variant="h4"
              component="h1"
              className={classes.tituloBienvenida}
            >
              Bienvenido a r/argentina programa!
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              className={classes.subtitulo}
            >
              Este es un curso para aprender JavaScript desde 0, gratis y en
              español.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography
              variant="h4"
              component="h2"
              className={classes.tituloWarning}
            >
              IMPORTANTE:
            </Typography>
            <p>
              Este curso{' '}
              <b className={classes.warningText}>
                NO ES EL PROGRAMA DEL GOBIERNO ARGENTINO
              </b>
              . Es una comunidad independiente de mentores y alumnos a la que
              son completamente bienvenidos. El parecido en el nombre es casual,
              esta comunidad existe con este nombre desde antes que el gobierno
              creara "Argentina programa". Pueden llegar a la página del
              gobierno{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.argentina.gob.ar/produccion/argentina-programa"
              >
                con este link
              </a>
              , pero repetimos que{' '}
              <b className={classes.warningText}>
                no tenemos ninguna afiliación con esa capacitación
              </b>
              .
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6} className={classes.primeraClase}>
          <Paper className={classes.paper}>
            <Typography
              variant="h5"
              component="h3"
              className={classes.tituloInfo}
            >
              ¿Por dónde empiezo?
            </Typography>
            <p>
              Pueden encontrar el listado entero de las clases{' '}
              <b>
                <Link
                  aria-label="Curso"
                  to="/curso-javascript"
                  className={classes.flecha}
                >
                  AQUÍ
                </Link>
              </b>
              . Todas están subidas al{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCXfQLgiBQPIzBp8-nRsG0KA"
              >
                canal oficial de Youtube
              </a>
              .
            </p>
            <p>
              Si bien pueden ver las clases en youtube directamente, este curso
              es <b className={classes.warningText}>interactivo</b>, por lo que
              se recomienda fuertemente ingresar al{' '}
              <a target="_blank" rel="noopener noreferrer" href={slackLink}>
                Slack
              </a>{' '}
              y preguntar las dudas que tengan en los respectivos canales de
              cada clase (#clase-1, #clase-2, etc.).
            </p>
            <p>
              También se recomienda hacer las tareas de cada clase y postearlas
              en su canal correspondiente, así alguno de los mentores o alumnos
              más avanzados pueden correjirlas y ayudarlos
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper className={classes.paper}>
            <Typography
              variant="h5"
              component="h3"
              className={classes.tituloInfo}
            >
              ¿Quién creo el curso?
            </Typography>
            <p>
              Esta es una iniciativa de{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/fsodano"
              >
                Fabricio Sodano
              </a>{' '}
              a través de Reddit. Aquí está guardado{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.reddit.com/r/argentina/comments/d9wzkh/alguno_que_ande_corto_de_guita_pero_muy/"
              >
                el post original
              </a>{' '}
              con el que se empezó todo.
            </p>
            <p>
              Para contactarte con Fabricio, otros mentores y alumnos la mejor
              forma es utilizando{' '}
              <a target="_blank" rel="noopener noreferrer" href={slackLink}>
                Slack
              </a>
              .
            </p>
            <p>
              Los cursos en vivo los podes ver en{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitch.tv/rargentinaprograma/"
              >
                Twitch
              </a>
              , y más tarde son subidos a{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCXfQLgiBQPIzBp8-nRsG0KA"
              >
                YouTube
              </a>
              . También podes obtener mas información visitando el repositorio
              del curso en{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/r-argentina-programa/introduccion-a-js"
              >
                Github
              </a>
              .
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Home);
