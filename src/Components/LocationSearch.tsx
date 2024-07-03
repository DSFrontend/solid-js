import {
  Component,
  For,
  JSX,
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
  const [cities] = createResource(city, (name) => getCitiesInfo({ name }), {
    initialValue: [],
  });

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

  return (
    <label>
      <input
        type="search"
        list="cities"
        value={city()}
        onchange={handleChange}
      />
      <datalist id="cities">
        <For each={cities()}>
          {({ name, country, admin1 }) => {
            return (
              <option label={`${name}, ${country}, ${admin1}`} value={name} />
            );
          }}
        </For>
      </datalist>
    </label>
  );
};
