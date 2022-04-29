import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Map, Marker } from "pigeon-maps"
import { DateTime } from "luxon";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
