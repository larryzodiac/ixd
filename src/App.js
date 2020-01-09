/*
  07/01/2020
  App.js
*/

import React from 'react';
import './App.scss';
// React Router
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
// My Components
import Home from './components/Home';
import ManMachine from './components/ManMachine';
import PeoplePlace from './components/PeoplePlace';
import ServicED from './components/ServicED';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/man+machine" component={ManMachine}/>
      <Route exact path="/people+place" component={PeoplePlace}/>
      <Route exact path="/servicED" component={ServicED}/>
    </Router>
  );
}

export default App;
