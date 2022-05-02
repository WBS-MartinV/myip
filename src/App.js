import './App.css';
import axios from 'axios';
import { Map, Marker } from "pigeon-maps"
import { DateTime } from "luxon";

const { REACT_APP_API_KEY } = process.env;
console.log(REACT_APP_API_KEY)

function App() {
  return (
    <div className="App">
    Hello!
    </div>
  );
}

export default App;