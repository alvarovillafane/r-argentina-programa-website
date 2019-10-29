import React from 'react';
import Typography from '@material-ui/core/Typography';

class Clase extends React.Component {
  state = {
    isLoading: true,
    clase: null,
    error: null,
  };
  
  fetchClases() {
    fetch('../clases.json')
      .then((res) => res.json())
      .then((data) => {
        let clase = data.clases[this.props.match.params.clase-1];
        if(!clase) { throw new Error(); } 

        this.setState({
          clase: clase,
          isLoading: false,
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
    }
    
  componentDidMount() {
    this.fetchClases();
  }
  
  render() {
    const { isLoading, clase, error } = this.state;
    if (error) { return <Typography variant="h6">Clase no encontrada</Typography> }

    return !isLoading ? <ClaseUI clase={clase}/> : '';
  }
}

function ClaseUI(props){
  const { clase } = props;
  return (
    <h1>{clase.titulo}</h1>
  )
}

export default Clase;
