import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';


function App() {
    return (
        <div className="App">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <Header />
            <Home />
            <Nav />
            <About />
            <Services />
            <Work />
            <Contact />
            <div className='h-[4000px]'></div>
        </div>
    );
}

export default App;
