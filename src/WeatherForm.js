// WeatherForm.js
import React, { useState } from 'react';

function WeatherForm({ fetchWeatherData }) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      fetchWeatherData(location);
      setLocation('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter location (e.g., city)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
