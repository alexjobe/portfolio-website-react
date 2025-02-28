import React from 'react';

const ProjectCategory = ({ iconClass, link, title, aboutText }) => (
  <div className="Project">
    <a className="ProjectCategoryIcon" href={link} >
      <i className={iconClass}></i>
    </a>
    <div className="ProjectTitle">
      <h3>{title}</h3>
    </div>
    <div>{aboutText}</div>
  </div>
)

export default ProjectCategory;