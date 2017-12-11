import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

/**
 * Template of webpages
 * 
 * @author Quentin Guenther
 */
const App = () => (
  <div>
    <Navbar />

    <div className="container">
      <Main />
    </div>

  </div>
);


export default App;
