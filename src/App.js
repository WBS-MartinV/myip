import './App.css';
import axios from 'axios';
import { Map, Marker } from "pigeon-maps"
import { DateTime } from "luxon";

const { REACT_APP_API_KEY } = process.env;
console.log(REACT_APP_API_KEY)

const IP = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_6AydnzJU6xGcHqz1YDMdcoXQofx0E&ipAddress=8.8.8.8'
const country_api = 'https://countries.trevorblades.com/'
const body = {
    "query": "{\n  country(code: \"DE\") {\n    name\n    native\n    emojiU\n    languages {\n      name\n    }\n    continent {\n      name\n    }\n  }\n}\n"
}
const query = `
{ country(code: "DE") {

    name
    native
    emojiU
    languages {
      name
    }
    continent {
      name
    }
  
    }}
`

const flag_url = 'https://flagcdn.com/160x120/za.png'

function App() {
  return (
    <div className="App">
    Hello!
    </div>
  );
}

export default App;