import express from "express";
import {
  signup,
  login,
  getCurrent,
  logout,
} from "../../controllers/auth/index.js";
import { validateBody } from "../../decorators/index.js";
import {
  userLoginSchema,
  userSignupSchema,
} from "../../schemas/usersSchemas.js";
import { authenticate } from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(userSignupSchema), signup);
authRouter.post("/login", validateBody(userLoginSchema), login);
authRouter.get("/current", authenticate, getCurrent);
authRouter.post("/logout", authenticate, logout);

export default authRouter;
