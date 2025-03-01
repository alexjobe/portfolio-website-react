import React from 'react';
import Skills from './Skills'

const AboutText = () => (
  <div className='AboutText'>
    <p>
      As a gameplay systems engineer, I have a proven track record of delivering high-quality, immersive gaming experiences. 
      Proficient in C++, Unreal Engine, and multiple scripting languages, I specialize in writing robust, maintainable code, 
      and implementing complex game mechanics.
    </p>
    <br />
    <p>
      I completed my double major in <strong>Applied Mathematics & Computer Science</strong> and <strong>
      Game Design & Development</strong>, but that doesn't mean I'm done learning! Much of my free time is spent at coffee 
      shops and libraries, following lessons online, reading books like <em><a target="_blank" 
        rel="noopener noreferrer" href='https://www.goodreads.com/book/show/3735293-clean-code'>
      Clean Code</a></em> and <em><a target="_blank" rel="noopener noreferrer" href=
      'https://www.goodreads.com/book/show/15499449-game-programming-patterns'>Game Programming Patterns</a></em>,
      and challenging myself with new projects.
    </p>
    <br />
    <p>
      When I'm not programming, I can usually be found reading, gaming, or hanging out with my two cats.
    </p>
    <Skills />
  </div>
)

export default AboutText;