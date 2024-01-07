import React from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

import { BiHomeAlt, BiBulb } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';


import { Link } from 'react-scroll';


const Nav = () => {
    return (
        <nav className="fixed bottom-2 lg:bottom-5 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div className="w-full bg-black/20 h-[70px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/70">
                    <Link to="home" activeClass="active2" smooth="true" spy="true" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center" >
                        <BiHomeAlt />
                    </Link>
                    <Link to="about" activeClass="active2" smooth="true" spy="true" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                        <BiBulb />
                    </Link>
                    <Link to="skills" activeClass="active2" smooth="true" spy="true" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                        <BsClipboardData />
                    </Link>
                    <Link to="work" activeClass="active2" smooth="true" spy="true" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                        <BsBriefcase />
                    </Link>
                    <Link to="contact" activeClass="active2" smooth="true" spy="true" className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center">
                        <BsChatSquare />
                    </Link>
                    
                </div>
            </div>
        </nav>
    );
};

export default Nav;