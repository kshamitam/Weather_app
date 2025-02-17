import React from "react";
import { useState } from "react";
import axios from "axios";
import "./index.css";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a5be004fe29c3a9fca633da6900e435f&units=metric`;

  // function for searching the city (takes input)
  const searchLocation = (event) => {
    if (event.key === "Enter" && location.trim() !== "") {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => console.error("Error fetching weather data:", error));
      setLocation(""); // Clear input after search
    }
  };

  //page content
  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter City"
          type="text"
        />
      </div>
      <div className="container">
        <div className="left">
          <div className="location">
            <p>{data.name}</p>
          </div>
        </div>
        <div className="location2">
          {data.sys ? <p>{data.sys.country}</p> : null}
        </div>
        <div className="Temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div className="Desc">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>

        <div className="right">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p>{data.wind.speed}MPH</p> : null}
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
