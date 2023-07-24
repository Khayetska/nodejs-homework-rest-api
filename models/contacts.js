import path from "path";
import fs from "fs/promises";
import { nanoid } from "nanoid";

export const contactsPath = path.resolve("models", "contacts.json");

const updateContacts = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

export const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((contact) => contact.id === id);
  return result || null;
};

export const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  for (const contact of contacts) {
    if (contact.name === name) {
      throw new Error(`'${name}' is already in contacts.`);
    }
  }
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

export const removeContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) return null;

  const [result] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return result;
};

export const updateContact = async (id, { name, email, phone }) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) return null;

  contacts[index] = { id, name, email, phone };
  await updateContacts(contacts);
  return contacts[index];
};
