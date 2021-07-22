import React from 'react';
import AboutText from './AboutText';
import '../assets/css/AboutPage.css'
import MeImg from '../assets/img/me.jpg';
import Me2Img from '../assets/img/me2.jpg';

const AboutPage = () => (
  <section id="AboutPage">
    <h3 className="SectionTitle">About Me</h3>
    <div className="AboutContent">
      <div className="AboutImage">
        <img src={Me2Img} alt="Me" height="400"></img>
      </div>
      <AboutText />
    </div>
  </section>
)

export default AboutPage;