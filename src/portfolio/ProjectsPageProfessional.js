import React from 'react';
import Project from './Project';
import '../assets/css/ProjectsPage.css'
import AlienImg from '../assets/img/alien.jpg';
import CreedImg from '../assets/img/creed.jpg';
import PuzzleBobbleImg from '../assets/img/pb.jpg';

class ProjectsPageProfessional extends React.Component {

  render = () => {
    return (
      <section className="ProjectsPage">
        <h3 className="SectionTitle">Professional Projects</h3>
        <div className="Projects">
          <Project
            image={AlienImg}
            imageText="Alien: Rogue Incursion"
            iconClass="fas fa-gamepad"
            link="https://alienrogueincursion.com/"
            title="Alien: Rogue Incursion"
            subtitle="Survios"
            aboutText={
              <p>
                <ul>
                  <li>Contributed to the implementation of multiple iconic tools and weapons from the <i>Aliens</i> franchise</li>
                  <li>Utilized Unreal’s Gameplay Ability System (GAS) to add player abilities and status effects</li>
                  <li>Worked extensively to improve and debug the in-house mission scripting and save system</li>
                </ul>
              </p>
            }
          />
          <Project
            image={CreedImg}
            imageText="Creed: Rise to Glory"
            iconClass="fas fa-gamepad"
            link="https://www.creedrisetoglory.com/"
            title="Creed: Rise to Glory"
            subtitle="Survios"
            aboutText={
              <p>
                <ul>
                  <li>Participated in upgrading Survios’ hit VR boxing game to UE5, and porting it to PSVR2 and Quest 3</li>
                  <li>Introduced hand-tracking support, and designed and implemented a subsystem to record and bind hand gestures as input</li>
                  <li>Developed a customizable calorie-tracking plugin for the “Sweet Science” update</li>
                </ul>
              </p>
            }
          />
          <Project
            image={PuzzleBobbleImg}
            imageText="Puzzle Bobble 3D: Vacation Odyssey"
            iconClass="fas fa-gamepad"
            link="https://www.puzzlebobble3d.com/"
            title="Puzzle Bobble 3D: Vacation Odyssey"
            subtitle="Survios"
            aboutText={
              <p>
                <ul>
                  <li>Participated in the final lead-up to launch with a focus on resolving network multiplayer bugs and implementing Activity Cards for the PS5</li>
                </ul>
              </p>
            }
          />
        </div>
      </section>
    )
  }
}

export default ProjectsPageProfessional;