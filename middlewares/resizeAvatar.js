import jimp from "jimp";
import { HttpError } from "../helpers/index.js";

const resizeAvatar = async (req, res, next) => {
  const { path } = req.file;

  if (!path) throw HttpError(401);

  try {
    const image = await jimp.read(path);

    await image.resize(250, 250);
    await image.writeAsync(path);

    next();
  } catch (error) {
    next(error);
  }
};

export default resizeAvatar;
