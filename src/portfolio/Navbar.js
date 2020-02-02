import React from 'react';
import '../assets/css/Navbar.css'

const pages = {
  PAGE_HOME: "PAGE_HOME",
  PAGE_ABOUT: "PAGE_ABOUT",
  PAGE_PROJECTS: "PAGE_PROJECTS",
  PAGE_CONTACT: "PAGE_CONTACT",
  PAGE_GAME: "PAGE_GAME"
}

class Navbar extends React.Component {
  render = () => {
    return (
      <header id="Navbar">
        <div id="NavbarBackground"></div>
        <a id="NavHome" href='/#' onClick={this.props.setPage.bind(this, pages.PAGE_HOME)}><h3>Alex Jobe</h3></a>
        <nav>
          <a id="NavAbout" href='/#' onClick={this.props.setPage.bind(this, pages.PAGE_ABOUT)}>about</a>
          <a id="NavProjects" href='/#' onClick={this.props.setPage.bind(this, pages.PAGE_PROJECTS)}>projects</a>
          <a id="NavContact" href='/#' onClick={this.props.setPage.bind(this, pages.PAGE_CONTACT)}>contact</a>
        </nav>
      </header>
    );
  }
}

export default Navbar;