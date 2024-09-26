import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();

    const updatedContacts = [...existingContacts, newContact];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error(`Error adding contact: ${error.message}`);
  }
};

addOneContact();
