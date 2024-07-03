type Input = {
  name: string
  count?: number
  format?: 'json' | 'protobuf'
  language?: string
}

export type CityInfo = {
  id: number,
  name: string,
  latitude: number,
  longitude: number,
  elevation: number,
  country: string,
  admin1: string
}

type Output = {
  results?: Array<CityInfo>
}

export async function getCitiesInfo({ name, count = 5, format = 'json', language = 'en', }: Input) {
  const urlParams = new URLSearchParams({ name, count: count?.toString(), format, language, })
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?${urlParams.toString()}`)

  return response.json() as Promise<Output>
}