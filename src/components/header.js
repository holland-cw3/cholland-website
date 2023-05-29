import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/Header.css';
import resumePDF from '../images/Resume - Caleb Holland.pdf';


function Header() {
    const location = useLocation();

    useEffect(() => {
        const listItems = document.querySelectorAll('.tabs li');
        listItems.forEach((item) => {
            item.classList.remove('active');
        });

        const activeListItem = document.querySelector(`.tabs li a[href*="${location.pathname}"]`);
        if (activeListItem) {
            activeListItem.parentElement.classList.add('active');
        }
    }, [location]);


    return (
        <div>
            <header class="App-header">
                <div class="tabs">
                    <ul>
                        <li className="home no-highlight"><a href="/">CALEB HOLLAND</a></li>
                        <li><a href="/digart">Art</a></li>
                        <li><a href={resumePDF}>Resume</a></li>
                        <li><a href="/running">Running</a></li>
                        <li><a href="/projects">Projects</a></li>
                    </ul>
                </div>
            </header>

            <nav id="nav">
                <ul class="links" id="myMenus"></ul>
            </nav>
        </div>



    );
}

export default Header;
