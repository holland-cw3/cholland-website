import React from 'react';
import '../CSS/Home.css';

import personalImg from '../images/take2 - Copy.png';

import {FaGithub, FaLinkedin, FaStrava} from 'react-icons/fa'

import {TypeAnimation} from 'react-type-animation';
const Home = () => {
  return (
      <div className='section' id='home'>
        <div className='About-page'>
          <img className="image" src={personalImg} alt="caleb holland" width="400px"/>
          <div className='About-page-text'>
            <h1 className="text-5xl font-bold">Caleb Holland</h1>
            <div className="text-gradient2 lg:text-3xl sm:text-sm">
              <TypeAnimation sequence={[
                'Computer Science Student',2000,
                'Incoming Technology Intern',2000,
                'Aspiring Web Developer ',2000,
                'Aspiring Software Engineer',2000
              ]}
              speed={50} repeat={Infinity}/>
            </div>
            <a href="https://github.com/holland-cw3" className="icon"><FaGithub/></a>
          </div>
        </div>
      </div>
    );
};

export default Home;