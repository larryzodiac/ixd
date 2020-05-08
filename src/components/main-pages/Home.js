/*
  08/01/2020
  Home.js
*/

import React, {useEffect} from 'react';
// React Router
import {Link} from "react-router-dom";
// Material
import {Cell, Grid, Row} from '@material/react-layout-grid';
// p5
import p5 from 'p5';
import sketch from '../sketch'
import '../clock.js';

function Home() {
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      new p5(sketch,'canvas');
    });

  return (
    <Grid>
      <Row>
        <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1} />
        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={6}>
          <header className="title">
            <h2>Interacting with Machines</h2>
          </header>
          <aside className="me">
            <img src="https://pbs.twimg.com/profile_images/1000376034208952320/EgOBqvHA_400x400.jpg" alt="Me" width="20%" height="auto"/>
            <p>Blog by <a href="https://github.com/larryzodiac" target="_new">Evan MacHale</a>.<br/>My journey with Interaction Design @ <a href="https://www.ncad.ie/postgraduate/school-of-design/ma-interaction-design/" target="_new">NCAD</a>.</p>
          </aside>
          <div id="canvas" className="canvas"></div>
          <section className="articles">
            <h3>Projects</h3>
            {/* Featured Projects */}
            {/*
              Re-design a website
            */}
            <article className="article">
              <Link to="/man+machine">
                <h2>Man & Machine</h2>
                <small>January 1, 2020 • 26 min read</small>
                <p>An introduction to design. Redesigning a website.</p>
              </Link>
            </article>
            {/*
              Dating App
            */}
            <article className="article">
              <Link to="/people+place">
                <h2>People & Place</h2>
                <small>January 1, 2020 • 26 min read</small>
                <p>Love in a digital age. Designing my first app</p>
              </Link>
            </article>
            {/*
              ServicED
            */}
            <article className="article">
              <Link to="/servicED">
                <h2>ServicED</h2>
                <small>January 1, 2020 • 26 min read</small>
                <p>What's the Matter at the Mater Hospital? Service Design.</p>
              </Link>
            </article>
          </section>
          <section className="about">
            <h3>About Me</h3>
            <p>I'm a multidisciplinary developer, aspiring designer & recent graduate with a first class honours awards classification from Dún Laoghaire's Institute of Art, Design & Technology studying a B.Sc [Hons] in Creative Computing. I'm currently attending The National College of Art & Design in Dublin having been accepted for a MA in Interaction Design. I love painting Warhammer and blurring the boundaries between design & code.</p>
            <p></p>
          </section>
          <footer className="interwebs">
            <h3>Interwebs</h3>
            <a href="mailto:evanmachale@gmail.com">Mail</a>
            <br/>
            <a href="https://github.com/larryzodiac/" target="_new">Github</a>
            <br/>
            <a href="https://www.linkedin.com/in/evanmachale/" target="_new">LinkedIn</a>
            <br/>
            <a href="https://larryzodiac-portfolio-site.glitch.me/" target="_new">Developer Portfolio</a>
            <br/>
            <a href="https://larryzodiac-creative-coding.glitch.me/" target="_new">Creative Coding</a>
            <br/>
            <a href="https://glitch.com/@larryzodiac" target="_new">Glitch</a>
            <br/>
            <a href="https://twitter.com/evanmachale/" target="_new">Twitter</a>
            <div className="time">
              <p id="clock"></p>
              <p id="date"></p>
            </div>
            <h4>Evan MacHale</h4>
          </footer>
        </Cell>
        <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1} />
      </Row>
    </Grid>
  );
}

export default Home;
