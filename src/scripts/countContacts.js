import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    console.log(`Кількість контактів: ${count}`);
    return count;
  } catch (err) {
    console.error('Помилка при підрахунку контактів:', err.message);
    return 0;
  }
};

countContacts();
