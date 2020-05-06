/*
  06/04/2020
  App.js
*/

import React from 'react';
import './App.scss';
// React Router
import {
  BrowserRouter as Router,
  Link,
  Route,
} from "react-router-dom";
// Material
import {Cell, Grid, Row} from '@material/react-layout-grid';
// My Components
import Dev from './components/Dev';
import IxD from './components/IxD';
import CC from './components/CC';
import Info from './components/Info';

function App() {
  return (
    <Grid className="grid">
      <Router>
        <div className="top-app-bar">
          <header className="title">Evan MacHale</header>
          <ul className="menu">
            <li>
              <Link className="menu-item" to="/">
                <span>— </span>
                <span>Dev</span>
              </Link>
            </li>
            <li>
              <Link to="/IxD">
                <span>— </span>
                <span>IxD</span>
              </Link>
            </li>
            <li>
              <Link to="/CC">
                <span>— </span>
                <span>CC</span>
              </Link>
            </li>
            <li>
              <Link to="/Info">
                <span>— </span>
                <span>Info</span>
              </Link>
            </li>
          </ul>
        </div>
        <Route exact path="/" component={Dev}/>
        <Route exact path="/IxD" component={IxD}/>
        <Route exact path="/CC" component={CC}/>
        <Route exact path="/Info" component={Info}/>
      </Router>
    </Grid>
  );
}

export default App;
