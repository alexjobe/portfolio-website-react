import React from 'react';

const Project = ({ image, imageText, iconClass, link, title, aboutText }) => (
  <div className="Project">
    <div className="ProjectDisplay">
      <img src={image} alt={imageText} />
      <i className={iconClass}></i>
      <a href={link}>{imageText}</a>
    </div>
    <h3>{title}</h3>
    <div>{aboutText}</div>
  </div>
)

export default Project;