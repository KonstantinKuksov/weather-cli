import { homedir } from 'os';
import { join } from 'path';
import { readFileSync, writeFileSync, statSync } from 'fs';

export const filePath = join(homedir(), 'weather-data.json');

export const TOKEN_DICTIONARY = {
  token: 'token',
  location: 'location',
  language: 'language',
};

export const saveKeyValue = (key, value) => {
  const file = readFileSync(filePath);
  const data = JSON.parse(file);
  data[key] = value;
  writeFileSync(filePath, JSON.stringify(data));
}

export const getKeyValue = (key) => {
  if (isExist(filePath)) {
    const file = readFileSync(filePath);
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

export const isExist = (path) => {
  try {
    statSync(path);
    return true;
  } catch (e) {
    return false;
  }
}
