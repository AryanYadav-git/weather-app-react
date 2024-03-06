import React from "react";
import { Card, CardMedia, Typography, Divider } from "@mui/material";
import { weatherData } from "../store/atoms/weatherData";
import { useRecoilValue } from "recoil";
import SpeedTwoToneIcon from "@mui/icons-material/SpeedTwoTone";
import WaterDropTwoToneIcon from "@mui/icons-material/WaterDropTwoTone";
import WbTwilightTwoToneIcon from "@mui/icons-material/WbTwilightTwoTone";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import CycloneTwoToneIcon from "@mui/icons-material/CycloneTwoTone";
import FilterDramaTwoToneIcon from "@mui/icons-material/FilterDramaTwoTone";
import Forecast from "./Forecast";
import "./style.css"
function Details() {
  const weather = useRecoilValue(weatherData);
  if (weather) {
    return (
      <div className="h-72 flex justify-between" id="bottom-section">
        <div className="w-1/3 flex flex-col justify-between " id="today-details">
          <Card className="h-48 w-full flex p-4 justify-evenly shadow-xl" id="card1" variant="outlined ">
            <div className="section1 h-40 flex flex-col justify-evenly " id="section1">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <SpeedTwoToneIcon fontSize="large" />
                </div>
                <div className="">
                  <Typography className="text-[#1b4de4] flex justify-center">
                    Pressure
                  </Typography>
                  <Typography className="flex justify-center items-center font-[700] " style={{fontWeight:"bold"}}>
                    {weather.main.pressure} hPa
                  </Typography>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <WaterDropTwoToneIcon fontSize="large" />
                </div>
                <div className="">
                  <Typography className="text-[#1b4de4] flex justify-center">
                    Humidity
                  </Typography>
                  <Typography className="flex justify-center items-center font-black" style={{fontWeight:"bold"}}>
                    {weather.main.humidity} %
                  </Typography>
                </div>
              </div>
            </div>
            {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
            <div className=" flex h-40 flex-col justify-evenly" id="section2">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <LightModeTwoToneIcon fontSize="large" />
                </div>
                <div className="">
                  <Typography className="text-[#1b4de4] flex justify-center">
                    Sunrise
                  </Typography>
                  <Typography className="flex justify-center items-center font-black" style={{fontWeight:"bold"}}>
                    {new Date(weather.sys.sunrise * 1000)
                      .toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true, minute12: true})}
                  </Typography>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <WbTwilightTwoToneIcon fontSize="large" />
                </div>
                <div className="">
                  <Typography className="text-[#1b4de4] flex justify-center">
                    Sunset
                  </Typography>
                  <Typography className="flex justify-center items-center font-black" style={{fontWeight:"bold"}}>
                    {new Date(weather.sys.sunset * 1000)
                      .toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true, minute12: true})}
                  </Typography>
                </div>
              </div>
            </div>
          </Card>
          <Card className="h-20 w-full shadow-xl p-4 " id="card2" variant="outlined">
            <div className="flex justify-evenly " id="section3">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <FilterDramaTwoToneIcon fontSize="large" />
                </div>
                <div className="">
                  <Typography className="text-[#1b4de4] flex justify-center">
                    Clouds
                  </Typography>
                  <Typography className="flex justify-center items-center font-black" style={{fontWeight:"bold"}}>
                    {weather.clouds.all} %
                  </Typography>
                </div>
              </div>
              <div className="flex gap-4 ">
                <div className="flex items-center">
                  <CycloneTwoToneIcon fontSize="large" />
                </div>
                <div className="">
                  <Typography className="text-[#1b4de4] flex justify-center ">
                    Wind speed
                  </Typography>
                  <Typography className="flex justify-center items-center font-black " style={{fontWeight:"bold"}}>
                    {weather.wind.speed} m/s
                  </Typography>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="h-full w-[66%] shadow-xl" id="forecastSection">
          <Forecast/>
        </div>
      </div>
    );
  }
}

export default Details;
