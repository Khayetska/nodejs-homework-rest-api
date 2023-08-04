import express from "express";
import controllers from "../../controllers/contactsController.js";
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

contactsRouter.get("/", controllers.getAll);

contactsRouter.get("/:id", isValidId, controllers.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactsAddSchema),
  controllers.add
);

contactsRouter.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(contactsAddSchema),
  controllers.updateById
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  isEmptyBody,
  validateBody(contactUpdateFavoriteSchema),
  controllers.updateStatusContact
);

contactsRouter.delete("/:id", isValidId, controllers.deleteById);

export default contactsRouter;
