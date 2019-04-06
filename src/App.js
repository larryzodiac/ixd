/*
  Evan MacHale - N00150552
  25.03.19
  App.js
*/

import React, { Component } from 'react';
import './App.scss';
import './clock';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
      <main>
        
        <div className="mdc-layout-grid heading">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-1" />
            
            <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-10">
                  <header className="mdc-typography--headline4 subtitle">Evan MacHale ~ Creative Coding Experiments</header>
                </div>
              </div>
              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline1 title">
                    JavaScript and maths that powers digital art and creativity at <i><a className="title-link" href="http://www.iadt.ie/courses/creative-computing" target="_new">Dún Laoghaire's Institute of Art, Design and Technology.</a></i>
                  </header>
                </div>
              </div>
              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline4 subtitle">
                    <a className="link" href="https://larryzodiac.github.io/portfolio-site/" target="_new">Portfolio</a>
                    <a className="link" href="https://github.com/larryzodiac/" target="_new">Github</a>
                    <a className="link" href="https://www.linkedin.com/in/evanmachale/" target="_new">LinkedIn</a>
                  </header>
                </div>
              </div>
            </div>
            
            <div className="mdc-layout-grid__cell--span-1" />
          </div>
        </div>
        
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-1" />
            <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <i><header className="prelude center mdc-typography--body1">Parametric mathematics inspired by the work of <a className="prelude-link" href="https://www.youtube.com/watch?v=ZrKgyY5aDvA&feature=youtu.be&t=491" target="_new">John Whitney.</a></header></i>
                </div>
              </div>
              
            </div>
            <div className="mdc-layout-grid__cell--span-1" />
          </div>
        </div>
        
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-1" />
            
            <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12" id="s01" />
              </div>
              
            </div>
            <div className="mdc-layout-grid__cell--span-1" />
          </div>
        </div>
        
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-1" />
            
            <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12" id="s02" />
              </div>
              
            </div>
            <div className="mdc-layout-grid__cell--span-1" />
          </div>
        </div>
        
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-1" />
            
            <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12" id="s03" />
              </div>
              
            </div>
            <div className="mdc-layout-grid__cell--span-1" />
          </div>
        </div>
        
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-1" />
            
            <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12" id="s04" />
              </div>
              
            </div>
            <div className="mdc-layout-grid__cell--span-1" />
          </div>
        </div>
        
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-1" />
            
            <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-6">
                  <p className="mdc-typography--headline4">I'm an aspiring developer and interaction designer studying a B.Sc [Hons] in Creative-Computing in Dún Laoghaire's IADT. At the moment I'm researching generative and algorithmic design for creating web applications in react and three.</p>
                  <p className="mdc-typography--headline4">Thanks for reading.</p>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <p className="mdc-typography--headline4">Interwebs:<br/><a href="mailto:evanmachale@gmail.com">E-mail</a><br/><a href="https://github.com/larryzodiac/" target="_new">Github</a><br/><a href="https://www.linkedin.com/in/evanmachale/" target="_new">linkedin</a><br/><a href="https://twitter.com/evanmachale/" target="_new">Twitter</a></p>
                  <p className="mdc-typography--headline4" id="clock"></p>
                  <p className="mdc-typography--headline4" id="date"></p>
                </div>
              </div>
              
            </div>
            <div className="mdc-layout-grid__cell--span-1" />
          </div>
        </div>
        
      </main>
    );
  }
}

export default App;
