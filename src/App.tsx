import { useEffect, useState } from 'react';
import { CurrentWeather } from './Components/CurrentWeather';
import { CityInfo, WeatherResponse, getWeather } from './Api';
import { LocationSearch } from './Components/LocationSearch';
import { DailyWeather } from './Components/DailyWeather';

export function App() {
  const [city, setCity] = useState<CityInfo | null>(null);
  const [data, setData] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    console.log('App: effect');
    if (!city) return;

    getWeather(city.latitude, city.longitude).then(setData);
  }, [city]);

  console.log('App');

  return (
    <>
      <LocationSearch onCitySelected={setCity} />
      <h1>
        {city?.name}, {city?.country}, {city?.admin1}
      </h1>
      {data?.current_weather && (
        <CurrentWeather weather={data.current_weather} />
      )}
      {data?.daily &&
        data.daily.time.map((_, i) => {
          return (
            <DailyWeather
              date={data.daily?.time[i] ?? ''}
              weather_code={data.daily?.weather_code?.[i] ?? 0}
              temperature={[
                data.daily?.apparent_temperature_min?.[i] ?? 0,
                data.daily?.apparent_temperature_max?.[i] ?? 0,
              ]}
            />
          );
        })}
    </>
  );
}
