import React from 'react';
import YouTube from 'react-youtube';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import data from '../data/clases.json';

const styles = theme => ({
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
});

class Clase extends React.Component {

  render() {
    const {match, classes} = this.props;
    const id = match.params.clase - 1;
    let clase = data.clases[id];

    if(!clase) { return <Typography component="h1" variant="h6">Clase no encontrada</Typography>; } 

    return (
      <React.Fragment>
        <Typography variant="h5" component="h1" className={classes.titulo}>{clase.titulo}</Typography>
          <div className={classes.videoWrapper}>
            <YouTube
              videoId={clase.youtube_id}
            />
          </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Clase);
