import "./App.css";
import axios from "axios";
import { Map, Marker } from "pigeon-maps";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const { REACT_APP_API_KEY } = process.env;
console.log(REACT_APP_API_KEY);

const IP_api = (key) =>
    "https://geo.ipify.org/api/v2/country,city?apiKey=" + key;

const country_api = "https://countries.trevorblades.com/";
const body = {
    query: '{\n  country(code: "DE") {\n    name\n    native\n    emojiU\n    languages {\n      name\n    }\n    continent {\n      name\n    }\n  }\n}\n',
};
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
`;

const flag_url = (code) => `https://flagcdn.com/160x120/${code}.png`;

function App() {
    const [ipData, setIpData] = useState();

    const [code, setCode] = useState();

    const [countryData, setCountryData] = useState();

    useEffect(() => {
        const interval = setInterval(
            () =>
                fetch(IP_api(REACT_APP_API_KEY))
                    .then((response) => response.json())
                    .then((json) => {
                        setIpData(json);
                        setCode(json.location.country.toLowerCase());
                    }),
            30_000
        );

        return () => clearInterval(interval)
    }, []);

    useEffect(() => {
        if (code) {
            axios
                .post(country_api, {
                    query,
                })
                .then((data) => {
                    setCountryData(data.data);
                    console.log(countryData);
                });
        }
    }, [code]);

    return (
        <div className="App">
            <div>{JSON.stringify(ipData)}</div>

            <div>{JSON.stringify(countryData)}</div>

            {ipData && <img src={flag_url(code)}></img>}
        </div>
    );
}

export default App;
