import express from "express";
import {
  signup,
  login,
  getCurrent,
  logout,
  updateSubscription,
} from "../../controllers/auth/index.js";
import { validateBody } from "../../decorators/index.js";
import {
  userLoginSchema,
  userSignupSchema,
  subscriptionSchema,
} from "../../schemas/usersSchemas.js";
import { authenticate } from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(userSignupSchema), signup);
authRouter.post("/login", validateBody(userLoginSchema), login);
authRouter.get("/current", authenticate, getCurrent);
authRouter.post("/logout", authenticate, logout);
authRouter.patch(
  "/",
  authenticate,
  validateBody(subscriptionSchema),
  updateSubscription
);

export default authRouter;
