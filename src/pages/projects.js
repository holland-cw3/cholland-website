import React from 'react';
import '../CSS/running.css';
import calebImage from '../images/calebPic.JPG';


function Races() {
    return (
        <div className="page-container races-page">



            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />



            <div class="teamPic-container">
                <img src={calebImage} alt="" className="teamPic" />

            </div>

            <section id="main" className="race-table-container records">


                <div className="container">
                    


                    <h2 className="title">Projects</h2>
                    <div id="post">
                        <table className="races">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Personal Website</td>
                                    <td>Website built with React.js</td>
                                    <td><a href="https://github.com/holland-cw3/cholland-website">Link</a></td>

                                </tr>
                                <tr>
                                    <td>UMD Club Running Website</td>
                                    <td>Built with React, deployed via Vercel</td>
                                    <td><a href="https://clubrunningumd.vercel.app/">Link</a></td>

                                </tr>
                           
                                <tr>
                                    <td>Strava Activity Description Updater</td>
                                    <td>Uses the Strava API and PythonAnywhere to auto-update my most recent descriptions with funny captions.</td>
                                    <td><a href="https://github.com/holland-cw3/Strava-Hot-Takes-v1.5">Link</a></td>

                                </tr>
                                <tr>
                                    <td>Network Based Video Game Controller</td>
                                    <td>Allows users to control their computer with their phone, built with Unity</td>
                                    <td>N/A</td>

                                </tr>
                                <tr>
                                    <td>Rubber Duck Game - In Progress</td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                
                            </tbody>
                        </table>
                    </div>

                    <div class="divider"></div>

                </div>
            </section>
        </div>
    );
}

export default Races;
