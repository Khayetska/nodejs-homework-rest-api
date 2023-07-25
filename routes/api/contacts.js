import express from "express";
import controllers from "../../controllers/contactsController.js";

const contactsRouter = express.Router();

contactsRouter.get("/", controllers.getAll);

contactsRouter.get("/:id", controllers.getById);

contactsRouter.post("/", controllers.add);

contactsRouter.delete("/:id", controllers.deleteById);

contactsRouter.put("/:id", controllers.updateById);

export default contactsRouter;
