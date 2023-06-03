import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import calebImage from './images/Personal Photo - Copy.jpg';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <link rel="icon" href={calebImage} type="image/jpg" />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
