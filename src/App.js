import "./App.css";
import axios from "axios";
import { Map, Marker } from "pigeon-maps";
import { DateTime } from "luxon";

import MyIp from "./MyIp";

const { REACT_APP_API_KEY } = process.env;
console.log(REACT_APP_API_KEY);

function App() {
    return <div className="App">
       <MyIp code='de' ip='dsfasdfasdff'/>
    </div>;
}

export default App;
