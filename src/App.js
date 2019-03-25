/*
  Evan MacHale - N00150552
  25.03.19
  App.js
*/

import React, { Component } from 'react';
import './App.scss';
import P5Wrapper from 'react-p5-wrapper';
// Sketches
import Sketch from './sketches/01'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnWidth: null
    };
    this.column = null;
    this.setColum = element => {
      this.column = element;
    };
    this.getWidth = this.getWidth.bind(this);
  }
  
  componentDidMount() {
    this.getWidth();
  }
  
  getWidth() {
    if(this.column) {
      this.setState({
        columnWidth: this.column.getBoundingClientRect().width
      });
    }
  }
  
  render() {
    const { columnWidth } = this.state;
    console.log(columnWidth);
    return (
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell">Hi</div>
          <div className="mdc-layout-grid__cell" ref={this.setColum}>
            <P5Wrapper sketch={Sketch} rotation={1} columnWidth={columnWidth} />
          </div>
          <div className="mdc-layout-grid__cell">Geesuz</div>
        </div>
      </div>
    );
  }
}

export default App;
