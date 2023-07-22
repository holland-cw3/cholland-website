import React from 'react';
import '../CSS/running.css';
import calebImage from '../images/RegionalsPic.jpeg';

function Recipes() {
    return (
        <div className="page-container races-page">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <div class="teamPic-container">
                <img src={calebImage} alt="" className="teamPic" />
            </div>
            <section id="main" className="race-table-container records">
                <div className="container">

                    <h2 className="title">Recipes</h2>
                    <div id="post">
                        <table className="races">
                            <thead>
                                <tr>
                                    <th>Recipe</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
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

export default Recipes;
