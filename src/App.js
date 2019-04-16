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
                  <header className="mdc-typography--headline4 subtitle">Evan MacHale - Creative Coding Experiments with <a href="https://p5js.org/" target="_new">p5.js</a> ヽ(^。^)丿</header>
                </div>
              </div>
              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline1 title">
                    JavaScript and maths powering digital art and creativity at <i><a className="title-link" href="http://www.iadt.ie/courses/creative-computing" target="_new">Dún Laoghaire's Institute of Art, Design and Technology.</a></i>
                  </header>
                </div>
              </div>
              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <header className="mdc-typography--headline4 subtitle">
                    <a className="link" href="https://larryzodiac.github.io/portfolio-site/" target="_new">Portfolio</a>
                    <a className="link" href="https://github.com/larryzodiac/" target="_new">Github</a>
                    <a className="link" href="https://glitch.com/@larryzodiac" target="_new">Glitch</a>
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
        
        <div className="mdc-layout-grid sketch-grid">
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
        
        <div className="mdc-layout-grid sketch-grid">
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
        
        <div className="mdc-layout-grid sketch-grid">
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
        
        <div className="mdc-layout-grid sketch-grid">
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
        
        <div className="mdc-layout-grid sketch-grid sketch-grid-bottom">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-1" />
            <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12" id="s05" />
              </div>
              
            </div>
            <div className="mdc-layout-grid__cell--span-1" />
          </div>
        </div>
        
        <div className="mdc-layout-grid sketch-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12" id="s06" />
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="mdc-layout-grid sketch-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12" id="s07" />
              </div>
              
            </div>
          </div>
        </div>
        
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-1" />
            <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-12">
                  <p className="mdc-typography--headline2">Stills</p>
                </div>
              </div>
              
              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-4-phone">
                  <img className="img" alt="" src="https://raw.githubusercontent.com/larryzodiac/creative-coding/master/src/course/01_assignment/01_stills/190416_180336_730_Colour1__rgba(69%2C58%2C148%2C1)_Colour2__rgba(244%2C59%2C71%2C1).png"></img>
                </div>
                <div className="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-4-phone">
                  <img className="img" alt="" src="https://raw.githubusercontent.com/larryzodiac/creative-coding/glitch/src/course/01_assignment/01_stills/181129_213252_388_Colour1__rgba(59%2C0%2C255%2C1)_Colour2__rgba(0%2C48%2C255%2C1).png"></img>
                </div>
                <div className="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-4-phone">
                  <img className="img" alt="" src="https://raw.githubusercontent.com/larryzodiac/creative-coding/glitch/src/course/01_assignment/01_stills/181129_220652_68_Colour1__rgba(0%2C0%2C0%2C1)_Colour2__rgba(41%2C41%2C51%2C1).png"></img>
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
                  <p className="mdc-typography--headline2">Learning</p>
                </div>
              </div>
              
              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-4-phone" id="s08" />
                <div className="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-4-phone" id="s09" />
                <div className="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-4-phone" id="s10" />
                <div className="mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-2-tablet mdc-layout-grid__cell--span-4-phone" id="s11"/>
              </div>
              
            </div>
            <div className="mdc-layout-grid__cell--span-1" />
          </div>
        </div>
        
        <div className="mdc-layout-grid footer">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-1" />
            
            <div className="mdc-layout-grid__cell--span-10-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">

              <div className="mdc-layout-grid__inner">
                <div className="mdc-layout-grid__cell--span-6">
                  <p className="mdc-typography--headline4">I'm an aspiring developer and interaction designer studying a B.Sc [Hons] in Creative-Computing in Dún Laoghaire's IADT. At the moment I'm researching generative and algorithmic design for creating web applications in react and three.</p>
                  <p className="mdc-typography--headline4">Thanks for reading.</p>
                </div>
                <div className="mdc-layout-grid__cell--span-6">
                  <p className="mdc-typography--headline4">Interwebs:<br/><a href="mailto:evanmachale@gmail.com">E-mail</a><br/><a href="https://github.com/larryzodiac/" target="_new">Github</a><br/><a href="https://github.com/larryzodiac/portfolio-site" target="_new">Portfolio</a><br/><a href="https://glitch.com/@larryzodiac" target="_new">Glitch</a><br/><a href="https://twitter.com/evanmachale/" target="_new">Twitter</a></p>
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
