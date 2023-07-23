import React from 'react';
import '../CSS/running.css';
import calebImage from '../images/RegionalsPic.jpeg';
import vietChick from '../images/Vietnamese Chicken Bowls - Google Docs.pdf';
import blackenedChickPen from '../images/Blackened Chicken Penne - Google Docs - Hollandcw.pdf';
import garlicCaperChick from '../images/Garlic-Caper Chicken - Google Docs.pdf';
import salmSushiRice from '../images/Salmon Sushi Rice Bowl.pdf';
import genTso from '../images/General Tso\'s Cauliflower.pdf'


function Recipes() {
    return (
        <div className="page-container races-page">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <div class="teamPic-container">
                <img src={calebImage} alt="" className="teamPic" />
            </div>
            <section id="main" className="race-table-container records">
                <div className="container">

                    <p>
                        <br></br>
                        I love to cook! Ever since I was a little kid, I loved to watch countless cooking shows, including MasterChef, Chopped, Beat Bobby Flay, etc.
                        Through my "research" I've been inspired to enhance my own skills by expanding
                        on recipes that I've found from all over the place!
                        <br></br> <br></br>
                        Below is a list of recipes that I've come to love. Enjoy!
                        <br></br>
                        <br></br>

                    </p>

                    <div className="divider"></div>

                    <h2 className="title">Recipes</h2>
                    <div id="post">
                        <table className="races">
                            <thead>
                                <tr>
                                    <th>Chicken</th>
                                </tr>
                            </thead>
                            <tbody><tr><td><a href={vietChick}>Vietnamese Chicken Bowls</a></td></tr></tbody>
                            <tbody><tr><td><a href={blackenedChickPen}>Blackened Chicken Penne</a></td></tr></tbody>
                            <tbody><tr><td><a href={garlicCaperChick}>Garlic Caper Chicken</a></td></tr></tbody>


                            <thead>
                                <tr>
                                    <th>Fish</th>
                                </tr>
                            </thead>
                            <tbody><tr><td><a href={salmSushiRice}>Salmon Sushi Rice Bowl</a></td></tr></tbody>

                            <thead>
                                <tr>
                                    <th>Vegetarian</th>
                                </tr>
                            </thead>
                            <tbody><tr><td><a href={genTso}>General Tso's Cauliflower</a></td></tr></tbody>

                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th>Pork</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th>Beef</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
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

export default Recipes;
