import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Усі контакти:', contacts);
    return contacts;
  } catch (err) {
    console.error('Помилка при отриманні контактів:', err.message);
    return [];
  }
};


getAllContacts();
