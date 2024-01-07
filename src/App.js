import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';


function App() {
    return (
        <div className="App">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <Header />
            <Home />
            <Nav />
            <Projects />
            <Skills />
            <Work />
            <Contact />
            <div className='h-[200px]'></div>
        </div>
    );
}

export default App;
