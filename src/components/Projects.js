import React from 'react';
import '../CSS/Projects.css';

import p1 from '../images/p1ima.png';

const About = () => {
  return (
  <section className='section' id='about'>
    <div className="container mx-auto">
          <div className="projectsbanner">
            <h2 className='text-gradient2 text-4xl'>My Projects</h2>
          </div>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb:0'>
          
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img className="group-hover:scale-125 transition-all duration-500" src={p1} alt="p1"/>
            <div className='absolute -bottom-full left-12 group-hover:top-5 transition-all duration-500 z-50'>
              <span className="text-3xl text-gradient2">Asteroids</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:top-14 transition-all duration-700 z-50'>
              <span className="italics text-white ">Object Oriented Programming & Graphics</span>
            </div>
          </div>
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img className="group-hover:scale-125 transition-all duration-500" src={p1} alt="p1"/>
            <div className='absolute -bottom-full left-12 group-hover:top-5 transition-all duration-500 z-50'>
              <span className="text-3xl text-gradient2">Asteroids</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:top-14 transition-all duration-700 z-50'>
              <span className="italics text-white ">Object Oriented Programming & Graphics</span>
            </div>
          </div>
        </div>
        <div className='flex-1 flex flex-col gap-y-10'>
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img className="group-hover:scale-125 transition-all duration-500" src={p1} alt="p1"/>
            <div className='absolute -bottom-full left-12 group-hover:top-5 transition-all duration-500 z-50'>
              <span className="text-3xl text-gradient2">Asteroids</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:top-14 transition-all duration-700 z-50'>
              <span className="italics text-white ">Object Oriented Programming & Graphics</span>
            </div>
          </div>
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img className="group-hover:scale-125 transition-all duration-500" src={p1} alt="p1"/>
            <div className='absolute -bottom-full left-12 group-hover:top-5 transition-all duration-500 z-50'>
              <span className="text-3xl text-gradient2">Asteroids</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:top-14 transition-all duration-700 z-50'>
              <span className="italics text-white ">Object Oriented Programming & Graphics</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;