import React from 'react';

import './assets/css/App.css';
import Headers from './components/Headers.tsx'
import Homepage from './components/Homepage.tsx'
import AppShell from './components/AppShell.tsx';

function App() {
  return (
    <div className="App">
      <div className="home-wrapper">
        <Headers/>
        <AppShell/>
      </div>
    </div>
  );
}

export default App;
