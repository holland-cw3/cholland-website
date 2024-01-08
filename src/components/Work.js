import React from 'react';
import '../CSS/Work.css';


const Work = () => {
  return <div className='section' id='work'>
    <div className='experience'>
      <h1 className="text-5xl font-bold underline">Work Experience</h1>
      <div className="card">
        <div className="worktitle">
          <h1 className='text-gradient2 ti'> Incoming Technology Intern</h1>
          <span className="justify-right mr-5">May 2024 - Start</span>
        </div>
        <h1 className="italic ml-5 comp">PNC Bank</h1>
        <ul className="list-disc ml-9 mb-5 mt-4">
            <li>Currently transitioning into 1 of 4 areas (Cybersecurity, Software Engineering, Tech Ops, and Data Analytics).</li>
            
        </ul>
      </div>
      <div className='card'>
      <div className="worktitle">
          <h1 className='text-gradient2 ti'> Webmaster</h1>
          <span className="justify-right mr-5">March 2023 – December 2023</span>
        </div>
        <h1 className="italic ml-5 comp">UMD Club Running</h1>
        <ul className="list-disc ml-9 mb-5 mt-4">
            <li>Overhauled the website, converting from PHP to JavaScript, React, and Tailwind CSS.</li>
            <li>Implemented cost efficient hosting solutions, reducing spending on the website by 85%. </li>
            <li>Utilized Google Search Console to improve Search Engine Optimization (SEO).</li>
            <li>Served on the club’s board of officers for a 9-month term, helping manage resources for 100+ members.</li>
        </ul>
      </div>
      <div className='card'>
        <div className="worktitle">
          <h1 className='text-gradient2 ti'> Assistant to the Associate Director</h1>
          <span className="justify-right mr-5">August 2022 - August 2023</span>
        </div>
        <h1 className="italic ml-5 comp">A. James Clark School of Engineering</h1>
        <ul className="list-disc ml-9 mb-5 mt-4">
            <li>Developed a project management form and UI using VBA and Excel to organize ongoing construction projects.</li>
            <li>Assisted with laboratory renovations across all 16 buildings in the engineering school.</li>
            <li>Performed data collection on airborne particles in a class 1000 cleanroom.</li>
            <li>Updated and digitized over 1500 Graduate Student records for the 2022-2023 Catalog.</li>
        </ul>
      </div>
    </div>
  </div>;
};

export default Work;