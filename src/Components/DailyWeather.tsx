import { FC } from 'react';
import { WeatherMap } from '../constants';
import { T } from './T';

type DailyWeatherProps = {
  date: string;
  weather_code: number;
  temperature: [min: number, max: number];
};

const dateFormatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium' });

export const DailyWeather: FC<DailyWeatherProps> = ({
  date,
  temperature,
  weather_code,
}) => {
  console.log('DailyWeather', date);
  return (
    <article>
      <header>
        <h2>
          {dateFormatter.format(new Date(date))}, {WeatherMap[weather_code]}
        </h2>
      </header>
      <h3>
        Min: <T>{temperature[0]}</T>
      </h3>
      <h3>
        Max: <T>{temperature[1]}</T>
      </h3>
    </article>
  );
};
