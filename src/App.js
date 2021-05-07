import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Mon app claqué :D Lien vers ma chaines youtube si jamais 
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCNzLv-aqQpBadaR1daWHjxQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yotube Instrus
        </a>
      </header>
    </div>
  );
}

export default App;
