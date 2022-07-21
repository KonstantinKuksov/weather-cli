import dedent from 'dedent-js';
import chalk from 'chalk';

export const english = {
  help: dedent(`
      ${chalk.bgCyan('HELP:')}
      without params - print weather in the default place;
      -s [PLACE_NAME] - set the default place;
      -p [PLACE_NAME] - print weather in a chosen place;
      -t [API_TOKEN] - set weather API token;
      -l [LANGUAGE] - set the language;
      -h - print help.
    `),
  errorTitle: 'ERROR:',
  successTitle: 'SUCCESS:',
};

export const russian = {
  help: dedent(`
      ${chalk.bgCyan('СПРАВКА:')}
      без параметров - вывести погоду в населенном пункте по умолчанию;
      -s [НАЗВАНИЕ] - установить населенный пункт по умолчанию;
      -p [НАЗВАНИЕ] - вывести погоду в указанном населенном пункте;
      -t [API_TOKEN] - установить API токен;
      -l [ЯЗЫК] - установить язык;
      -h - вывести справку.
    `),
  errorTitle: 'ОШИБКА:',
  successTitle: 'ВЫПОЛНЕНО УСПЕШНО:',
};

export const ukrainian = {
  help: dedent(`
      ${chalk.bgCyan('ДОВІДКА:')}
      без параметрів - показати погоду в населеному пункті за замовчуванням;
      -s [НАЗВА] - встановити населений пункт за замовчуванням;
      -p [НАЗВА] - показати погоду у вказаному населеному пункті;
      -t [API_TOKEN] - встановити API токен;
      -l [МОВА] - встановити мову;
      -h - показати довідку.
    `),
  errorTitle: 'ПОМИЛКА:',
  successTitle: 'ВИКОНАНО УСПІШНО:',
};
