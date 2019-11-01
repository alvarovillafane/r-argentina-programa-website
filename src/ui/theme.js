import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { createMuiTheme } from '@material-ui/core/styles';
import { fontSize } from '@material-ui/system';

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[600]
    },
    secondary: {
      main: green[400]
    },
    text: {
      primary: blueGrey[900],
      fontSize: '1rem'
    },
    typography: {
      body1: {
        fontSize: 16,
      },
    },
  },
});
