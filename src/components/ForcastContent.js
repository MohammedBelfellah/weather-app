import React from "react";
import "./forcastContent.css";
import AirIcon from "@mui/icons-material/Air";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import TireRepairOutlinedIcon from "@mui/icons-material/TireRepairOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
export default function ForcastContent({ data,setHowIsRendering }) {
  console.log(data);
  const {
    cityName,
    cityTemp,
    cityDescrption,
    cityWindSpeed,
    cityHumidity,
    cityPressure,
  } = data;
  return (
    <div className="container">
      <boutton
        onClick={() => {
          setHowIsRendering("search");
        }}
        className="goBack"
      >
        <span style={{ display: "flex" }}>
          <p style={{ paddingTop: "2px" }}>
            <ArrowBackIosNewIcon />
          </p>
          <p style={{ padding: "0px" }}>back to search</p>
        </span>
      </boutton>
      <div className="top">
        <h1 className="city">{cityName}</h1>
        <div>
          {" "}
          <h1 className="degree">{Math.round(cityTemp - 273.15)} ℃</h1>
          <p className="discription">{cityDescrption} </p>
        </div>
      </div>
      <div className="bouttom">
        <div>
          <span style={{ display: "flex" }}>
            <p className="icon">
              <AirIcon />
            </p>
            <p className="head">wind speed</p>
          </span>
          <span className="value">{cityWindSpeed} M/S</span>
        </div>
        <div>
          <span style={{ display: "flex" }}>
            <p className="icon">
              <WaterDropOutlinedIcon />
            </p>
            <p className="head">humdiaty</p>
          </span>
          <span className="value">{cityHumidity} %</span>
        </div>
        <div>
          <span style={{ display: "flex" }}>
            <p className="icon">
              <TireRepairOutlinedIcon />
            </p>
            <p className="head">Prasseur</p>
          </span>
          <span className="value">{cityPressure} hpa</span>
        </div>
      </div>
    </div>
  );
}
