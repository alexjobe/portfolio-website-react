import React from 'react';
import './assets/css/App.css'
import './assets/fontawesome/css/all.css';
import HomePage from './portfolio/HomePage';
import AboutPage from './portfolio/AboutPage';
import ProjectsPage from './portfolio/ProjectsPage';
import ContactPage from './portfolio/ContactPage';
import Navbar from './portfolio/Navbar';
import Game from './minesweeper/Game';
import ECSPage from './portfolio/ECSPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {

  render = () => {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/minesweeper">
              <Game />
            </Route>
            <Route path="/posts/ecs">
              <ECSPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
