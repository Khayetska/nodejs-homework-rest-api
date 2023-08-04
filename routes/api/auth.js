import express from "express";
import controllers from "../../controllers/authController.js";
import { validateBody } from "../../decorators/index.js";
import { userSignupSchema } from "../../schemas/usersSchemas.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(userSignupSchema), controllers.signup);

export default authRouter;
