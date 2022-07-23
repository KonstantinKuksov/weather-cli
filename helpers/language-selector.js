import { saveKeyValue, TOKEN_DICTIONARY } from '../services/storage.service.js';
import { english, russian, ukrainian } from '../services/language.service.js';
import { printLanguageError, printSuccessLanguage } from '../services/log.service.js';

export const languageSelector = (language) => {
  if (language) {
    switch(language.toLowerCase()) {
      case 'en':
      case 'eng':
      case 'english': {
        saveKeyValue(TOKEN_DICTIONARY.language, english);
        printSuccessLanguage('en');
      }
        break;
      case 'ru':
      case 'rus':
      case 'russian': {
        saveKeyValue(TOKEN_DICTIONARY.language, russian);
        printSuccessLanguage('ru');
      }
        break;
      case 'ua':
      case 'uk':
      case 'ukr':
      case 'ukraine':
      case 'ukrainian': {
        saveKeyValue(TOKEN_DICTIONARY.language, ukrainian);
        printSuccessLanguage('ua');
      }
        break;
      default: {
        printLanguageError(language);
      }
    }
  }
}
