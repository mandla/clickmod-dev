import React from 'react';
import '../index.css';
import { Card } from 'semantic-ui-react';

const WeatherCard = ({weatherData}) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">City Name: { weatherData.name }</Card.Header>            
            <p>Temparature: { weatherData.main.temp } &deg;C</p>
            <p>Sunrise: { new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN') }</p>
            <p>Sunset: { new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN') }</p>
            <p>Description: { weatherData.weather[0].main }</p>
            <p>Humidity: { weatherData.main.humidity } %</p>
            <p>Windspeed: { weatherData.main.windspeed }</p>
            <p>Visibility: { weatherData.main.visibility }</p>
        </Card.Content>           
    </Card>
)

export default WeatherCard;