import { Card, CardMedia, Typography, Divider } from "@mui/material";
import { useRecoilValue } from "recoil";
import { forecastData } from "../store/atoms/forecast";
import { Scrollbar } from "react-scrollbars-custom";
import "./scroll.css";
function Forecast() {
  const forecast = useRecoilValue(forecastData);
  if (forecast) {
    return (
      <Card className="h-full flex gap-4 p-4"  id="container">
        {forecast.map((item, index) => {
          return (
            <div className="">
              <Card className="h-full w-40" id={index}>
                <div className="h-full flex flex-col justify-center bg-[#cfdaf9] items-center">
                  <Typography variant="h6" color="text.secondary">
                    {item.dt_txt.split(" ")[1]}
                  </Typography>
                  <br />
                  <Typography variant="h2" className="align-center" color="text.secondary">
                    {Math.round((item.main.temp - 273) * 1) / 1}&deg;C
                  </Typography>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="image"
                    className="h-14"
                  />
                  <Typography variant="body2" color="text.secondary">
                    {item.weather[0].description}
                  </Typography>
                </div>
              </Card>
            </div>
          );
        })}
      </Card>
    );
  }
}

export default Forecast;
