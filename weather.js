#!/usr/bin/env node
import { writeFileSync } from 'fs';
import { getArgs } from './helpers/args.js';
import { printHelp, printReadyMessage } from './services/log.service.js';
import { filePath, isExist, saveKeyValue } from './services/storage.service.js';
import { languageSelector } from './helpers/language-selector.js';
import { english } from './services/language.service.js';
import { saveToken } from './helpers/token-saver.js';

if (!isExist(filePath)) {
  writeFileSync(filePath, JSON.stringify({ language: english }));
  printReadyMessage();
  process.exit(0);
}

const initCLI = () => {
  const args = getArgs(process.argv);
  console.log(args);
  if (args.s) {
    saveKeyValue('place', args.s);
  }
  if (args.l) {
    languageSelector(args.l);
  }
  if (args.t) {
    saveToken(args.t);
  }
  if (args.h) {
    return printHelp();
  }
  if (args.p) {
    // show weather in custom place
  }
  // show weather in saved city
  console.log('App works!');
};

initCLI();
