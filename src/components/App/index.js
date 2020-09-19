import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Content from '../Content';
import theme from '../../ui/theme';
import { CacheProvider } from '../../utils/cache';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <CacheProvider>
            <Content />
          </CacheProvider>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
