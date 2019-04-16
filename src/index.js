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
import s05 from './sketches/s05'
import s06 from './sketches/s06'
import s07 from './sketches/s07'
// Experiments
import s08 from './sketches/s08'
import s09 from './sketches/s09'
import s10 from './sketches/s10'

// new p5(s00,'s00');
new p5(s01,'s01');
new p5(s02,'s02');
new p5(s03,'s03');
new p5(s04,'s04');
new p5(s05,'s05');
new p5(s06,'s06');
new p5(s07,'s07');
new p5(s08,'s08');
new p5(s09,'s09');
new p5(s10,'s10');

ReactDOM.render(<App />, document.getElementById('root'));
