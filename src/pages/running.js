import React from 'react';
import '../CSS/running.css';
import calebImage from '../images/calebPhoto.JPG';


function Races() {
    return (
        <div className="page-container races-page">

            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />


            <div class="teamPic-container">
                <img src={calebImage} alt="" className="teamPic" />

            </div>

            <section id="main" className="race-table-container records">


                <div className="container">
                    <p>
                        Ever since I first ran a mile in 8th grade, I have home to fall in love with running. I eventually went on to become my high school's track and cross country captain, and qualified for states in 2021. I love to run all distances, from the 1600m all the way up to the Marathon!,
                        My most notable race would be the Frederick Half Marathon, in which I ran 1:27:46 to place 2nd in the 19 under age group.
                    </p>

                    <div class="divider"></div>


                    <h3 className="title">Personal Bests</h3>
                    <div id="post">
                        <table className="races">
                            <thead>
                                <tr>
                                    <th>Distance</th>
                                    <th>Race</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1600m</td>
                                    <td>Self-Paced</td>
                                    <td>5:02</td>
                                    
                                </tr>
                                <tr>
                                    <td>3200m</td>
                                    <td>Montgomery County Championships</td>
                                    <td>11:14</td>
                                    
                                </tr>
                                <tr>
                                    <td>5000m</td>
                                    <td>Dashing Dukes Invitational</td>
                                    <td>17:49</td>
                                    
                                </tr>
                                <tr>
                                    <td>8000m</td>
                                    <td>Dashing Dukes Invitational</td>
                                    <td>30:32</td>
                                    
                                </tr>
                                <tr>
                                    <td>Half Marathon</td>
                                    <td>Frederick Half Marathon</td>
                                    <td>1:27:46</td>
                                    
                                </tr>
                                <tr>
                                    <td>Marathon</td>
                                    <td>Baltimore Running Festival</td>
                                    <td>3:43:51</td>
                                   
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
