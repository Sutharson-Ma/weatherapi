// App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import WeatherForm from './WeatherForm';
import WeatherDisplay from './WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (location) => {
    try {
      const apiKey = 'df8979df31b84948af845203240404';
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Weather Finder</h1>
      <WeatherForm fetchWeatherData={fetchWeatherData} />
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;
