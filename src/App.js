import logo from './assets/img/logo.svg';
import GameWindow from './components/GameWindow.tsx';
import './assets/css/App.css';
import Headers from './components/Headers.tsx'



function App() {


  return (
    <div className="App">
      <div className="home-wrapper">
        <Headers/>
        <GameWindow/>
      </div>
    </div>
  );
}

export default App;
