import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (contacts) => {
  try {
    const json = JSON.stringify(contacts, null, 2);
    await fs.writeFile(PATH_DB, json, 'utf8');
  } catch (err) {
    console.error('Помилка запису файлу:', err);
    throw err;
  }
};
