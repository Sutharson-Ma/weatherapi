// WeatherDisplay.js
import React from 'react';

function WeatherDisplay({ weatherData }) {
  if (!weatherData || !weatherData.current || !weatherData.location) {
    return <div>Loading...</div>;
  }

  const { location, current } = weatherData;

  return (
    <div className="weather-display">
      <h2>Weather in {location.name}, {location.region}</h2>
      <div>
        <strong>Temperature:</strong> {current.temp_c}°C
      </div>
      <div>
        <strong>Weather:</strong> {current.condition.text}
      </div>
      <div>
        <strong>Description:</strong> {current.condition.text}
      </div>
    </div>
  );
}

export default WeatherDisplay;
