import React from 'react';
import '../index.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const WeatherCard = ({weatherData}) => (
    <div className="main">
            <p className="header">{weatherData.name}</p>
        <div className="flex">  
            <p className="day">Day: {moment().format('dddd')}</p>    
            <p className="day">Date: {moment().format('LL')}</p>
        </div>    

        <div className="flex">
            <p className="temp">Temparature: { weatherData.main.temp } &deg;C</p>
            <p className="temp">Humidity: { weatherData.main.humidity } %</p>
        </div>
        <div className="flex">
            <p className="sunrise-sunset">Sunrise: { new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN') }</p>
            <p className="sunrise-sunset">Sunset: { new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN') }</p>
        </div>
        {/* // <Card>
        //     <Card.Content>
        //         <Card.Header className="header">City Name: { weatherData.name }</Card.Header>            
        //  
        //         <p>Description: { weatherData.weather[0].main }</p>
        //         <p>Windspeed: { weatherData.main.windspeed }</p>
        //         <p>Visibility: { weatherData.main.visibility }</p>
        //     </Card.Content>           
        // </Card> */}
    </div>
)

export default WeatherCard;