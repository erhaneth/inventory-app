import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY; // Replace with your OpenWeatherMap API key
  const city = "New York";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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

  if (!weather) {
    return <div>Failed to fetch weather data.</div>;
  }

  return (
    <div className="weather-container">
      <h2>Current Weather in {city}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Humidity: {weather.main.humidity} %</p>
      <p>Description: {weather.weather[0].description}</p>
    </div>
  );
};

export default Weather;
