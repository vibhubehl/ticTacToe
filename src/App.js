import logo from './logo.svg';
import './App.css';
import Banner from "./web/home/Banner";
import GameWindow from './web/home/GameWindow.tsx';
import DocumentTitle from 'react-document-title'

function App() {
  return (
    <DocumentTitle title={`Ant Design Landing Page`}>
      <div className="home-wrapper">
        <Banner/>
        <GameWindow/>
      </div>
    </DocumentTitle>
  );
}

export default App;
