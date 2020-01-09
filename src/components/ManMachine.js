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
              <span role="img" aria-label="watermelon">January 1, 2020 • 🍉🍉🍉🍉🍉🍉 26 min read</span>
            </header>
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero ligula, blandit ac congue in, malesuada aliquet nisl. Nulla hendrerit molestie feugiat. Nam erat lectus, dictum eget tincidunt ut, ultricies nec quam.</p>
              <p>Sed massa enim, auctor non magna vitae, varius pulvinar velit. Fusce sodales nulla ut imperdiet efficitur. Cras lacus dui, lobortis eget tempus et, scelerisque id mi. Duis id ante sit amet quam ullamcorper consequat. Morbi sed auctor leo.</p>
            </article>
          </main>
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
