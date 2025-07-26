import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
      const contacts = await readContacts();
      if (contacts.length === 0) {
      console.log('Контактів немає');
      return;
      }
      
    const removedContact = contacts.pop();
    await writeContacts(contacts);

    console.log(`Видалено останній контакт: ${removedContact.name} (${removedContact.id})`);
  } catch (err) {
    console.error('Помилка при видаленні останнього контакту:', err.message);
  }
};


removeLastContact();
