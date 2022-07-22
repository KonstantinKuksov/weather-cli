import { printErrorAndExit, printTokenError, printTokenSuccess } from '../services/log.service.js';
import { saveKeyValue } from '../services/storage.service.js';

export const saveToken = (token) => {
  if (!token.length) {
    printTokenError();
  }
  try {
    saveKeyValue('token', token);
    printTokenSuccess();
  } catch (e) {
    printErrorAndExit(e.message);
  }
}
