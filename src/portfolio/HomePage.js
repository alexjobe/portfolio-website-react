import React from 'react';
import Hero from './Hero';
import '../assets/css/HomePage.css'

class HomePage extends React.Component {

  render = () => {
    return (
      <section className='HomePage'>
        <Hero />
        <a id='PlayButton' href='/minesweeper' >
          <i className="fas fa-play-circle"></i>
        </a>
      </section>
    );
  }
}

export default HomePage;
