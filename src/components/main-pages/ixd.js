/*
  06/05/2020
  ixd.js
*/

import React, {useEffect} from 'react';
// React Router
import {Link} from "react-router-dom";
// Material
import {Cell, Row} from '@material/react-layout-grid';

function ixd(props) {
  return (
    <Row>
      <Cell desktopColumns={1} phoneColumns={4} tabletColumns={1}>
        <header className="side-title">Interaction Design</header>
      </Cell>
      <Cell desktopColumns={11} phoneColumns={4} tabletColumns={7}>
        <article className="projects-container">
          <section className="project-tile-0">
            <figure>
              <p>Nothing here yet..</p>
            </figure>
          </section>
          <section className="project-tile-1">
            <figure>
              <p>Working on it...</p>
            </figure>
          </section>
          <Link className="project-tile-2" to={"Hot-Takes"}>
            <figure>
              <img src="https://miro.medium.com/max/1200/1*pxEa4sUTOWmPyv9RP26b7Q.gif" alt="Hot Takes Dating App" />
            </figure>
          </Link>
        </article>
      </Cell>
    </Row>
  );
}

export default ixd;
