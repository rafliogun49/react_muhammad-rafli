import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Selamat Datang di Website Static Rafli</p>
        <a
          className="App-link"
          href="https://github.com/rafliogun49/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Rafli
        </a>
      </header>
    </div>
  );
}

export default App;
