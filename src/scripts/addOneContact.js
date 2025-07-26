import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
      const contacts = await readContacts();
      const newContact = createFakeContact();
      contacts.push(newContact);
      await writeContacts(contacts);
      
    console.log('Один контакт додано успішно:', newContact);
  } catch (err) {
    console.error('Помилка при додаванні контакту:', err.message);
  }
};


addOneContact();
