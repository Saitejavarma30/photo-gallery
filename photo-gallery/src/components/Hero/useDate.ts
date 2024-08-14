import { useEffect, useState } from "react";

export type WeatherData = {
  latitude: string;
  longitude: string;
  timezone: string;
  weatherCode: number;
  temperature: string;
  precipitation: string;
  wind_speed_10m: string;
};

const fetchWeatherData = async (): Promise<WeatherData> => {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=12.9716&longitude=77.5946&current=temperature_2m,weather_code,precipitation,wind_speed_10m&timezone=auto&forecast_days=1"
  );
  const weather = await response.json();
  console.log(weather);
  return {
    latitude: `${weather.latitude}°N`,
    longitude: `${weather.longitude}°E`,
    timezone: weather.timezone,
    weatherCode: weather.current.weather_code,
    temperature: `${weather.current.temperature_2m}`,
    precipitation: `${weather.current.precipitation}${weather.current_units.precipitation}`,
    wind_speed_10m: `${weather.current.wind_speed_10m}${weather.current_units.wind_speed_10m}`,
  };
};

export const useData = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData();
        setWeatherData(data);
      } catch (err) {
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    getWeatherData();
  }, []);

  return { data: weatherData, loading: !!loading, error: error };
};

export default useData;
