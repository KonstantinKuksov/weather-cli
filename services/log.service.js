import chalk from 'chalk';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';

export const printErrorAndExit = (error) => {
  console.log(chalk.bgRed('ERROR:'), chalk.red(error));
  process.exit(1);
};

let language;
try {
  language = getKeyValue(TOKEN_DICTIONARY.language);
} catch (e) {
  printErrorAndExit(e.message);
}

export const printError = (error) => {
  console.log(chalk.bgRed(language.errorTitle), chalk.red(error));
};

export const printSuccess = (success) => {
  console.log(chalk.bgGreen(language.successTitle), chalk.greenBright(success));
};

export const printHelp = () => {
  console.log(language.help);
};

export const printLanguageError = (lang) => {
  printError(`'${lang}' ${language.errorLanguage}`);
};

export const printTokenSuccess = () => {
  printSuccess(language.successToken);
};

export const printTokenError = () => {
  printError(language.errorToken);
};

export const printReadyMessage = () => {
  console.log(chalk.greenBright('Weather cli is ready to work!\n') + chalk.blueBright('Add -h flag for getting help.'));
};


