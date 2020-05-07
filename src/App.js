/*
  06/04/2020
  App.js
*/

import React from 'react';
import './App.scss';
// React Router
import {
  BrowserRouter as Router,
  Link,
  Route,
} from "react-router-dom";
// Material
import {Cell, Grid, Row} from '@material/react-layout-grid';
// My Components
import Dev from './components/Dev';
import IxD from './components/IxD';
import CC from './components/CC';
import Info from './components/Info';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.menuItemSelect = this.menuItemSelect.bind(this);
    this.state = {
      menuItems: [
        {key: 0, name: 'Dev', link: '/'},
        {key: 1, name: 'IxD', link: '/IxD'},
        {key: 2, name: 'CC', link: '/CC'},
        {key: 3, name: 'Info', link: '/Info'},
      ],
      activeKey: 0,
    };
  }

  menuItemSelect(key) {
    this.setState(state => ({
      activeKey: key
    }));
  }

  render() {

    let menuItems = this.state.menuItems.map((item) =>
      <li key={item.key} onClick={() => this.menuItemSelect(item.key)}>
        <Link className="menu-item" to={item.link}>
          {(this.state.activeKey == item.key) ? (
            <React.Fragment>
              <span className="activeKey">— </span>
              <span className="activeKey">{item.name}</span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span className="inactiveKey">— </span>
              <span>{item.name}</span>
            </React.Fragment>
          )}
        </Link>
      </li>
    );

    return (
      <Grid className="grid">
        <Router>
          <div className="top-app-bar">
            <header className="title">Evan MacHale</header>
            <ul className="menu">
              {menuItems}
            </ul>
          </div>
          <Route exact path="/" component={Dev}/>
          <Route exact path="/IxD" component={IxD}/>
          <Route exact path="/CC" component={CC}/>
          <Route exact path="/Info" component={Info}/>
        </Router>
      </Grid>
    );
  }
}

export default App;
