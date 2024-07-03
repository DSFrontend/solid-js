import { FC } from 'react';
import type { CurrentWeatherResponse } from '../Api';
import { WeatherMap } from '../constants';

export const CurrentWeather: FC<{ weather: CurrentWeatherResponse }> = ({
  weather,
}) => {
  console.log('CurrentWeather');
  return (
    <div>
      <h1>{WeatherMap[weather.weathercode]}</h1>
      <h2>{weather.temperature}*C</h2>
    </div>
  );
};
