import { WeatherMap } from '../constants';
import { T } from './T';
import { Component, splitProps } from 'solid-js';

type DailyWeatherProps = {
  date: string;
  weather_code: number;
  temperature: [min: number, max: number];
};

const dateFormatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium' });

export const DailyWeather: Component<DailyWeatherProps> = (props) => {
  const [local, other] = splitProps(props, ['temperature']);

  console.log('DailyWeather', other.date);
  return (
    <article>
      <header>
        <h2>
          {dateFormatter.format(new Date(other.date))},{' '}
          {WeatherMap[other.weather_code]}
        </h2>
      </header>
      <h3>
        Min: <T>{local.temperature[0]}</T>
      </h3>
      <h3>
        Max: <T>{local.temperature[1]}</T>
      </h3>
    </article>
  );
};
