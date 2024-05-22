import React from 'react';
import '../CSS/Skills.css';


const Skills = () => {
  return (
    <div className='section' id='skills'>
      <div className="skillsbg flex items-center justify-center;">
        <h1 className="text-5xl font-bold text-gradient2 mb-5 mt-4">Skills</h1>
        <ul className="list-none flex flex-wrap w-4/5 items-center justify-center">
          <li className=" p-6 text-center ico">
            <i className="devicon-javascript-plain text-5xl mx-auto mb-2"></i>
            <p>JavaScript</p>
          </li>
          <li className=" p-6 text-center ico">
            <i className="devicon-java-plain text-5xl mx-auto mb-2"></i>
            <p>Java</p>
          </li>
          <li className=" p-6 text-center ico">
            <i className="devicon-react-plain text-5xl mx-auto mb-2"></i>
            <p>React</p>
          </li>
          <li className=" p-6 text-center ico">
            <i className="devicon-tailwindcss-plain text-5xl mx-auto mb-2"></i>
            <p>Tailwind</p>
          </li>
          <li className=" p-6 text-center ico">
            <i className="devicon-html5-plain text-5xl mx-auto mb-2"></i>
            <p>HTML</p>
          </li>
          <li className=" p-6 text-center ico">
            <i className="devicon-css3-plain text-5xl mx-auto mb-2"></i>
            <p>CSS</p>
          </li>
          <li className="p-6 text-center ico">
            <i className="devicon-c-plain text-5xl mx-auto mb-2"></i>
            <p>C</p>
          </li>
          <li className="p-6 text-center ico">
            <i className="devicon-csharp-plain text-5xl mx-auto mb-2"></i>
            <p>C#</p>
          </li>
          <li className=" p-6 text-center ico">
            <i className="devicon-latex-plain text-5xl mx-auto mb-2"></i>
            <p>LaTeX</p>
          </li>
          <li className=" p-6 text-center ico">
            <i className="devicon-express-original text-5xl mx-auto mb-2"></i>
            <p>Express</p>
          </li>
          <li className=" p-6 text-center ico">
            <i className="devicon-github-plain text-5xl mx-auto mb-2"></i>
            <p>Github</p>
          </li>
          <li className=" p-6 text-center ico">
            <i className="devicon-unix-original text-5xl mx-auto mb-2"></i>
            <p>Unix</p>
          </li>
          <li className=" p-6 text-center ico">
            <i className="devicon-linux-plain text-5xl mx-auto mb-2"></i>
            <p>Linux</p>
          </li>
          
        </ul>
        <h1 className="text-5xl font-bold text-gradient2 mb-5 mt-4 coursetitle">Coursework</h1>
        <ul className="list-disc two-column-list mb-5">
          <li>CMSC330 - Organization of Programming Languages</li>
          <li>CMSC351 - Algorithms</li>
          <li>CMSC216 - Intro to Computer Systems</li>
          <li>CMSC250 - Discrete Structures</li>
          <li>CMSC133/132 - OOP I/II</li>
          <li>MATH240 - Linear Algebra</li>
          <li>STAT400 - Applied Stat and Prob I</li>
          <li>MATH140/141 - Calculus I/II</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
