import React from 'react';
import Skills from './Skills'

const AboutText = () => (
  <div className='AboutText'>
    <p>
      I am a software developer who loves making games! I have experience with a variety of programming languages
      and platforms, and I strive to grow as a developer every day. Lately I have been delving into game engine
      architecture with C++ and SDL2, as well as improving my skills with Unity, Node.js, and React.
    </p>
    <br />
    <p>
      I recently completed my double major in <strong>Applied Mathematics::Computer Science</strong> and <strong>Game Design & Development</strong>, but that doesn't mean
      I'm done learning! Much of my free time is spent at coffee shops and libraries, following lessons on Udemy and Codeacademy,
      reading books like <em><a target="_blank" rel="noopener noreferrer" href ='https://www.amazon.com/Clean-Code-Handbook-
      Software-Craftsmanship/dp/0132350882'>Clean Code</a></em> and <em><a target="_blank" rel="noopener noreferrer" href=
      'https://www.amazon.com/Game-Programming-Patterns-Robert-Nystrom/dp/0990582906'>Game Programming Patterns</a></em>, 
      and challenging myself with new projects.
    </p>
    <br />
    <p>
      When I'm not programming, I can usually be found reading, painting, gaming, or hanging out with my two cats.
    </p>
    <Skills />
  </div>
)

export default AboutText;