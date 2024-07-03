import { OpenAPI, getV1Forecast } from './__generated__'

OpenAPI.BASE = 'https://api.open-meteo.com'


export function getWeather(latitude: number, longitude: number) {
  return getV1Forecast({ latitude, longitude, currentWeather: true, daily: ['weather_code', 'apparent_temperature_max', 'apparent_temperature_min'], pastDays: 2 })
}