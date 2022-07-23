import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';
import { printTokenError } from './log.service.js';
import axios from 'axios';

export const getWeather = async (place) => {
  const token = getKeyValue(TOKEN_DICTIONARY.token);
  const lang = getKeyValue(TOKEN_DICTIONARY.language);
  if (!token) {
    printTokenError();
  }
  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: place,
      appid: token,
      units: 'metric',
      lang: lang.language,
    }
  });
  return data;
}
