/*
  06/05/2020
  Info.js
*/

import React, {useEffect} from 'react';
// React Router
import {Link} from "react-router-dom";
// Material
import {Cell, Row} from '@material/react-layout-grid';
// Clock
import '../clock.js';

function Info() {
  return (
    <Row>
      <Cell desktopColumns={1} phoneColumns={4} tabletColumns={1}>
        <header className="side-title">About Me</header>
      </Cell>
      <Cell desktopColumns={7} phoneColumns={4} tabletColumns={6}>
        <p className="info">I'm a multidisciplinary developer, aspiring designer & recent graduate with a first class honours awards classification from Dún Laoghaire's Institute of Art, Design & Technology studying a B.Sc [Hons] in <a href="https://www.iadt.ie/courses/creative-computing" target="_new">Creative Computing</a>. I'm currently attending The National College of Art & Design in Dublin having been accepted for a MA in <a href="https://www.ncad.ie/postgraduate/school-of-design/ma-interaction-design/" target="_new">Interaction Design</a>. I love painting <a href="https://www.games-workshop.com/en-IE/Gallery" target="_new">Warhammer</a> and blurring the boundaries between design & code.</p>
        <footer className="interwebs">
          <a href="mailto:evanmachale@gmail.com">Mail</a>
          <br/>
          <a href="https://github.com/larryzodiac/" target="_new">Github</a>
          <br/>
          <a href="https://www.linkedin.com/in/evanmachale/" target="_new">LinkedIn</a>
          <br/>
          <a href="https://larryzodiac-portfolio-site.glitch.me/" target="_new">Developer Portfolio [Old]</a>
          <br/>
          <a href="https://larryzodiac-creative-coding.glitch.me/" target="_new">Creative Coding [Old]</a>
          <br/>
          <a href="https://glitch.com/@larryzodiac" target="_new">Glitch</a>
          <br/>
          <a href="https://twitter.com/evanmachale/" target="_new">Twitter</a>
          <div className="time">
            <p id="clock"></p>
            <p id="date"></p>
          </div>
        </footer>
      </Cell>
      <Cell desktopColumns={4} phoneColumns={4} tabletColumns={1} />
    </Row>
  );
}

export default Info;
