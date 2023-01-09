import './App.css';
import React, { useEffect, useState } from "react";
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from './components/forecast/forecast';
import Weather from './weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {

const [currentWeather, setCurrentWeather] = useState(null);
const [forecast, setForecast] = useState(null);
const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    await fetch(`${WEATHER_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${WEATHER_API_KEY}`)
    .then(res => res.json())
    .then(result => {
      setData(result)
      console.log(result);
    });
  }
  fetchData();
}, [lat,long])

const handleOnSearchChange = (searchData) => {
  const [lat, lon] = searchData.value.split(" ");

  const currentWeatherFetch = fetch(
    `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );
  const forecastFetch = fetch(
    `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );

  Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forcastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forcastResponse });
    })
    .catch(console.log);
};


return (
  


  <div className="container">
    <Search onSearchChange={handleOnSearchChange} />
    {currentWeather && <CurrentWeather data={currentWeather} />}
    {forecast && <Forecast data={forecast} />}

    {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}


  </div>
);
}

export default App;
