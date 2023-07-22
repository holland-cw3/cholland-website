import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import DigitalArt from './pages/digart';
import Running from './pages/running';
import Projects from './pages/projects';
import Recipes from './pages/Recipes';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />

        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
]               <Route path='/digart' element={<DigitalArt />} />
                <Route path='/recipes' element={<Recipes />} />
                <Route path='/running' element={<Running />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
            <Footer />
        </Router>
        </div>
    );
}

export default App;
