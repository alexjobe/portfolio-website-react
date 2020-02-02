import React from 'react';
import Hero from './Hero';
import '../assets/css/HomePage.css'

const pages = {
  PAGE_HOME: "PAGE_HOME",
  PAGE_ABOUT: "PAGE_ABOUT",
  PAGE_PROJECTS: "PAGE_PROJECTS",
  PAGE_CONTACT: "PAGE_CONTACT",
  PAGE_GAME: "PAGE_GAME"
}

class HomePage extends React.Component {

  render = () => {
    return (
      <section className='HomePage'>
        <Hero />
        <a id='PlayButton' href='/#' onClick={this.props.setPage.bind(this, pages.PAGE_GAME)}>
          <i className="fas fa-play-circle"></i>
        </a>
      </section>
    );
  }
}

export default HomePage;
