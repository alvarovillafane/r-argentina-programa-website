import React from 'react';

import Content from '../layout/Content'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../Theme';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="container">

        <ThemeProvider theme={theme}>
          <Content />
        </ThemeProvider>
      </div>
  </React.Fragment>
  );
}


export default App;
