import { ChangeEventHandler, FC, useState } from 'react';
import { CityInfo, getCitiesInfo } from '../Api';

type LocationSearchProps = {
  onCitySelected?: (city: CityInfo) => void;
};

export const LocationSearch: FC<LocationSearchProps> = ({ onCitySelected }) => {
  const [city, setCity] = useState('');
  const [cities, setCites] = useState<CityInfo[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCity(e.target.value);
    getCitiesInfo({ name: e.target.value }).then((data) =>
      setCites(data.results ?? [])
    );

    const found = cities.find((cityInfo) => cityInfo.name === city);
    if (found) {
      onCitySelected?.(found);
    }
  };

  console.log('LocationSearch');

  return (
    <label>
      <input type="search" list="cities" value={city} onChange={handleChange} />
      <datalist id="cities">
        {cities.map(({ id, name, country, admin1 }) => {
          return <option key={id} value={`${name}, ${country}, ${admin1}`} />;
        })}
      </datalist>
    </label>
  );
};
