import { CurrentWeather } from './Components/CurrentWeather';
import { CityInfo, getWeather } from './Api';
import { DailyWeather } from './Components/DailyWeather';
import { For, Show, createResource, createSignal } from 'solid-js';
import { LocationSearch } from './Components/LocationSearch';

export function App() {
  const [city, setCity] = createSignal<CityInfo | null>(null);

  const [data] = createResource(city, (city) =>
    getWeather(city.latitude, city.longitude)
  );

  console.log('App');

  const fullCityName = () =>
    `${city()?.name}, ${city()?.country}, ${city()?.admin1}`;

  return (
    <>
      <LocationSearch onCitySelected={setCity} />
      <Show when={city()}>
        <h1>{fullCityName()}</h1>
      </Show>
      <Show when={data()?.current_weather}>
        {(weather) => <CurrentWeather weather={weather()} />}
      </Show>
      <Show when={data()?.daily}>
        {(daily) => (
          <For each={daily().time}>
            {(_, i) => {
              return (
                <DailyWeather
                  date={daily().time[i()] ?? ''}
                  weather_code={daily().weather_code?.[i()] ?? 0}
                  temperature={[
                    daily().apparent_temperature_min?.[i()] ?? 0,
                    daily().apparent_temperature_max?.[i()] ?? 0,
                  ]}
                />
              );
            }}
          </For>
        )}
      </Show>
    </>
  );
}
