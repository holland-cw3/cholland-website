import React from 'react';
import '../CSS/Header.css';

import { Link } from 'react-scroll';



const Header = () => {
  return <div className=''>
    <h1 className="banner text-2xl mt-3"> Caleb Holland</h1>
    <button className="connect"><Link to="contact" activeClass="active2" smooth="true" spy="true" className="cursor-pointer w-[60px] h-[60px] ml-4 mr-4 mt-2 mb-2 text-xl">Contact</Link></button>
  </div>;
};

export default Header;