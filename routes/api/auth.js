import express from "express";
import {
  signup,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
  verify,
  resendVerifyEmail,
} from "../../controllers/auth/index.js";
import { validateBody } from "../../decorators/index.js";
import {
  userLoginSchema,
  userSignupSchema,
  subscriptionSchema,
  userEmailSchema,
} from "../../schemas/usersSchemas.js";
import { authenticate, upload, resizeAvatar } from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(userSignupSchema), signup);

authRouter.get("/verify/:verificationToken", verify);

authRouter.post("/verify", validateBody(userEmailSchema), resendVerifyEmail);

authRouter.post("/login", validateBody(userLoginSchema), login);

authRouter.get("/current", authenticate, getCurrent);

authRouter.post("/logout", authenticate, logout);

authRouter.patch(
  "/",
  authenticate,
  validateBody(subscriptionSchema),
  updateSubscription
);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  resizeAvatar,
  updateAvatar
);

export default authRouter;
