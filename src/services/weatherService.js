import { DateTime } from "luxon";

const API_KEY = '430347ec9156fb8740c2598fe35baac8';
// const API_KEY = 'ddbc0d96f3710e586de7e7a9f697a5c7';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
  const url = new URL (BASE_URL + '/' + infoType);
  url.search = new URLSearchParams({...searchParams, appid:API_KEY})

  return fetch(url)
  .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
  const {
    coord: {lat, lon},
    main: {temp, feels_like, temp_max, temp_min, humidity},
    name,
    dt,
    sys: {country, sunrise, sunset},
    weather,
    wind: {speed}
  } = data

  const {main: details, icon} = weather[0]
  return {lat, lon, temp, feels_like, temp_max, temp_min, humidity, name, dt, country, sunrise, sunset, details, icon, speed}
}

const formatForcastWeather = (data) => {
  let {list, city} = data;
  let {timezone} =city;
  let daily = list.filter((_, index) => (index + 6) % 8 === 0).map(d => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.main.temp,
      icon: d.weather[0].icon
    }
  })
  let hourly = list.slice(1,6).map(d =>{
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.main.temp,
      icon: d.weather[0].icon
    }
  });
  return {daily, hourly, timezone}
}

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData ('weather', searchParams)
  .then(formatCurrentWeather)

  const {lat, lon} = formattedCurrentWeather;

  const formattedForcastWeather = await getWeatherData("forecast",{
    lat, lon, units: searchParams.units
  }).then(formatForcastWeather)

  return {...formattedCurrentWeather, ...formattedForcastWeather}
  // return {...formattedCurrentWeather}
}

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => 
DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`
export default getFormattedWeatherData;

export {iconUrlFromCode, formatToLocalTime}