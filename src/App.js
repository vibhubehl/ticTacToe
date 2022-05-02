import React from 'react';

import './assets/css/App.css';
import Headers from './components/Headers.tsx'
import AppShell from './components/AppShell.tsx';

function App() {
  return (
    <div className="App" style={{height: "100%"}}>
        <Headers/>
        <AppShell/>
    </div>
  );
}

export default App;
