import {
  Component,
  For,
  JSX,
  Show,
  createEffect,
  createResource,
  createSignal,
} from 'solid-js';
import { CityInfo, getCitiesInfo } from '../Api';

type LocationSearchProps = {
  onCitySelected?: (city: CityInfo) => void;
};

export const LocationSearch: Component<LocationSearchProps> = (props) => {
  const [city, setCity] = createSignal('');
  const [cities, api] = createResource(
    city,
    (name) => getCitiesInfo({ name }),
    {
      initialValue: [],
    }
  );

  // api.mutate() // useOptimistic

  const handleChange: JSX.CustomEventHandlersLowerCase<HTMLInputElement>['onchange'] =
    (e) => {
      setCity(e.target.value);
    };

  createEffect(() => {
    const found = cities().find((cityInfo) => cityInfo.name === city());
    if (found) {
      props.onCitySelected?.(found);
    }
  });

  console.log('LocationSearch');

  createEffect(() => {
    console.log(cities.loading, cities.state, cities.error);
  });

  return (
    <label>
      <fieldset aria-invalid={cities.state === 'errored'} role="search">
        <input
          aria-invalid={cities.state === 'errored'}
          list="cities"
          value={city()}
          onchange={handleChange}
        />
        <button aria-busy={cities.loading}>Search</button>
      </fieldset>
      <small>{cities.error?.message}</small>
      <datalist id="cities">
        <Show when={cities.state === 'ready'}>
          <For each={cities()}>
            {({ name, country, admin1 }) => {
              return (
                <option label={`${name}, ${country}, ${admin1}`} value={name} />
              );
            }}
          </For>
        </Show>
      </datalist>
    </label>
  );
};
