import React from 'react';

import MainNav from './MainNav'
import CssBaseline from '@material-ui/core/CssBaseline';
import '../css/app.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="Container">
        <MainNav />
      </div>
  </React.Fragment>
  );
}


export default App;
