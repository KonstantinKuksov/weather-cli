import { getKeyValue, TOKEN_DICTIONARY } from '../services/storage.service.js';
import { printErrorAndExit } from '../services/log.service.js';

export const getCurrentLanguage = () => {
  try {
    return getKeyValue(TOKEN_DICTIONARY.language);
  } catch (e) {
    printErrorAndExit(e.message);
  }
}
