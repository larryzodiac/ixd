/*
  06/05/2020
  cc.js
*/

import React, {useEffect} from 'react';
// React Router
import {Link} from "react-router-dom";
// Material
import {Cell, Row} from '@material/react-layout-grid';

function cc() {
  return (
    <Row>
      <Cell desktopColumns={1} phoneColumns={4} tabletColumns={1}>
        <header className="side-title">Creative Coding</header>
      </Cell>
      <Cell desktopColumns={7} phoneColumns={4} tabletColumns={6}>
        <p className="info">Coming Soon.</p>
      </Cell>
      <Cell desktopColumns={4} phoneColumns={4} tabletColumns={1} />
    </Row>
  );
}

export default cc;
