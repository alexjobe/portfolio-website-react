import React from 'react';
import Project from './Project';
import '../assets/css/ProjectsPage.css'
import OlymbotsImg from '../assets/img/olymbots.jpg';
import NodeImg from '../assets/img/node.jpg';
import LaptopCheckoutImg from '../assets/img/laptopCheckout.jpg';
import MineSweeperImg from '../assets/img/mineSweeper.jpg';
import EcsImg from '../assets/img/ecs.jpg';
import ProjectHordeImg from '../assets/img/unreal_shooter.jpg';
import VertiscapeImg from '../assets/img/vertiscape.jpg';
import UnrealImg from '../assets/img/unreal.jpg';

class ProjectsPagePersonal extends React.Component {

  render = () => {
    return (
      <section className="ProjectsPage">
        <h3 className="SectionTitle">Personal Projects</h3>
        <div className="Projects">
          <Project
            image={UnrealImg}
            imageText="Meteoric"
            iconClass="fas fa-gamepad"
            link="https://github.com/alexjobe/meteoric"
            title="Meteoric"
            aboutText={<p>A true first-person (TFP) multiplayer shooter with procedural recoil, ADS, and weapon sway. Made with Unreal's Gameplay Ability System (GAS)</p>}
          />
          <Project
            image={ProjectHordeImg}
            imageText="ProjectHorde"
            iconClass="fas fa-gamepad"
            link="https://youtu.be/bElyXm1qsYc"
            title="ProjectHorde"
            aboutText={<p>A third-person shooter with networked co-op, made in Unreal with C++ and Blueprint</p>}
          />
          <Project
            image={VertiscapeImg}
            imageText="VertiScape"
            iconClass="fas fa-gamepad"
            link="https://youtu.be/p0SvhHEtvLQ"
            title="VertiScape"
            aboutText={<p>An Unreal platformer that features wallrunning and a generic save system</p>}
          />
          <Project
            image={EcsImg}
            imageText="ECS"
            iconClass="fas fa-sitemap"
            link="/posts/ecs"
            title="Archetypal ECS (C++)"
            aboutText={<p>A data-oriented Entity Component System that makes use of Archetypes</p>}
          />
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
            image={MineSweeperImg}
            imageText="MineSweeper"
            iconClass="fas fa-radiation"
            link="/minesweeper"
            title="MineSweeper.js"
            aboutText={<p>A Minesweeper clone made entirely in React: click to play it here!</p>}
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

export default ProjectsPagePersonal;