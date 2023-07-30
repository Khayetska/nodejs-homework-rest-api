import express from "express";
import controllers from "../../controllers/contactsController.js";
import { validateBody } from "../../decorators/index.js";
import contactsSchemas from "../../schemas/contactsSchemas.js";
import { isEmptyBody } from "../../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", controllers.getAll);

contactsRouter.get("/:id", controllers.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchemas.contactsAddSchema),
  controllers.add
);

contactsRouter.put(
  "/:id",
  isEmptyBody,
  validateBody(contactsSchemas.contactsAddSchema),
  controllers.updateById
);

contactsRouter.delete("/:id", controllers.deleteById);

export default contactsRouter;
