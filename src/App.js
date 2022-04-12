import React from 'react';

import './assets/css/App.css';
import Routes from './components/Routes.tsx'
import Headers from './components/Headers.tsx'
import Homepage from './components/Homepage.tsx'



function App() {
  return (
    <div className="App">
      <div className="home-wrapper">
        <Headers/>
        <Routes/>
      </div>
    </div>
  );
}

export default App;
