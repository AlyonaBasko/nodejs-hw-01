import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    
    await writeContacts([]);
    console.log('Усі контакти було успішно видалено.');
  } catch (err) {
    console.error('Помилка при видаленні контактів:', err.message);
  }
};


removeAllContacts();
