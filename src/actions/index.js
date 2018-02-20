import axios from 'axios';

const API_KEY = '97a56da187134948d22a7a2a1e87b4f4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATER';

export function fetchWeather(city) {
    const url =`${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}