import React, { useEffect, useState } from "react";





export default function CitySearch({ distrptionData }) {
  const [city, setCity] = useState("");
  const [option, setOption] = useState([]);
  const [mainLocation, setMainLocation] = useState(null);

  const BASE_URL = "https://api.openweathermap.org";
  const IPA_KEY = "a6fcb12bdefdf7aa14072959cc2eb27a";

  const getcities = (value) => {
    fetch(
      `${BASE_URL}/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${IPA_KEY} `
    )
      .then((response) => response.json())
      .then((data) => setOption(data));
  };

  const handlSearchclicked = () => {
    if (!mainLocation) return;
    // feach ouer forcast
    fetch(
      `${BASE_URL}/data/2.5/weather?lat=${mainLocation.lat}&lon=${mainLocation.lon}&appid=${IPA_KEY} `
    )
      .then((response) => response.json())
      .then((response) =>
        distrptionData(
          response.name,
          response.main.temp,
          response.weather[0].description,
          response.wind.speed,
          response.main.humidity,
          response.main.pressure
        )
      ); // forcast data is here
  };
  const handlInputChange = (event) => {
    const value = event.target.value.trim();
    setCity(value);
    if (value === "") {
      setOption([]);
    } else {
      getcities(value);
    }
  };
  const handleOptionClicked = (option) => {
    setMainLocation(option);
  };

  useEffect(() => {
    if (mainLocation) {
      setCity(mainLocation.name);
      setOption([]);
    }
  }, [mainLocation]);

  return (
    <div className="container">
      <div className="mainContainer">
        <div className="searchBarContainer">
          <input
            className="input"
            type="text"
            placeholder="Enter a city name"
            value={city}
            onChange={handlInputChange}
          />
          <button className="searchBtn" onClick={handlSearchclicked}>
            Search
          </button>
        </div>
        <div className="optionContainer">
          {option.map((option, id) => (
            <p
              className="option"
              key={id}
              onClick={() => {
                handleOptionClicked(option);
              }}
            >
              {option.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
