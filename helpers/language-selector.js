import { saveKeyValue } from '../services/storage.service.js';
import { english, russian, ukrainian } from '../services/language.service.js';
import { printLanguageError } from '../services/log.service.js';

export const languageSelector = (language) => {
  if (language) {
    switch(language.toLowerCase()) {
      case 'eng':
      case 'english': saveKeyValue('language', english);
        break;
      case 'rus':
      case 'russian': saveKeyValue('language', russian);
        break;
      case 'ukr':
      case 'ukraine':
      case 'ukrainian': saveKeyValue('language', ukrainian);
        break;
      default: printLanguageError(language);
    }
  }
}
