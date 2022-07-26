#!/usr/bin/env node
import { writeFileSync } from 'fs';
import { getArgs } from './helpers/args.js';
import { printHelp, printReadyMessage } from './services/log.service.js';
import { filePath, getKeyValue, isExist, TOKEN_DICTIONARY } from './services/storage.service.js';
import { languageSelector } from './helpers/language-selector.js';
import { english } from './services/language.service.js';
import { saveToken } from './helpers/token-saver.js';
import { getCurrentWeather } from './helpers/get-current-weather.js';
import { saveLocation } from './helpers/location-saver.js';

if (!isExist(filePath)) {
  writeFileSync(filePath, JSON.stringify({
    language: english,
    token: 'ec54e7e6d135f89a75490b3f14eb49f8',
  }));
  printReadyMessage();
  process.exit(0);
}

const initCLI = async () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.t) {
    console.log('args.t');
    // return saveToken(args.t);
  }
  if (args.l) {
    console.log('args.l');
    // return languageSelector(args.l);
  }
  if (args.s) {
    console.log('args.s');
    // return saveLocation(args.s);
  }
  if (args.h) {
    console.log('args.h');
    // return printHelp();
  }
  if (args.p) {
    console.log('args.p');
    // return await getCurrentWeather(args.p);
  }
  // const savedCity = getKeyValue(TOKEN_DICTIONARY.location);
  // await getCurrentWeather(savedCity);
};

initCLI();
