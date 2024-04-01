import React from 'react';
import '../CSS/Home.css';

import personalImg from '../images/take2 - Copy.png';
import resume from '../images/Resume - Caleb Holland.pdf';
import { Link } from 'react-scroll';


import {FaGithub, FaLinkedin, FaStrava} from 'react-icons/fa'

import {TypeAnimation} from 'react-type-animation';
const Home = () => {
  return (
      <div className='section' id='home'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Y-eYRSVjhBzI4piz&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <div className='About-page'>
          <div className='About-page-text'>
            <h1 className="text-5xl font-bold bio">Caleb Holland</h1>
            <div className="text-gradient2 lg:text-3xl sm:text-sm bio">
              <TypeAnimation sequence={[
                'Computer Science Student',2000,
                'Incoming Technology Intern',2000,
                'Aspiring Web Developer ',2000,
                'Aspiring Software Engineer',2000
              ]}
              speed={50} repeat={Infinity}/>
            </div>
            <p className="bio"><br></br>Hi! My name is Caleb Holland, a second year computer science student at the University of Maryland - College Park.<br></br> I have an interest in web development, software engineering, and cybersecurity. <br></br> I'm currently an incoming
             intern at PNC bank as part of their technology internship program! <br></br>I'm looking forward to further exploring my interests and expanding my skillset.</p>
            <div className="buttons mt-10 mb-10">
              <button className="butn mr-10"><Link to="contact" activeClass="active2" smooth="true" spy="true">Contact</Link></button>
              <button className="butn"><a href={resume}>Resume</a></button>
            </div>
            <div className="icon-links">
              <a href="https://github.com/holland-cw3"><FaGithub/></a>
              <a href="https://www.linkedin.com/in/caleb-holland-0a1168211/" class ='ml-6'> <FaLinkedin/></a>
              <a href="https://www.strava.com/athletes/69624144" class="ml-6"><FaStrava/></a>
            </div>
          </div>
          <img className="image" src={personalImg} alt="caleb holland" width="400px"/>
        </div>
      </div>
    );
};

export default Home;