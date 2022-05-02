import "./App.css";
import axios from "axios";
import { Map, Marker } from "pigeon-maps";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

import MyIp from "./MyIp";

const { REACT_APP_API_KEY } = process.env;
console.log(REACT_APP_API_KEY);

const IP_api = (key) =>
    "https://geo.ipify.org/api/v2/country,city?apiKey=" + key;

const country_api = "https://countries.trevorblades.com/";

const query = (code) => `
{ country(code: "${code}") {

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
        fetch(IP_api(REACT_APP_API_KEY))
            .then((response) => response.json())
            .then((json) => {
                setIpData(json);
                setCode(json.location.country.toLowerCase());
            });
    }, []);

    useEffect(() => {
        if (code) {
            axios
                .post(country_api, {
                    query: query(code.toUpperCase()),
                })
                .then((data) => {
                    setCountryData(data.data);
                    console.log(countryData);
                });
        }
    }, [code]);

    return (
        <div className="App">
            {ipData && countryData && (
                <MyIp
                    ip={ipData.ip}
                    code={code}
                    country={countryData.data.country.name}
                ></MyIp>
            )}
        </div>
    );
}

export default App;
