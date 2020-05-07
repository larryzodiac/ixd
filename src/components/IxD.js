/*
  06/05/2020
  IxD.js
*/

import React, {useEffect} from 'react';
// React Router
import {Link} from "react-router-dom";
// Material
import {Cell, Row} from '@material/react-layout-grid';

function IxD() {
  return (
    <Row>
      <Cell desktopColumns={1} phoneColumns={4} tabletColumns={1}>
        <header className="side-title">Interaction Design</header>
      </Cell>
      <Cell desktopColumns={11} phoneColumns={4} tabletColumns={7}>
        <article className="projects-container">
          <section className="project-tile-0">
            <figure className="project-figure">
              <img className="project-image" src="https://www.apple.com/newsroom/images/product/app-store/Apple_App_Store_10th_anniversary_07102018_big.gif.large.gif" alt="Hot Takes Dating App" />
            </figure>
          </section>
          <section className="project-tile-1">
            <figure className="project-figure">
              <img className="project-image" src="https://www.apple.com/newsroom/images/product/app-store/apple_app_store_10th_anniversary_mobile_first_07052018_inline.jpg.large_2x.jpg" alt="Mater Health Hub" />
            </figure>
          </section>
          <section className="project-tile-2">
            <figure className="project-figure">
              <img className="project-image" src="https://www.apple.com/newsroom/images/product/app-store/Apple_App_Store_10th_Anniversary_iPad-Productlifestyle-Idaho-07032018_inline.jpg.large_2x.jpg" alt="dada" />
            </figure>
          </section>
        </article>
      </Cell>
    </Row>
  );
}

export default IxD;
