import React from 'react';
import '../CSS/Work.css';


const Work = () => {
  return <div className='section' id='work'>
    <div className='experience'>
      <h1 className="text-5xl font-bold underline">Work Experience</h1>
      <div className="card">
        <div className="worktitle">
          <h1 className='text-gradient2 ti'> Software Engineer Intern</h1>
          <span className="justify-right mr-5">May 2024 - Present</span>
        </div>
        <h1 className="italic ml-5 comp">PNC Bank</h1>
        <ul className="list-disc ml-9 mb-5 mt-4">
            <li>Enterprise Technology & Security Chief Information Office.</li>
            
        </ul>
      </div>
      <div className='card'>
      <div className="worktitle">
          <h1 className='text-gradient2 ti'> Web Developer</h1>
          <span className="justify-right mr-5">March 2023 – December 2023</span>
        </div>
        <h1 className="italic ml-5 comp">University of Maryland Club Running</h1>
        <ul className="list-disc ml-9 mb-5 mt-4">
            <li>Overhauled a PHP website to use JavaScript, React.js, and Tailwind CSS; Converted a SQL database to JSON.</li>
            <li>Orchestrated cost-effective domain and hosting solutions, reducing spending on the website by 85%. </li>
            <li>Monitored Google Search Console for web traffic statistics; improved Search Engine Optimization by 50%.</li>
            <li>Served among the club’s board of 7 officers, managing club records and resources for 100+ members.</li>
        </ul>
      </div>
      <div className='card'>
        <div className="worktitle">
          <h1 className='text-gradient2 ti'> Assistant to the Associate Director</h1>
          <span className="justify-right mr-5">August 2022 - August 2023</span>
        </div>
        <h1 className="italic ml-5 comp">A. James Clark School of Engineering</h1>
        <ul className="list-disc ml-9 mb-5 mt-4">
            <li>Developed a project management form and UI using VBA and Excel to organize 20+ ongoing construction projects.</li>
            <li>Assisted with laboratory renovations across all 16 buildings in the engineering school.</li>
            <li>Conducted data collection on airborne particles, collecting 120+ samples in a class 1000 cleanroom.</li>
            <li>Digitized and managed over 1500+ Graduate Student records for the 2022-2023 catalog.</li>
        </ul>
      </div>
    </div>
  </div>;
};

export default Work;
