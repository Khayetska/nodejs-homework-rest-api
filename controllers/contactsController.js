import { HttpError } from "../helpers/index.js";
import {
  addContact,
  getContactById,
  listContacts,
  removeContact,
  updateContact,
} from "../models/contacts.js";
import contactsSchemas from "../schemas/contactsSchemas.js";
import { ctrlWrapper } from "../decorators/index.js";

const getAll = async (req, res) => {
  const result = await listContacts();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await getContactById(id);
  if (!result) {
    throw HttpError(404, `Contact with id '${id}' not found`);
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await addContact(req.body);
  res.status(201).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await removeContact(id);
  if (!result) throw HttpError(404, `Contact with id '${id}' not found`);

  res.json({
    message: "contact deleted",
    removed: result,
  });
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await updateContact(id, req.body);

  if (!result) throw HttpError(404, "Not found");

  res.json(result);
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
  updateById: ctrlWrapper(updateById),
};
