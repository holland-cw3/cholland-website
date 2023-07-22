import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/Header.css';
import resumePDF from '../images/Resume - Caleb_Holland.pdf';

function Header() {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const listItems = document.querySelectorAll('.header-right li');
        listItems.forEach((item) => {
            item.classList.remove('active');
        });

        if (location.pathname !== '/') {
            const activeListItem = document.querySelector(`.header-right li a[href*="${location.pathname}"]`);
            if (activeListItem) {
                activeListItem.parentElement.classList.add('active');
            }
        }
    }, [location]);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <header className="App-header">
                <div className={`tabs ${isActive ? 'active' : ''}`}>
                    <ul>
                        <li className="home no-highlight">
                            <a href="/">CALEB HOLLAND</a>
                        </li>
                        <li className={`hamburger-menu ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
                            <span className="hamburger-icon" style={{ color: 'white' }}>
                                &#9776;
                            </span>
                            <div className={`hamburger-content ${isActive ? 'active' : ''}`}>
                                <ul>
                                    <li><a href={resumePDF}>Resume</a></li>
                                    <li><a href="/running">Running</a></li>
                                    <li><a href="/projects">Projects</a></li>
                                    <li><a href="/digart">Art</a></li>
                                    <li><a href="/recipes">Recipes</a></li>
                                    
                                </ul>
                            </div>
                        </li>
                        <div className="header-right">
                            <li><a href="/Recipes">Recipes</a></li>
                            <li><a href="/digart">Artwork</a></li>
                            <li><a href={resumePDF}>Resume</a></li>
                            <li><a href="/running">Running</a></li>
                            <li><a href="/projects">Projects</a></li>

                        </div>
                    </ul>
                </div>
            </header>

            <nav id="nav">
                <ul className="links" id="myMenus"></ul>
            </nav>
        </div>
    );
}

export default Header;
