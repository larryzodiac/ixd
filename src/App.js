/*
  Evan MacHale - N00150552
  25.03.19
  App.js
*/

import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell">Hi</div>
          <div className="mdc-layout-grid__cell" id="s00" />
          <div className="mdc-layout-grid__cell" id="s01" />
        </div>
      </div>
    );
  }
}

export default App;
