import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import p5 from 'p5';
// Sketches
import s00 from './sketches/s00'
import s01 from './sketches/s01'

new p5(s00,'s00');
new p5(s01,'s01');

ReactDOM.render(<App />, document.getElementById('root'));
