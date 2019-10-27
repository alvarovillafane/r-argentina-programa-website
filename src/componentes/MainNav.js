import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home'
import Faq from './Faq'
import '../css/nav.css';


function MainNav() {
 return (
   <Router>
    <div className="container">
      <Nav/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/faq' component={Faq} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
 )
}

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default MainNav;
