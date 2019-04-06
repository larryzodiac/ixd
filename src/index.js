import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import p5 from 'p5';
// Sketches
// import s00 from './sketches/s00'
import s01 from './sketches/s01'
import s02 from './sketches/s02'
import s03 from './sketches/s03'
import s04 from './sketches/s04'

// new p5(s00,'s00');
new p5(s01,'s01');
new p5(s02,'s02');
new p5(s03,'s03');
new p5(s04,'s04');

ReactDOM.render(<App />, document.getElementById('root'));
