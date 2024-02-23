import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import { weatherData } from "../store/atoms/weatherData";
import { useRecoilValue } from "recoil";

function Banner() {
  const weather = useRecoilValue(weatherData);
  console.log(weather);
  if (weather) {
    return (
      <Card className="w-full h-2/5 rounded-full relative">
        <CardMedia
          component="img"
          // height="100%"
          image="\src\assets\night.jpg"
          alt="Paella dish"
          className="h-full "
        />
        <div className="absolute flex w-full h-full top-8 left-5 text-white ">
          <div className="w-1/2">
            <div className="flex items-center">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="image"
                className="h-14"
              />
              <Typography variant="h5">
                {weather.weather[0].description}
              </Typography>
            </div>
            <Typography variant="h1">
              {Math.round((weather.main.temp - 273) * 1) / 1}&deg;C
            </Typography>
            <Typography variant="h3">{`      ${weather.name}, ${weather.sys.country}`}</Typography>
          </div>
          <div className="w-1/2 bg-blue-400"></div>
        </div>
      </Card>
    );
  }
}

export default Banner;
