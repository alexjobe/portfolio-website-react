import React from 'react';

const Project = ({ image, imageText, iconClass, link, title, subtitle, aboutText }) => (
  <div className="Project">
    <div className="ProjectDisplay">
      <img src={image} alt={imageText} />
      <i className={iconClass}></i>
      <a href={link}>{imageText}</a>
    </div>
    <div className="ProjectTitle">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
    </div>
    <div>{aboutText}</div>
  </div>
)

export default Project;