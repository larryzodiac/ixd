/*
  08/05/2020
  hotTakes.js
*/

import React, {useEffect} from 'react';
// React Router
import {Link} from "react-router-dom";
// Material
import {Cell, Row} from '@material/react-layout-grid';

function hotTakes(props) {
  return (
    <Row>
      <Cell desktopColumns={1} phoneColumns={4} tabletColumns={1}>
        <header className="side-title">Interaction Design</header>
      </Cell>
      <Cell desktopColumns={7} phoneColumns={4} tabletColumns={7}>
        <header className="project-title">Hot Takes</header>
        <p><i>- noun</i></p>
        <p><i className="blue">“A superficially researched and hastily written piece that presents opinions as facts and is often moralistic.”</i></p>
        <p>Hot Takes in an app for finding love in a digital age. Make new friends(or enemies) by expressing your opinion on controversial <i>'Hot Takes' </i> from others — e.g :</p>
        <p className="blue">Change my mind :</p>
        <p className="blue">Chicken fillet rolls need Taco sauce.</p>
        <figure className="project-figure-mobile">
          <img src="https://miro.medium.com/max/1200/1*pxEa4sUTOWmPyv9RP26b7Q.gif" alt="Home Feed"/>
        </figure>
        <p>Can't think of anything to say? Use other's Hot Takes to spark a chat on something you're both passionate about.</p>
        <figure className="project-figure-mobile">
          <img src="https://miro.medium.com/max/1200/1*c2ZSeuwH7sVzPQ7TE3SkSw.gif" alt="Match"/>
        </figure>
        <p className="project-subtitle">Key Insights :</p>
        <p>— After making a connection, we struggle to initiate conversation.</p>
        <p>— We want to know the intentions of others.</p>
        <p>— We don’t take things at face value online.</p>
        <p>— We can never truly get to know someone online.</p>
        <p>After research I decided to focus on getting to know people online through play. How might I break the ice between users and spark a passionate connection?</p>
        <p className="blue">An important part for me was to eliminate 'Tinder-esque' objectification. I wanted to create a dating app without any binary 'liking' options.</p>
        <figure className="project-figure">
          <img src="https://miro.medium.com/max/1400/0*Q-k70TcL1Nzo2E0h.png" alt="Flow"/>
        </figure>
        <p className="project-subtitle">Outcomes :</p>
        <p>— Reactions to a Hot Take <span className="blue">evokes emotion</span>, eliciting a desire in users to comment.</p>
        <p>— Hot Take 'Prompt Cards' help those users spark the conversation with a common ground. <span className="blue">There is no need to get stuck about what to say first.</span></p>
        <p>— The 'Hot Seat' chat randomiser is an exciting feature for users wanting to take risks.</p>
        <p>— The ability to quote Hot Takes in chat works as a <span className="blue">crutch</span> to sustain conversation.</p>
      </Cell>
      <Cell desktopColumns={4} phoneColumns={4} tabletColumns={0} />
    </Row>
  );
}

export default hotTakes;
