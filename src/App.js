import React from 'react';
import './assets/css/App.css'
import './assets/fontawesome/css/all.css';
import HomePage from './portfolio/HomePage';
import AboutPage from './portfolio/AboutPage';
import ProjectsPage from './portfolio/ProjectsPage';
import ContactPage from './portfolio/ContactPage';
import Navbar from './portfolio/Navbar';
import Game from './minesweeper/Game';

const pages = {
  PAGE_HOME: "PAGE_HOME",
  PAGE_ABOUT: "PAGE_ABOUT",
  PAGE_PROJECTS: "PAGE_PROJECTS",
  PAGE_CONTACT: "PAGE_CONTACT",
  PAGE_GAME: "PAGE_GAME"
}

class App extends React.Component {

  _isMounted = false;

  state = {
    currentPage: pages.PAGE_HOME
  }

  componentDidMount = () => {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setPage = (page) => {
    if (this._isMounted) {
      this.setState(st => {
        return { currentPage: page };
      });
    }
  }

  renderHomePage = () => {
    return (
      <div className="App">
        <Navbar setPage={this.setPage} />
        <HomePage setPage={this.setPage} />
      </div>
    );
  }

  renderAboutPage = () => {
    return (
      <div className="App">
        <Navbar setPage={this.setPage} />
        <AboutPage />
      </div>
    );
  }

  renderProjectsPage = () => {
    return (
      <div className="App">
        <Navbar setPage={this.setPage} />
        <ProjectsPage setPage={this.setPage} />
      </div>
    );
  }

  renderContactPage = () => {
    return (
      <div className="App">
        <Navbar setPage={this.setPage} />
        <ContactPage />
      </div>
    );
  }

  renderGamePage = () => {
    return (
      <div className="App">
        <Navbar setPage={this.setPage} />
        <Game />
      </div>
    );
  }

  render = () => {
    if (this.state.currentPage === pages.PAGE_ABOUT) return this.renderAboutPage();
    else if (this.state.currentPage === pages.PAGE_PROJECTS) return this.renderProjectsPage();
    else if (this.state.currentPage === pages.PAGE_CONTACT) return this.renderContactPage();
    else if (this.state.currentPage === pages.PAGE_GAME) return this.renderGamePage();
    else return this.renderHomePage();
  }
}

export default App;
