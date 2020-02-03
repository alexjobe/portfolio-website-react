import React from 'react';
import '../assets/css/ContactPage.css'

const ContactPage = () => (
  <section className="ContactPage">
    <h3 className="SectionTitle">Contact Me</h3>
    <div className="ContactContent">
      <p className="ContactEmail"><i className="fas fa-envelope"></i>alex@alexjobe.net</p>
      <p>Or find me at:</p>
      <ul className="SocialLinks">
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/alexjobe"><i className="fab fa-github"></i> Github</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexjobe/"><i className="fab fa-linkedin"></i> LinkedIn</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/alexjobe/"><i className="fab fa-codepen"></i> CodePen</a>
        </li>
        <li>
          <a target="_blank" rel="noopener noreferrer" href="https://ajobe.itch.io/"><i className="fas fa-gamepad"></i> itch.io</a>
        </li>
      </ul>
    </div>
  </section>
)

export default ContactPage;