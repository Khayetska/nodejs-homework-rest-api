import HttpError from "../helpers/HttpError.js";
import {
  addContact,
  getContactById,
  listContacts,
  removeContact,
  updateContact,
} from "../models/contacts.js";
import contactsAddSchema from "../schemas/contactsAddSchema.js";

const getAll = async (req, res, next) => {
  try {
    const result = await listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getContactById(id);
    if (!result) throw HttpError(404, `Contact with id '${id}' not found`);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  try {
    const { error } = contactsAddSchema.validate(req.body);
    if (error) throw HttpError(400, error.message);

    const result = await addContact(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await removeContact(id);
    if (!result) throw HttpError(404, `Contact with id '${id}' not found`);

    res.json({
      message: "contact deleted",
      removed: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateById = async (req, res, next) => {
  try {
    const { error } = contactsAddSchema.validate(req.body);
    if (error) throw HttpError(400, error.message);

    const { id } = req.params;
    const result = await updateContact(id, req.body);

    if (!result) throw HttpError(404, "Not found");

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default { getAll, getById, add, deleteById, updateById };
