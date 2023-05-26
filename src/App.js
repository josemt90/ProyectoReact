import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './Components/PrimerComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              <p>Esto es una prueba con react</p>

              <PrimerComponente/>
      </header>
    </div>
  );
}

export default App;
