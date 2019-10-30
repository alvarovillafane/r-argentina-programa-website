import React from 'react';
import Typography from '@material-ui/core/Typography';
import data from '../data/clases.json';

class Clase extends React.Component {

  render() {
    const id = this.props.match.params.clase - 1;
    let clase = data.clases[id];

    if(!clase) { return <Typography variant="h6">Clase no encontrada</Typography>; } 

    return (
      <Typography variant="h2" component="h1">{clase.titulo}</Typography>
    )
  }
}
export default Clase;
