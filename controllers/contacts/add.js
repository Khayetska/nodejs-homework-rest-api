import { ctrlWrapper } from "../../decorators/index.js";
import Contact from "../../models/contact.js";

const add = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
};

export default ctrlWrapper(add);
