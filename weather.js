#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.s) {
    // save city
  }
  if (args.t) {
    // save token
  }
  if (args.p) {
    // show weather in custom place
  }
  if (args.h) {
    return printHelp();
  }
  // show weather in saved city
  console.log('App is works!');
};

initCLI();
