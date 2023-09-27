import { useState, useEffect } from "react";
import "./App.css";
import ForcastContent from "./components/ForcastContent";
import CitySearch from "./components/ipacall";

function App() {
  const [howIsRendering, setHowIsRendering] = useState("search");
  const [data, setData] = useState({
    cityName: "",
    cityTemp: "",
    cityDescrption: "",
    cityWindSpeed: "",
    cityHumidity: "",
    cityPressure: "",
  });

  function distrptionData(
    name,
    temp,
    descrption,
    windSpeed,
    humidity,
    pressure
  ) {
    setData({
      cityName: name,
      cityTemp: temp,
      cityDescrption: descrption,
      cityWindSpeed: windSpeed,
      cityHumidity: humidity,
      cityPressure: pressure,
    });
    // console.log(data.cityName)
  }
  useEffect(() => {
    if (!data.cityName) {
      setHowIsRendering("search");
    } else {
      setHowIsRendering("content");
      console.log(data.cityName);
    }
  }, [data.cityName]);

  return (
    <div className="container">
      <div>
        {howIsRendering === "search" ? (
          <CitySearch distrptionData={distrptionData} />
        ) : (
          ""
        )}
        {howIsRendering === "content" ? (
          <ForcastContent data={data} setHowIsRendering={setHowIsRendering} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
