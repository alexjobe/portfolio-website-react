import React from 'react';

const Project = ({ image, imageText, iconClass, link, title, aboutText, onClick }) => (
  <div className="Project">
    <div className="ProjectDisplay">
      <img src={image} alt={imageText} />
      <i className={iconClass}></i>
      {onClick ?
        <a onClick={onClick} href={link}>{imageText}</a>
        :
        <a target="_blank" rel="noopener noreferrer" href={link}>{imageText}</a>
      }
    </div>
    <h3>{title}</h3>
    <div>{aboutText}</div>
  </div>
)

export default Project;