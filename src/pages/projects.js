import React from 'react';
import '../CSS/running.css';


function Races() {
    return (
        <div className="page-container races-page">



            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

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
                                    <td>Personal Website (psst you're on it right now!) </td>
                                    <td>Website to showcase my skills and hobbies built with Javascript, HTML/CSS, and React</td>
                                    <td><a href="https://github.com/holland-cw3/cholland-website">Link</a></td>

                                </tr>
                                <tr>
                                    <td>UMD Club Running Website</td>
                                    <td>Built with React, deployed via Vercel, aiming to convert to Bootstrap</td>
                                    <td><a href="https://clubrunningumd.vercel.app/">Link</a></td>

                                </tr>
                           
                                <tr>
                                    <td>Strava Activity Description Updater</td>
                                    <td>Uses the Strava API and PythonAnywhere to update my most recent descriptions with captions.</td>
                                    <td><a href="https://github.com/holland-cw3/Strava-Hot-Takes-v1.5">Link</a></td>
                                </tr>
                                <tr>
                                    <td>Network Based Video Game Controller</td>
                                    <td>Allows users to control their computer with their phone, built with Unity</td>
                                    <td><a href="https://github.com/holland-cw3/Network-Based-Game-Controller">Link</a></td>
                                </tr>
                                <tr>
                                    <td>Asteroids Game</td>
                                    <td>Asteroids game implemented in Java 8, using the JavaFX library to develop a GUI.</td>
                                    <td><a href="https://github.com/holland-cw3/Asteroids_C_Holland">Link</a></td>
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
