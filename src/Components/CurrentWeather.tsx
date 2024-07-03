import { Component } from 'solid-js';
import type { CurrentWeatherResponse } from '../Api';
import { WeatherMap } from '../constants';

export const CurrentWeather: Component<{ weather: CurrentWeatherResponse }> = (
  props
) => {
  console.log('CurrentWeather');
  return (
    <div>
      <h1>{WeatherMap[props.weather.weathercode]}</h1>
      <h2>{props.weather.temperature}*C</h2>
    </div>
  );
};
