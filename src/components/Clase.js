import React from 'react';
import Typography from '@material-ui/core/Typography';
import data from '../data/clases.json';

class Clase extends React.Component {
  state = {
    clase: null,
    error: null,
    isLoading: true
  };
  
    
  componentDidMount() {
    try {
      let clase = data.clases[this.props.match.params.clase - 1];
      if(!clase) { throw new Error(); } 
      
      this.setState({clase: clase, isLoading: false});
    } catch (error) {
      this.setState({ error, isLoading: false});
    } 
  }
  
  render() {
    const {error, clase, isLoading} = this.state;
    if (error) { return <Typography variant="h6">Clase no encontrada</Typography> }

    return !isLoading && <ClaseUI clase={clase}/>;
  }
}

function ClaseUI({clase}){
  return (
    <Typography variant="h2" component="h1">{clase.titulo}</Typography>
  )
}

export default Clase;
