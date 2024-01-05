import React from 'react';
import '../CSS/Home.css';
import calebImage from '../images/Personal Photo - Copy.jpg';


function Home() {


	return (
        <div className="Home-container home-page">
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
			<article class="about-me">
				<span class="image">
					<img src={calebImage} alt="" className="about-us-image" />
				</span>
				<div class="content">
					<h2>Caleb Holland</h2>
					<p><br></br>Hello! Welcome to my website! I hope for this page to serve as a personal portfolio showcasing my skills and hobbies. Please see below for my contact information in case you want to connect!</p>

					<p>
						<ul className="contact">
							<li>Email: Hollandcw3@gmail.com</li>
							<li>LinkedIn: <a href="https://www.linkedin.com/in/caleb-holland-0a1168211/">Caleb Holland</a></li>
						</ul>
					</p>

				</div>
			</article>
        </div>
    );
}



export default Home;
