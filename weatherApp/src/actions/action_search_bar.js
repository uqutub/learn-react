const API_KEY = '6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  console.log('action', city);
  const url = `${ROOT_URL}&q=${city},us`;
  const request = $.ajax({url: url});

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}