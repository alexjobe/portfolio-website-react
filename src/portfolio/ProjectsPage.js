import React from 'react';
import Project from './Project';
import '../assets/css/ProjectsPage.css'
import OlymbotsImg from '../assets/img/olymbots.png';
import ZordoImg from '../assets/img/zordo.png';
import NodeImg from '../assets/img/node.png';
import LaptopCheckoutImg from '../assets/img/laptopCheckout.png';
import SdlImg from '../assets/img/sdl.png';
import MineSweeperImg from '../assets/img/mineSweeper.png';

const pages = {
  PAGE_HOME: "PAGE_HOME",
  PAGE_ABOUT: "PAGE_ABOUT",
  PAGE_PROJECTS: "PAGE_PROJECTS",
  PAGE_CONTACT: "PAGE_CONTACT",
  PAGE_GAME: "PAGE_GAME"
}

class ProjectsPage extends React.Component {

  render = () => {
    return (
      <section className="ProjectsPage">
        <h3 className="SectionTitle">Projects</h3>
        <div className="Projects">
          <Project 
            image={OlymbotsImg} 
            imageText="Olymbots" 
            iconClass="fas fa-gamepad" 
            link="https://ajobe.itch.io/olymbots"
            title="Olymbots"
            aboutText={<p>Built with Unity and C#, <b>Olymbots</b> is a competitive party game that features six mini-games 
            for two to four players</p>}
          />
          <Project
            image={LaptopCheckoutImg}
            imageText="LaptopCheckout"
            iconClass="fas fa-laptop"
            link="https://github.com/alexjobe/laptop-checkout-react"
            title="LaptopCheckout"
            aboutText={<p>An app built with React, Node.js, and MongoDB that tracks laptop usage and sends automatic email reminders</p>}
          />
          <Project
            image={SdlImg}
            imageText="Arcade App"
            iconClass="fas fa-ghost"
            link="https://github.com/alexjobe/arcade-app-sdl"
            title="ArcadeApp"
            aboutText={<p>A 2D game engine built with C++ and SDL2 that will play arcade games like Breakout and Snake</p>}
          />
          <Project
            image={MineSweeperImg}
            imageText="MineSweeper"
            iconClass="fas fa-radiation"
            link="/#"
            title="MineSweeper.js"
            aboutText={<p>A clone of Minesweeper made entirely in React. You can play it here!</p>}
            onClick={this.props.setPage.bind(this, pages.PAGE_GAME)}
          />
          <Project
            image={ZordoImg}
            imageText="Zordo"
            iconClass="fas fa-keyboard"
            link="https://github.com/alexjobe/Epic-of-Zordo"
            title="Epic of Zordo"
            aboutText={<p>A 2D role-playing game demo made with Godot and GDScript (a dynamically-typed language based on Python)</p>}
          />
          <Project
            image={NodeImg}
            imageText="Node.js"
            iconClass="fas fa-cloud"
            link="https://github.com/alexjobe/NodeJS-Forum"
            title="Node.js Forum"
            aboutText={<p>A forum built with Node.js, Express, and MongoDB that features user authentication</p>}
          />
        </div>
        <a className="GithubLink" href="https://github.com/alexjobe">{"See more at Github "}
          <i className="fab fa-github"></i>
        </a>
      </section>
    )
  }
}

export default ProjectsPage;