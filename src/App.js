import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

import Home from './pages/home';
import DigitalArt from './pages/digart';
import Running from './pages/running';
import Projects from './pages/projects';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
]               <Route path='/digart' element={<DigitalArt />} />
                <Route path='/running' element={<Running />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
