import fs from "fs/promises";
import path from "path";
import { ctrlWrapper } from "../../decorators/index.js";
import { HttpError } from "../../helpers/index.js";
import User from "../../models/user.js";

const avatarPath = path.resolve("public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: oldPath, filename } = req.file;

  const newPath = path.join(avatarPath, filename);

  await fs.rename(oldPath, newPath);

  const avatarURL = path.join("public", "avatars", filename);

  const result = await User.findByIdAndUpdate(
    _id,
    { avatarURL },
    { new: true }
  );

  if (!result) throw HttpError(404);

  res.json({ avatarURL });
};

export default ctrlWrapper(updateAvatar);
