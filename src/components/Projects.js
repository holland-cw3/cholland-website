import React from 'react';
import '../CSS/Projects.css';

import p1 from '../images/KOT.png';
import p3 from '../images/cdaily.png';
import p2 from '../images/hottakes.png';
import p4 from '../images/club.png';

const About = () => {
  return (
  <section className='section' id='about'>
    <div className="projectscontainer">
    <div className="container mx-auto">
          <div className="projectsbanner">
            <h2 className='text-gradient2 text-4xl mt-10'>Projects</h2>
          </div>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb:0'>
          
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img className="group-hover:scale-125 transition-all duration-500" src={p4} alt="p1"/>
            <div className='absolute -bottom-full left-12 group-hover:top-5 transition-all duration-500 z-50'>
              <span className="text-3xl text-gradient2"><a href="https://github.com/UMDWebmaster/clubrunningumd/">UMD Club Running Website</a></span>
            </div>
            {/* <div className='absolute -bottom-full left-12 group-hover:top-14 transition-all duration-700 z-50'>
              <span className="italics text-white ">Object Oriented Programming & Graphics</span>
            </div> */}
          </div>
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img className="group-hover:scale-125 transition-all duration-500" src={p4} alt="p1"/>
            <div className='absolute -bottom-full left-12 group-hover:top-5 transition-all duration-500 z-50'>
              <span className="text-3xl text-gradient2"><a href="https://github.com/UMDWebmaster/clubrunningumd/">UMD Club Running Website</a></span>
            </div>
            {/* <div className='absolute -bottom-full left-12 group-hover:top-14 transition-all duration-700 z-50'>
              <span className="italics text-white ">Object Oriented Programming & Graphics</span>
            </div> */}
          </div>
          {/*
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img className="group-hover:scale-125 transition-all duration-500" src={p3} alt="p3"/>
            <div className='absolute -bottom-full left-12 group-hover:top-5 transition-all duration-500 z-50'>
              <span className="text-3xl text-gradient2"><a href="https://github.com/holland-cw3/cd_rates_webscraper">CD Rates Webscraper - IP</a></span>
            </div>
            {/* <div className='absolute -bottom-full left-12  group-hover:top-14 transition-all duration-700 z-50'>
              <span className="italics text-white ">IP - CD Rates Webscraper</span> 
            </div>
          </div>*/}
        </div>
        <div className='flex-1 flex flex-col gap-y-10'>
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img className="group-hover:scale-125 transition-all duration-500" src={p1} alt="p1"/>
            <div className='absolute -bottom-full md:left-12 group-hover:top-5 transition-all duration-500 z-50'>
              <span className="text-3xl text-gradient2"><a href="https://github.com/holland-cw3/KingOfTheTub">King of the Tub</a></span>
            </div>
            {/* <div className='absolute -bottom-full md:left-12 group-hover:top-14 transition-all duration-700 z-50'>
              <span className="italics text-white ">Game Design/Data Encryption/UI Design</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-700 z-50'>
              <span className="italics text-white "><a className='underline text-blue-600' href="https://github.com/holland-cw3/KingOfTheTub">Source Code</a></span>
            </div> */}
          </div>
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl mt-2 mb-10">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img className="group-hover:scale-125 transition-all duration-500" src={p2} alt="p1"/>
            <div className='absolute -bottom-full left-12 group-hover:top-5 transition-all duration-500 z-50'>
              <span className="text-3xl text-gradient2"><a href="https://github.com/holland-cw3/Strava-Hot-Takes">Strava Hot Takes</a></span>
            </div>
            {/* <div className='absolute -bottom-full left-12 group-hover:top-14 sm:group-hover:top-15 transition-all duration-700 z-50'>
              <span className="italics text-white "><a className='underline text-white' href="https://github.com/holland-cw3/Strava-Hot-Takes">REST APIs/Node.js Webhook</a></span>
            </div> */}
            
          </div>
          
        </div>
      </div>
    </div>
    </div>
  </section>
  );
};

export default About;
