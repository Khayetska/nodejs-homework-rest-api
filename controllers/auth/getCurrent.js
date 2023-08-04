import { ctrlWrapper } from "../../decorators/index.js";

const getCurrent = (req, res) => {
  const { name, subscription } = req.user;

  res.json({
    name,
    subscription,
  });
};

export default ctrlWrapper(getCurrent);
