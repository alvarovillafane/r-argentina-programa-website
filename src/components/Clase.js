import React from 'react';
import Typography from '@material-ui/core/Typography';
import YouTube from 'react-youtube';
import data from '../data/clases.json';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  youtube: {
    padding: theme.spacing(3),
    textAlign: 'center'
  },
});

class Clase extends React.Component {

  render() {
    const {match, classes} = this.props;
    const id = match.params.clase - 1;
    let clase = data.clases[id];
    const opts = {
      height: '390',
      width: '640',
    };

    if(!clase) { return <Typography variant="h6">Clase no encontrada</Typography>; } 

    return (
      <React.Fragment>
        <Typography variant="h2" component="h1">{clase.titulo}</Typography>
        <Card className={classes.youtube}>
          <CardContent>
            <YouTube
              videoId={clase.youtube_id}
              opts={opts}
            />
          </CardContent>
        </Card>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Clase);
