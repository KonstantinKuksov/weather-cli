import { printError, printErrorAndExit, printSuccess } from '../services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from '../services/storage.service.js';
import { getCurrentLanguage } from './get-language.js';

const language = getCurrentLanguage();

export const saveLocation = (location) => {
  if (!location.length) {
    printError(language.errorLocation);
  }
  try {
    saveKeyValue(TOKEN_DICTIONARY.location, location);
    printSuccess(`${location} ${language.successLocation}`);
  } catch (e) {
    printErrorAndExit(e.message);
  }
}
