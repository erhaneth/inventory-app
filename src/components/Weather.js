import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY; // Replace with your OpenWeatherMap API key
  const city = "New York";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=5`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeather(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchWeather();
  }, [url]);

  if (isLoading) {
    return <div>Loading weather data...</div>;
  }

  if (!weather || !weather.list) {
    return <div>Failed to fetch weather data.</div>;
  }

  return (
    <div className="weather-container">
      <h2>5-Day Weather Forecast in {city}</h2>
      {weather.list.map((forecast, index) => (
        <div key={index} className="weather-item">
          <h3>{new Date(forecast.dt * 1000).toLocaleDateString()}</h3>
          <p>Temperature: {forecast.main.temp} °C</p>
          <p>Humidity: {forecast.main.humidity} %</p>
          <p>Description: {forecast.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default Weather;
