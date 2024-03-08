import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { locationState } from "./store/atoms/location";
import { Coords } from "./store/atoms/coords";
import { weatherData } from "./store/atoms/weatherData";
import SearchBar from "./components/SearchBar";
import Banner from "./components/Banner";
import Details from "./components/Details";
import { current } from "./store/atoms/current";
import { forecastData } from "./store/atoms/forecast";

import {
  RecoilRoot,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <FetchData />
      <Init />
      <div className="h-screen w-screen bg-[#f2f2f2] bg-[#cfeafe]  py-10 px-14" id="wholescreen">
        <div className="h-full w-full flex flex-col gap-6 " id="container">
          <SearchBar />
          <Banner />
          <Details></Details>
        </div>
      </div>
    </RecoilRoot>
  );
}

function Init() {
  const currentData = useRecoilValue(current);
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const setWeather = useSetRecoilState(weatherData);
  const setForecastData = useSetRecoilState(forecastData);
  // const setCoords = useSetRecoilState(Coords);
  const init = async () => {
    const location = await navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const FetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setWeather(res.data);
      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setForecastData(forecastRes.data.list.slice(0,10));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (current) {
      init();
      FetchData();
    }
  }, [currentData]);

  return <div></div>;
}

function FetchData() {
  const location = useRecoilValue(locationState);
  const setCurrent = useSetRecoilState(current);
  const setWeather = useSetRecoilState(weatherData);
  const setForecastData = useSetRecoilState(forecastData);
  setCurrent(false);
  async function fetch() {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      // if(res.data.cod=="404"){
      //   console.log(res.data.message);
      // }
      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setWeather(res.data);
      setForecastData(forecastRes.data.list.slice(0,10));
    } catch (error) {
      console.log(error);
    }
  }
  fetch();
  return <></>;
}

export default App;
