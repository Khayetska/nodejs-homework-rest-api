import express from "express";
import controllers from "../../controllers/authController.js";
import { validateBody } from "../../decorators/index.js";
import {
  userLoginSchema,
  userSignupSchema,
} from "../../schemas/usersSchemas.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(userSignupSchema), controllers.signup);
authRouter.post("/login", validateBody(userLoginSchema), controllers.login);

export default authRouter;
