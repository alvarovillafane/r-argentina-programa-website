import blue from '@material-ui/core/colors/blue';
import teal from '@material-ui/core/colors/teal';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[600]
    },
    secondary: {
      main: teal[400]
    },
    text: {
      primary: blueGrey[900],
      secondary: teal[400],
      fontSize: '1rem'
    },
    typography: {
      body1: {
        fontSize: 16,
      },
    },
  },
});
