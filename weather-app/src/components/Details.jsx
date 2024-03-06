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
function Details() {
  const weather = useRecoilValue(weatherData);
  if (weather) {
    return (
      <div className="h-72 flex justify-between ">
        <div className="w-1/3 flex flex-col justify-between ">
          <Card className="h-42 w-full flex p-4 justify-evenly shadow-xl"  variant="outlined ">
            <div className=" h-40 flex flex-col justify-evenly">
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
            <div className=" flex h-40 flex-col justify-evenly">
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
          <Card className="h-20 w-full shadow-xl p-4 " variant="outlined">
            <div className="flex justify-evenly ">
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
        <div className="h-full w-[66%] shadow-xl" >
          <Forecast/>
        </div>
      </div>
    );
  }
}

export default Details;
