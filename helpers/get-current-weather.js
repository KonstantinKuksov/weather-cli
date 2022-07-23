import { getCurrentLanguage } from './get-language.js';
import { getWeather } from '../services/api.service.js';
import { printError, printWeather } from '../services/log.service.js';

const language = getCurrentLanguage();

export const getCurrentWeather = async (location) => {
  try {
    const weather = await getWeather(location);
    printWeather(weather);
  } catch (e) {
    switch (e?.response?.status) {
      case 404: printError(language.errorLocation);
        break;
      case 401: printError(language.errorToken);
        break;
      default: printError(e.message);
    }
  }
}
