import express from "express";
import {
  getAll,
  getById,
  add,
  updateById,
  updateStatusContact,
  deleteById,
} from "../../controllers/contacts/index.js";
import { validateBody } from "../../decorators/index.js";
import {
  contactsAddSchema,
  contactUpdateFavoriteSchema,
} from "../../schemas/contactsSchemas.js";
import {
  authenticate,
  isEmptyBody,
  isValidId,
} from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", getAll);

contactsRouter.get("/:id", isValidId, getById);

contactsRouter.post("/", isEmptyBody, validateBody(contactsAddSchema), add);

contactsRouter.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(contactsAddSchema),
  updateById
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  isEmptyBody,
  validateBody(contactUpdateFavoriteSchema),
  updateStatusContact
);

contactsRouter.delete("/:id", isValidId, deleteById);

export default contactsRouter;
