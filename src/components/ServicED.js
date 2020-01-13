/*
  09/01/2020
  PeoplePlace.js
*/

import React from 'react';
// React Router
import {Link} from "react-router-dom";
// Material
import {Cell, Grid, Row} from '@material/react-layout-grid';

function ServicED() {
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
              <h1>ServicED</h1>
              <span role="img" aria-label="watermelon">January 1, 2020 • 🍉🍉🍉🍉🍉🍉 x min read</span>
            </header>
            <article>
              <p>Coming soon, promise.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero ligula, blandit ac congue in, malesuada aliquet nisl. Nulla hendrerit molestie feugiat. Nam erat lectus, dictum eget tincidunt ut, ultricies nec quam.</p>
            </article>
          </main>
          <aside>
            <nav>
              <ul>
                <li>
                  <Link to="/people+place">← People & Place</Link>
                </li>
                <li />
              </ul>
            </nav>
          </aside>
        </Cell>
        <Cell desktopColumns={3} phoneColumns={0} tabletColumns={1} />
      </Row>
    </Grid>
  );
}

export default ServicED;
