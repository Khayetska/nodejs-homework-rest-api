import { ctrlWrapper } from "../../decorators/index.js";
import { HttpError } from "../../helpers/index.js";
import User from "../../models/user.js";

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, req.body, { new: true });

  if (!result) throw HttpError(404);

  const { name, email, subscription } = result;
  res.json({ name, email, subscription });
};

export default ctrlWrapper(updateSubscription);
