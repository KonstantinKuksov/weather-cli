import chalk from 'chalk';
import { getCurrentLanguage } from '../helpers/get-language.js';
import dedent from 'dedent-js';
import { english, russian, ukrainian } from './language.service.js';

export const printErrorAndExit = (error) => {
  console.log(chalk.bgRed('ERROR:'), chalk.red(error));
  process.exit(1);
};

const language = getCurrentLanguage();

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

export const printSuccessLanguage = (lang) => {
  switch(lang) {
    case 'en': console.log(chalk.bgGreen(english.successTitle), chalk.greenBright(english.successLanguage));
      break;
    case 'ru': console.log(chalk.bgGreen(russian.successTitle), chalk.greenBright(russian.successLanguage));
      break;
    case 'ua': console.log(chalk.bgGreen(ukrainian.successTitle), chalk.greenBright(ukrainian.successLanguage));
  }
};

export const printWeather = (res) => {
  console.log(
    dedent(`
        ${chalk.bold(language.filler)}
        ${chalk.yellowBright(language.weatherTitle) + chalk.yellowBright.bold(res.name)}:
        ${chalk.bold(res.weather[0].description)}
        ${chalk.bold(`${language.temperature} ${Math.round(Number(res.main.temp))} (${language.feelsLike} ${Math.round(Number(res.main.feels_like))})`)}
        ${chalk.bold(`${language.humidity} ${res.main.humidity}%`)}
        ${chalk.bold(`${language.windSpeed} ${Math.round(Number(res.wind.speed))} ${language.digit}`)}
        ${chalk.bold(language.filler)}
    `)
  );
}


