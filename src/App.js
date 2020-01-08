/*
  07/01/2020
  App.js
*/

import React from 'react';
import './App.scss';
// React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// My Components
import Home from './components/Home';
import About from './components/About';
import './clock.js';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
    </Router>
  );
}

export default App;
