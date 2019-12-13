import React from 'react';
import YouTube from 'react-youtube';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import { Container } from '@material-ui/core';
import data from '../data/clases.json';
import slackData from '../data/slack.json';


const styles = theme => ({
  root: {
     color: theme.palette.text.primary,
  },
  titulo: {
    marginBottom: theme.spacing(3),
  },
  youtube: {
    textAlign: 'center'
  },
  videoWrapper: {
	  position: 'relative',
	  paddingBottom: '56.25%', /* 16:9 */
	  paddingTop: '25px',
    height: '0',
    marginTop: theme.spacing(3),
	  overflow: 'hidden',
    '& iframe': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    }
  },
  slack: {
    '& p': {
      marginTop: theme.spacing(1),
    },
    '& a': {
      color: teal[900],
    }
  }
});

class Clase extends React.Component {

  render() {
    const {match, classes} = this.props;
    const id = match.params.clase - 1;
    const clase = data.clases[id];
    const slackLink = slackData.slack.link;

    if(!clase) { return <Typography component="h1" variant="h6">Clase no encontrada</Typography>; } 

    return (
      <Container className={classes.root}>
        <Typography variant="h4" component="h1" className={classes.titulo}>{clase.titulo}</Typography>
        <div className={classes.slack}>
          <Typography>Slack channel: <a 
                href={`https://rargentinaprograma.slack.com/archives/${clase.slack_channel}`}
                rel="noopener noreferrer" 
                target="_blank"
              >
                #clase-{clase.id}
              </a>
          </Typography>
          <Typography>¿No estás registrado en slack? <a 
              href={slackLink} 
              rel="noopener noreferrer" 
              target="_blank"
            >
             Hace click aca para unirte.
            </a>
          </Typography>
        </div>
        <div className={classes.videoWrapper}>
          <YouTube videoId={clase.youtube_id} />
        </div>
      </Container>
    )
  }
}

export default withStyles(styles)(Clase);
