import React from 'react';

import Content from '../layout/Content'
import CssBaseline from '@material-ui/core/CssBaseline';
import '../css/app.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="container">
        <Content />
      </div>
  </React.Fragment>
  );
}


export default App;
