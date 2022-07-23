import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';
import { printTokenError } from './log.service.js';
import axios from 'axios';

export const getWeather = async (location) => {
  const token = getKeyValue(TOKEN_DICTIONARY.token);
  const lang = getKeyValue(TOKEN_DICTIONARY.language);
  if (!token) {
    printTokenError();
    process.exit(1);
  }
  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: location,
      appid: token,
      units: 'metric',
      lang: lang.language,
    }
  });
  return data;
}
