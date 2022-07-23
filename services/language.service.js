import dedent from 'dedent-js';
import chalk from 'chalk';

export const english = {
  language: 'en',
  help: dedent(`
      ${chalk.bgCyan('HELP:')}
      without params - print weather in the default place;
      -s [PLACE_NAME] - set the default place;
      -p [PLACE_NAME] - print weather in a chosen place;
      -t [API_TOKEN] - set weather API token;
      -l [LANGUAGE] - set the language;
      -h - print help.
      The supported languages are English, Russian and Ukrainian.
    `),
  errorTitle: 'ERROR:',
  errorToken: 'token is not provided or invalid',
  errorLanguage: 'language does not support.',
  errorPlace: 'incorrect location.',
  successTitle: 'SUCCESS:',
  successToken: 'token has saved.',
};

export const russian = {
  language: 'ru',
  help: dedent(`
      ${chalk.bgCyan('СПРАВКА:')}
      без параметров - вывести погоду в населенном пункте по умолчанию;
      -s [НАЗВАНИЕ] - установить населенный пункт по умолчанию;
      -p [НАЗВАНИЕ] - вывести погоду в указанном населенном пункте;
      -t [API_TOKEN] - установить API токен;
      -l [ЯЗЫК] - установить язык;
      -h - вывести справку.
      Поддерживаемые языки: русский, английский и украинский.
      Все атрибуты долны передаваться на английском языке.
    `),
  errorTitle: 'ОШИБКА:',
  errorToken: 'токен не передан или не поддерживатся',
  errorLanguage: 'язык не поддерживается.',
  errorPlace: 'не указан или неверно указан населенный пункт.',
  successTitle: 'ВЫПОЛНЕНО УСПЕШНО:',
  successToken: 'токен сохранен.',
};

export const ukrainian = {
  language: 'ua',
  help: `
      ${chalk.bgCyan('ДОВІДКА:')}
      ${dedent(chalk.blueBright(`без параметрів - показати погоду в населеному пункті за замовчуванням;
      -s [НАЗВА] - встановити населений пункт за замовчуванням;
      -p [НАЗВА] - показати погоду у вказаному населеному пункті;
      -t [API_TOKEN] - встановити API токен;`))}
      ${dedent(chalk.yellowBright(`-l [МОВА] - встановити мову;
      -h - показати довідку.
      Мови, що підтримуються: українська, англійська та російська.
      Усі атрибути передаються англійською мовою`))}
    `,
  errorTitle: 'ПОМИЛКА:',
  errorToken: 'токен не передано або не підтримується',
  errorLanguage: 'мова не підтримується.',
  errorPlace: 'населений пункт не вказано або вказано з помилкою.',
  successTitle: 'ВИКОНАНО УСПІШНО:',
  successToken: 'токен збережено.',
};
