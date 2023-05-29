import React from 'react';
import '../CSS/footer.css';
import { FaLinkedin, FaStrava } from 'react-icons/fa';
import githubIco from '../images/github-mark-white.png';

function Footer() {
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes"/>

            <footer id="footer">
                <div className="inner">

                    <ul className="icons">
                        <li><a className="icon" href="https://www.linkedin.com/in/caleb-holland-0a1168211/"><FaLinkedin size={35} /><span className="label"></span></a></li>
                        <li><a className="icon" href="https://www.strava.com/athletes/69624144"><FaStrava size={35} /><span className="label"></span></a></li>
                        <li>
                            <a className="icon git" href="https://github.com/holland-cw3">
                                <img src={githubIco} alt="GitHub Logo" className="github-logo" />
                            </a>
                        </li>
                    </ul>

                </div>
            </footer>
        </div>
    );
}

export default Footer;
