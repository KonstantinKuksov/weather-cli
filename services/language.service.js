import dedent from 'dedent-js';
import chalk from 'chalk';

export const english = {
  language: 'en',
  help: dedent(`
      ${chalk.bgCyan('HELP:')}
      This application supports only one parameter per call.
      If multiple parameters are entered, only the first one will be processed.
      without params - print weather in the default location;
      -s [LOCATION_NAME] - set the default location;
      -p [LOCATION_NAME] - print weather in the chosen location;
      -t [API_TOKEN] - set weather API token;
      -l [LANGUAGE] - set the language;
      -h - print help.
      The supported languages are English, Russian, Ukrainian.
    `),
  errorTitle: 'ERROR:',
  errorToken: 'token is not provided or invalid',
  errorLanguage: 'language does not support.',
  errorLocation: 'incorrect location.',
  successTitle: 'SUCCESS:',
  successToken: 'token has saved.',
  successLanguage: 'language changed.',
  successLocation: 'saved as default location.',
  weatherTitle: 'Weather in ',
  temperature: 'Temperature:',
  feelsLike: 'feels like',
  humidity: 'Humidity:',
  windSpeed: 'Wind speed:',
  digit: 'm/s',
  filler: '===============================',
};

export const russian = {
  language: 'ru',
  help: dedent(`
      ${chalk.bgCyan('СПРАВКА:')}
      Это приложение поддерживает только один параметр для каждого вызова.
      Если введено несколько параметров обрабатываться будет только первый.
      без параметров - вывести погоду в населенном пункте по умолчанию;
      -s [НАЗВАНИЕ] - установить населенный пункт по умолчанию;
      -p [НАЗВАНИЕ] - вывести погоду в указанном населенном пункте;
      -t [API_TOKEN] - установить API токен;
      -l [ЯЗЫК] - установить язык;
      -h - вывести справку.
      Поддерживаемые языки: русский, английский, украинский.
      Все атрибуты долны передаваться на английском языке.
    `),
  errorTitle: 'ОШИБКА:',
  errorToken: 'токен не передан или не поддерживатся',
  errorLanguage: 'язык не поддерживается.',
  errorLocation: 'не указан или неверно указан населенный пункт.',
  successTitle: 'ВЫПОЛНЕНО УСПЕШНО:',
  successToken: 'токен сохранен.',
  successLanguage: 'язык изменен.',
  successLocation: 'сохранен как населенный пункт по умолчанию.',
  weatherTitle: 'Погода в населенном пункте ',
  temperature: 'Температура воздуха:',
  feelsLike: 'ощущается как',
  humidity: 'Относительна влажность воздуха:',
  windSpeed: 'Скорость ветра:',
  digit: 'м/с',
  filler: '===========================================',
};

export const ukrainian = {
  language: 'ua',
  help: dedent(`
      ${chalk.bgCyan('ДОВІДКА:')}
      ${chalk.blueBright(`Цей додаток підтримує тільки один параметр для кожного виклику`)}
      ${chalk.blueBright(`Якщо було введено декілька параметрів - спрацює лише перший.`)}
      ${chalk.blueBright(`без параметрів - показати погоду в населеному пункті за замовчуванням;`)}
      ${chalk.blueBright(`-s [НАЗВА] - встановити населений пункт за замовчуванням;`)}
      ${chalk.blueBright(`-p [НАЗВА] - показати погоду у вказаному населеному пункті;`)}
      ${chalk.yellowBright(`t [API_TOKEN] - встановити API токен;`)}
      ${chalk.yellowBright(`-l [МОВА] - встановити мову;`)}
      ${chalk.yellowBright(`-h - показати довідку.`)}
      ${chalk.yellowBright(`Мови, що підтримуються: українська, англійська, російська.`)}
      ${chalk.yellowBright(`Усі атрибути передаються англійською мовою`)}
    `),
  errorTitle: 'ПОМИЛКА:',
  errorToken: 'токен не передано або не підтримується',
  errorLanguage: 'мова не підтримується.',
  errorLocation: 'населений пункт не вказано або вказано з помилкою.',
  successTitle: 'ВИКОНАНО УСПІШНО:',
  successToken: 'токен збережено.',
  successLanguage: 'мову змінено.',
  successLocation: 'збережено як населенний пункт за замовчуванням.',
  weatherTitle: 'Погода у населеному пункті ',
  temperature: 'Температура повітря:',
  feelsLike: 'відчувається як',
  humidity: 'Відносна вологість повітря:',
  windSpeed: 'Швидкість повітря:',
  digit: 'м/с',
  filler: '=========================================',
};
