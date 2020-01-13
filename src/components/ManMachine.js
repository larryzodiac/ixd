/*
  09/01/2020
  ManMachine.js
*/

import React from 'react';
// React Router
import {Link} from "react-router-dom";
// Material
import {Cell, Grid, Row} from '@material/react-layout-grid';

function ManMachine() {
  return (
    <Grid>
      <Row>
        <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1} />
        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={6} className="project">
          <header className="title">
            <Link to="/">
              <h3>Interacting with Machines</h3>
            </Link>
          </header>
          <main>
            <header>
              <h1>Man & Machine</h1>
              <span>23 September, 2019 • 3 min read</span>
            </header>
            <article className="content">
              <p>In this project we were asked to evaluate and redesign an existing Irish website. The rationale for the redesign needed to be driven from an overall experience as well as a usability perspective.</p>
              <p>Scouring the internet for woeful looking websites, we came across and settled on <a href="https://web.archive.org/web/20191130145955/https://www.irishtrails.ie/" target="_new">Irish Trails</a>. A directory for discovering nature trails in Ireland(which has since been taken down).</p>
              <p>Oh dear.</p>
              <img src="../../assets/man+machine/irish-trails.png" alt="Irish Trails"/>
              <h2>What do the people want?</h2>
              <p>On Tuesday, we started by conducting research to investigate the website and the organisation behind it, conducting a UI and navigation inventory. Then we came up with two tasks to evaluate the website, performing heuristic evaluations and guerrilla usibility testing. From this we worked together to combine all the data and organise our findings on our research board.</p>
              <img src="../../assets/man+machine/research-board.jpg" alt="Research Board"/>
              <p>We then took to the wall, creating our first user experience maps based on our user tasks in order to make sense of our findings. We identified opportunities for improvement and the oh so many pain-points found in our user tasks. So far we had organised our usability testing, task analysis, heuristic evaluations, user journeys/experience mapping and our identified usability issues.</p>
              <img src="../../assets/man+machine/experience-mapping.jpg" alt="Experience Mapping"/>
              <p>Then we took a moment to ponder some actionable recommendations before moving on.</p>
              <img src="../../assets/man+machine/thinking.jpg" alt="Pondering"/>
              <h2>Starting to build</h2>
              <p>The next step in the process was to figure out how our new site would function from an information architecture standpoint. We used card sorting techniques between ourselves and our users to figure it all out.</p>
              <img src="../../assets/man+machine/card-sorting.jpg" alt="Card Sorting"/>
              <img src="../../assets/man+machine/card-sorting-done.jpg" alt="Card Sorting Done"/>
              <p>Then we began to put pen to paper. Using a combination of sketching and low-fidelity prototypes we iteratively developed our design, testing as we went. We ideated various potential layouts and user flows, discussing their merit in context to the users needs and goals.</p>
              <img src="../../assets/man+machine/sketching.jpg" alt="Sketching"/>
              <h2>Making things presentable</h2>
              <p>Once we had synthesised our findings and created visual diagrams of our redesign reccomendations, we set out to produce our finished paper prototype for final submission that Friday.</p>
              <p>Using a rulers, sharpies and newly aquired stanley knife skills we sketched and cut out our user flow and presented it in an interactive(just about) prototype. Phew.</p>
              <img src="../../assets/man+machine/paper-prototype-done.jpg" alt="Paper Prototype Done"/>
              <img src="../../assets/man+machine/paper-prototype-screen.jpg" alt="Paper Prototype Screen"/>
              <img src="../../assets/man+machine/paper-prototype-component.jpg" alt="Paper Prototype Component"/>
              <h2>Learning</h2>
              <p>With only one week to work with, I got my first taste of the fast paced, iterative environment that designers live in. It was stressful but indescribably satisfying. I found myself cutting, shaping & colouring paper for the sole purpose of making someone's clicks and taps easier.</p>
              <p>As a developer, my introduction to Interaction Design was humanising. I sat down with people and just chatted about the screens they use. It sounds silly, but I had never done that before when building an app. From these chats we observed frustrations and delights; documenting them with our new found skills of task analysis, usability testing, heuristic evaluation, experience mapping, and pain-point identification.</p>
              <p>We sketched and tested and sketched again. It was a fairly fun week.</p>
            </article>
          </main>
          <footer>
            <header className="footer-title">
              <Link to="/">
                <h3>Interacting with Machines</h3>
              </Link>
            </header>
            <aside className="me footer-me">
              <img src="https://pbs.twimg.com/profile_images/1000376034208952320/EgOBqvHA_400x400.jpg" alt="Me" width="20%" height="auto"/>
              <p>Blog by <a href="https://github.com/larryzodiac" target="_new">Evan MacHale</a>.<br/>My journey with Interaction Design @ <a href="https://www.ncad.ie/postgraduate/school-of-design/ma-interaction-design/" target="_new">NCAD</a>.</p>
            </aside>
          </footer>
          <aside>
            <nav>
              <ul>
                <li />
                <li>
                  <Link to="/people+place">People & Place →</Link>
                </li>
              </ul>
            </nav>
          </aside>
        </Cell>
        <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1} />
      </Row>
    </Grid>
  );
}

export default ManMachine;
