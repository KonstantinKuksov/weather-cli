import { getCurrentLanguage } from './get-language.js';
import { getWeather } from '../services/api.service.js';
import { printError } from '../services/log.service.js';

const language = getCurrentLanguage();

export const getCurrentWeather = async (place) => {
  try {
    const forecastData = await getWeather(place);
    console.log(forecastData);
  } catch (e) {
    switch (e?.response?.status) {
      case 404: printError(language.errorPlace);
        break;
      case 401: printError(language.errorToken);
        break;
      default: printError(e.message);
    }
  }
}
