import React from 'react';
import AboutText from './AboutText';
import '../assets/css/AboutPage.css'
import MeImg from '../assets/img/me.jpg';
import Me2Img from '../assets/img/me2.jpg';

const AboutPage = () => (
  <section id="AboutPage">
    <div className="AboutQuote">
      <h3>
        <span id="Quote1">"I am the — </span>
        <span id="Quote2">A-L-E-X-A-N-D-E-R</span>
        <span id="Quote3"> — we are meant to be"</span>
      </h3>
    </div>
    <div className="AboutContent">
      <div className="AboutImage">
        <img src={Me2Img} alt="Me" height="400"></img>
      </div>
      <AboutText />
    </div>
  </section>
)

export default AboutPage;