import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { 
  Avatar, 
  Typography, 
  IconButton,
  Grid,
  Paper
} from '@material-ui/core';
import { blue, teal } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
import slackData from '../data/slack.json';

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
        textDecoration: 'none'
      }
    },
    avatar: {
      display: 'inline-block',
      height: 150,
      textAlign: 'center',
      width: 150,
      borderRadius: 0,
      boxShadow: "0 12px 10px -10px #212529"
    },
    tituloBienvenida: {
      margin: '16px 0',
      fontWeight: 700
    },
    subtitulo: {
      margin: '16px 0',
      fontWeight: 400,
      [theme.breakpoints.up('sm')]: {
        margin: '16px 64px',
      }
    },
    tituloInfo: {
      color: blue[700],
      fontWeight: 'bold',
      marginBottom: 24
    },
    proximaTitulo: {
      marginBottom: 0
    },
    fechaProximaClase: {
      margin: '0 0 8px'
    },
    twitchLink: {
      color: teal[900],
      '& svg': {
        width: '5em',
        height: '5em',
      }
    },
    twitchAyuda: {
      marginTop: 8
    },
    flecha: {
      color: teal[900],
      '& svg': {
        width: '4em',
        height: '4em',
      },
      '&:hover': {
        color: teal[500],
        backgroundColor: 'inherit'
      }

    },
    primeraClase: { 
      fontSize: '2.5em'
    },
});

function Home(props) {
  const { classes } = props;
  const slackLink = slackData.slack.link;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item  md={12} >
          <Paper className={classes.paper}>
            <Avatar alt="Argentina Programa logo" 
              src={logo} 
              className={classes.avatar} 
            />
            <Typography variant="h4" component="h1" className={classes.tituloBienvenida}>
              Hola! Te damos la bienvenida a r/argentina programa.
            </Typography>
            <Typography variant="h6" component="h2" className={classes.subtitulo}>
              Este es un curso para aprender JavaScript desde 0, gratis y en español.
            </Typography>
          </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper className={classes.paper}>
          <Typography 
            variant="h5" 
            component="h3" 
            className={classes.tituloInfo}
          >
            ¿Para quién es el curso ?
          </Typography>
            <p>El curso está especialmente diseñado para personas que nunca escribieron una 
                línea de código en su vida.
            </p>
            <p>Los primeros ejercicios que utilizamos son de MusesCodeJS, una meetup de 
              Australia principalmente para mujeres que quieran empezar a programar.
            </p>
            <p>Para más informacion podes leer 
              el <Link to="/overview">overview</Link>.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography 
              variant="h5" 
              component="h3" 
              className={classes.tituloInfo}
            >
              ¿Quién creó el curso?
            </Typography>
            <p>
              Esta es una iniciativa 
              de <a target="_blank" rel="noopener noreferrer" 
              href="https://github.com/fsodano">Fabricio Sodano</a> a 
              través de <a target="_blank" rel="noopener noreferrer" 
              href="https://www.reddit.com/r/argentina/comments/d9wzkh/alguno_que_ande_corto_de_guita_pero_muy/">
              Reddit</a>.
            </p>
            <p>
              Para contactarte con Fabricio, otros mentores y alumnos la mejor forma 
              es utilizando <a target="_blank" 
              rel="noopener noreferrer" href={slackLink}>Slack</a>.
            </p>
            <p>
              Los cursos en vivo los podés ver en <a target="_blank" rel="noopener noreferrer" 
              href="https://www.twitch.tv/rargentinaprograma/">Twitch</a>, y 
              más tarde son subidos a <a target="_blank" rel="noopener noreferrer" 
              href="https://www.youtube.com/channel/UCXfQLgiBQPIzBp8-nRsG0KA">YouTube</a>. 
              También podés obtener más información visitando el repositorio del curso
              en <a target="_blank" rel="noopener noreferrer" 
              href="https://github.com/r-argentina-programa/introduccion-a-js">Github</a>. 
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.primeraClase}>
          <Paper className={classes.paper}>
            <Typography 
              variant="h5" 
              component="h3" 
              className={classes.tituloInfo}
            >
              ¿Por dónde empiezo?
            </Typography>
            <IconButton 
                aria-label="Curso" 
                component={Link}
                to="/curso-javascript"
                className={classes.flecha}
            > 
              <span>Ver clases</span>
              <ArrowForwardIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Home);
