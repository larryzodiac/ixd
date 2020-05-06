/*
  06/05/2020
  Dev.js
*/

import React, {useEffect} from 'react';
// React Router
import {Link} from "react-router-dom";
// Material
import {Cell, Row} from '@material/react-layout-grid';

function Dev() {
  return (
    <Row>
      <Cell desktopColumns={1} phoneColumns={4} tabletColumns={1}>
        <header className="side-title">Software Development</header>
      </Cell>
      <Cell desktopColumns={11} phoneColumns={4} tabletColumns={7}>
        <section className="project"></section>
      </Cell>
    </Row>
  );
}

export default Dev;
