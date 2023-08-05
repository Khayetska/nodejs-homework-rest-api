import { ctrlWrapper } from "../../decorators/index.js";
import User from "../../models/user.js";

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204);
};

export default ctrlWrapper(logout);
