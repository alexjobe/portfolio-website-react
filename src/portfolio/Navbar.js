import React from 'react';
import '../assets/css/Navbar.css';
import {
  Link
} from "react-router-dom";

class Navbar extends React.Component {
  render = () => {
    return (
      <header id="Navbar">
        <div id="NavbarBackground"></div>
        <Link to="/"><div className="NavHome">Alex Jobe</div></Link>
        <nav>
          <Link to="/about">about</Link>
          <Link to="/projects">projects</Link>
          <Link to="/contact">contact</Link>
        </nav>
      </header>
    );
  }
}

export default Navbar;