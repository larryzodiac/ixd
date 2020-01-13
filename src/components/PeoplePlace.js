/*
  09/01/2020
  PeoplePlace.js
*/

import React from 'react';
// React Router
import {Link} from "react-router-dom";
// Material
import {Cell, Grid, Row} from '@material/react-layout-grid';
// Images
import saturate from '../assets/people+place/saturate-findings.jpg';
import discuss from '../assets/people+place/discuss.jpeg';
import affinityDiagram from '../assets/people+place/affinity-diagram.jpg';
import goals from '../assets/people+place/goals.jpg';
import personas from '../assets/people+place/personas.jpg';
import empathyMap from '../assets/people+place/empathy-map.jpg';
import sketches from '../assets/people+place/sketches.png';
import paperPrototype from '../assets/people+place/paper-prototype.png';
import sitemap1 from '../assets/people+place/sitemap-1.png';
import screenFlow1 from '../assets/people+place/screen-flow-1.png';

import feedbackBoard from '../assets/people+place/feedback-board.jpg';
import changeMyMind from '../assets/people+place/change-my-mind.png';
import screen1 from '../assets/people+place/screen-1.png';
import screen2 from '../assets/people+place/screen-2.png';
import screen3 from '../assets/people+place/screen-3.png';
import sitemap2 from '../assets/people+place/sitemap-2.png';
import screenFlow2 from '../assets/people+place/screen-flow-2.png';

function PeoplePlace() {
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
              <h1>People & Place</h1>
              <span role="img" aria-label="watermelon">2 October, 2019 • 10 min read</span>
            </header>
            <article>
              <p>We are in an age of unforeseen connectivity where we are intimately linked to portable computers with the power to enrich our daily lives. However, so many of our interactions with technology are unrewarding, and lack real meaning for where we are and how we feel as humans.</p>
              <p>In this project we were tasked with designing an innovative native app which improves the lives of its target users by addressing a phenomenon we can not evade; love in a digital age.</p>
              <p>For this project we decided to focus on the topic of finding love.</p>
              <h2>Order From Chaos</h2>
              <p>Kicking off the project, we launched into secondary research, identiying existing trends and applications for our design challenge, before conjuring questions for some user research.</p>
              <p>Once we had interviewed and observed our targeted users, we reconvened to unpack the richness of our data. We identified themes, insights and opportunities throughout the findings, saturating our workspace with post-its before orgainising it into an affinity diagram.</p>
              <img src={saturate} alt="Saturate"/>
              <img src={discuss} alt="Discussing"/>
              <img src={affinityDiagram} alt="Affinity Diagram"/>
              <p>Having structured our insights, we began to come up with basic archetypes through which to categorise our users and their goals.</p>
              <p>Using prsonas, scenarios, user journey maps amd empathy maps we learnt how to communicate these insights in ways that contextualise them. This would help us build empathy with out users and give us valuable references for the next stage of the design process: prototyping</p>
              <img src={goals} alt="Goals"/>
              <img src={personas} alt="Personas"/>
              <img src={empathyMap} alt="Empathy Map"/>
              <h2>Key Insights</h2>
              <p>After making a connection, we struggle to initiate conversation.</p>
              <p>We want to know what others are planning.</p>
              <p>We don’t take things at face value online.</p>
              <p>We can never truly get to know someone online.</p>
              <h2>Design Principles</h2>
              <p>Breaking off from the group, it was time to start thinking about how I wanted the app to feel as a product. To help me in this I came up with six design principles to help me focus:</p>
              <p>Minimalist: doing more with less(Hick's Law).</p>
              <p>Unified: recognisable, repeatable, reusable solutuions(components).</p>
              <p>Trustworthy: efforts for transparency(catfishing and intentions).</p>
              <p>Ice breaking: providing the tools to initiate interactions and crutches to keep them going.</p>
              <p>Evocative: focus on creating instense points and moments.</p>
              <p>Fun: engagement in play.</p>
              <h2>Marco Polo</h2>
              <p>The first attempt.</p>
              <p>I began the fledgeling steps of the design process, employing a fast, iterative, prototype driven design phase accompained by lots of testing. I ideated and defined key features, constantly asking "how might I…?"</p>
              <p> The aim was to conceptualise fluidly on paper, testing in context as I went in order to produce greater levels of fidelity, refining my features and ideas.</p>
              <img src={sketches} alt="Sketches"/>
              <img src={paperPrototype} alt="Paper Prototype"/>
              <p>At this point I had my first idea: Marco Polo.</p>
              <p>A you can imagine, the dating app was to include a marco-polo game for finding your match when out on a date. Before meeting up, both users would agree on a rough area (map radius) to meet up in. With vibrations from shaking their phones and communicating with one another about the landmarks around them, the two would be lovers could take part in a game to break the ice and maybe create a few stories and memories along the way.</p>
              <p>It's main feature would be a user feed wherein you could view a single profile's 'feed' at a time before making a decision. A user could then comment or like a user's content and send a match request in doing so. It also included a chatroulette, messages inbox, profile, and the marco polo game.</p>
              <p>Sitemap:</p>
              <img src={sitemap1} alt="Sitemap"/>
              <p>Screen Flow:</p>
              <img src={screenFlow1} alt="Screen Flow"/>
              <h2>Testing</h2>
              <p>Well, everyone hated it.</p>
              <p>From my interviews and tests with my users it was clear Marco Polo wouldn't succeed. It was way too creepy.</p>
              <p>Including this, I found that the onboarding needed to be simplified, user profiles were lacking richness and my system of liking and commenting on user 'cards' was confusing.</p>
              <img src={feedbackBoard} alt="Feedback Board"/>
              <p>From the testing I discovered that some sort of game could be integrated with a user's profile feed. So I came up with a sort of change my mind game which could maybe evoke users into an emotional response, incentivising users to comment or like and break the ice.</p>
              <img src={changeMyMind} alt="Change My Mind"/>
              <h2>Hot Takes</h2>
              <p>At this point, as our designs began to coalesce, we began to focus on shifting our iterations to digital formats. We were fortunate to have Michell Mulvey from Fjord, a past student, running a full day workshop with us introducing us to visual design for screen and interactive prototyping in Adobe XD and Figma.</p>
              <p>In the next few days we worked with design systems, component libraries, patterns, colour, typography, and my absolute favourite: responsive grids systems!</p>
              <p>With these new skills under our belts we continued our quick iterations and testing building interactive digital prototypes of our final app designs.</p>
              <img src={screen1} alt="Screen"/>
              <p>Moving onto a second round of testing I realised that I was creating a complicated Tinder. Including too many yes/no options in one interface. To tackle this, I axed any sort of liking system and instead chose to prompt users to share their own opinions, and by extension, start a conversation.</p>
              <p>I was in essence, I found I was allowing my users to have a go at their own hot takes.</p>
              <p>"A superficially researched and hastily written piece that presents opinions as facts and is often moralistic."</p>
              <p>Hot Takes was born.</p>
              <img src={screen2} alt="Screen"/>
              <img src={screen3} alt="Screen"/>
              <p>Final sitemap:</p>
              <img src={sitemap2} alt="Screen"/>
              <p>Final screen flow:</p>
              <img src={screenFlow2} alt="Screen"/>
              <h2>Learning</h2>
              <p>In my first project, prior to this one, we redesigned an existing experience. During the first two weeks of this project I learned how to research and design from scratch. It was not unlike my first project but was far, far more in-depth. I learned how to unpack a broad topic, how people feel about finding love online, identifying opportunities that I could build for and framing my users as archetypes that I could empathise with and reevaluate as my work evolved.</p>
              <p>Personas make a huge difference in longer projects like this. I appreciated them more as I began to digitise my work, doing less testing and longer periods of building. I found they reign you in, reminding you of what they as users want to achieve. They're a nice, human centred reminder of what I saw and heard, what it means and why it matters. Order from the chaos.</p>
              <p>From here we moved to digital prototyping and it was an absolute joy. Taking up something like Adobe XD and building a fully interactive fake app to test with was mind melting. With the help of the people around me I was able to super quickly build this stuff and test and test and test. From my experience developing apps, I loved things like grids and modular components. It was creatively liberating to say the least, to be given so much time to play with layout and colour.</p>
              <p></p>
              <p></p>
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
                <li>
                  <Link to="/man+machine">← Man & Machine</Link>
                </li>
                <li>
                  <Link to="/servicED">ServicED →</Link>
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

export default PeoplePlace;
