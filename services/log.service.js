import chalk from 'chalk';
import { english } from './language.service.js';

export const printError = (error) => {
  console.log(chalk.bgRed(english.errorTitle), chalk.red(error));
};

export const printSuccess = (success) => {
  console.log(chalk.bgGreen(english.successTitle), success);
};

export const printHelp = () => {
  console.log(english.help);
};
