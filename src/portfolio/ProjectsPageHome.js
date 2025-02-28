import React from 'react';
import ProjectCategory from './ProjectCategory';
import '../assets/css/ProjectsPage.css'

class ProjectsPageHome extends React.Component {

  render = () => {
    return (
      <section className="ProjectsPage">
        <h3 className="SectionTitle">Projects</h3>
        <div className="Projects">
          <ProjectCategory
            iconClass="fas fa-users"
            link="/projects/professional"
            title="Professional"
            aboutText={<p>A showcase of commercial projects I have contributed to in my career as a software engineer</p>}
          />
          <ProjectCategory
            iconClass="fas fa-user"
            link="/projects/personal"
            title="Personal"
            aboutText={<p>A selection of my own personal projects, from gamedev to webdev</p>}
          />
        </div>
        <a className="GithubLink" href="https://github.com/alexjobe">{"See more at Github "}
          <i className="fab fa-github"></i>
        </a>
      </section>
    )
  }
}

export default ProjectsPageHome;