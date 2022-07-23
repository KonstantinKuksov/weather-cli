import { printErrorAndExit, printTokenError, printTokenSuccess } from '../services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from '../services/storage.service.js';

export const saveToken = (token) => {
  if (!token.length) {
    printTokenError();
  }
  try {
    saveKeyValue(TOKEN_DICTIONARY.token, token);
    printTokenSuccess();
  } catch (e) {
    printErrorAndExit(e.message);
  }
}
