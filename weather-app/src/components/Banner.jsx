import {useEffect, useState} from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import { weatherData } from "../store/atoms/weatherData";
import { useRecoilValue } from "recoil";
import "./style.css"
function Banner() {
  const weather = useRecoilValue(weatherData);
  const [banner, setBanner] = useState("sun");
  function setWeatherBanner(){
    if (weather) {
      const ic = weather.weather[0].id ;
      if(ic>700 && ic<800){
        setBanner("mist")
      }
      else if(ic>=600 && ic<700){
        setBanner("snow")
      }
      else if(ic>=200 && ic<600){
        setBanner("rain")
      }
      else if(ic>800 && ic<805){
        setBanner("night")
      }
      else{
        setBanner("sun")
      }
    }
  }
  useEffect(()=> {
    setWeatherBanner();
  },[weather])

  if(weather){
   return (
      <Card variant='outlined' className="w-full h-72 relative shadow-lg rounded-full">
        <CardMedia
          component="img"
          // height="100%"
          image={`/${banner}.jpg`}
          alt="Paella dish"
          className="h-full z-0 border-0"
        />

        <div className="absolute z-10 top-0 h-full w-full text-white">
          <div className="flex p-4 justify-between h-full" id="">
            <div className="flex h-full items-end">
              <div className="">
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
                <Typography id="cityName" variant="h3">{`${weather.name}, ${weather.sys.country}`}</Typography>
              </div>
            </div>
            <div className="flex items-end">
              <Typography id="dateTime" variant="h4">
                {new Date(weather.dt * 1000).toLocaleString(
                  "default",
                  weather.timezone
                )}
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default Banner;
