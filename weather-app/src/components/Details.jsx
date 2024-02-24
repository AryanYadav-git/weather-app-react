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

function Details() {
  const weather = useRecoilValue(weatherData);
  if (weather) {
    return (
      <div className="h-72 flex justify-between ">
        <div className="w-1/3 flex flex-col justify-between">
          <Card className="h-42 w-full flex p-4" variant="outlined shadow-xl">
            <div className="w-1/2 flex flex-col justify-evenly">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <SpeedTwoToneIcon fontSize="large" />
                </div>
                <div className="">
                  <Typography className="text-[#c2c2c2] flex justify-center">
                    Pressure
                  </Typography>
                  <Typography className="flex justify-center items-center font-black">
                    {weather.main.pressure} hPa
                  </Typography>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <WaterDropTwoToneIcon fontSize="large" />
                </div>
                <div className="">
                  <Typography className="text-[#c2c2c2] flex justify-center">
                    Humidity
                  </Typography>
                  <Typography className="flex justify-center items-center font-black">
                    {weather.main.humidity} %
                  </Typography>
                </div>
              </div>
            </div>
            {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
            <div className="w-1/2 flex flex-col justify-between">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <LightModeTwoToneIcon fontSize="large" />
                </div>
                <div className="">
                  <Typography className="text-[#c2c2c2] flex justify-center">
                    Sunrise
                  </Typography>
                  <Typography className="flex justify-center items-center font-black">
                    {new Date(weather.sys.sunrise * 1000)
                      .toTimeString()
                      .toLocaleString("default", weather.timezone)}
                  </Typography>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <WbTwilightTwoToneIcon fontSize="large" />
                </div>
                <div className="">
                  <Typography className="text-[#c2c2c2] flex justify-center">
                    Sunset
                  </Typography>
                  <Typography className="flex justify-center items-center font-black">
                    {new Date(weather.sys.sunset * 1000)
                      .toTimeString()
                      .toLocaleString("default", weather.timezone)}
                  </Typography>
                </div>
              </div>
            </div>
          </Card>
          <Card className="h-20 w-full shadow-xl p-4" variant="outlined">
            <div className="flex justify-evenly">
              <div className="flex gap-4">
                <div className="flex items-center">
                  <FilterDramaTwoToneIcon fontSize="large" />
                </div>
                <div className="">
                  <Typography className="text-[#c2c2c2] flex justify-center">
                    Clouds
                  </Typography>
                  <Typography className="flex justify-center items-center font-black">
                    {weather.clouds.all} %
                  </Typography>
                </div>
              </div>
              <div className="flex gap-4 ">
                <div className="flex items-center">
                  <CycloneTwoToneIcon fontSize="large" />
                </div>
                <div className="">
                  <Typography className="text-[#c2c2c2] flex justify-center">
                    Wind speed
                  </Typography>
                  <Typography className="flex justify-center items-center font-black">
                    {weather.wind.speed} m/s
                  </Typography>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <Card className="h-full w-3/5 shadow-xl" variant="outlined">
          <Card variant="outlined"></Card>
        </Card>
      </div>
    );
  }
}

export default Details;
